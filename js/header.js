$(()=>{
  $(window).scroll(()=>{
    var scrollTop=$(window).scrollTop();
    // console.log(scrollTop);
    if(scrollTop>=20+632-75){
      $(".header-nav").addClass("fixed-nav");
    }else{
      $(".header-nav").removeClass("fixed-nav");
    }
  })
})