var problemSubmitted = false;
var counter = 4;
var cls = 0;
var customers = [ {
	"id" : 0,
	"Title" : "Mr",
	"First_name" : "Ayoub",
	"Last_name" : "Mahmoudi",
	"Nationality" : "Maroc",
	"Email" : "az@gmail.com",
	"adresse" : "Sidi Ma�rouf, Casablanca",
	"ville" : "Casablanca",
	"Mobile" : "(212)-6757657 676545",
	"Monthly_income" : "60000",
	"personal_loans" : "Yes",
	"MP_personal_loans" : "3000",
	"car_loans" : "Yes",
	"MP_car_loans" : "2000",
	"existing_mortgages" : "Yes",
	"MP_existing_mortgages" : "4000",
	"Existing_debit_card" : "Yes",
	"Existing_credit_card" : "No",
	"dob" : "1980-08-24",

	"properties" : [ {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "Casa Nearshore, Shore 19, Sidi Maârouf, Casablanca",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}, {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "maarif , Casablanca",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}

	]

}, {
	"id" : 1,
	"Title" : "Mr",
	"First_name" : "Mehdi",
	"Last_name" : "maazouz",
	"Nationality" : "Maroc",
	"ville" : "El Jadida",
	"adresse" : "17, Sidi Bouzid, Maroc",
	"Email" : "az@gmail.com",
	"Mobile" : "(212)-6757657 676545",
	"Monthly_income" : "60000",
	"personal_loans" : "Yes",
	"MP_personal_loans" : "3000",
	"car_loans" : "Yes",
	"MP_car_loans" : "2000",
	"existing_mortgages" : "Yes",
	"MP_existing_mortgages" : "4000",
	"Existing_debit_card" : "Yes",
	"Existing_credit_card" : "No",
	"dob" : "11/08/1990",
	"properties" : [ {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd anfa ",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}, {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd mohamed V",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	} ]
}, {
	"id" : 2,
	"Title" : "Mr",
	"First_name" : "Souhail",
	"Last_name" : "maazouz",
	"Nationality" : "Maroc",
	"ville" : "Fes",
	"adresse" : "36, Sidi Herazem, Fes, Maroc",
	"Email" : "az@gmail.com",
	"Mobile" : "(212)-6757657 676545",
	"Monthly_income" : "60000",
	"personal_loans" : "Yes",
	"MP_personal_loans" : "3000",
	"car_loans" : "Yes",
	"MP_car_loans" : "2000",
	"existing_mortgages" : "Yes",
	"MP_existing_mortgages" : "4000",
	"Existing_debit_card" : "Yes",
	"Existing_credit_card" : "No",
	"dob" : "11/08/1990",
	"properties" : [ {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd anfa ",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	}, {
		"AlreadyOwn" : "New",
		"isExisting" : "Existing",
		"propAddress" : "bd mohamed V",
		"propType" : "villa",
		"rooms" : ">4",
		"usage" : "rent",
		"liveableArea" : "210",
		"builtArea" : "250",
		"isEvaluated" : "Yes",
		"evaluationSum" : "430,000"
	} ]
} ];

