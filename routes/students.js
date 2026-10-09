
const auth = require("../middleware/auth");
const requireRole = require("../middleware/requireRole");

router.get("/", getAllStudents);
router.get("/:id", getStudentById);

router.post("/", auth, createStudent);
router.patch("/:id", auth, updateStudent);
router.delete("/:id", auth, requireRole("admin"), deleteStudent);

