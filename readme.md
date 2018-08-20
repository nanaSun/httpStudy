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

|类别|原因|用途|
|:--:|:--:|:--:|
|**1XX**|**informational**|
|**2XX**|**Success**|
|200|OK|
|204|Not Content|
|206|Partial Content(content-Range指定内容)|断点续传|
|**3XX**|**Redirection**|
|301|Moved Permanently|
|302|Found|
|303|See Other|
|304|Not Modified|缓存|
|307|Temporarty Redirect|
|**4XX**|**Client Error**|
|400|Bad Request|
|401|unauthorized|
|403|Forbidden|
|404|Not Found|
|**5XX**|**Server Error**|
|500|Internal Server Error|
|503|Service Unavailable|


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