var applications = [
		{
			"customer" : {
				"id" : 0,
				"Title" : "Mr",
				"First_name" : "Ayoub",
				"Last_name" : "Mahmoudi",
				"Nationality" : "Maroc",
				"Email" : "az@gmail.com",
				"Mobile" : "(212)-6757657 676545",
				"Monthly_income" : "60000",
				"personal_loans" : "Yes",
				"MP_personal_loans" : "3000",
				"car_loans" : "Yes",
				"MP_car_loans" : "2000",
				"existing_mortgages" : "Yes",
				"MP_existing_mortgages" : "4000",
				"Existing_debit_card" : "Yes",
				"Existing_credit_card" : "No",
				"dob" : "16/08/1980",

				"property" : {
					"AlreadyOwn" : "New",
					"isExisting" : "Existing",
					"propAddress" : "Lot. Soufiane, Sidi Maârouf, Casablanca",
					"propType" : "villa",
					"rooms" : ">4",
					"usage" : "rent",
					"liveableArea" : "210",
					"builtArea" : "250",
					"isEvaluated" : "Yes",
					"evaluationSum" : "430,000"
				}

			}
		},
		{
			"customer" : {
				"id" : 1,
				"Title" : "Ms",
				"First_name" : "Mehdi",
				"Last_name" : "Mahmoudi",
				"Nationality" : "Maroc",
				"Email" : "az@gmail.com",
				"Mobile" : "(212)-6757657 676545",
				"Monthly_income" : "60000",
				"personal_loans" : "Yes",
				"MP_personal_loans" : "3000",
				"car_loans" : "Yes",
				"MP_car_loans" : "2000",
				"existing_mortgages" : "Yes",
				"MP_existing_mortgages" : "4000",
				"Existing_debit_card" : "Yes",
				"Existing_credit_card" : "No",
				"dob" : "16/08/1980",

				"property" : {
					"AlreadyOwn" : "New",
					"isExisting" : "Existing",
					"propAddress" : "Casa Street Shore, Sidi Maârouf, Casablanca",
					"propType" : "villa",
					"rooms" : ">4",
					"usage" : "rent",
					"liveableArea" : "210",
					"builtArea" : "250",
					"isEvaluated" : "Yes",
					"evaluationSum" : "430,000"
				}

			}
		},
		{
			"customer" : {
				"id" : 2,
				"Title" : "Mr",
				"First_name" : "Souhail",
				"Last_name" : "Fadili",
				"Nationality" : "Maroc",
				"Email" : "az@gmail.com",
				"Mobile" : "(212)-6757657 676545",
				"Monthly_income" : "60000",
				"personal_loans" : "Yes",
				"MP_personal_loans" : "3000",
				"car_loans" : "Yes",
				"MP_car_loans" : "2000",
				"existing_mortgages" : "Yes",
				"MP_existing_mortgages" : "4000",
				"Existing_debit_card" : "Yes",
				"Existing_credit_card" : "No",
				"dob" : "1980-08-24",

				"property" : {
					"AlreadyOwn" : "New",
					"isExisting" : "Existing",
					"propAddress" : "Casa Technopark, Park 19, Casablanca",
					"propType" : "villa",
					"rooms" : ">4",
					"usage" : "rent",
					"liveableArea" : "210",
					"builtArea" : "250",
					"isEvaluated" : "Yes",
					"evaluationSum" : "430,000"
				}

			}
		},
		{
			"customer" : {
				"id" : 3,
				"Title" : "Mr",
				"First_name" : "Houcine",
				"Last_name" : "Chadli",
				"Nationality" : "Maroc",
				"Email" : "az@gmail.com",
				"Mobile" : "(212)-6757657 676545",
				"Monthly_income" : "60000",
				"personal_loans" : "Yes",
				"MP_personal_loans" : "3000",
				"car_loans" : "Yes",
				"MP_car_loans" : "2000",
				"existing_mortgages" : "Yes",
				"MP_existing_mortgages" : "4000",
				"Existing_debit_card" : "Yes",
				"Existing_credit_card" : "No",
				"dob" : "1980-08-24",

				"property" : {
					"AlreadyOwn" : "New",
					"isExisting" : "Existing",
					"propAddress" : "Casa Nearshore, Shore 19, Sidi Maârouf, Casablanca",
					"propType" : "villa",
					"rooms" : ">4",
					"usage" : "rent",
					"liveableArea" : "210",
					"builtArea" : "250",
					"isEvaluated" : "Yes",
					"evaluationSum" : "430,000"
				}

			}
		} ];
var property = {};
var customer = {};
var terms = {
	amount : "200000",
	interest : "7",
	duration : "12"

};

var sourcePage = {
	title : "",
	url : ""
};

var expertNotification = {
	pic : "",
	title : "",
	status : "",
	date : "",
	content : ""
};
//add by Ouchen Imad 25/02/2015
var AllNotification = [
		{
			pic : " style='background-image: url(../images/mehdi.jpg);'",
			title : "[Client : M. Bendriss Mehdi] : Eligibilité de crédit",
			extract : "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Bendriss Mehdi ingénieur informatique chez IBM Maroc"

		},
		{
			pic : "style='background-image: url(../images/ayoub.jpg);'",
			title : "[Client : M. Naciri Ayoub] : Rachat de crédit",
			extract : "Bonjour, Nous avons examiné méticuleusement la demande de Monsieur Ayoub Ingénieur informatique à IBM Maroc voulant racheter ses crédits"
		},
		{
			pic : " style='background-image: url(../images/souhail.jpg);'",
			title : "[Client : M. Guennouni Souhail] : Eligibilité de crédit",
			extract : "Bonjour, Nous avons bien reçu votre demande concernant l\'éligibilité de Monsieur Souhail Guennouni ingénieur informatique chez IBM Maroc",
		},
		{
			pic : " style='background-image: url(../images/cristian.jpg);'",
			title : "[Client : M. Carstoiu Cristian] : Crédit pour étranger",
			extract : "Bonjour, Nous avons bien reçu votre demande concernant un emprunt pour investissement sur le sol marocain de Monsieur Carstoiu Représentant "
		}, ]

var NotReadNotification = JSON.parse(JSON.stringify(AllNotification));
function getCustomer() {
	return customer;
}

function getApplications() {
	return applications;
}

function getProperty() {
	return property;
}

function getCustomers() {
	return customers;
}
