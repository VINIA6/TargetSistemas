import { Request, Response } from 'express';
import { createManyFaturamentos, getFaturamentoStats } from '../services/faturamentoService';

export const getFaturamentoStatistics = async (req: Request, res: Response) => {
    try {
        const stats = await getFaturamentoStats();
        res.status(200).json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Error calculating statistics' });
    }
};

export const createFaturamento = async (req: Request, res: Response) => {
    try {
        const faturamentos = req.body;

        // Verifica se os dados enviados são um array
        if (!Array.isArray(faturamentos)) {
            return res.status(400).json({ error: 'Expected an array of faturamentos' });
        }

        const newFaturamentos = await createManyFaturamentos(faturamentos);
        res.status(201).json(newFaturamentos);
    } catch (error) {
        res.status(500).json({ error: 'Error creating faturamentos' });
    }
};