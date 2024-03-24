import { IncomingMessage, ServerResponse, createServer } from "http";

const PORT: number = 8080;

const server = createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    console.log(req.method);
    if (req.url === "/greet") {
      if (req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.write("This is greet GET method");

        res.end();
      }
      if (req.method === "POST") {
        res.writeHead(200, { "Content-Type": "application/json" });

        res.write("This is greet POST method");

        res.end();
      }
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
