import { Router } from "express";

import { getIniti } from "../controllers/initialController";

const router = Router();

router.get('/initial',getIniti)

export default router