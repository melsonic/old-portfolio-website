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
		minLength: 8,
		required: true
	},
	country: String,
	phone: String,
});

userSchema.pre("save", function(next) {
	let user = this;

	bcrypt.hash(user.password, 10)
		.then(hash => {
			user.password = hash;
			next();
		})
		.catch(error => {
			console.log("Error in hashing password...");
			next(error);
		})
})

userSchema.methods.passwordComparison = function (password){
	let user = this;
	return bcrypt.compare(password, user.password);
}

export default mongoose.models.User || mongoose.model("User", userSchema);
