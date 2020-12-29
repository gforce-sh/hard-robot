import express from "express";
import * as Ctrl from "../controllers/note.controller";

const router = express.Router();

router.get("/", Ctrl.getNote);
router.post("/", Ctrl.createNote);
router.post("/update/:noteId", Ctrl.updateNote);

export default router;
