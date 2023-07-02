import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'ocularis'
    })

    const db = mongoose.connection

    db.on('error', (error) => {
      console.error('Erro de conexão:', error)
    })

    db.once('open', () => {
      console.log('Conexão com o MongoDB estabelecida com sucesso!')
    })
  } catch (error) {
    console.log(error)
  }
}
