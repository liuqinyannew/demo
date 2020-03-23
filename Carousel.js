$(function(){
//让图片自动动起来
	let index=0;
	let time=setInterval(function(){
		index--;
		if(index<0){
			index=2;}
		$("#box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$("#box1 li").eq(index).css({backgroundColor:"black"}).siblings().css({backgroundColor:"gainsboro"})
	},2000);
	//li点哪个到哪个图片中
	$("#box1 li").click(function(){
		$(this).css({backgroundColor:"black"}).siblings().css({backgroundColor:"gainsboro"})
		let index=$(this).index();
		$("#box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	});
	//上一个按钮
	$("#btn1").click(function(){
		index--;
		if(index<0){
			index=2;
		}
		$("#box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$("#box1 li").eq(index).css({backgroundColor:"black"}).siblings().css({backgroundColor:"gainsboro"})
	});
	//下一个按钮
	$("#btn2").click(function(){
		index++;
		if(index>2){
			index=0;
		}
		$("#box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		$("#box1 li").eq(index).css({backgroundColor:"black"}).siblings().css({backgroundColor:"gainsboro"})
	});
	//鼠标放上去以后停止播放
	//离开以后继续
	$("#Rotation-chart").hover(function(){
		$("#btn1").css({display:"block"});
		$("#btn2").css({display:"block"});
		clearInterval(time);
	},function(){
		$("#btn1").css({display:"none"});
		$("#btn2").css({display:"none"});
		clearInterval(time);
		 time=setInterval(function(){
			index--;
			if(index<0){
				index=2;}
			$("#box a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			$("#box1 li").eq(index).css({backgroundColor:"black"}).siblings().css({backgroundColor:"gainsboro"})
		},2000);
		
	});
})
