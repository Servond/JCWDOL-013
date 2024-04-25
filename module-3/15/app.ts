import express, { Application } from "express";
import userRoutes from "./routers/user.router";
import pokemonRoutes from "./routers/pokemon.router";

const app: Application = express();

const PORT = 8080;

app.use("/api/users", userRoutes);
app.use("/api/pokemons", pokemonRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;
