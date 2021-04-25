const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./Controllers/api"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/headpages", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));