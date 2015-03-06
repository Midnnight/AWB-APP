$('.counter').text(counter).show();
var path = 0;
$("#languagePopup").popup({
	tolerance : "0px, 12px, 32px, 12px"
});

$("#language-flip").slider({
	start : function(event, ui) {
		$("#languagePopup").popup("open");
	}
});

$(".language-actions .ui-block-a a").on("click", function() {
	path =0;
	$("#languagePopup").popup("close");
	alert($("#language-flip").val());
});

$(".language-actions .ui-block-b a").on("click", function() {
	path =1;
	$("#languagePopup").popup("close");
});

$( "#languagePopup" ).bind({
	popupafterclose: function(event, ui) {
		if(path == 1){
			loadPage ("home-view.html");
		}
	}
})

$('#receive').attr('checked',receiveNotification[0].json.value);
$('#sound').attr('checked', soundNotification[0].json.value);
$('#light').attr('checked', lightNotification[0].json.value);

$("#receive").on("click", function() {

	(function(WL, jQuery, lodash) {

		'use strict';

		// Dependencies
		var $ = jQuery, _ = lodash;

		receiveNotification[0].json.value = $("#receive").is(':checked');

	}(WL, WLJQ, WL_));
});

$("#light").on("click", function() {

	(function(WL, jQuery, lodash) {

		'use strict';

		// Dependencies
		var $ = jQuery, _ = lodash;

		lightNotification[0].json.value = $("#light").is(':checked');

	}(WL, WLJQ, WL_));
});

$("#sound").on("click", function() {

	(function(WL, jQuery, lodash) {

		'use strict';

		// Dependencies
		var $ = jQuery, _ = lodash;

		soundNotification[0].json.value = $("#sound").is(':checked');

	}(WL, WLJQ, WL_));
});
