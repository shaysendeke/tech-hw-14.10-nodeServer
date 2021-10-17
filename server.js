const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/":
      response.write(`welcome to home page, response status is: ${response.statusCode}`);
      break;
    case "/about":
      response.write(`welcome to about page, response status is: '${response.statusCode}`);
      break;
    case "/blog":
      response.write(`welcome to the blog page, response status is: ${response.statusCode}`);
      break;
    case "/blog/post":
        response.write(`welcome to the post page, response status is: ${response.statusCode}`);
      break;
    default:
        response.statusCode = 404
        response.write(`not found, response status is: ${response.statusCode}`);
      break;
  }

  method = request.method;
  url = request.url;
//   response.write("Hello World ");
  response.end();
//   console.log(method, url);
});

server.listen(2000);

// const http = require("http")

// const article = {
//     title: "ThE Life & Time Of Superman",
//     author: "Clark Kent",
//     published: "1938"
// }
// !=====================================================================
// const server = http.createServer((request, response)=> {
//     method = request.method;
//     url = request.url
//     response.write(JSON.stringify(article))
//     response.end();
//     console.log(method, url)
// })

// server.listen(2000);
// !=====================================================================

// const http = require("http")

// const article = {
//     title: "ThE Life & Time Of Superman",
//     author: "Clark Kent",
//     published: "1938"
// }

// const server = http.createServer((request, response)=> {
//     method = request.method;
//     url = request.url
//     response.write(JSON.stringify(article))
//     response.end();
//     console.log(method, url)
// })
// server.listen(2000);

// !=====================================================================
// const http = require("http")

// let cars = [
//     { model: "Mazda 3", year: "2020", price: 20000 },
//     { model: "Hyundai i10", year: "2019", price: 22500 },
//     { model: "Kia Niro", year: "2017", price: 24000 },
// ];


// const server = http.createServer((request, response)=> {
//     method = request.method;
//     url = request.url
//     if (url == "/" || "/cars") {
//         response.write(JSON.stringify(cars))
//     }
//     response.end();
//     console.log(method, url)
// })
// server.listen(2000);

// !===================================================================== 
    
    // const server = http.createServer((request, response)=> {
    //     const fs = require("fs")
    //     method = request.method;
    //     url = request.url
        
    //             fs.readFile('./public/index.ht', 'utf8' , (err, data) => {
    //                 if (err) {
    //                  response.writeHead(404);
    //                  response.write("something is wrong")
                  
    //                 }
    //                 else { 
    //                     response.write(data);
    //                     // response.end();
    //                 }
    //                 response.end();
    //             })
        
    //     // console.log(method, url)
    //         })
    // server.listen(2000);
    