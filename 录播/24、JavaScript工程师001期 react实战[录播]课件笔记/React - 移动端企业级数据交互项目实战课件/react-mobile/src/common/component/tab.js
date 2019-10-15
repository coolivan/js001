import React,{Component} from "react";
export default class Tab extends Component {
    getNav = ()=>{
        let {data} = this.props;
        if(data.length > 1){
            return (
                <nav className="picNav">
                    {data.map((item,index)=>{
                        return (
                            <span
                                key={index}
                                className={index===0?"active":""}
                            >
                        </span>
                        );
                    })}
                </nav>
            );
        }
       return "";
    }
    componentDidMount(){
        if(this.props.data.length > 1){
            this.tabMove();
        }
    }
    tabMove = ()=>{
        let {tab} = this.refs;
        let picList = tab.querySelector(".picList");
        let picNavs = tab.querySelectorAll(".picNav span");
        let now = 0;//当前显示的是第几张
        let x = 0;
        let startPoint = {};
        let startX = 0;
        let isMove = false;
        let isFirst = true;
        let timer = 0;
        /*
        * 当前是否是按照我想要的方向进行滑动
        * */
        //picList.innerHTML += picList.innerHTML;
        picList.style.width = picList.children.length + "00vw";
        tab.addEventListener("touchstart",function(e){
            clearInterval(timer);
            picList.style.transition = "none";
            startPoint = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
            /*
            * 第0张和最后一张，有划出边界的风险
            * */
            if(now == 0){
                now = picNavs.length;
            }
            if(now == picList.children.length - 1){
                now = picNavs.length - 1;
            }
            isMove = false;
            isFirst = true;
            x = -now*tab.clientWidth;
            picList.style.WebkitTransform = picList.style.transform = `translate3d(${x}px,0,0)`;
            startX = x;
        });
        tab.addEventListener("touchmove",function(e){
            let nowPoint =  {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY
            };
            let dis = {
                x: nowPoint.x - startPoint.x,
                y : nowPoint.y - startPoint.y
            };
            if( isFirst&&
                Math.abs(dis.x - dis.y) > 2){
                if(Math.abs(dis.x) > Math.abs(dis.y)){
                    isMove = true;
                }
                isFirst = false;
            }
            if(isMove){
                x = startX + dis.x;
                picList.style.WebkitTransform = picList.style.transform = `translate3d(${x}px,0,0)`;
                e.preventDefault();
            }
        });
        tab.addEventListener("touchend",function(e){
           if(isMove){
                let nowPoint =  e.changedTouches[0].pageX;
                let dis = nowPoint - startPoint.x;
                if(Math.abs(dis) > 100){ //当用户滑动距离超过 100px 时，我们认为用户是想进行切换
                    now -= dis/Math.abs(dis);
                }
                x = -now*tab.clientWidth;
                picList.style.transition = ".3s";
                picList.style.WebkitTransform = picList.style.transform = `translate3d(${x}px,0,0)`;
               setNav();
           }
           autoPlay();
        });
        function setNav(){
            picNavs.forEach((nav)=>{
                nav.classList.remove("active");
            });
            picNavs[now%picNavs.length].classList.add("active");
        }
        function toNext(){
            if(now == picList.children.length - 1){
                now = picNavs.length - 1;
                x = -now*tab.clientWidth;
                picList.style.transition = "none";
                picList.style.WebkitTransform = picList.style.transform = `translate3d(${x}px,0,0)`;
            }
            setTimeout(function(){
                now++;
                x = -now*tab.clientWidth;
                picList.style.transition = ".3s";
                picList.style.WebkitTransform = picList.style.transform = `translate3d(${x}px,0,0)`;
                setNav();
            },30);
        }
        autoPlay();
        function autoPlay(){
            timer = setInterval(toNext,2000);
        }
    }
    render (){
        let {data,className,renderItem} = this.props;
        let data2 = data.concat(data.filter(()=>true));
        return (
        <div
            ref="tab"
            className={"tab " + className}>
            <ul className="picList">
                {data2.map((item,index)=>{
                    return (
                        <li key={index}>
                            {renderItem(item)}
                        </li>
                    );
                })}
            </ul>
            {this.getNav()}
        </div>
        )
    }
}