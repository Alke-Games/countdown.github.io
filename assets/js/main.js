'use strict';

(function ($) {
	/**
   * Countdown
   */
   	const params = new URLSearchParams(window.location.search);
	var contentLock = params.get('contentLock');
	var updateLive = params.get('updateLive');
	$('.countdown__module').each(function () {


		var self = $(this),
			    _date = self.attr('contentLock') == "true" ? contentLock : updateLive,
			    _strf = self.html();
		self.countdown(_date, function (event) {
			self.html(event.strftime(_strf));
			if (self.attr('contentLock') == "true")
		{
		$("#contentLock").text("Content Lock " + contentLock);

		}
		else{
		
		$("#updateLive").text("Update Live " + updateLive);		
		}
		}).removeClass("hide");


	});

	
})(jQuery);