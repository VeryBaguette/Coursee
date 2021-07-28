$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close");
  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  new WOW().init();
  $(".modal__form").validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
      },
      userEmail: {
        required: true,
        email: true,
      },
      userPhone: "required",
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть не короче двух букв",
      },
      userEmail: {
        required: "Адрес электронной почты обязателен",
        email: "Введите адрес электронной почты в формате: name@domain.com",
      },
      userPhone: "Номер телефона обязателен",
    },
  });
  $("[type=tel]").mask("+7(000) 000-00-00", {
    placeholder: "+7(___) ___-__-__",
  });
  var player;
  $(".video__play").on("click", function fff() {
    player = new YT.Player("player", {
      height: "465",
      width: "100%",
      videoId: "dQw4w9WgXcQ",
      events: {
        onReady: videoPlay,
      },
    });
  });
  function videoPlay(event) {
    event.target.playVideo();
  }
});
