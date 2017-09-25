const Koa=require('koa')
const app= new Koa()
app.use((ctx:any)=>{
  ctx.body='Hello Koa'
})
app.listen(3000)
