let reg = /<ul\s+class=(\'|\")news-list(\"|')>([\d\D]*)<\/ul>/;
// let reg = //;

let str = `<html lang="en">
<body>
    <div class="wrap">
        <ul class="news-list">
            <li class="news">
                <a href="javascript:;">
                    <img src="./img/img.png" alt="">
                </a>
                <div>
                    <h3>
                        <a href="javascript:;">18人死伤！韩国一男子纵火后持凶器伤害避险邻居</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;1小时前</span>
                    </div>
                </div>
            </li>
            <li class="news">
                <a href="javascript:;">
                    <img src="./img/img.png" alt="">
                </a>
                <div>
                    <h3>
                        <a href="javascript:;">18人死伤！韩国一男子纵火后持凶器伤害避险邻居</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;1小时前</span>
                    </div>
                </div>
            </li>
            <li class="news">
                <a href="javascript:;">
                    <img src="./img/img.png" alt="">
                </a>
                <div>
                    <h3>
                        <a href="javascript:;">18人死伤！韩国一男子纵火后持凶器伤害避险邻居</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;1小时前</span>
                    </div>
                </div>
            </li>
            <li class="news">
                <a href="javascript:;">
                    <img src="./img/img.png" alt="">
                </a>
                <div>
                    <h3>
                        <a href="javascript:;">18人死伤！韩国一男子纵火后持凶器伤害避险邻居</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;1小时前</span>
                    </div>
                </div>
            </li>
            <li class="news">
                <a href="javascript:;">
                    <img src="./img/img.png" alt="">
                </a>
                <div>
                    <h3>
                        <a href="javascript:;">18人死伤！韩国一男子纵火后持凶器伤害避险邻居</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;1小时前</span>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pagination">
            <a href="javascript:;" class="prev">⌜</a>
            <a href="javascript:;">1</a>
            <a href="javascript:;">2</a>
            <a href="javascript:;">3</a>
            <a href="javascript:;">4</a>
            <a href="javascript:;">5</a>
            <a href="javascript:;" class="next">⌝</a>
        </div>
    </div>

</body>
</html>`;
// let str = `<ul   class="news-list">
// fdsa
// </ul>`
let res = reg.test(str);
// let res = str.replace(reg,"1111");
console.log(res)
/*
没有数据，开发效率不够快？nodejs你值得拥有！快速搭建服务器，自己动手mock数据，从此开发不求人！---nodejs01
- nodejs的安装及使用
- 服务端及客户端
- 代码的前后端分离
- commonjs模块化
- fs模块的使用(文件操作及目录操作)
- 动态数据
- nodejs实现新闻列表
*/

