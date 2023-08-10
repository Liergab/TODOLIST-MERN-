import mongoose from "mongoose";
import env from '../util/ValidateEnv'

const db = async() => {
   try {
    const dbconnect = await mongoose.connect(env.MONGODB_STRING_CONNECTION);
    console.log(`connected: ${dbconnect.connection.host} ${dbconnect.connection.name} `)
   } catch (error) {
    console.log(error)
    process.exit(1)
   }
}

export default db