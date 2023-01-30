import { connectToDatabase } from '../../util/mongodb.js';
import User from '../../models/User.js';
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
	const { method } = req;

	const { db } = connectToDatabase();

	if (method === "GET") {
		/* method for get request */

		try {
			const users = await User.find({});
			res.status(201).json(users);
		} catch (err) {
			res.status(500).json(err);
		}

	} else if (method === "POST") {
		/* method for post request */

		try {
			const uname = req.body?.username;
			const email = req.body?.email;
			const password = req.body?.password;
			const phone = req.body?.phone;
			User.findOne({ $or: [{ username: uname }, { email: email }, { phone: phone }] }, function (err, result) {

				if (result == null) {
					const salt = bcrypt.genSaltSync();
					const hashpassword = bcrypt.hashSync(password, salt);
					let user = req.body;
					user.password = hashpassword;
					const u1 = new User({
						name: user.name,
						email: email,
						username: uname,
						password: hashpassword,
						phone: phone
					});

					u1.save((err, _savedDocument) => {
						if (err) {
							res.status(404).json({ message: "Error saving data" });
						}else {
							res.status(201).json({
								message: "User saved successfully"
							})
						}
					});
				} else {
					res.status(404).json({ message: "user already exists." });
				}
			})

		} catch (err) {
			res.status(404).send({ message: "Error posting data" });
		}

	} else if (method === "PUT") {
		/* method for put request */



	} else if (method === "DELETE") {
		/* method for delete request */

		try {
			let uname = req.body.username;
			User.deleteOne({ username: uname })
		} catch (err) {
			console.log(err);
		}
	}
};
