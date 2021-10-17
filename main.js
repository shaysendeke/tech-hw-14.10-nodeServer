const http = require("http")

const server = http.createServer((request, response)=> {
    method = request.method; 
    url = request.url
    response.write("Hello World ")
    response.end();
    console.log(method, url)
    console.log("lkjk");
})

server.listen(2000);
