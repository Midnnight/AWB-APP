

$("#takePictureField").on ("change", gotPic);
	
	loadProfileImage(customer.id);

	$.fn.serializeObject = function() {
		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name] !== undefined) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
	
	populateCountries ('#countries');
	//resetForm ();
	
	$("#chooseFile").on ("click", function(e) {
		e.preventDefault();
		$("#imageInput").trigger("click");
	});

	$("#imageInput").on ("change", function() {
		var file = $("#imageInput")[0].files[0];
		$("#preview").empty();
		displayAsImage3(file, "preview");

		$info = $("#info");
		$info.empty();
		if (file && file.name) {
			$info.append("<li>name:<span>" + file.name + "</span></li>");
		}
		if (file && file.type) {
			$info.append("<li>type:<span>" + file.type + "</span></li>");
		}
		if (file && file.size) {
			$info.append("<li>size:<span>" + file.size + " bytes</span></li>");
		}
		$info.listview("refresh");
	});

function gotPic(event) {
	if (event.target.files.length == 1 && event.target.files[0].type.indexOf("image/") == 0) {
		document.getElementById("customer-image").style.backgroundImage = "url('" + (URL.createObjectURL(event.target.files[0])) + "')";
	}
}

function loadProfileImage(index) {
	switch (index) {
	case 0:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/ayoub.jpg')";
		break;
	case 1:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/mehdi.jpg')";
		break;
	case 2:
		document.getElementById("customer-image").style.backgroundImage = "url('../images/souhail.jpg')";
		break;
	default:
		break;
	}
}

var prop_index = -1;

function openFileOption(file) {
	document.getElementById(file).click();
}

// reset form values from json object

function resetForm() {
	var data;
	data = customer;
	$.each(data, function(name, val) {
		var $el = $('[name="' + name + '"]'), type = $el.attr('type');

		switch (type) {
		case 'checkbox':
			$el.attr('checked', 'checked');
			break;
		case 'radio':
			$el.filter('[value="' + val + '"]').attr('checked', 'checked');
			break;
		default:
			$el.val(val);
		}
	});
}

function displayAsImage3(file, containerid) {
	if (typeof FileReader !== "undefined") {

		var container = document.getElementById(containerid), img = document
				.createElement("img"), reader;
		container.appendChild(img);
		reader = new FileReader();
		reader.onload = (function(theImg) {
			return function(evt) {
				theImg.src = evt.target.result;
			};
		}(img));
		reader.readAsDataURL(file);
	}
}


//    fonctions de validation des champs 

$("#initialisation").on("load",function(){
	setTimeout (InitialiserFormulaire(),500);
});
function viderTemp(){
	NouveauCreditImmobilier=AnnulerInit;
}

function updateTips( t ) {
	var tips = $( ".validateTips" );
	tips.text(t);
	$("#InfoPlusCustomer").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#InfoPlusCustomer").popup ("open");
	
	setTimeout (
		function () {
			$("#InfoPlusCustomer").popup ("close");
		}, 
		5000
	);
}

function checkLength( o, n, min, max ) {
    if ( o.val().length > max || o.val().length < min ) {
      updateTips( "Le champs " + n + " doit avoir entre " + min + " et " + max + " caractères." );
      return false;
    } else {
      return true;
    }
  }

function checkRegexp( o, regexp, n ) {
    if ( !( regexp.test( o.val() ))) {
      updateTips( n );
      return false;
    } else {
      return true;
    }
  }

