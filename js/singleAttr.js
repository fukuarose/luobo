

    var btn200 = document.getElementById("btn200");
    var btn400 = document.getElementById("btn400");
    var box = document.getElementById("box");
    btn200.onclick = function() {
       animate(box,"left",500);
    }
    btn400.onclick = function() {
        animate(box,"top",400);
    }
    // 封装单个属性的运动框架
    function animate(obj,attr,target)  {  // 给谁    什么属性   改为多少
         clearInterval(obj.timer);
         obj.timer = setInterval(function() {
             //计算步长   动画的原理      盒子本身的样式 +  步长
             //我们怎么知道我们当前的样式
            // 先得到 当前的样式，然后 用 target 减去 就可以  除以 10  计算步长
             var current = parseInt(getStyle(obj,attr));  // 得到当前的样式 别忘乐去掉px
             var step = ( target -current ) / 10;
             step = step > 0 ? Math.ceil(step) : Math.floor(step);
             // 要做动画了
             //obj.style.left =  obj.offsetLeft + step + "px";
             obj.style[attr] =  current  + step + "px";
             if(current == target )
             {
                 clearInterval(obj.timer);
             }
             //console.log(current);
         } ,30)
    }


    function getStyle(obj,attr) {  //  谁的      那个属性
        if(obj.currentStyle)  // ie 等
        {
            return obj.currentStyle[attr];  // 返回传递过来的某个属性
        }
        else
        {
            return window.getComputedStyle(obj,null)[attr];  // w3c 浏览器
        }
    }
