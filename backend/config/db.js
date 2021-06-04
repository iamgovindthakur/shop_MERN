import mongoose from 'mongoose'

const connectDB = (async) => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    //console.log(conn.connection)

    //console.log(`MongoDB connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
