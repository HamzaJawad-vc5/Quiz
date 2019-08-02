// alert("message");

let i=0;
let allQuest = [];
let rightGuess = 0;
let wrongGuess = 0;


// var variable = document.getElementById('nxtbtn');

	document.getElementById('inner').style.display = 'none';

// document.getElementById('nxtbtn').click();

async function disp(){
if(document.subject.SelectSubject.value !== ''){
	document.getElementById('start').style.display = 'none';
	document.getElementById('inner').style.display = 'flex';


	let file = document.subject.SelectSubject.value;

	// alert(file);

	getData(file);

	setTimeout( ()=>{	
		var numQues = document.getElementById('other');
for (var j = 0; j < allQuest.length ; j++) {
	numQues.innerHTML=numQues.innerHTML+('<p id="num">'+j+'</p>');
}
nextBtnCall();} ,1000);

}else{

alert('Select some subject');
}
}




// let quest = objOut.questions;

function nextBtnCall(){

	newDisp();

}



 function getData(filename){

fetch(filename)
.then(function(resp){
	return resp.json();
})
.then(function(data){
	
allQuest = data.Questions.map(value=>{
		return value;
	});


// let obj={
// 	questions : allQuest
// };



 });



}




 function newDisp(){
 		 // alert(allQuest.length);

 		 // alert(document.quiz.some.value);


if (i!==0 &&(document.quiz.some.value !== '')) {

if (document.quiz.some.value === allQuest[i-1].truee) {
	rightGuess++;
}else
{
	wrongGuess++;
}
// alert(document.quiz.some.value);
if(allQuest.length === i){
	i++;		
}
}


 if (((allQuest.length)+1) !== i ) {



		if ((i===0  || (document.quiz.some.value !== ''))) {

	document.getElementById('question').innerHTML='Q'+(i+1)+' ' +allQuest[i].Question;

let  allOpt = allQuest[i].Options.map(value=>{
	// document.body.innerHTML=value;
		return value;
	});

const source = document.getElementById('opt').innerHTML;
const template = Handlebars.compile(source);

const context = {
 optArr: allOpt
};

const compiledHtml = template(context);

const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;



i++;

	}else{
		alert('plz select some option');
	}

}else{

	document.getElementById('inner').style.display = 'none';
	document.getElementById('quizResult').style.display = 'block';


document.getElementById('right').innerHTML="The Right Choices Are: " + rightGuess;

document.getElementById('wrong').innerHTML="The Wrong Choices Are: " + wrongGuess;


	// document.getElementById('quest').innerHTML= 'Done';
}


}




// need this cond for result purpose
// document.quiz.some.value === allQuest[i-1].truee
