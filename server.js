const express = require("express");
const {
  globalErrhandler,
  notFound,
} = require("./middlewares/globalErrHandler");
const usersRoute = require("./routes/users/usersRoute");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();

//middlewares
app.use(express.json());

// cors middlware
app.use(cors());

//users route
app.use("/api/v1/users", usersRoute);

//Error handlers
app.use(notFound);

app.use(globalErrhandler);

//listen to server
const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is up and runing on port ${PORT}`));
