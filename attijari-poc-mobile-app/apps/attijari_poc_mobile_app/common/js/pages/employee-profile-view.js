$(document).on ("pageshow", function () {
	
	
	
});

$("#profile-thumb").on ("change", gotPic);

function gotPic(event) {
	if (event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
		document.getElementById("profil-image").style.backgroundImage = "url('" + (URL.createObjectURL(event.target.files[0])) + "')";
	}
}