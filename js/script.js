$(document).ready(() => {
  // title attribute in footer links
  let footerLinks = $(".footer-right a");
  Array.from(footerLinks).forEach((element) => {
    $(element).attr("title", $(element).text());
  });

  // toggle password visibility
  $(".showPassword i ").click((e) => {
    let form = $(e.target).attr("data-form");
    let signinpass = $("#signInpassWord");
    let signuppass = $("#signUppassWord");
    let confirmpass = $("#ConfirmpassWord");
    let signuppassI = $("#showsignupPassword i");
    let signinpassI = $("#showsignInPassword i");

    //  this condition is for signup form
    if (form === "signup") {
      if ($(signuppass).attr("type") == "text") {
        $(signuppass).attr("type", "password");
        $(confirmpass).attr("type", "password");
        $(signuppassI).addClass("fa-eye-slash");
        $(signuppassI).removeClass("fa-eye");
      } else if ($(signuppass).attr("type") == "password") {
        $(signuppass).attr("type", "text");
        $(confirmpass).attr("type", "text");

        $(signuppassI).removeClass("fa-eye-slash");
        $(signuppassI).addClass("fa-eye");
      }
    }
    // this condition is for signin form
    else if (form === "signin") {
      if ($(signinpass).attr("type") == "text") {
        $(signinpass).attr("type", "password");
        $(signinpassI).addClass("fa-eye-slash");
        $(signinpassI).removeClass("fa-eye");
      } else if ($(signinpass).attr("type") == "password") {
        $(signinpass).attr("type", "text");
        $(signinpassI).removeClass("fa-eye-slash");
        $(signinpassI).addClass("fa-eye");
      }
    }
  });

  //  validation for length of password
  $("#signUppassWord").keyup((e) => {
    let password = $("#signUppassWord").val();
    if (password.length < 8) {
      $(".submitBtn").prop("disabled", true);
      $(".PassWordLength").css("display", "block");
      $(".PassWordLength").removeClass("text-success").addClass("text-danger");
      $(".PassWordLength span").removeClass("bg-success").addClass("bg-danger");
      $(".PassWordLength span").text("x");
    } else {
      $(".submitBtn").prop("disabled", false);
      $(".PassWordLength").removeClass("text-danger").addClass("text-success");
      $(".PassWordLength span").removeClass("bg-danger").addClass("bg-success");
      $(".PassWordLength span").text("✓");
    }

    // if password input is empty then length alert will be hidcen
    if (password.length === 0) {
      $(".PassWordLength").css("display", "none");
    }
  });

  // validation for password matching
  $("#ConfirmpassWord").keyup((e) => {
    let password = $("#signUppassWord").val();
    let confirmVal = $(e.target).val();
    if (confirmVal !== password) {
      // changing input border-color
      $("#signUppassWord").addClass("border-danger");
      $("#ConfirmpassWord").addClass("border-danger");

      // disabled btn
      $(".submitBtn").prop("disabled", true);
      // validation == false ___ msg
      $(".ConfirmPassWord").css("display", "block");
      $(".ConfirmPassWord").removeClass("text-success").addClass("text-danger");
      $(".ConfirmPassWord span")
        .removeClass("bg-success")
        .addClass("bg-danger");
      $(".ConfirmPassWord span").text("x");
    } else {
      // changing input border-color
      $("#signUppassWord").removeClass("border-danger");
      $("#ConfirmpassWord").removeClass("border-danger");

      // enabled btn
      $(".submitBtn").prop("disabled", false);

      // validation == true ___ msg
      $(".ConfirmPassWord").removeClass("text-danger").addClass("text-success");
      $(".ConfirmPassWord span")
        .removeClass("bg-danger")
        .addClass("bg-success");
      $(".ConfirmPassWord span").text("✓");
    }
    // if confirm password input is empty then matching alert will be hidden
    if (confirmVal.length === 0) {
      $(".ConfirmPassWord").css("display", "none");
    }
  });

  $("#mobileNum").on("input", (e) => {
    let numlength = $("#mobileNum").val().length;
    if (numlength < 10) {
      // disabled btn
      $(".submitBtn").prop("disabled", true);
    } else {
      // enabled btn
      $(".submitBtn").prop("disabled", false);
    }
  });
  // window scroll btn
  $(".scroll-btn").click(function () {
    $(document).scrollTop(0);
  });

  //  animations on scroll
  $(window).on("scroll", () => {
    // scroll property
    let scrolled = $(window).scrollTop();

    // hiding header-top on scroll of main-nav's height
    let mainNav_height = $(".main-nav").height();
    if (scrolled >= mainNav_height) {
      $(".header-top").css("height", "0px ");
      $("nav").addClass("shadow");
    } else {
      $(".header-top").css("height", "60px");
      $("nav").removeClass("shadow");
    }

    // adding background color according to window scrolled
    let alpha = scrolled / 1000;
    if (scrolled <= 1000) {
      $(".main-nav").css({
        background: `rgba(0,0,0,${alpha})`,
        color: "white",
      });
      $(".breadcrumb-nav").css("background", `rgba(0,0,0,${alpha})`);
      $(".navbar-brand").css({
        filter: `invert(${alpha})`,
      });
      $('.navbar-toggler').css({
        filter: `invert(${alpha})`,
      });
    } else {
      $(".main-nav").css({ background: "rgba(0,0,0,0.999)" });
      $(".breadcrumb-nav").css({ background: "rgba(0,0,0,0.999)" });
    }

    // changing navbar text color on scroll
    if (scrolled <= 500) {
      $(".navbar-light .nav-link").attr({ style: "color:#000 !important" });
      $(".breadcrumb-nav li").attr({ style: "color:#000 !important" });
    } else {
      $(".navbar-light .nav-link").attr({ style: "color:#fff !important" });
      $(".breadcrumb-nav li").attr({ style: "color:#fff !important" });
    }

    // making navbar sticky and fixed when 30 scrolled in different devices
    if (scrolled > 30) {
      let winWidth = $(window).width();
      if (winWidth < 1024) {
        $("nav").css({
          position: "fixed",
          top: "0",
        });
      } else {
        $("nav").css({
          position: "sticky",
          top: "0",
        });
      }
    } else {
      $("nav").css({
        position: "relative",
        width: "100%",
        top: "0",
      });
    }

    // this condition will show scroll btn after 1000px scrolled
    if (scrolled >= 1000) {
      $(".scroll-btn").css("display", "grid");
    } else if (scrolled < 999) {
      $(".scroll-btn").css("display", "none");
    }
  });
  // flip card sizes on window resize
  $(window).resize(() => {
    for (let i = 0; i < $(".card .card-back").length; i++) {
      let backCard = $(".card-back")[i];
      let frontCard = backCard.nextElementSibling;
      let style = window.getComputedStyle(frontCard);
      $(backCard).css({
        height: style.height,
        width: style.width,
      });
    }
  });

  // flip card sizes on window load
  for (let i = 0; i < $(".card .card-back").length; i++) {
    let backCard = $(".card-back")[i];
    let frontCard = backCard.nextElementSibling;
    let style = window.getComputedStyle(frontCard);
    $(backCard).css({
      height: style.height,
      width: style.width,
    });
  }

  // custom accordion
  $(".accorheader").click(function () {
    // declaring clicked Accordion item
    let Curheader = $(this)[0];
    let CurContent = $(this).next()[0];
    let CurIcon = $(this).children()[0];
    // if clicked item is open then close that item
    if ($(this).hasClass("accorActive")) {
      $(CurContent).css("height", "0px");
      $(Curheader).removeClass("accorActive");
      $(CurIcon).css("transform", "rotate(180deg)");
    } else {
      for (let i = 0; i < $(".accorItem").length; i++) {
        let content = $(".accorcontent")[i];
        let header = $(".accorheader")[i];
        let icon = $(".accorheader")[i].children[0];
        $(header).removeClass("accorActive");
        $(content).css("height", "0px");
        $(icon).css("transform", "rotate(180deg)");
      }

      // open clicked accordion item
      $(CurContent).css("height", CurContent.scrollHeight + "px");
      $(Curheader).addClass("accorActive");
      $(CurIcon).css("transform", "rotate(0deg)");
    }
  });

  // custom tabs
  $(".tabLink").click(function () {
    // declaring clicked tab item and content
    let CurTab = $(this)[0];
    let CurTabContent = $($(this).attr("data-bs-target"));
    for (let i = 0; i < $(".tabLink").length; i++) {
      let tabLink = $(".tabLink")[i];
      let tabContent = $(".tabContent")[i];
      $(tabContent).css("display", "none");
      $(tabLink).removeClass("tabactive");
    }

    // Active clicked tab and its content
    $(CurTabContent).css("display", "block");
    $(CurTab).addClass("tabactive");
  });
  $(".simpleflexslider").flexslider({
    animation: "slide",
    animationLoop: true,
    pauseOnHover: true,
    itemWidth: 210,
    itemMargin: 20,
    minItems: 2,
    maxItems: 3,
    Keyboard: true,
    touch: true,
    directionNav: false,
    slideshowSpeed: 5000,
    reverse: true,
  });

  // mainflexslider
  $("#mainflexslider").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#mainflexthumbnail",
  });

  // mainflexthumbnail
  $("#mainflexthumbnail").flexslider({
    asNavFor: "#mainflexslider",
    animation: "slide",
   controlNav: false,
   animationLoop: false,
   slideshow: false,
   itemWidth: 200,
   direction: "vertical",
    });
});
