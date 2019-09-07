$("#main").after(
'<div id="scroll-feature" class="horiz-scroll">' +
'<div class="scroller">' +
'<div class="left-scroll invisible">' +
'<p class="fa fa-angle-left"></p>' +
'</div>' +
'<div class="right-scroll">' +
'<p class="fa fa-angle-right"></p>' +
'</div>' +
'<div class="scroll-images scrollable-x">' +
 '<a href="https://cytu.be/r/southparkhd"><img src="//s14.postimg.cc/m3rs2y1rl/C47_MQA3.png" class="kek" /></a>' +
  '<a href="https://cytu.be/r/seinfeldHD"><img src="//s14.postimg.cc/yv5y9gqz5/w3_WPXIa.png" class="kek" /></a>' +
   '<a href="https://cytu.be/r/Simpsons"><img src="//i.postimg.cc/8CqBZg1z/simps.png" class="kek" /></a>' +
    '<a href="https://cytu.be/r/spooktober"><img src="//i.imgsafe.org/22/227b6b2ec7.png" class="kek" /></a>' +
    '<a href="https://cytu.be/r/spookyshows"><img src="//s14.postimg.cc/twifuuuv5/2_LB9834.png" class="kek" /></a>' +
    '<a href="https://cytu.be/r/spookyshows2"><img src="//i.postimg.cc/8c3GDCvK/SS2.png" class="kek" /></a>' +
    '<a href="https://cytu.be/r/billcartoon"><img src="//s14.postimg.cc/c6gr9whb5/Bdr_UNQZ.png" class="kek" /></a>' +
  '<a href="https://cytu.be/r/buffy"><img src="//s14.postimg.cc/6iagj0koh/Gx_CKt_EZ.png" class="kek" /></a>' +
  '<a href="https://cytu.be/r/BillTube"><img src="//s14.postimg.cc/6iagj52pt/Kzcwj_LR.png" class="kek" /></a>' +
   '<a href="https://cytu.be/r/animatedshows"><img src="//s14.postimg.cc/arf6l60sh/Wea_Qe7_R.png" class="kek" /></a>' +
'<a href="https://cytu.be/r/CopsTube"><img src="//s14.postimg.cc/rf6onst0x/v_DJV3_Of.png" class="kek" /></a>' +

'</div></div></div>');
// The HorizontalScroller Class accepts a jQuery object as its only argument
// The argument is the parent container of the scrolling element
// The element requires an ID to differentiate HorizontalScroller instances

function HorizontalScroller(elem) {
  this.scrollbox = elem; // The scrollers viewable area
  this.scrollImages = this.scrollbox.find("img");
  this.leftScrollControl = this.scrollbox.siblings(".left-scroll");
  this.rightScrollControl = this.scrollbox.siblings(".right-scroll");

  // Listener to change visibility of left and right controls
  // when at scroll extremes
  this.scrollbox.on("scroll", this.evaluateControlVisibility.bind(this));
};

