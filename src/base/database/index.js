
// This connect you to the database, nothing needed to be changed here

const { connect, connection } = require("mongoose");

async function databaseConnect(client) {
  if(!client.config.mongoURL) return client.logger.database("Database has not connected awaiting client URL");
  try {
    await connect(client.config.mongoURL, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    client.logger.database("Connected To Mongoose Database");
  } catch (e) {
    client.logger.error(`DATABASE ERROR: ${e}`);
  }

  connection.on("disconnected", () => {
    client.logger.error("DISCONNECTED FROM DATABASE");
  });
}


module.exports = databaseConnect;
