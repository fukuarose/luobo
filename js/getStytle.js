function getStyle(obj,attr){
	if(obj.currentStytle){//ie.opera等浏览器下的写法
		return obj.currentStyle[attr];
	}else{
		return window.getComputedStyle(obj,null)[attr];//w3c浏览器
	}
}
