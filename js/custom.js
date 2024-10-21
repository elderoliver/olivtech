//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

function setCopyright() {
  const currentYear = new Date().toISOString().slice(0, 4);
  const strText = `Copyright \u00A9 ${currentYear} Olivtech Systems`;
  const copyrightEL = document.getElementById("copyright-text");
  copyrightEL.textContent = strText;
}

setCopyright();
