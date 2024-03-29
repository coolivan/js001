const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const static = require("koa-static");
let app = new Koa();
let router = new Router();
app.use(static(__dirname+"/static"));
app.use(views(__dirname+"/views"),{
    map:{
        html:"pug"
    }
});
app.use(router.routes());
router.get("/",async ctx=>{
  let newsData = [{name:"张三",age:20},{name:"李四",age:30}];
  let a = 10;
  await ctx.render("index.pug",{
        newsData,
        a
  })
})
app.listen(5000);