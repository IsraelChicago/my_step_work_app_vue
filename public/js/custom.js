(function($) {

    "use strict";

    // REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});

    // COUNTER
	function count($this){
		var current = parseInt($this.html(), 10);
		$this.html(++current);
		if(current !== $this.data('count')){
			setTimeout(function(){count($this)}, 50);
		}
	}        
	$(".badges-counter").each(function() {
	  $(this).data('count', parseInt($(this).html(), 10));
	  $(this).html('0');
	  count($(this));
	});

	// Tabs
	$(".home-plan-info-tabs a, .tabs-1 a").click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});

	// ACCORDION
	var $active = $(".accordion-1 .collapse.show, .accordion-2 .collapse.show, .accordion-3 .collapse.show").prev().addClass("active");

	$active.find("a").append("<span class=\"fa fa-angle-up float-right\"></span>");

	$(".accordion-1 .card-heading, .accordion-2 .card-heading, .accordion-3 .card-heading").not($active).find('a').prepend("<span class=\"fa fa-angle-down float-right\"></span>");

	$(".accordion-1, .accordion-2, .accordion-3").on("shown.bs.collapse", function (e) {	
		$(".accordion-1 .card-heading.active, .accordion-2 .card-heading.active, .accordion-3 .card-heading.active")
			.removeClass("active")
			.find(".fa")
			.toggleClass("fa-angle-down fa-angle-up");				
		$(e.target)
			.prev()
			.addClass("active")
			.find(".fa")
			.toggleClass("fa-angle-down fa-angle-up");		
	});
	
	$(".accordion-1, .accordion-2, .accordion-3").on("hidden.bs.collapse", function (e) {
		$(e.target)
			.prev()
			.removeClass("active")
			.find(".fa")
			.removeClass("fa-angle-up")
			.addClass("fa-angle-down");
	});

	//MAGNIFIC POPUP
	$(".home-gallery-item").magnificPopup({
		delegate: 'a.zoom', 
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// Team  Carousel
	$("#home-news-carousel").owlCarousel({
		autoPlay: true, //Set AutoPlay to 3 seconds
		items : 3,
		stopOnHover : true,
		navigation : true, // Show next and prev buttons
		pagination : false,
		navigationText : ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"]
	});


	// Price Slider
	var $element = $('input[type="range"]');
    var $handle;

    $element.rangeslider({
		polyfill: false, 
		disabledClass: 'rangeslider--disabled', 
        onInit: function() {
            $handle = $('.rangeslider__handle', this.$range);
            updateHandle($handle[0], this.value);
            $("#amount-label-1, #amount-label-2, #amount-label-3, #amount-label-4").html('<span class="pricing-dollar">$</span>' + this.value);
        }
    }).on('input', function() {
        updateHandle($handle[0], this.value);
        $("#amount-label-1, #amount-label-2, #amount-label-3, #amount-label-4").html('<span class="pricing-dollar">$</span>' + this.value);
    });

    function updateHandle(el, val) {
        //el.textContent = val;
    }

    $('input[type="range"]').rangeslider();

	// Select Picker
	$(".selectpicker").selectpicker({
		style: 'btn-default flat'
	});

	//AJAX CONTACT FORM
	$(".contact-form").submit(function() {
		var rd = this;
		var url = "sendemail.php"; // the script where you handle the form input.
		$.ajax({
		type: "POST",
		url: url,
		data: $(".contact-form").serialize(), // serializes the form's elements.
		success: function(data)
		{
		//alert("Mail sent!"); // show response from the php script.
		$(rd).prev().text(data.message).fadeIn().delay(3000).fadeOut();
		}
		});
		return false; // avoid to execute the actual submit of the form.
	});

	// GOOGLE MAP
	$(".map").height(400);
	function initialize($) {
		var mapOptions = {	
			zoom: 15,
			center: new google.maps.LatLng(17.4474, 78.3762),
			disableDefaultUI: true
		};
		var map = new google.maps.Map(document.querySelector('.map'), mapOptions);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	
})(window.jQuery);