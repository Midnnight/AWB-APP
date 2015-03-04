$('.counter').text(counter).show();
$("#languagePopup").popup ({ tolerance: "0px, 12px, 32px, 12px" });

$("#language-flip").slider ({
	start: function (event, ui) {
		$("#languagePopup").popup ("open");
	}
});

$(".language-actions .ui-block-a a").on ("click", function () {
	$("#languagePopup").popup ("close");
});

$(".language-actions .ui-block-b a").on ("click", function () {
	$("#languagePopup").popup ("close");
});

var receiveNotification =$("#recive").attr('checked');
var soundNotification =$("#sound").attr('checked');
var lightNotification =$("#light").attr('checked');