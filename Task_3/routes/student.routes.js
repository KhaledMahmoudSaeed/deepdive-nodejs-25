import express from "express";
import {
  index,
  show,
  activeStudent,
  inactiveStudent,
  highestGrade,
  failStudent,
} from "../controllers/student.controllers.js";
const router = express.Router();

router.route("/").get(index);
// router.route("/:studentId").get(show);
router.get("/active", activeStudent);
router.get("/inactive", inactiveStudent);
router.get("/top", highestGrade);
router.get("/fail", failStudent);
export default router;
