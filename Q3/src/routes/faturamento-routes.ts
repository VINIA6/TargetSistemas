import { Router } from 'express';
import { getFaturamentoStatistics,createFaturamento  } from '../controllers/faturamentoController';

const router = Router();

router.get('/stats', getFaturamentoStatistics);
router.post('/', createFaturamento);

export default router;