HorizontalScroller.prototype = {
  
  scrollboxWidth: function() {
    return this.scrollbox.outerWidth(true);
  }, 

  currentScrollPosition: function() {
    return this.scrollbox.scrollLeft();
  },

  currentRightPosition: function() {
    return this.currentScrollPosition() + this.scrollboxWidth() - this.totalWidths();
  },

  // Maps the image width of each image in the scroller
  imageWidths: function() {
    return $.map(this.scrollImages, function(img) { 
      return $(img).outerWidth(true);
    })
  },

  // Returns the total width of all the images, that is,
  // the total of the visible and overflow content.
  totalWidths: function() {
    return this.imageWidths().reduce(function(a,b) { return a+b});
  },

  // Returns the average width of all the images
  avgWidth: function() {
    return this.totalWidths() / this.imageWidths().length;
  },

  // Determines the number of images in view area.
  // Number of images changes with responsive CSS
  imagesAcross: function() {
    return Math.round( this.scrollboxWidth() / this.avgWidth() );
  },

  // maps the offset x-distance of each image
  // from the left edge of the view area
  imageOffsets: function() {
    return $.map(this.scrollImages, function(img) { 
      return Math.round($(img).position().left);
    }); 
  },

  // Returns the index of the first number in the given array
  // greater than the given value, or, returns the index of
  // the first positive number in the array
  indexOfFirst: function(array, value) {
    value = value || 0;
    var firstIndex;
    var i = 0;
    while (firstIndex === undefined && array.length > i) {
      if (array[i] >= value)
        firstIndex = i; 
      i += 1;
    }
    return firstIndex; 
  },

  // Returns the index of first image that is completely in view
  // within the scrollbox
  firstVisibleImageIndex: function() {
    return this.indexOfFirst(this.imageOffsets());
  },

  // Returns the first image that is completely in view 
  // within the scrollbox
  firstVisibleImage: function() {
    return this.scrollImages[this.firstVisibleImageIndex()];
  },

  // Returns the index of the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImageIndex: function() {
    return this.firstVisibleImageIndex() + this.imagesAcross();
  },

  // Returns the last image with its left edge in view 
  // within the scrollbox
  lastVisibleImage: function() {
    return this.scrollImages[this.lastVisibleImageIndex()];
  },

  // Returns the difference between the scrollboxes left edge
  // and the left edge of the first fully visible image, that is,
  // how far in the first fully visible image is
  offset: function() {
    var offset = $(this.firstVisibleImage()).position().left;
    return Math.round(offset);
  },
  
  // Returns the combined scroll amount that the images have to travel
  // in order to land evenly within the scroll window. The resulting
  nextScrollPosition: function(direction) {
    var nextScrollPosition = this.currentScrollPosition() + this.offset();

    switch(direction) {
      case "left":
        nextScrollPosition -= this.scrollboxWidth();
        if (($(this.firstVisibleImage()).outerWidth(true) - this.offset()) < 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
      case "right":
        nextScrollPosition += this.scrollboxWidth();
        if (this.offset() > 0) {
          nextScrollPosition -= $(this.firstVisibleImage()).outerWidth(true);
        }
        break;
    }
    return nextScrollPosition;
  },

  // Triggers the animation
  animateScroll: function(direction) {
    resetFocusedImg();
    var scroller = this;
    setTimeout(function() {
      scroller.scrollbox.animate({
        scrollLeft: scroller.nextScrollPosition(direction)
      }, this.scrollboxWidth())
    }.bind(this), 100);
  },

  hideScrollControl: function(control) {
    control.addClass("invisible");
  },

  showScrollControl: function(control) {
    control.removeClass("invisible");
  },

  scrollControlVisibility: function(control) {
    return control.hasClass("invisible");
  },
  
  scrollAtZero: function() {
    return this.currentScrollPosition() == 0;
  },

  scrollAtMax: function() {
    return this.currentRightPosition() >= -1;
  },

  evaluateControlVisibility: function() {
    var left = this.leftScrollControl;
    var right = this.rightScrollControl;
    var leftIsInvisible = this.scrollControlVisibility(left);
    var rightIsInvisible = this.scrollControlVisibility(right);

    if (this.scrollAtZero()) this.hideScrollControl(left);
    if (this.scrollAtMax()) this.hideScrollControl(right);
    if (!this.scrollAtZero() && leftIsInvisible) this.showScrollControl(left);
    if (!this.scrollAtMax() && rightIsInvisible) this.showScrollControl(right);
  }
};

// End HorizontalScroller.prototype

var scrollers = {};

// Detects scrollers in the DOM
function detectScrollers() {
  return $.map($(".horiz-scroll"), function(scroller) {
    return $(scroller).attr("id");
  });
}

// Generates a new HorizontalScroller for each scroller in DOM
function mapScrollers(scrollerIds) {
  scrollerIds.forEach(function(elem, i , arr) {
    var scroller = "#" + elem + " .scroll-images";
    scrollers[elem] = new HorizontalScroller( $(scroller) );
  });
}

// Gets the scroll direction to pass to animation function
function getScrollDirection(button) {
  return (button.hasClass("left-scroll")) ? "left" : "right"
}

// Triggers the scroll animation for specific scroller
// in a specific direction
function triggerAnimation(button) {
  var scrollId = button.closest(".horiz-scroll").attr("id");
  var scrollDirection = getScrollDirection(button);
  scrollers[scrollId].animateScroll(scrollDirection);
}

// Scroll buttons listener
function listenForScroll() {
  $(".left-scroll, .right-scroll").on("click", function() {
    var button = $(this);
    triggerAnimation(button);
  });
}

function resetFocusedImg() {
  $(".focused").removeClass("focused");
}

// listener for click, slides up
var horizontalScrollImg = $(".horiz-scroll .scroll-images img");
horizontalScrollImg.on("click", function() {
  if (!$(this).hasClass("focused"))
    resetFocusedImg();
  $(this).toggleClass("focused");
});

// Registers scrollers and initiates listeners 
function scrollerInit() {
  var scrollerIds = detectScrollers();
  mapScrollers(scrollerIds);
  listenForScroll();
}



// Begins the fun
scrollerInit();
