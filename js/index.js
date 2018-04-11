//header and footer
$(()=>{
  //header
  $.ajax({
    type:"get",
    url:"header.html"
  }).then(data=>{
    $("#header").html(data);
  })
  //footer
  $.ajax({
    type:"get",
    url:"footer.html"
  }).then(data=>{
    $("#footer").html(data);
    //底部鼠标移入事件
    $("#footer .qq-1").mouseenter(
      e=>{
        $(e.target).attr("src","img/footer/bg09.png");
    })
    $("#footer .qq-2").mouseenter(
      e=>{
        $(e.target).attr("src","img/footer/bg10.png");
    })
    $("#footer .qq-3").mouseenter(
      e=>{
        $(e.target).attr("src","img/footer/bg11.png");
    })
    $("#footer div.footer-1>div.footer-half>p>a>img").mouseleave((e)=>{
      $(e.target).attr("src","img/footer/bg38.gif");
    })
    $("#footer .arrow-top").hover(
      (e)=>{
        var $tar=$(e.target);
        $tar.attr("src","img/footer/bg35.gif")
      },
      (e)=>{
        var $tar=$(e.target);
        $tar.attr("src","img/footer/bg36.gif")
      }
    )
  })
})

//主轮播
$(()=>{
  var duration=4000;
  function task(){
    var show=document.querySelector(".banner .banner-show");
    show.className="";
    if(show.nextElementSibling!=null){
      show.nextElementSibling.className="banner-show";
    }else{
      show.parentNode.children[0].className="banner-show";
    }
  }
  var timer=setInterval(task,duration);
  var banner=document.querySelector(".banner");
  banner.onmouseover=function(){
    clearInterval(timer);
    this.timer=null;
  }
  banner.onmouseout=function(){
    timer=setInterval(task,duration);
  }
})

//楼层一副轮播
$(()=>{
  var LIWIDTH=378,timer=null,moved=0,duration=500,wait=3000;
	var $ul=$("ul.sub-img");
	$ul.css("width",LIWIDTH*4);
	var $ulInds=$("ul.sub-case");
	$ulInds.children().first().addClass("sub-active");
	function move(){
		$ul.animate({
			left:-LIWIDTH*moved
		},duration,function(){
			if(moved==3){
				moved=0;
				$ul.css("left",0)
			}
      $ulInds.children(`:eq(${moved})`).addClass("sub-active")
						 .siblings().removeClass("sub-active");
		})
	}
	timer=setInterval(()=>{
		moved++;
		move();
	},wait+duration)
	$ulInds.on("mouseenter","li",e=>{
		moved=$(e.target).index();
		//防止动画叠加
		clearInterval(timer);
		$ul.stop(true);
		move();
	});
	$(".sub-img").hover(
		()=>{clearInterval(timer)},
		()=>{
			timer=setInterval(()=>{
				moved++;
				move();
			},wait+duration)
		}
	);
})

//第二层showcase效果
$(()=>{
  $(".show-case").hover(function(){
      $(this).children('.showcase-shade').toggleClass('showcase-mouseover');
  })
})

//第三层 change-img
$(()=>{
  $('.change-img').on('mouseenter','li',(e)=>{
    var $smllSrc=$(e.target).attr('src');
    // console.log($smllSrc);
    $('.img-big').attr('src',$smllSrc);
  })
})

//第四层 service team
$(()=>{
  $('.team-li s>img').mouseenter((e)=>{
    $tar=$(e.target);
    $tar.attr("src","img/service-team/bg25.png")
  })
  $('.team-li s>img').mouseleave((e)=>{
    $tar=$(e.target);
    $tar.attr("src","img/service-team/bg26.png");
  })
})

//第五层 
$(()=>{
  
})


