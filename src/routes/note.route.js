import express from "express";
import * as Ctrl from "../controllers/note.controller";

const router = express.Router();

router.get("/", Ctrl.getNote);

export default router;
