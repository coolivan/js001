const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const static = require("koa-static");
let app = new Koa();
let router = new Router();
let newsData = require("./data/data.json");
app.use(static(__dirname+"/static"));
app.use(views(__dirname+"/views"),{
    map:{
        html:"pug"
    }
});
app.use(router.routes());

router.get("/",async (ctx)=>{
    // ctx.body = "hello";
  let renderData = newsData.slice(0,5);
  await ctx.render("index.pug",{
        renderData
  });
})

router.get("/detail",async (ctx)=>{
    // ctx.body = "hello";
    let id = 1;
    if(typeof ctx.request.query.id !== 'undefined'){
        id = parseInt(ctx.request.query.id)
    }
  let renderData = newsData[id-1];
  await ctx.render("detail.pug",{
        renderData
  });
})

app.listen(8888);