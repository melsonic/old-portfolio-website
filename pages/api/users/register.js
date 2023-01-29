
import { connectToDatabase } from '../../../util/mongodb';
import User from '../../../models/User';
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
			User.findOne({ $or: [{ username: uname }, { email: email }, { phone: phone }] }, function(err, result) {

				if (err) res.send("An error occured");

				if (result == null) {

					const salt = bcrypt.genSaltSync(10);
					const hashpassword = bcrypt.hashSync(password, salt);
					let user = req.body;
					user["password"] = hashpassword;
					const u1 = new User(user);

					u1.save((err, _savedDocument) => {

						if (err) {
							res.status(404).send({ message: "Error saving data" });
						}

					});

				} else {
					res.status(404).send({ message: "user already exists." });
				}

			})

			res.status(201).send("user saved successfully");

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
