import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

DbConnection();
async function DbConnection() {
  try {
    // await mongoose.connect(config.database_url as string);

    await mongoose.connect(`${config.database_url}`);
    console.log(" 🛢️ Database connected successfully ! 🔥");

    app.listen(config.port, () => {
      console.log(`🔥 Application listening on port ${config.port} 🔥`);
    });
  } catch (error) {
    console.log("❌ Failed to connect database 🛢️");
  }
}
