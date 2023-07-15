const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const mainRoute = require("./routes/mainRoute");
const adminRoute = require("./routes/adminRoutes");
const bodyparser = require("body-parser");
const multer = require("multer");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 3000;

app.use(cors()); // enable CORS (Cross-origin resource sharing) for allowing access to resources from other domains
app.use(express.json());
app.use(bodyparser.json());
/* app.get("/", (req, res) => {
    res.send("Hello World");

}); */

/* app.use('/', authRoutes); */
app.use("/auth", authRoutes);
app.use("/api", mainRoute);
app.use("/admin", adminRoute);
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	});
