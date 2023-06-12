import mongoose from 'mongoose'
import config from './config/index'
import app from './app'
import { logger, errorLogger } from './share/logger'

DbConnection()
async function DbConnection() {
  try {
    // await mongoose.connect(config.database_url as string);

    await mongoose.connect(`${config.database_url}`)
    logger.info(' 🛢️ Database connected successfully ! 🔥')

    app.listen(config.port, () => {
      logger.info(`🔥 Application listening on port ${config.port} 🔥`)
    })
  } catch (error) {
    errorLogger.error('❌ Failed to connect database 🛢️')
  }
}
