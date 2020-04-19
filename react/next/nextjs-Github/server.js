const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev}) 
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/a/:id',async (ctx) => {
    const id = ctx.params.id
    await handle(ctx.req,ctx.res,{
      pathname: '/a',
      query:{id}
    })
    ctx.respond = false
  })
  server.use(router.routes())

  server.use(async(ctx, next) => { // 中间件就是一个函数，能起到承上启下的作用就行
    await handle(ctx.req,ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000');
  })
})
