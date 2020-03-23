$("footer").load("foot.html",function(){
	})
	$("#header").load("header.html",function(){	
		$(".pull-up").mouseover(function(){
			$(this).find(".pull-up-box").css({display:"block"})
		});
		$(".pull-up").mouseout(function() {
			$(".pull-up-box").css({
				display: "none"
			})
		})
	})
	scrollTop: window.onscroll = function() {
			if ($(window).scrollTop() > 20) {
				$("header").css({
					position: "fixed",
					top: 0,
					width: "100%",
					backgroundColor: "white",
				})
			} else {
				$("header").css({
					position: "static",
				})
			}
		}
	let index=1;
	$(".btn").click(function(){
		index++;
		if(index%2==0){
			index=0;
		}else{
			index=1;
		}
		let num=index*1108;
			$("#section-fiv div").animate({
				left:-num
			}, 100);
	});
	$(".btna").click(function(){
		index++;
		if(index%2==0){
			index=0;
		}else{
			index=1;
		}
		let num=index*1108;
			$("#section-seven div").animate({
				left:-num
			}, 100);
	});