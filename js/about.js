$(document).ready(() => {
  let playimg = $(".inner-content .img img")[0];
  let style = window.getComputedStyle(playimg);
  $(".inner-content .play").css({
    height: style.height,
    width: style.width,
    transform: "translateY(-" + style.height + ")",
  });

  // iframe section 
  $(window).on("resize", () => {
    let playimg = $(".inner-content .img img")[0];
    let style = window.getComputedStyle(playimg);
    $(".inner-content .play").css({
      height: style.height,
      width: style.width,
      transform: "translateY(-" + style.height + ")",
    });
  });
  $("#iframeopen").click(() => {
    $(".iframemodal").css("display", "grid");
  });
  $(".iframeclose").click(() => {
    $(".iframemodal").css("display", "none");
  });

  $(".subscribedclose").click(() => {
    $(".newssubscribed").css("display", "none");
  });


  const getSubscribed = () => {
    let newsMail = $(".newsletter-form input").val();
    if (newsMail !== "") {
      $(".newssubscribed").css("display", "block");
      $(".news-email").text(newsMail);
    }
    setInterval(() => {
      $(".newssubscribed").css("display", "none");
    }, 8000);
  };
  $(".newsletter-form button").click(getSubscribed);

  // subscribe newsletter with enter 
  $(window).keypress((e) => {
    let newsMail = $(".newsletter-form input");
    if ($(newsMail).is(":focus")) {
      if (e.key === "Enter") {
        getSubscribed();
      }
    }
  });

  // mouse events on progress bar
  $(".progress-inner .progress").mouseenter(function () {
    let progress = $(this)[0];
    let progBar = progress.children[0];
    $(progress).css("border", "1px solid black");
    $(progBar).removeClass("progress-bar-striped");
  });
  $(".progress-inner .progress").mouseleave(function () {
    let progress = $(this)[0];
    let progBar = progress.children[0];
    $(progress).css("border", "1px solid transparent");

    $(progBar).addClass("progress-bar-striped");
  });



  // show hide  paragraph
  $('.showhidebtn').click(function(){
    let para = $(this).next()
    $(para).toggle(1000)
    $(this).toggleClass('parahide')
    if ($(this).hasClass('parahide')) {
      $(this).text('Show paragraph')
      $('.showhide').css('box-shadow', 'none')
    }else{
      
      $(this).text('Hide paragraph')
      $('.showhide').css('box-shadow', 'inset 0 0 15px rgb(182, 182, 182)')
    }
  })
  // toggle class
  $('.addclasspara').click(function(){
    $('.toggleclasspara').addClass('togglepara')
  })
  $('.remclasspara').click(function(){
    $('.toggleclasspara').removeClass('togglepara')
  })  
  
  // calculation 
  $('.simplecalc').on('input',function(){
  let num1 = Number($('#num1').val())
  let num2 = Number($('#num2').val())

  $('#addition').val(parseFloat(num1 + num2))
  $('#substraction').val(parseFloat(num1 - num2))
  $('#multiplication').val(parseFloat(num1 * num2))
  $('#division').val(parseFloat(num1 / num2))
  })
  // oprn calc 
  $('.openCalc').click(()=>{
    $('.calc').css({
      left:'0'
    })
  })
  // close calc 
  $('.closeCalc').click(function(){
    $('.calc').css({
      left:'100%'
    })
  })
  //copy output
  $('.outputs input').dblclick(function(){
    navigator.clipboard.writeText($(this).val())

  })
});
