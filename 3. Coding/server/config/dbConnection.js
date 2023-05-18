const mongoose = require("mongoose");

const Connection = async (username, password) => {
   const url=`mongodb+srv://${username}:${password}@coderblog.rn3v2ng.mongodb.net/?retryWrites=true&w=majority`;

   try {
      await mongoose.connect(url, {useNewUrlParser: true});
      console.log("database is connected");
   }
   catch(error) {
      console.log(`error connecting to database. error: ${error}`);
   }
}

module.exports = Connection;