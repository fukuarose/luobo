//入口
$(function(){
//	计算滑动的时间
	var clearTime=null;
//	当前显示
	$now=0
//	即将显示
	$index=0;
	autoPlay()
//	封装俩个函数
//1.自动播放
	function autoPlay(){
		clearTime=setInterval(function(){
			$index++;
			if($index>7){
				$index=0;
			}
			scrollPlay();
			$now=$index;
		},2000)
	}
	//2.滚动动画
	function scrollPlay(){
 		$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");       //匹配的集合中选择索引值为index的元素
 		//向左移动
 		if($index>$now){
 			//stop(true,true)是jquery用于控制页面动画效果方法，运行之后立刻结束当前页面上的动画效果
 			$("#imgBox img").eq($now).stop(true,true).animate({"left":"-720px"});
 			$("#imgBox img").eq($index).css("left","720px").stop(true,true).animate({"left":"0"});
 		}else if($now>$index){//往右跑
 			$("#imgBox img").eq($now).stop(true,true).animate({"left":"720px"});
 			$("#imgBox img").eq($index).css("left","-720px").stop(true,true).animate({"left":"0"});
 		}
	}
	
	
	
		$(".btnLeft").click(function(){
			clearInterval(clearTime);
			$index--;
			if($index<0){
				$index=7;
			}
			$("#list li").eq($index).addClass("hover").siblings().removeClass("hover"); 
		    $("#imgBox img").eq($now).stop(true,true).animate({"left":"-720px"});
		    $("#imgBox img").eq($index).css("left","720px").stop(true,true).animate({"left":"0px"});
		    $now=$index;
		});
		$(".btnRight").click(function(){
			clearInterval(clearTime);
			$index++;
			if($index>7){
				$index=0;
			}
			$("#list li").eq($index).addClass("hover").siblings().removeClass("hover"); 
		    $("#imgBox img").eq($now).stop(true,true).animate({"left":"720px"});
		    $("#imgBox img").eq($index).css("left","-720px").stop(true,true).animate({"left":"0px"});
		    $now=$index;
		})
		
		$("#list li").click(function(){
			clearInterval(clearTime);
			$index=$(this).index();//获取当前的索引
			if($index>$now){
				$("#list li").eq($index).addClass("hover").siblings().removeClass("hover"); 
			    $("#imgBox img").eq($now).stop(true,true).animate({"left":"720px"});
			    $("#imgBox img").eq($index).css("left","-720px").stop(true,true).animate({"left":"0px"});
			}else if($index<$now){
				$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
				$("#imgBox img").eq($now).stop(true,true).animate({"left":"-720px"});
				$("#imgBox img").eq($index).css("left","720px").stop(true,true).animate({"left":"0px"});
			}
			$now=$index;
		})
});
