import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.use("/api/v1/blog/*", async (c, next) => {
  const jwtLoad = c.req.header("Authorization");
  if (!jwtLoad) {
    c.status(401);
    return c.json({ status: "Unauthorized" });
  }
  try {
    const token = jwtLoad.split("  ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.json({ status: "Unauthorized" });
    }
    c.set("jwtPayload", { userId: payload.id });
    await next();
  } catch (error) {
    console.log(error);
    c.status(401);
    return c.json({ status: "Unauthorized" });
  }
});
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email as string,
        password: body.password as string,
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ token });
  } catch (error) {
    return c.json({ error: error });
  }
});
app.post("/api/v1/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "user not found" });
  }
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ token });
});
app.post("/api/v1/blog", (c) => {
  // return c.text('SignUp');
  console.log(c.get("jwtPayload")?.userId);
  return c.text("signin route");
});
app.put("/api/v1/blog", (c) => {
  return c.text("Update Blog");
});
app.get("/api/v1/blog/:id", (c) => {
  const { id } = c.req.param();

  console.log(id);
  return c.text("Get a Blog");
});

export default app;
