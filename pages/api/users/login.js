
import { connectToDatabase } from '../../../util/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
	const { db } = connectToDatabase();

	const uname = req.body?.username;
	const password = req.body?.password;

	User.findOne({ username: uname }, function (err, result) {
		if (err) res.status(505).send(err);

		console.log(result);

		if(result == null) res.status(509).send("user doesn't exist");

		console.log("user exist");
//		const compare_pword = bcrypt.compareSync(password, res)
		res.status(201).send("username found");

	})


};
