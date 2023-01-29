import mongoose from 'mongoose';

mongoose.set("strictQuery", true);

let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let cachedClient = null
let cachedDb = null

if (!uri) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env.local'
	)
}

if (!dbName) {
	throw new Error(
		'Please define the MONGODB_DB environment variable inside .env.local'
	)
}

export async function connectToDatabase() {
	if (cachedClient && cachedDb) {
		return { client: cachedClient, db: cachedDb }
	}

	const client = mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	const db = mongoose.connection

	cachedClient = client
	cachedDb = db

	return { client, db }
}
