import {Router} from 'express';

import {CalculatorController} from '../controller/calculator.controller';

const router = Router();
router.post('/', CalculatorController.adder);

export default router;