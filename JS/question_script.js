const question_database = {
	biochimie: [
		{
			type:"QCM",
			subject: "Concernant les Acides Aminés, quelle(s) proposition(s) sont exacte(s) ?",
			propositions: [
				"A - L'organisme peut synthétiser certains acides aminés ",
				"B - Il existe 12 acides aminés essentiels",
				"C - L'Histidine est un acide aminé essentiel",
				"D - Toutes les réponses précédentes sont inexactes. "],
			points: [0.5, -0.5, 0.5, -0.5],
			image: null,
			correction: [
				`A - Vrai`, 
				"B - Faux. Ils sont au nombre de 9",
				"C - Vrai",
				"D - Faux"],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
		{
			type:"QROC",
			subject: "Quel réactif est utilisé pour empêcher l’oxydation des groupements thiols dans les protéines?",
			propositions: ["dithiothréitol","Dithiothréitol","DTT", "dtt"],
			points: 1,
			image: null,
			correction: [`La réponse proposition est le Dithiothréitol (DTT)`],
			generate_propositions: QROC_generation, // Will be used to create the question
			generate_correction: QROC_correction, //Will be used to correct the question
		},
		{
			type:"QROC",
			subject: "Quel est le nom de cet Acide Aminé",
			propositions: ["Arginine", "arginine"],
			points: 1,
			image: "../Images/biochimie/Q3.png",
			correction: [`C'était l'arginine`],
			generate_propositions: QROC_generation, // Will be used to create the question
			generate_correction: QROC_correction, //Will be used to correct the question
		},
		{
			type:"QCM",
			subject: "Parmi les propositions suivantes, concernant le cycle de l’urée, laquelle (lesquelles) est (sont) exactes ?",
			propositions: [
				"A - La synthèse de l’arginosuccinate se déroule dans la mitochondrie",
				"B - Le cycle de l’urée consomme deux molécules d’ATP.",
				"C - Le cortisol permet la régulation de l’uréogenèse.",
				"D - Les enzymes de l’amminiogenèse sont induites par l’acidose."],
			points: [-0.5, -0.5, 0.5, 0.5],
			image: null,
			correction: [
				`A - Faux. Elle se déroule dans le cytosol`, 
				"B - Faux. Elle consomme trois molécules",
				"C - Vrai",
				"D - Vrai"],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
	],

	biocell: [
		{
			type:"QCM",
			subject: "Concernant les différents types de cellules, quelle(s) proposition(s) sont exacte(s) ?",
			propositions: ["A - Dans le monde du vivant il existe trois types d’organisation cellulaire ",
				"B - Contrairement à la cellule eucaryote, la cellule procaryote possède un noyau.",
				"C - Les cellules eucaryotes possèdent un métabolisme autonome, leur permettant de produire leur propre énergie. ",
				"D - Toutes les réponses précédentes sont inexactes. "],
			points: [-0.5, -0.5, -0.5, 1],
			image: null,
			correction: [
				`A - Faux. Il n’en existe que deux : procaryotes et les eucaryotes `, 
				"B - Faux. Les cellules eucaryotes possèdent un noyau mais pas les cellules procaryotes.",
				"C - Faux. Il s’agit des cellules procaryotes",
				"D - Vrai"],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
		{
			type:"QRU",
			subject: "L’électrophorèse est une technique de séparation de particules chargées électriquement par migration sous l’action d’un champ électrique.",
			propositions: ["Vrai","Faux"],
			points: [1, -1],
			image: null,
			correction: [`La réponse A est vraie`],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
		{
			type:"QROC",
			subject: "Quel est le nom de ce type de cellule (1 mot attendu)",
			propositions: ["Procaryote", "procaryote"],
			points: 1,
			image: "../Images/biocell/Q3.jpg",
			correction: [`C'est une cellule procaryote`],
			generate_propositions: QROC_generation, // Will be used to create the question
			generate_correction: QROC_correction, //Will be used to correct the question
		},
		{
			type:"QCM",
			subject: "Parmi les propositions suivantes, laquelle(lesquelles) est (sont) fausse(s) ?",
			propositions: [
				"A - Robert Hooke introduit la notion de cellule en 1665.",
				"B - D’après Matthias Schleiden, « la cellule est l’unité structurelle des êtres vivants",
				"C - À l’aide du microscope optique on observe des mitochondries pouvant aller jusqu’à 3µm",
				"D - Aucunes de ces propositions n’est exactes."],
			points: [-0.5, 0.5, 0.5, -0.5],
			image: null,
			correction: [
				`A - Incorrect`, 
				"B - Correct: D’après Théodort Schwann",
				"C - Correct: Il s’agit d’une cellule multinucléée (attention à bien lire)",
				"D - Incorrect"],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
	],

	anatomie: [
		{
			type:"QRU",
			subject: "Laquelle de ces propositions est exacte ?",
			propositions: [
				"A - A est une articulation synoviale",
				"B - A est une articulation trochoïde"
			],
			points: [1, -1],
			image: "../Images/anatomie/Q1.png",
			correction: [`A est une articulation sphéroïde`],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
		{
			type:"QRU",
			subject: "Il existe 3 plans de référence : médian, transversal et coronal",
			propositions: ["Vrai","Faux"],
			points: [-0.5, 1],
			image: null,
			correction: [`Faux, Le plan médian est subdivision du plan sagittal`],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
		{
			type:"QROC",
			subject: "Quel est le nom de la courbure vers l'intérieur de la colonne vertébrale ?(1 mot attendu)",
			propositions: ["Lordose", "lordose"],
			points: 1,
			image: null,
			correction: [`La lordose est la courbure vers l'intérieur de la colonne vertébrale, en particulier au niveau 
			des régions cervicales et lombaires, par opposition à la cyphose, qui est une concavité ventrale.`],
			generate_propositions: QROC_generation, // Will be used to create the question
			generate_correction: QROC_correction, //Will be used to correct the question
		},
		{
			type:"QCM",
			subject: "Parmi les propositions suivantes, laquelle(lesquelles) est (sont) exacte(s) ?",
			propositions: [
				"A - À l’étage cervical, la colonne est convexe vers l’arrière",
				"B - À l’étage thoracique, la colonne est convexe vers l’avant",
				"C - À l’étage lombaire, la colonne est convexe vers l’arrière",
				"D - La première côte s’attache à la première vertèbre thoracique"],
			points: [-0.5, -0.5, -0.5, 1],
			image: null,
			correction: [
				`A - À l’étage cervical la courbure est une lordose : la colonne est convexe vers l’avant`, 
				"B - À l’étage thoracique (ou dorsal) la courbure est une cyphose (convexité vers l’arrière)",
				"C - À l’étage lombaire la courbure est de nouveau une lordose : la colonne est convexe vers l’avant",
				"D - Vrai"],
			generate_propositions: QCM_generation, // Will be used to create the question
			generate_correction: QCM_correction, //Will be used to correct the question
		},
	],

	get hasard() {
        return [...this.biochimie, ...this.biocell, ...this.anatomie]; //dynamic array merger
    }
}

var question_list = null // Questions picked from the questions index
var question = null // Active question
var question_index = 0 // To navigate between questions
var score = 0 //Score of the player

var correction_displayed = false
var at_least_one = false

//Identification of the button zones in the HTML page
const button_1 = document.getElementById("button_1")
const button_2 = document.getElementById("button_2")
const button_3 = document.getElementById("button_3")

const button_list = [button_1, button_2, button_3]

//Question Management section
const question_indexer = document.getElementById('QST_NBR') // Update the question Number

const question_desc_zone = document.getElementById('description') //Area for the subject of the question
const question_add_zone = document.getElementById('additions')	//Area for addional data for the question (images, graphs...)
const question_prop_zone = document.getElementById('propositions') //Area for displaying question propositions
const correction_zone = document.getElementById('correction') //Area for displaying correction

const question_creation_zone = [question_desc_zone, question_add_zone, question_prop_zone, correction_zone]

//Recover the subject of the page
const page_subject = document.getElementsByClassName("session_zone")[0].getAttribute("subject")


//Create the button to start the text when the page finishes loading
window.addEventListener("load", (event) => {
  create_start_button(button_2)
});

//Remove all children form a given node
function killChild(zone) {
    let child = zone.lastElementChild;
    while (child) {
        zone.removeChild(child);
        child = zone.lastElementChild;
    };
};

function create_start_button(zone) {
	
	//Creation of the button
	var creation = document.createElement("button")
	creation.setAttribute("onclick", `start_the_test()`)


	//Creation of text for the button
	var text = document.createTextNode("Commencer")
	creation.appendChild(text)
	
	zone.appendChild(creation);
}

function start_the_test() {

	//Creation of the buttons for the test
	create_quit_button(button_1)
	killChild(button_2)
	create_validate_button(button_3)

	//Selection of the questions for the test
	generate_questions()

	//Start displaying the questions
	display_question()

	console.log("the test begins !")
}

function generate_questions(){
	score = 0
	question_index = 0
	question_list = []
	
	let limit = page_subject == "hasard" ? 8 : 4
	while (question_list.length < limit){
		let picked
		if (page_subject == "hasard"){
			picked = choose(question_database.hasard)
		} else {
			picked = choose(question_database[page_subject])
		}
		if(!question_list.includes(picked)){
			question_list.push(picked)
		}
	}
	console.log(question_list)
}

function choose(choices) {
	if (!Array.isArray(choices)){
		console.log("this is not an array !")
		return null
	} else {
		var index = Math.floor(Math.random() * choices.length);
		return choices[index];
	}
	
}


function display_question(){
	question_indexer.textContent = `Question ${question_index + 1}/${question_list.length}`
	question_creation_zone.forEach(Zone => {killChild(Zone)}); // Clean the question Zone

	question = question_list[question_index]

	at_least_one = false

	// Create Question Description
	var para = document.createElement("p");
	var desc = document.createTextNode(question.subject);
	para.appendChild(desc);
	question_desc_zone.appendChild(para);

	//Add image if linked to the question
	if(question.image != null){
		var image_question = document.createElement("img");
		image_question.setAttribute('src', question.image)
		question_add_zone.appendChild(image_question);

		let saut = document.createElement("br");
		question_add_zone.appendChild(saut);
	}
	//Create answer propositions
	question.generate_propositions()
}

function QCM_generation(){
	for (let i = 0; i < question.propositions.length; i++) {
		let container = document.createElement("div")
		let check = document.createElement("input");

		//Two attributes that must be changed depending on what kind of question you are dealing with 
		if(question.type == "QRU"){ 
			check.setAttribute('type', 'radio')
			check.setAttribute('name', 'answer') //To allow only one checked radio box
		} else {
			check.setAttribute('type', 'checkbox')
		}

		check.setAttribute('score', question.points[i])
		
		let propos = document.createElement("label");
		//let saut = document.createElement("br");

		let texte = document.createTextNode(question.propositions[i]);
		propos.appendChild(texte);

		container.appendChild(check);
		container.appendChild(propos);
		question_prop_zone.appendChild(container);
		//question_prop_zone.appendChild(saut);

		//console.log(`score: ${check.getAttribute("score")}`);
	};
}

function QROC_generation(){
	let check = document.createElement("input")

	check.setAttribute('accepted', question.propositions)
	check.setAttribute('score', question.points)
	check.setAttribute('type', 'text')
	check.setAttribute('placeholder', 'Réponse non ponctuée')
	
	question_prop_zone.appendChild(check);

	let saut = document.createElement("br");
	question_prop_zone.appendChild(saut);
}

function create_quit_button(zone){
	//Creation of the button
	var creation = document.createElement("button")
	creation.setAttribute('onclick', 'giveup(`activate`)')

	//Creation of text for the button
	var text = document.createTextNode("Quitter")
	creation.appendChild(text)
	
	zone.appendChild(creation);
}

function giveup(action){
	var giveup_overlay = document.getElementById("giveup")
	if(action =='activate'){
		giveup_overlay.style.display = 'flex'
	} else {
		giveup_overlay.style.display = 'none'
	}
}

function create_validate_button(zone){
	//Creation of the button
	var creation = document.createElement("button")
	creation.setAttribute('onclick', 'validate()')

	//Creation of text for the button
	var text = document.createTextNode("Valider")
	creation.appendChild(text)
	
	zone.appendChild(creation);
}

function create_next_button(zone){
	//Creation of the button
	var creation = document.createElement("button")
	creation.setAttribute('onclick', 'next_question()')

	//Creation of text for the button
	var text = document.createTextNode("Continuer")
	creation.appendChild(text)
	
	zone.appendChild(creation);
}

function next_question(){
	if (question_index < question_list.length - 1){
		question_index += 1
		display_question()
		killChild(button_3)
		create_validate_button(button_3)
	} else {
		display_the_end()
	}
}

function display_the_end(){
	// Display the end of the test
	question_indexer.textContent = `Fin du test`

	question_creation_zone.forEach(Zone => {killChild(Zone)}); // Clean the question Zone

	// Display final score
	var para = document.createElement("p");
	var desc = document.createTextNode(`Score final: ${score}/${question_list.length}`);
	para.appendChild(desc);
	question_desc_zone.appendChild(para);
	question_desc_zone.style.textAlign = 'center'


	button_list.forEach(Zone => {killChild(Zone)}); // Clean the button Zone
	create_quit_button(button_2)

	console.log("this is the end")
	console.log(`final score: ${score}`)
}

//Complete validation later

function validate(){
	console.log("this is a validation button")

	
	var points = question.generate_correction()
	console.log(points > 0 || points < 1)
	console.log(points)

	var title = document.createElement("h1");

	let title_desc
	if(points >= 1){
		title_desc = document.createTextNode("Votre réponse est correcte");
		title.appendChild(title_desc);
		title.style.color = "green"

	} else if(points <= 0){
		if (at_least_one == true){
			title_desc = document.createTextNode("Votre réponse est fausse");
			title.appendChild(title_desc);
			title.style.color = "red"
		} else {
			title_desc = document.createTextNode("Vous n'avez choisi aucune réponse");
			title.appendChild(title_desc);
			title.style.color = "blue"
		}
	} else {
		title_desc = document.createTextNode("Votre réponse est partiellement correcte");
		title.appendChild(title_desc);
		title.style.color = "orange"
	}
	
	correction_zone.appendChild(title);

	var para = document.createElement("p");
	//var desc = document.createTextNode(question.correction);
	for (let i = 0; i < question.correction.length; i++) {
		let desc = document.createTextNode(question.correction[i]);
		para.appendChild(desc);
		let jump = document.createElement("br")
		para.appendChild(jump);
	}
	//para.appendChild(desc);
	correction_zone.appendChild(para);
	

	killChild(button_3)
	create_next_button(button_3)

}

function QCM_correction(){
	console.log("correction of a QCM")
	var points = 0
	var choix = document.querySelectorAll('input[score]');

	choix.forEach(option =>{
		if(option.checked){
			at_least_one = true
			value = +option.getAttribute('score')
			points += value 
			score += value
			if(value <= 0){
				option.parentNode.style.color = 'red'
			} else {
				option.parentNode.style.color = 'green'
			}
		}
		option.disabled = true
	})

	return points
}

function QROC_correction(){
	console.log("correction of a QROC")
	var points = 0
	var choix = document.querySelectorAll('input[score]');

	var prompt = choix[0].value.trim()
	var answers = choix[0].getAttribute('accepted')

	if(prompt != ""){
		at_least_one = true
		if(answers.includes(prompt)){
			value = +choix[0].getAttribute('score')
			points += value 
			score += value
			choix[0].style.backgroundColor = "lightgreen"
		} else {
			choix[0].style.backgroundColor = "lightred"
		}
	} else {
		choix[0].style.backgroundColor = "lightblue"
	}
	choix[0].disabled = true

	return points
}





