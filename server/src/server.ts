import express from "express";
import routes from "./routes";
import path from 'path'

const app = express();
const port = '3333'

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(port);

console.log(`\n 🌱   ECOLETA   ♻️`);
console.log(`\n\n 🚀 Server is now running!`);
console.log(` ⛩️ Port: ${port}`);