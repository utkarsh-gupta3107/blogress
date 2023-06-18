$('#carouselContainer').scroll(function() {
    var container = $(this);
    var scrollTop = container.scrollTop();
    var containerHeight = container.height();
    var carouselHeight = $('#carousel').height();
  
    // Check if the user has reached the bottom of the container
    if (scrollTop + containerHeight >= carouselHeight) {
      // Move the first item to the end of the carousel
      $('#carousel li:first').appendTo('#carousel');
      container.scrollTop(scrollTop - containerHeight);
    }
  });
  