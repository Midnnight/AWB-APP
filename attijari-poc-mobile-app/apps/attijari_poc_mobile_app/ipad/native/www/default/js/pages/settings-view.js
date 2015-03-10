
/* JavaScript content from js/pages/settings-view.js in folder common */
$('.counter').text(counter).show();

var path = 0;

$('#receive').attr('checked', receiveNotification[0].json.value);
$('#sound').attr('checked', soundNotification[0].json.value);
$('#light').attr('checked', lightNotification[0].json.value);
$("#language-flip").val(langue[0].json.value);

$("#languagePopup").popup({
	tolerance : "0px, 12px, 32px, 12px"
});

$("#language-flip").slider({
	start : function(event, ui) {
		$("#languagePopup").popup("open");
	}
});

$(".language-actions .ui-block-a a").on("click", function() {
	path = 0;
	$("#languagePopup").popup("close");
});

$(".language-actions .ui-block-b a").on("click", function() {
	path = 1;
	$("#languagePopup").popup("close");
});

$("#languagePopup").bind({
	popupafterclose : function(event, ui) {
		if (path == 1) {
			$("#language-flip").val().slider("refresh");
		} else {
			var tmp = $("#language-flip").val();
			if (tmp == 'french') {
				$("#language-flip").val('arabic').slider("refresh");
			} else {
				$("#language-flip").val('french').slider("refresh");
			}
		}
	}
})

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

$("#languagePopup").bind({
	popupafteropen : function(event, ui) {

		(function(WL, jQuery, lodash) {

			'use strict';

			// Dependencies
			var $ = jQuery, _ = lodash;
			langue[0].json.value = $("#language-flip").val();
		}(WL, WLJQ, WL_));
	}
});
