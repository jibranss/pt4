//console.log("Hello via Bun!");\
import { Elysia } from "elysia";

export const mahasiswaRoute = new Elysia({ prefix: "/mahasiswa" });

mahasiswaRoute.get("/:id", ({ params }) => {
  return {
    id: params.id,
    message: "Hello Duniaa!",
  };
});

mahasiswaRoute.post("/:id", ({ params, body }) => {
  return {
    id: params.id,
    body,
  };
});