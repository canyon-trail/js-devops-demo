import express from "express";

const app = express();

app.get('/', (req, res) => res.send("Sup World!"));

export default app;


