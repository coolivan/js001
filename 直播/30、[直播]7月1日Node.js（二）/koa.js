const Koa = require("koa");
let app = new Koa();
// 中间件
let middleWare1 = async (ctx,next)=>{
    // ctx : context 上下文； req,res
    // ctx.req  等同于  node req ctx.res 等同于node res；
    // ctx.requset  ctx.response;
    console.log("middleWare1 start...")
    ctx.body = "middleWare1";
    ctx.state = {
        name:"张三"
    }
    next();  //middleWare2()
    console.log("middleWare1 end...")
};
let middleWare2 = async (ctx,next)=>{
    // ctx : context 上下文； req,res
    console.log("middleWare2 start...")
    console.log();
    ctx.body = "middleWare2";
    // ctx.throw(400,'name required');
    console.log(ctx.state);
    next();
    console.log("middleWare2 end...")
};
let middleWare3 = async (ctx,next)=>{
    // ctx : context 上下文； req,res
    console.log("middleWare3 start...")
    // ctx.response.body  === ctx.body;
    // console.log(ctx.body === ctx.response.body);
    // ctx.status = 404;
    // ctx.set("location","http://www.baidu.com");
    // ctx.status = 302;
    ctx.body = "middleWare3";
    console.log("middleWare3 end...")
};

app.use(middleWare1)
app.use(middleWare2)
app.use(middleWare3)
// app.on("error",err=>{
//     console.log(err);
// })
app.listen(3000);