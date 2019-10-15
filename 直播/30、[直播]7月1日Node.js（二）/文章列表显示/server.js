const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
let newsDataTotal = require("./data/data.json");
let mime = require("./data/mime.json");
// console.log(newsData)
const server = http.createServer((req, res) => {
    let pathObj = url.parse(req.url, true);
    let pathname = pathObj.pathname;
    if (pathname === "/" || pathname === "/index") {
        let everyCount = 5;
        let page = 1;
        if(typeof pathObj.query.p !== 'undefined'){
            page = parseInt(pathObj.query.p);
        }
        let pCount = Math.ceil(newsDataTotal.length / everyCount);
        newsData = newsDataTotal.slice((page - 1)*everyCount, everyCount*page);
        res.setHeader("Content-type", 'text/html;charset=utf-8');
        let htmlStr = `<ul class="news-list">`;
        newsData.forEach(v => {
            htmlStr += `<li class="news">
                        <a href="javascript:;">
                            <img src="${v.imgUrl}" alt="">
                        </a>
                        <div>
                            <h3>
                                <a href="/detail?id=${v.id}">${v.title}</a>
                            </h3>
                            <div class="info">
                                <span class="tips"><span>${v.type}</span><span>${v.country}</span><span>逮捕</span></span>
                                <!-- <span class="line"></span> -->
                                <span class="time">| &nbsp;&nbsp;${v.addTime}</span>
                            </div>
                        </div>
                    </li>`;
        })
        htmlStr += "</ul>";
        htmlStr += `<div class="pagination"><a href="/?p=${page-1}" class="prev">⌜</a>`;
        let phtml = "";
        for (let i = 0; i < pCount; i++) {
            phtml += `<a href="/?p=${i+1}">${i+1}</a>`;
        }
        phtml += `<a href="/?p=${page+1}" class="next">⌝</a><div/>`;
        htmlStr += phtml;
        let data = fs.readFileSync("./views/index.html").toString();
        let reg = /<ul\s+class=(\'|\")news-list(\'|\")\s*>([\d\D]*)<\/ul>/;
        let result = data.replace(reg, htmlStr);
        res.write(result);
        res.end();
    } else if (pathname === "/detail") {
        // console.log(pathObj);
        let id = 1;
        if (typeof pathObj.query.id !== 'undefined') {
            id = pathObj.query.id;
        }
        let detailData = newsData[id-1];
        let detailHtml = fs.readFileSync("./views/detail.html").toString();
        let detailContent = `<div class="text">
                                <h1 class="title">${detailData.title}</h1>
                                <div class="article-info"> 类型：${detailData.type} 时间：${detailData.addtime}</div>
                                <p class="content">
                                     ${detailData.content}
                                </p>
                            </div>`;
        let reg = /<div\s+class=(\'|\")text(\'|\")\s*>([\d\D]*)<\/div>/;
        let result = detailHtml.replace(reg, detailContent);
        res.write(result);
        res.end();
    } else {
        if (pathname !== '/favicon.ico') {
            let extName = path.extname(pathObj.pathname);
            res.setHeader("Content-type", mime[extName]);
            res.write(fs.readFileSync("./views/" + pathname));
            res.end();
        }
    }
})
server.listen(8887);