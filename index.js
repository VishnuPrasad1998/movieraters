const express = require("express"),
app = express();

require("dotenv").config();

mongoose = require("mongoose");
userRoutes = require("./routes/user");
movieRoutes = require("./routes/movie");

try {
    mongoose.connect("mongodb://localhost:27017/MoviesDB?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Connected to DB");}
catch (error) {
    handleError(error);
    }
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error.message);
    });
  

app.use(express.json());
  
app.use(express.urlencoded({
extended: true
}));

app.use(userRoutes);
app.use(movieRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is live on port ${process.env.PORT}`);
})
