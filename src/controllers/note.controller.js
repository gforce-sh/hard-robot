import NoteModel from "../models/note.model";

export const getNote = async (req, res, next) => {
	try {
		const foundNote = await NoteModel.find();
		if (!foundNote?.length) throw new Error("no note found for given id");
		return res.status(200).send(foundNote[0]);
	} catch (err) {
		const error = new Error(`Unable to fetch note: (${err.message})`);
		error.statusCode = err.statusCode || 400;
		return next(err);
	}
};

export const createNote = async (req, res, next) => {
	try {
		const { text } = req.body;
		if (!text) throw new Error("missing text");
		const note = new NoteModel({ text });
		const newNote = await note.save();
		return res.status(200).send(newNote);
	} catch (err) {
		const error = new Error(`Unable to create new note: (${err.message})`);
		error.statusCode = err.statusCode || 400;
		return next(err);
	}
};

export const updateNote = async (req, res, next) => {
	try {
		const { noteId } = req.params;
		if (!noteId) throw new Error("missing note id");
		const { text } = req.body;
		const foundNote = await NoteModel.findById(noteId).lean();
		if (!foundNote) throw new Error("No note found for given id");
		if (foundNote.text === text) return res.status(200).send(foundNote);
		const updatedNote = await NoteModel.findByIdAndUpdate(
			noteId,
			{ text },
			{ new: true }
		);
		if (!updatedNote) throw new Error("error in update");
		return res.status(200).send(updatedNote);
	} catch (err) {
		const error = new Error(`Unable to update note: (${err.message})`);
		error.statusCode = err.statusCode || 400;
		return next(err);
	}
};
