import server from "./server";

const port = parseInt(process.env.PORT || '3001');

server.listen(port, () => console.log(`App running on ${port}`))


