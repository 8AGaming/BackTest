// קישור לקובץ הכניסה הראשי לאפליקציה
// נתב כללי לדפי הניתוב של הפיצ'רים
// נקודת קצה למשאב לא נמצא 404
// נקודת קצה לקבצים סטאטיים

const express = require("express");
const router = express.Router();
const productRouter = require("../products/routers/routes");
const userRouter = require("../users/router/router");

router.use(productRouter);
router.use(userRouter);

module.exports = router;
