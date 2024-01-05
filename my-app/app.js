const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const e = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		const check = await collection.findOne({
			email: email,
		});
		if (check) {
			if (check.password === password) {
				res.json("exist");
			} else {
				res.json("notexist");
			}
		} else {
			res.json("notexist");
		}
	} catch (e) {
		res.json("fail");
	}
});

app.post("/signup", async (req, res) => {
	const { email, password, confirmPassword } = req.body;
	const data = {
		email: email,
		password: password,
	};
	try {
		const check = await collection.findOne({
			email: email,
		});
		if (check) {
			res.json("exist");
		} else {
			if (password === confirmPassword) {
				res.json("notexist");
				await collection.insertMany([data]);
			} else {
				res.json("notmatch");
			}
		}
	} catch (e) {
		res.json("fail");
	}
});

app.listen(8000, () => {
	console.log("port connected");
});
