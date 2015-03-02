$("#initProperty").on("load",function(){
	setTimeout (InitialiserProperty(),500);
});

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
	
	loadForm ();

function openFileOption() {
	document.getElementById("file1").click();
}

function loadForm() {
	var data;
	data = property;
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

//        les fonctions de verification des champs

function updateTips( t ) {
	var tips = $( ".validateTips" );
	tips.text(t);
	$("#InfoPlusProperty").popup ({ tolerance: "0px, 12px, 32px, 12px" });
	$("#InfoPlusProperty").popup ("open");
	
	setTimeout (
		function () {
			$("#InfoPlusProperty").popup ("close");
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

function continuerVersMortgageTerms(){
	
	// Les expression régulières pour la validation des champs des formulaires
	var nombre = /[0-9]+\.?[0-9]*/;
	
	var adresse2=$("#adresse2");
	var Structure=$("#structure").text();
	var usage=$("#usage").text();
	var rooms=$("#rooms").text();
	var Primary=$("#Primary").text();
	var surface=$("#surface");
	var liveableArea=$("#liveableArea");
	var contractors=$("#contractors");
	var constructionSum=$("#constructionSum");
	var evaluationSum=$("#evaluationSum");
	//Document de registration
	
	
	var valid = true;
	
	valid = valid && checkLength(adresse2,"Adresse",4,30);
	
	valid = valid && checkRegexp(surface, nombre,"La surface doit etre un nombre réel et exprimé en m² (ex: 2000.5).");
	valid = valid && checkRegexp(liveableArea, nombre,"Surface de construction/logement doit etre un nombre réel et exprimé en m² (ex: 1900).");
	valid = valid && checkLength(contractors,"Entrepreneurs en construction",4,30);
	valid = valid && checkRegexp(constructionSum,nombre,"Estimation de construction");
	valid = valid && checkRegexp(evaluationSum,nombre,"Estimation de propriété");	
	
	
	if(valid){	
		PropertyInfoTmp();
		$.mobile.changePage('mortgage-terms.html', { transition: 'slide' });
	}
}

/* Initialisation / restitution des champs du formulaire */

function InitialiserProperty(){
	//alert("init");
	$("#adresse2").val(NouveauCreditImmobilier.DetailProperty.adresse);
	$('#structure option[value='+NouveauCreditImmobilier.DetailProperty.Structure+']').attr('selected','selected');
	$('#usage option[value='+NouveauCreditImmobilier.DetailProperty.ResComm+']').attr('selected','selected');
	$('#rooms option[value='+NouveauCreditImmobilier.DetailProperty.TypeImmeuble+']').attr('selected','selected');
	$('#Primary option[value='+NouveauCreditImmobilier.DetailProperty.ResPrimary+']').attr('selected','selected');
	$("#surface").val(NouveauCreditImmobilier.DetailProperty.SurfaceTerre);
	$("#liveableArea").val(NouveauCreditImmobilier.DetailProperty.SurfaceConstLog);
	$("#contractors").val(NouveauCreditImmobilier.DetailProperty.Entrepreneurs);
	$("#constructionSum").val(NouveauCreditImmobilier.DetailProperty.EstimationConstruct);
	$("#evaluationSum").val(NouveauCreditImmobilier.DetailProperty.EstimationProperty);
	//Document de registration
}

function PropertyInfoTmp(){
	// 
	NouveauCreditImmobilier.DetailProperty.adresse=$("#adresse2").val();
	NouveauCreditImmobilier.DetailProperty.Structure=$("#structure").val();
	NouveauCreditImmobilier.DetailProperty.ResComm=$("#usage").val();
	NouveauCreditImmobilier.DetailProperty.TypeImmeuble=$("#rooms").val(); 
	NouveauCreditImmobilier.DetailProperty.ResPrimary=$("#Primary").val();
	NouveauCreditImmobilier.DetailProperty.SurfaceTerre=$("#surface").val();
	NouveauCreditImmobilier.DetailProperty.SurfaceConstLog=$("#liveableArea").val();
	NouveauCreditImmobilier.DetailProperty.Entrepreneurs=$("#contractors").val();
	NouveauCreditImmobilier.DetailProperty.EstimationConstruct=$("#constructionSum").val();
	NouveauCreditImmobilier.DetailProperty.EstimationProperty=$("#evaluationSum").val();
	//Document de registration
	//alert(JSON.stringify(NouveauCreditImmobilier.DetailProperty));
}