// 1. Hono, userRouter, blogRouter
// 2. getting data from env, now anywhere can be use
// 3. applying cors to all routes
// 4. executeing router
// 5. export app

import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app

