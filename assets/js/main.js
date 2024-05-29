'use strict';

(function ($) {
	/**
   * Countdown
   */
   	const params = new URLSearchParams(window.location.search);
	var contentLock = params.get('contentLock');
	var updateLive = params.get('updateLive');
	var clientOwner = params.get('client');
	var serverOwner = params.get('server');
	$('.countdown__module').each(function () {


		var self = $(this),
			    _date = self.attr('contentLock') == "true" ? contentLock : updateLive,
			    _strf = self.html();
		self.countdown(_date, function (event) {
			self.html(event.strftime(_strf));
			if (self.attr('contentLock') == "true")
			{
				$("#contentLock").text(contentLock);
				$("#contentLockTitle").text("Content Lock:");
			}
			else{
				$("#updateLive").text(updateLive);
				$("#updateLiveTitle").text("Update Live:");
			}
		}).removeClass("hide");


	});

	$('.client_owner').each(function () {
		if (clientOwner !== undefined && clientOwner !== "" && clientOwner !== null) {
			$("#owner1").text(clientOwner);
			$("#owner1Title").text("Client owner: ");
			$(this).removeClass("hide");
		}
		else {
			$("#owner1").text("");
			$("#owner1Title").text("");
			$(this).addClass("hide");
		}
	});

	$('.server_owner').each(function () {
		if (serverOwner !== undefined && serverOwner !== "" && serverOwner !== null) {
			$("#owner2").text(serverOwner);
			$("#owner2Title").text("Server owner: ");
			$(this).removeClass("hide");
		}
		else {
			$("#owner2").text("");
			$("#owner2Title").text("");
			$(this).addClass("hide");
		}
	});
	
})(jQuery);