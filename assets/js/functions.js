$(function() {
	smoothScroll(500);
    workBelt();
    workLoad();
    $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '45px' })
    $(".email").fitText(1.2, { minFontSize: '15px', maxFontSize: '50px' })
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {

    $('.grid').click(function() {
        $('.work-belt').css('transform','translate3d(-50%, 0, 0)');
        $('.work-container').show();
    });
    
    $('.exit-button').click(function() {
        $('.work-belt').css('transform','translate3d(0%, 0, 0)');
        $('.work-container').delay(600).hide(0);
    });

}

function workLoad () {
    
    $.ajaxSetup({ cache: false });
    
    $('.grid').click(function() {
        
        var $this = $(this),
            newTitle = $this.find('h2').text(),
            newfolder = $this.data('folder')
            spinner = '<div class="loader">Loading...</div>',
            newHTML = '/home/work/'+ newfolder +'.html';
        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle)
        
    });

} 


// Немного кода для резинового текста

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );