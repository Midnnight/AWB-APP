
/* JavaScript content from js/pages/expert-list-view.js in folder common */
var listItemId = "listItemId-0";
var pic = "";
var status = "";
var msg = "";
var currentAllchat = 0;
$('.counter').text(counter).show();
$('.unreadMsg').text(unreadMsg).show();

$("#list-chat").addClass($.mobile.activeBtnClass);
fillList(counter, chatInfo, false, false);

$("#list-chat").on("click", function() {
	fillList(counter, chatInfo, false, false);
});

function fillList(count, list, append, all) {
	var content = "";
	$(".msg-list").html("");

	for (i = 0; i < count; i++) {

		pic = list[i].pic;
		status = list[i].status;
		msg = list[i].name + '<br/>' + list[i].job;

		content += '<li>';
		content += '<a class="chat-item-a" id=' + listItemId
		+ ' data-transition="slide">';
		content += '<div class="ui-li-thumb"' + pic + '></div>';
		content += '<div class="ui-li-text">';
		content += '<h3 class="state">' + status + '</h3>';
		content += '<p class="chat-core">' + msg + '</p>';
		content += '</div>';
		content += '</a>';
		content += '</li>';

		if (all) {
			currentAllchat++;
			listItemId = "listItemId-" + currentAllchat;
		} else {
			listItemId = "listItemId-" + (i + 1);
		}

	}

	if (all) {
		$(".load-more").css("display", "block");
	} else {
		$(".load-more").css("display", "none");
	}

	if (!append) {
		$(".msg-list").html(content);
	} else {
		$(".msg-list").append(content);
	}
	if ($(".msg-list").hasClass("ui-listview")) {
		$(".msg-list").listview("refresh");
	} else {
		$(".msg-list").listview();
	}

	for (i = 0; i < count; i++) {

		var id = "#listItemId-" + i;
		if ($(id + ' .ui-li-text .state').text() == "En ligne") {

			$(id + ' .ui-li-text .state').css({
				'color' : 'green'
			});
		} else {
			$(id + ' .ui-li-text .state').css({
				'color' : 'red'
			});
		}
	}

	$(".msg-list a.chat-item-a").on("click", function(event) {
		exepertId = $(this).attr("id");
		exepertId = exepertId.split("-");
		exepertId = parseInt(exepertId[1]);
		loadPage("ask-expert-view.html");
	});
}

$(".load-more").on("click", function() {
	fillList(10, chatInfo, true, true);
});