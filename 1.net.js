let net=require("net")
//完整的http有请求和响应
let server = net.createServer()
//每次链接都会触发connection

server.on("connection",function(socket){
    //socket 套接字 req,res(请求,响应)
    //socket是个双工流
    console.log("socekt")
    socket.setEncoding("utf8")
    socket.on("data",function(data){
        socket.write(`aaa`)
        server.getConnections((err,count)=>{
            console.log(count)
            socket.write(`${count}`)//客户端
        })//服务器
    })
    socket.on("end",function(data){
        console.log(`end`)
    })
   
    
})
//最大连接数
server.setMaxListeners=3;
server.on("error",function(err){
    console.log(err.code)
})
server.listen(80)