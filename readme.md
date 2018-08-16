# net 核心模块 
tcp inherited net模块

http inherited tcp

websocket inherited net模块

```
let net=require("net")
//完整的http有请求和响应
let server = net.createServer()
server.on("connection",function(socket){
    //socket 套接字 req,res(请求,响应)
    //socket是个双工流
    console.log("socekt")
})
server.on("error",function(err){
    console.log(err.code)
})
server.listen(3000)
```

http 模块
- express koa http模块封装
- 用法 头的用法 状态码

200
204
206 范围请求

响应头

响应体

http 功能

* 状态码 206断点续传 304缓存
* 服务端 多语言
* 服务器压缩 gzip
* 虚拟主机，同意服务器上开多个项目，用同一个端口

