const Koa = require("koa");
const Router = require("koa-router");
let app = new Koa();
let router = new Router();
app.use(router.routes());
// get post delete put
// RESTful 架构api
// https://www.test.com/addUers 添加
// https://www.test.com/deleteUers 删除
// https://www.test.com/updateUers 更新
// https://www.test.com/getUers 获取
// code 0  code 1; {code:0,info:"获取成功"}{code:1,info:"获取失败"}
// router.get("/",(ctx,next)=>{
//     ctx.body = "router views";
// })
// router.get("/news",(ctx,next)=>{
//     ctx.body = "new views";
// })
// get 获取  put 更新  post 添加  delete  删除；
router.get("/user",ctx=>{
    ctx.status = 200;
    ctx.body = "获取用户"
})
router.post("/user",ctx=>{
    ctx.body = "添加用户"
})
router.delete("/user",ctx=>{
    ctx.body = "删除用户"
})
router.put("/user",ctx=>{
    ctx = "更新用户"
})

app.listen(4000);