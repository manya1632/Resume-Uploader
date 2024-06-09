import express from 'express';
const router = express.Router();
import UserRegistration from '../controller/UserController.js';
import upload from '../middleware/upload-middleware.js';

router.use("/form-submit", upload.fields([
  { name: 'pimg', maxCount: 1 },
  { name: 'rdoc', maxCount: 1 }
]));

router.post("/form-submit", UserRegistration.userForm);

export default router;