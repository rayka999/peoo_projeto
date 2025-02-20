import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config(); // Isso vai carregar as variáveis de ambiente do arquivo .env
//import turmaRoutes from './routes/turmaRoutes.js'

const app = express();

app.use(cors()); // Permitir requisições de diferentes origens
app.use(express.json()); // Para manipular requisições JSON

// Configuração das rotas
//app.use('/api/turma', turmaRoutes);

console.log('Rotas carregadas corretamente!');

app.listen(3000, () => {
  console.log(`Servidor rodando em http://localhost:3000`);
});