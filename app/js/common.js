$(document).ready(function() {

    $('.works').isotope({
        itemSelector: '.work'
    });

    $('#filters .button').click(function(){

        $('#filters .button').removeClass('current');
        $(this).addClass('current');
        var selector = $(this).attr('data-filter');

        $('.works').isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'easeOutQuart',
                queue: false
            }
        });
        return false;

    });

});

$(document).ready(function() {
    $('#filters a').click(function() {
        $('#filters a').removeClass('active')
        $(this).addClass('active')
    });
});
//owl carousel
$(document).ready(function() {
    $("#owl-carousel").owlCarousel({

        navigation : false,
        pagination : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
});




//Custom JS for button end menu
(function() {

    function SVGDDMenu( el, options ) {
        this.el = el;
        this.init();
    }

    SVGDDMenu.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );

        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
            reset : this.pathEl.attr( 'd' ),
            open : this.shapeEl.getAttribute( 'data-morph-open' )
        };

        this.isOpen = false;

        this.initEvents();
    };

    SVGDDMenu.prototype.initEvents = function() {
        this.el.addEventListener( 'click', this.toggle.bind(this) );

        // For Demo purposes only
        [].slice.call( this.el.querySelectorAll('a') ).forEach( function(el) {
            el.onclick = function() { return true; }
        } );
    };

    SVGDDMenu.prototype.toggle = function() {
        var self = this;

        if( this.isOpen ) {
            classie.remove( self.el, 'menu--open' );
        }
        else {
            classie.add( self.el, 'menu--open' );
        }

        this.pathEl.stop().animate( { 'path' : this.paths.open }, 320, mina.easeinout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.reset }, 1000, mina.elastic );
        } );

        this.isOpen = !this.isOpen;
    };

    new SVGDDMenu( document.getElementById( 'menu' ) );

})();








