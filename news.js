// $(function () {
//   var tickerLength = $(".news-list a").length;
//   var tickerHeight = $(".news-list a").outerHeight();
//   $(".news-list a:last-child").prependTo(".news-list");
//   $(".news-list").css("marginTop", -tickerHeight);
//   function moveTop() {
//     $(".news-list").animate(
//       {
//         top: -tickerHeight
//       },
//       600,
//       function () {
//         $(".news-list a:first-child").appendTo(".news-list");
//         $(".news-list").css("top", "");
//       }
//     );
//   }
//   setInterval(function () {
//     moveTop();
//   }, 3000);
// });


$(function () {
  var tickerHeight = $(".news-list a").outerHeight();
  var tickerLength = $(".news-list a").length;
  var scrollTopValue = 0;

  function moveTop() {
    scrollTopValue += tickerHeight;
    $(".news-list").animate(
      {
        scrollTop: scrollTopValue
      },
      600,
      function () {
        if (scrollTopValue >= tickerHeight * tickerLength) {
          scrollTopValue = 0;
          $(".news-list").scrollTop(scrollTopValue);
        }
      }
    );
  }

  setInterval(function () {
    moveTop();
  }, 3000);
});
