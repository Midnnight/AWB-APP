$('.counter').text(counter).show();
$(".cancel").on("click", function () {
	$("div.ui-input-search.ui-shadow-inset.ui-input-has-clear.ui-body-inherit.ui-corner-all input").val ("");
	$("a.ui-input-clear.ui-btn.ui-icon-delete.ui-btn-icon-notext.ui-corner-all").addClass("ui-input-clear-hidden");
});

$('#list-results').children('li').on('click', function () {
	application_index =$(this).attr("id");
	property = applications[application_index].customer.property;
	customer = applications[application_index].customer;
});

$('#list-results').children('li').on('swipeleft', function () {
	var client =$(this);
	client.animate({ left:'-20%' }, 500);
	setTimeout(function(){
		client.animate({ left:'0px' }, 500);
	},3000);
});

$('#list-results').children('li').on('swiperight', function () {
	var client =$(this);
	client.animate({ left:'0px' }, 500);
	
});