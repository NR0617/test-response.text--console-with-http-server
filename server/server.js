var http = require("http");
var server = http.createServer();
server.listen(3001, function () {
    console.log("웹 서버가 시작되었습니다 %d : ", 3001);
});

server.on("request", function (req, res) {
    // cors 설정
    res.setHeader("Access-Control-Allow-origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true"); // 쿠키 주고받기 허용

    // 서버가 켜졌는지 확인
    console.log("클라이언트의 요청이 들어왔습니다.");

    // text로 받는 연습
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    // res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    // res.write("<!DOCTYPE html>");
    // res.write("<html>");
    // res.write(" <head>");
    // res.write("     <title>응답 페이지</title>");
    // res.write(" </head>");
    // res.write(" <body>");
    // res.write(" <h1>노드제이에스로부터의 응답 페이지</h1>");
    // res.write("</html>");

    res.end("안녕 서버");
});
