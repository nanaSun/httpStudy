let net=require("http")
let fs=require("fs")
let path=require("path")
let size=fs.statSync(path.join(__dirname,"my.txt")).size
console.log(size)
//完整的http有请求和响应
let server = net.createServer((req,res)=>{
    let range=req.headers['range']
    if(range){
        let [,start,end]=range.match(/(\d*)-(\d*)/)
        start=start?Number(start):0
        end=end?Number(end):size-1
        console.log(start,end)
        res.setHeader('Content-Range', `bytes ${start}-${end}/${size - 1}`);
        fs.createReadStream(path.join(__dirname,"my.txt"),{start,end}).pipe(res);
    }else{
        //直接给客户端
        fs.createReadStream(path.join(__dirname,"my.txt")).pipe(res);
    }
})
//每次链接都会触发connection

// server.on("connection",function(socket){
//     //socket 套接字 req,res(请求,响应)
//     //socket是个双工流
//     console.log("socekt")
//     socket.setEncoding("utf8")
//     socket.on("data",function(data){
//         socket.write(`aaa`)
//         server.getConnections((err,count)=>{
//             console.log(count)
//             socket.write(`${count}`)//客户端
//         })//服务器
//     })
//     socket.on("end",function(data){
//         console.log(`end`)
//     })
   
// })
//req 客户端 可读流
//res 可写流
server.on("request",(req,res)=>{
// req是代表的客户端的请求，当客户端发过来数据后 才会触发on('data')事件
    let arr=[]
    req.on('data',function (data) {
        console.log("data",data);
        arr.push(data);
  });
  req.on('end',function() {
    let r=Buffer.concat(arr).toString();
    console.log(r);
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.sendDate = false;
    res.end();
  });
})
//最大连接数
server.setMaxListeners=3;
server.on("error",function(err){
    console.log(err)
})


server.listen(80,()=>{
    console.log(`connection start`)
})