
/* JavaScript content from js/pages/settings-view.js in folder common */
$('.counter').text(counter).show();
$("#languagePopup").popup({
	tolerance : "0px, 12px, 32px, 12px"
});

$("#language-flip").slider({
	start : function(event, ui) {
		$("#languagePopup").popup("open");
	}
});

$(".language-actions .ui-block-a a").on("click", function() {
	$("#languagePopup").popup("close");
});

$(".language-actions .ui-block-b a").on("click", function() {
	$("#languagePopup").popup("close");
});

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
