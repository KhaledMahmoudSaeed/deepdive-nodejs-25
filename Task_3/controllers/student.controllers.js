import fs from "fs";
import { cursorTo } from "readline";

const data = JSON.parse(
  fs.readFileSync("../Task_3/private/data.json", "utf-8")
);

export const index = (req, res) => {
  if (data.length === 0) {
    return res.status(404).json({
      success: false,
      msg: "No students found",
      status: 404,
      data,
    });
  }
  res.status(200).json({
    success: true,
    msg: "Students retrieved successfully",
    status: 200,
    data,
  });
};

export const show = (req, res) => {
  const studentId = Number(req.params.studentId);
  const student = data.find((student) => student.id === studentId);
  if (student) {
    res.status(200).json({
      success: true,
      msg: "Student retrieved successfully",
      status: 200,
      student,
    });
  } else {
    res.status(404).json({
      success: true,
      msg: "Student not found",
      status: 404,
    });
  }
};
function getStudentByStatus(status, res) {
  const students = data.filter((data) => data.status === status);
  if (students) {
    return res.status(200).json({
      success: true,
      msg: "Students retrieved successfully",
      status: 200,
      count: students.length,
      students,
    });
  } else {
    return res.status(404).json({
      success: true,
      msg: "Students not found",
      status: 404,
    });
  }
}
export const activeStudent = (req, res) => {
  getStudentByStatus("active", res);
};
export const inactiveStudent = (req, res) => {
  getStudentByStatus("inactive", res);
};

export const highestGrade = (req, res) => {
  const highestGradeStudent = data.reduce((maxAvg, currentAvg) => {
    const avg =
      currentAvg.grades.reduce((a, b) => a + b, 0) / currentAvg.grades.length;
    const max = maxAvg.grades.reduce((a, b) => a + b, 0) / maxAvg.grades.length;
    return avg > max ? currentAvg : maxAvg;
  });
  return res.status(200).json({
    success: true,
    msg: "Failing student retrieved successfully",
    status: 200,
    student: highestGradeStudent,
  });
};

export const failStudent = (req, res) => {
  const lowestGradeStudent = data.reduce((minAvg, currentAvg) => {
    const avg =
      currentAvg.grades.reduce((a, b) => a + b, 0) / currentAvg.grades.length;
    const min = minAvg.grades.reduce((a, b) => a + b, 0) / minAvg.grades.length;
    return avg < min ? currentAvg : minAvg;
  });

  return res.status(200).json({
    success: true,
    msg: "Failing student retrieved successfully",
    status: 200,
    student: lowestGradeStudent,
  });
};
