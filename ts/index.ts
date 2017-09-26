const Koa=require('koa')
const app= new Koa()
/*

*/
let server= require('http').createServer(app.callback())
let io=require('socket.io')(server)
io.on('connection',function(){

})
app.use((ctx:any)=>{
  ctx.body='Hello Koa'
})
server.listen(3000)
