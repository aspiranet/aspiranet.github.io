$(document).ready(function(){
	$('#programsNavItem').mouseenter(function(e) {
		$('#programsNav').css('display', 'block');
		$('.nav-programs a').css({
			'background-color': '#F8F8F7',
			'border-top': '5px solid rgb(248, 248, 247)'
		});
	});
	$('#programsNav').mouseleave(function(e) {
		$('#programsNav').css('display', 'none');
		$('.nav-programs a').css({
			'background-color': 'white',
			'border-top': '5px solid white'
		});
	});

	// searching for orphans TODO: make sure it doesn't affect html tags
   // $('p, h3, h4').each(function(){
   //      var string = $(this).html();
   //      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
   //      $(this).html(string);
   //  });
});