function continuerVersProperty(){
	
	// Les expression régulières pour la validation des champs des formulaires

	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	var telRegex = /(\+\d+(\s|-))?0\d(\s|-)?(\d{2}(\s|-)?){4}/;
	var nomRegex = /^([a-zA-Z_\s])+$/i;
	var villeRegex = /^([a-zA-Z\s])+$/i;
	var compte= /^([0-9]+\.?[0-9]*)+$/i;///[0-9]+\.?[0-9]*/;
	
	var fname=$("#First_name");
	var lname=$("#Last_name");
	var dateNaissance=$("#dob");
	var adresse=$("#adresse"); 
	var ville=$("#ville");
	var pays=$("#Nationality").text();
	var LangPref=$("#language").text();
	var NumPortable=$("#mobile");
	var Numfix=$("#telfix");
	var AMail=$("#Email");
	var CommunicationPref=$("#communication").text();
	var CmptC=$("#compteC");
	var CmptE=$("#compteE");
	var SalMen=$("#Monthly_income");
	var RevAdd=$("#add_income");
	//var docId=$("#");
	//var derSal=$("#");
	
	var valid = true;
	
	valid = valid && checkRegexp( fname, nomRegex, "Prénom ne peut contenir que des lettres nimiscules ou majuscules." );
	valid=valid && checkLength( fname, "Prénom", 3, 16 );
	
	valid = valid && checkRegexp( lname, nomRegex, "Nom ne peut contenir que des lettres nimiscules ou majuscules." );
	valid=valid && checkLength( lname, "Nom", 3, 16 );
	
	valid=valid && checkLength( adresse, "Adresse", 6, 30 );
	
	valid=valid && checkLength( ville, "Ville", 3, 16 );
	
	valid = valid && checkRegexp( NumPortable, telRegex, "Numéro du Protable peut contenir les chiffres de 0 à 9." );
	valid=valid && checkLength( NumPortable, "Numéro du Protable", 10, 20 );
	
	valid = valid && checkRegexp( Numfix, telRegex, "Numéro de Fix peut contenir les chiffres de 0 à 9." );
	valid=valid && checkLength( Numfix, "Numéro de Fix", 10, 20 );
	
	valid = valid && checkRegexp( AMail, emailRegex, "E-Mail doit etre de la forme : nom.prenom@exemple.com" );
	valid=valid && checkLength( AMail, "E-Mail", 6, 20 );
	
	/*valid = valid && checkRegexp( CmptC, compte, "Compte courant est un nombre." );
	valid = valid && checkRegexp( CmptE, compte, "Compte courant est un nombre." );
	valid = valid && checkRegexp( SalMen, compte, "Compte courant est un nombre." );
	valid = valid && checkRegexp( RevAdd, compte, "Compte courant est un nombre." );*/

	if(valid){
		CustomerInfoTmp();
		$.mobile.changePage('property-view.html', { transition: 'slide' });
	}
}

/* Initialisation / restitution des champs du formulaire */

function InitialiserFormulaire(){
	//alert("init");
	// photo du profil
	$("#First_name").val(NouveauCreditImmobilier.Infoclient.Prenom);
	$("#Last_name").val(NouveauCreditImmobilier.Infoclient.Nom);
	$("#dob").val(NouveauCreditImmobilier.Infoclient.dob);
	$("#adresse").val(NouveauCreditImmobilier.Infoclient.adresse); 
	$("#ville").val(NouveauCreditImmobilier.Infoclient.ville);
	$('#Nationality option[value='+NouveauCreditImmobilier.Infoclient.Nationality+']').attr('selected','selected');
	$('#language option[value='+NouveauCreditImmobilier.Infoclient.LangPref+']').attr('selected','selected');
	$("#mobile").val(NouveauCreditImmobilier.Infoclient.Mobile);
	$("#telfix").val(NouveauCreditImmobilier.Infoclient.Fixe);
	$("#Email").val(NouveauCreditImmobilier.Infoclient.Email);
	$('#communication option[value='+NouveauCreditImmobilier.Infoclient.Comm+']').attr('selected','selected');
	$("#compteC").val(NouveauCreditImmobilier.Infoclient.ComptC);
	$("#compteE").val(NouveauCreditImmobilier.Infoclient.ComptE);
	$("#Monthly_income").val(NouveauCreditImmobilier.Infoclient.SalMen);
	$("#add_income").val(NouveauCreditImmobilier.Infoclient.AddIncome);
	// Documents d'identité
	// Dernier salaire
}

function CustomerInfoTmp(){
	// photo de profil
	NouveauCreditImmobilier.Infoclient.Prenom=$("#First_name").val();
	NouveauCreditImmobilier.Infoclient.Nom=$("#Last_name").val();
	NouveauCreditImmobilier.Infoclient.dob=$("#dob").val();
	NouveauCreditImmobilier.Infoclient.adresse=$("#adresse").val(); 
	NouveauCreditImmobilier.Infoclient.ville=$("#ville").val();
	NouveauCreditImmobilier.Infoclient.Nationality=$("#Nationality").val();
	NouveauCreditImmobilier.Infoclient.LangPref=$("#language").val();
	NouveauCreditImmobilier.Infoclient.Mobile=$("#mobile").val();
	NouveauCreditImmobilier.Infoclient.Fixe=$("#telfix").val();
	NouveauCreditImmobilier.Infoclient.Email=$("#Email").val();
	NouveauCreditImmobilier.Infoclient.Comm=$("#communication").val();
	NouveauCreditImmobilier.Infoclient.ComptC=$("#compteC").val();
	NouveauCreditImmobilier.Infoclient.ComptE=$("#compteE").val();
	NouveauCreditImmobilier.Infoclient.SalMen=$("#Monthly_income").val();
	NouveauCreditImmobilier.Infoclient.AddIncome=$("#add_income").val();
	// Documents d'identité
	// Dernier salaire
	//alert(JSON.stringify(NouveauCreditImmobilier.Infoclient));
}