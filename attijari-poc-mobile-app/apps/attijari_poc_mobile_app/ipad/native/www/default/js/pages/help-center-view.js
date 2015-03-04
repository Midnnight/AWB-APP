
/* JavaScript content from js/pages/help-center-view.js in folder common */
$('.counter').text(counter).show();
$(".go-to-faq").on ("click", function () {
		loadPage ("faqs-view.html");
	});
	
	$(".go-to-send-problem").on ("click", function () {
		loadPage ("submit-problem-view.html");
	});