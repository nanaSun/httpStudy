let opts={
    host:"localhost",
    port:80,
    path:"/",
    headers:{
        'a':1,
        'Content-Length':5//socket hang up
    }
}
let http=require("http")
let start = 0;
let fs = require('fs');
opts.headers.Range = `bytes=${start}-${start+3}`;
  start+=4;
  let client = http.request(opts,function (res) {
      let total = res.headers['content-range'].split('/')[1];
      res.on('data',function (data) {
        fs.appendFileSync('./download.txt',data);
      });
      res.on('end',function () {
        // setTimeout(() => {
        //   if (!pause&&start < total)
        //     download();
        // }, 1000);
      })
  });
  client.end();