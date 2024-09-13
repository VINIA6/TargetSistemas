import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getFaturamentoStats = async () => {
    const faturamentos = await prisma.faturamento.findMany();
    const validFaturamentos = faturamentos.filter(fat => fat.valor > 0);

    if (validFaturamentos.length === 0) {
        return { message: 'No valid faturamentos found' };
    }

    const totalFaturamento = validFaturamentos.reduce((sum, fat) => sum + fat.valor, 0);
    const averageFaturamento = totalFaturamento / validFaturamentos.length;

    const minFaturamento = Math.min(...validFaturamentos.map(fat => fat.valor));
    const maxFaturamento = Math.max(...validFaturamentos.map(fat => fat.valor));
    const daysAboveAverage = validFaturamentos.filter(fat => fat.valor > averageFaturamento).length;

    return {
        minFaturamento,
        maxFaturamento,
        daysAboveAverage,
    };
};

export const createManyFaturamentos = async (faturamentos: { date: string, value: number }[]) => {
    const formattedFaturamentos = faturamentos.map(fat => ({
      data: new Date(fat.date),  // Converter a data para um objeto Date
      valor: fat.value
    }));
  
    const newFaturamentos = await prisma.faturamento.createMany({
      data: formattedFaturamentos
    });
  
    return newFaturamentos;
  };