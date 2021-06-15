const http = require('http')
const post=3000
const  server=http.createServer((req,res)=>{
req.end('Start server...')
});

server.listen(post,()=>{
    console.log("server is running");
})