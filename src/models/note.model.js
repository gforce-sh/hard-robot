const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
	{
		name: { type: String, default: "Note-1" },
		text: { type: String },
		userId: { type: String, required: true },
	},
	{ timestamps: true }
);

const NoteModel = mongoose.model("note", noteSchema);

module.exports = NoteModel;
