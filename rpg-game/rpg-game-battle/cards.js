let plyrHand=[];
let oppHand=[];

let opponentHand=document.getElementById('opponentHANDHAND');
let playerHand=document.getElementById('yourHANDHAND');

let infoDiv=document.getElementById('info');
let infoImg=document.getElementById('info-img');
let infoName=document.getElementById('info-name');
let infoDesc=document.getElementById('info-description');

let ClrInfoDivBTN=document.getElementById('resetInfoDiv');
let cardCastBTN=document.getElementById('cast');
cardCastBTN.style.visibility='hidden';
let cardInfoShown=false;

const card={
	name:"test",
	image:"",
	PlayerCard:false,
	description:"test card",
	cardPos:0,
};

function createOpponentCard(){
	let newOpponentCard=Object.create(card);
	newOpponentCard.name="animallogic";
	newOpponentCard.image='./images/animallogic_Luna.png';
	newOpponentCard.description='poopyhead';
	oppHand.push(newOpponentCard);	
	newOpponentCard.cardPos=oppHand.indexOf(newOpponentCard)+1;
}
function createPlayerCard(){
	let newPlayerCard=Object.create(card);
	newPlayerCard.name='pikachu';
	newPlayerCard.image='./images/animallogic_Luna.png';
	newPlayerCard.PlayerCard=true;
	newPlayerCard.description='pika';
	plyrHand.push(newPlayerCard);
	newPlayerCard.cardPos=plyrHand.indexOf(newPlayerCard)+1;
}

function displayCards(){
	for(let i=0;i<oppHand.length;i++){
		let x=document.createElement('img');
		x.src=oppHand[i].image;
		x.style.width='85px';
		let xName=oppHand[i].name+" "+(i+1);
		let xDesc=oppHand[i].description;

		x.onclick=()=>{
			// alert(`you clicked the card ${oppHand[i].name} at card position ${oppHand[i].cardPos}\n${oppHand[i].description}`);
			infoImg.src=x.src;
			infoName.innerHTML=xName;
			infoDesc.innerHTML=xDesc;
			cardInfoShown=true;cardCastBTN.style.visibility='visible';
		}
		opponentHand.append(x);

		// x.onmouseover=()=>{
		// 	infoImg.src=x.src;
		// 	infoName.innerHTML=xName;
		// 	infoDesc.innerHTML=xDesc;
		// }
		// x.onmouseout=()=>{
		// 	infoImg.src="";
		// 	infoName.innerHTML="";
		// 	infoDesc.innerHTML="";
		// }
	}
	for(let i=0;i<plyrHand.length;i++){
		let y=document.createElement('img');
		y.src=plyrHand[i].image;
		y.style.width='85px';
		let yName=plyrHand[i].name+" "+(i+1);
		let yDesc=plyrHand[i].description;

		y.onclick=()=>{
			// alert(`you clicked the card ${plyrHand[i].name} at card position ${plyrHand[i].cardPos}\n${plyrHand[i].description}`);
			infoImg.src=y.src;
			infoName.innerHTML=yName;
			infoDesc.innerHTML=yDesc;
			cardInfoShown=true;cardCastBTN.style.visibility='visible';
		}
		// y.onmouseover=()=>{
		// 	infoImg.src=y.src;
		// 	infoName.innerHTML=yName;
		// 	infoDesc.innerHTML=yDesc;
		// }
		// y.onmouseout=()=>{
		// 	infoImg.src="";
		// 	infoName.innerHTML="";
		// 	infoDesc.innerHTML="";
		// }

		playerHand.append(y);
	}
}

ClrInfoDivBTN.onclick=()=>{
	infoImg.src="";
	infoName.innerHTML="";
	infoDesc.innerHTML="";
	cardInfoShown='false';cardCastBTN.style.visibility='hidden';
}

for(let j=0;j<5;j++){
	createOpponentCard();
	createPlayerCard();
}

displayCards();
