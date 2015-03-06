var customer_index = -1;
var application_index = 0;
var connected = 0;
var countZoom = 0;
var zoom = 0;

function wlCommonInit () {
	// Common initialization code goes here
	initstore();
	if (connected == 0) {
		loadPage ("pages/login-view.html");
	} else {
		loadPage ("pages/home-view.html");
	}
}

function loadPage (url) {
	$(":mobile-pagecontainer").pagecontainer ("change", url, { transition: "slide" });
} 

$(document).on ("pageshow", function () {
	$(".logout").on ("click", function () {
		loadPage ("login-view.html");
		connected = 0;
	});

	$('div *, p *, span *, li *, a *').each(function () {
		var el = $(this);
		var size = parseInt(el.css('font-size'));
		el.data('font-size', size);
	});

	$("#changeSizeAction").on ("click", function () {

		countZoom ++;

		if (countZoom % 3 == 0) {
			zoom = 0;
			changeSize ();
		} else if (countZoom % 3 == 1) {
			zoom = 1;
			changeSize ();
		} else if (countZoom % 3 == 2) {
			zoom = 3;
			changeSize ();
		}

	});
});

function getConnectionStatus () {
	return connected;
}

function setConnectionStatus (status) {
	connected = status;
}

function changeSize () {
	$('div *, p *, span *, li *, a *').each(function () {
		var el = $(this);
		var size = el.data('font-size');
		el.css('font-size', Math.max (size + zoom, 0) + 'px');
	});
}


function initstore(){

	//WL.JSONStore.destroyAll();
	return WL.JSONStore.init(collections)

	.then(function () { 
		if(initstore==0){
			WL.JSONStore.get('store').add(receiveNotification);
			WL.JSONStore.get('store').add(soundNotification);
			WL.JSONStore.get('store').add(lightNotification);
			WL.JSONStore.get('langue_store').add(langue);
			initstore=1;
		}
		else {
			WL.JSONStore.get('store').replace(receiveNotification);
			WL.JSONStore.get('store').replace(soundNotification);
			WL.JSONStore.get('store').replace(lightNotification);
			WL.JSONStore.get('langue_store').replace(langue);
		}
	}) 
	.fail(function(errorObject) {
		//
	});
}