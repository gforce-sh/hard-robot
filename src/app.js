import "./utils/db";

import express from "express";
import morgan from "morgan";
import noteRouter from "./routes/note.route";
import cors from "cors";

const app = express();
const corsOptions = {
	origin: ["http://localhost:5000"],
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
	res.status(200).send("Hello World, this is GS");
});

app.use("/notes", noteRouter);

app.use((err, req, res, next) => {
	if (!err.statusCode) {
		err.statusCode = 500;
	}
	if (!err.message) {
		err.message = "Something unexpected happened.";
	}
	res.status(err.statusCode).send(err.message);
});

export default app;
