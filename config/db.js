const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

function connect() {
  return mongoose.connect("mongodb://localhost:27017/packager20");
}

export default connect;
