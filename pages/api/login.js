import { connectToDatabase } from '../../util/mongodb';
import User from '../../models/User';
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
	const { db } = connectToDatabase();

	const { username, password } = JSON.parse(req.body);

	User.findOne({
		username: username
	}, function (err, user) {
		if (err) res.status(405).json({
			message: "error in database"
		});

		if (user == null) {
			res.status(402).json({
				message: "User not registered"
			});
		}

		bcrypt.compare(password, user?.password)
			.then(compare_password => {
				console.log(compare_password);
				if (compare_password) {
					res.status(201).send("success");
				} else {
					res.status(403).send("Failure");
				}
			})
	});

};
