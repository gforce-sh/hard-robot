import NoteModel from "../models/note.model";

const getNote = async (req, res, next) => {
	try {
		const foundNote = await NoteModel.find();
		res.status(200).send(foundNote);
	} catch (err) {
		const error = new Error("Unable to get occupant data");
		return await res.status(400).json(error.message);
	}
};

export const { getNote };
