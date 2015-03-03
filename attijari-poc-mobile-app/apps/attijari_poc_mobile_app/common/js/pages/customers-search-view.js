$('.counter').text(counter).show();
$(".cancel").on("click", function () {
	$("div.ui-input-search.ui-shadow-inset.ui-input-has-clear.ui-body-inherit.ui-corner-all input").val ("");
	$("a.ui-input-clear.ui-btn.ui-icon-delete.ui-btn-icon-notext.ui-corner-all").addClass("ui-input-clear-hidden");
});

$('#list-results').children ('li').on ('click', function () {
	customer = customers[$(this).attr("id")];
	property = customer.properties[0];
	alert("You swiped left!");
	selectionnerClient();
});

$("#titrerech").on("swipeleft",function(){
	alert("coucou");
});

/*$('#list-results').children ('li').on ('swipeleft', function () {
	//customer = customers[$(this).attr("id")];
	//property = customer.properties[0];
	$(this).hide( "slide", { direction: "down"  }, 1000 );
	alert("You swiped left!");
});*/


function selectionnerClient(){
	NouveauCreditImmobilier.Infoclient.Prenom=		customer.First_name;
	NouveauCreditImmobilier.Infoclient.Nom	=		customer.Last_name;
	NouveauCreditImmobilier.Infoclient.dob	=		customer.dob;
	NouveauCreditImmobilier.Infoclient.adresse	=	customer.adresse;
	NouveauCreditImmobilier.Infoclient.ville	=	customer.ville;
	NouveauCreditImmobilier.Infoclient.Nationality= customer.Nationality;
	//NouveauCreditImmobilier.Infoclient.LangPref	=	customer.
	NouveauCreditImmobilier.Infoclient.Mobile	=	customer.Mobile;
	//NouveauCreditImmobilier.Infoclient.Fixe		=	customer.
	NouveauCreditImmobilier.Infoclient.Email	=	customer.Email;
	//NouveauCreditImmobilier.Infoclient.Comm		=	customer.
	//NouveauCreditImmobilier.Infoclient.ComptC	=	customer.
	//NouveauCreditImmobilier.Infoclient.ComptE	=	customer.
	NouveauCreditImmobilier.Infoclient.SalMen	=	customer.Monthly_income;
	NouveauCreditImmobilier.Infoclient.AddIncome=	customer.MP_personal_loans;
	//NouveauCreditImmobilier.Infoclient.IdDoc	=	customer.
	//NouveauCreditImmobilier.Infoclient.DernierSal=	customer.;

	/*NouveauCreditImmobilier.DetailProperty.adresse;
	NouveauCreditImmobilier.DetailProperty.Structure;
	NouveauCreditImmobilier.DetailProperty.ResComm;
	NouveauCreditImmobilier.DetailProperty.TypeImmeuble;
	NouveauCreditImmobilier.DetailProperty.ResPrimary;
	NouveauCreditImmobilier.DetailProperty.SurfaceTerre;
	NouveauCreditImmobilier.DetailProperty.SurfaceConstLog;
	NouveauCreditImmobilier.DetailProperty.Entrepreneurs;
	NouveauCreditImmobilier.DetailProperty.EstimationConstruct;
	NouveauCreditImmobilier.DetailProperty.EstimationProperty;
	
	NouveauCreditImmobilier.DetailCredit.DureePret;
	NouveauCreditImmobilier.DetailCredit.TauxInteret;
	NouveauCreditImmobilier.DetailCredit.MontantPret;
	NouveauCreditImmobilier.DetailCredit.DateOrg;
	NouveauCreditImmobilier.DetailCredit.Echeance;
	NouveauCreditImmobilier.DetailCredit.Mensualite;*/
}