import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: String,
	email: String,
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	country: String,
	phone: String,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
