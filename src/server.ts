import Fastify from "fastify";
import connectDB from "./database";
import registerRoutes from "./routes";

const server = Fastify();

const start = async () => {
  try {
    await connectDB();
    await registerRoutes(server);
    await server.listen(3000);
    console.log("Server is running on http://localhost:3000");
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
