const express = require("express");
require("dotenv").config();

// express server
const app = express();

// rest endpoint
app.get("/", (req, res) => {
	res.json({
		data: "The server is running, better go catch it",
	});
});

// port
app.listen(process.env.PORT, () => {
	console.log(`server is ready at http://localhost:${process.env.PORT}`);
});
