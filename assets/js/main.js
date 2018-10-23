$(document).ready(function(){
	// this functions works for full height of any devices
	//====================================================
	function fullSectionHeight(){
		var sectionHeight = 0;
		sectionHeight = window.innerHeight;
		$('.section-area').height(sectionHeight);
	}
	function fullWidth(){
		var sectionWidth, viewportWidth, withoutScrollBar, scrollBarWidth = 0;
		sectionWidth = window.innerWidth;
		viewportWidth = document.body.clientWidth;
		scrollBarWidth = sectionWidth - viewportWidth;
		withoutScrollBar = sectionWidth - scrollBarWidth;
		$('.section-area').width(withoutScrollBar);
	}
	// init functions for height and width..
	//=======================================
	fullSectionHeight();
	fullWidth();
	//resize section window and height
	//================================
	$(window).resize(function(){
		fullSectionHeight();
		fullWidth();
	});
});