import dotenv from 'dotenv';
import express, { Express } from "express";
import faturamentoRoutes from "./routes/faturamento-routes"

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use('/faturamentos', faturamentoRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
