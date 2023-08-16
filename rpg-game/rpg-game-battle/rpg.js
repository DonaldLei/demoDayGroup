//https://www.youtube.com/watch?v=6rzM_RK2t3c
//https://stackoverflow.com/questions/35660240/how-to-put-p5-js-canvas-in-a-html-div

// html variables
let infoImg=document.getElementById('cardImg');
let infoName=document.getElementById('cardName');
let infoDesc=document.getElementById('cardDescription');

// image variables
let enemyImgS=[];
let enemyImg;let playerImg;
let card1Img;let card2Img;let card3Img;let card4Img;let card5Img;let card6Img;let card7Img;
let card1;let card2;let card3;let card4;let card5;let card6;let card7;

// data variables
let enemeyHp=0;let playerHp=10;
let cards=[];let cardsImg=[];let cardsUsed=[];

// control visibility
let playerTurn=true;let cardChosen=false;let cardSelected=0;
let useBTNx=700;let useBTNy=400;
let endTrnBTNx=700;let endTrnBTNy=460;
let moveUsdY=100;

const card={
	name:"",image:"",type:"",description:"",cardPos:0,
}

function createCard(NAME,IMAGE,TYPE,DESCRIPTION,X,Y){
	let newCard=Object.create(card);
	newCard.name=NAME;
	newCard.image=IMAGE;
	newCard.type=TYPE;
	newCard.description=DESCRIPTION;
	newCard.x=X;
	newCard.y=Y;
	cards.push(newCard);
	return newCard;
}
card1=createCard('test',"animallogic_Luna.png",'math','poopyhead',800,370);
card2=createCard('test',"animallogic_Luna.png",'math','poopyhead',900,370);
card3=createCard('test',"animallogic_Luna.png",'math','poopyhead',1000,370);
card4=createCard('test',"animallogic_Luna.png",'math','poopyhead',1100,370);
card5=createCard('test',"animallogic_Luna.png",'math','poopyhead',1200,370);
card6=createCard('test',"animallogic_Luna.png",'math','poopyhead',1300,370);
card7=createCard('test',"animallogic_Luna.png",'math','poopyhead',1400,370);
console.log(card1);
// card1Img=card1.image;
// enemyImgS.push(card1.image);
// console.log(enemyImgS);



// add image paths to array of sprites/cards
enemyImgS.push('animallogic_Luna.png');
cardsImg.push('animallogic_Luna.png');


// p5
// https://github.com/processing/p5.js/wiki/GLobal-and-instance-mode
let gamep5=new p5(
	(sketch)=>{

		
	sketch.preload=()=>{
	// load images
		enemyImg=sketch.loadImage(`images/${enemyImgS[0]}`);
		playerImg=sketch.loadImage('images/pikachu.png');

		card1Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card2Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card3Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card4Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card5Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card6Img=sketch.loadImage(`images/${cardsImg[0]}`);
		card7Img=sketch.loadImage(`images/${cardsImg[0]}`);

		console.log(cardsImg);
	}
	sketch.setup=()=>{
		sketch.createCanvas(1520,525);
		// cnv.parent('p5');
		sketch.background(0);

		


	}
	sketch.windowResized=()=>{
		sketch.resizeCanvas(windowWidth,windowHeight);
	}


	sketch.draw=()=>{
		// ellipse(500,200,100);
		sketch.background(0);
		sketch.fill(255);

		// enemy hp bar
		sketch.fill(255,0,0);
		sketch.rect(10,10,300,20);
		sketch.fill(0);sketch.text(`hp: ${enemeyHp}`,150,20);sketch.fill(255);

		// enemy area box
		sketch.rect(30,50,300,300);
		sketch.image(enemyImg,30,50,300,300);

		// player hp bar
		sketch.fill(255,0,0);
		sketch.rect(1200,10,300,20);
		sketch.fill(0);sketch.text(`hp: ${playerHp}`,1350,20);sketch.fill(255);


		// player area box
		sketch.rect(1150,50,300,300);
		sketch.image(playerImg,1150,50,300,300);

		if(playerTurn==true){
		// items box
		sketch.rect(5,425,250,95);
		
		// moves used
		// sketch.rect(550,100,400,100);
		sketch.rect(550,moveUsdY,100,150);
		sketch.rect(650,moveUsdY,100,150);
		sketch.rect(750,moveUsdY,100,150);
		sketch.rect(850,moveUsdY,100,150);

		// 'cards'
		// sketch.rect(800,370,815,150);
		sketch.image(card1Img,card1.x,card1.y,100,150);
		sketch.image(card2Img,card2.x,370,100,150);
		sketch.image(card3Img,card3.x,370,100,150);
		sketch.image(card4Img,card4.x,370,100,150);
		sketch.image(card5Img,card5.x,370,100,150);
		sketch.image(card6Img,card6.x,370,100,150);
		sketch.image(card7Img,card7.x,370,100,150);
		// 			x     y   width  height

		// use card
		sketch.rect(useBTNx,useBTNy,50);sketch.fill(0);sketch.text('Use',useBTNx+15,useBTNy+30);sketch.fill(255);

		// end turn
		sketch.rect(endTrnBTNx,endTrnBTNy,50);sketch.fill(0);sketch.text('End\nTurn',endTrnBTNx+15,endTrnBTNy+25);sketch.fill(255);


		}


	}



	sketch.mouseClicked=()=>{
		if(playerTurn==true){
			// click cards
			if(sketch.mouseX>800&&sketch.mouseX<901 && sketch.mouseY>370){ //card 1
				console.log('card 1');
				// to change HTML element, p5 needs to be in a div that can access the element
				infoImg.src='./images/animallogic_Luna.png';
				infoName.innerHTML='card1';
				infoDesc.innerHTML='poop';
				cardSelected=1;

			}
			if(sketch.mouseX>900&&sketch.mouseX<1001 && sketch.mouseY>370){ //card 2
				console.log('card 2');
				
			}
			if(sketch.mouseX>1000&&sketch.mouseX<1101 && sketch.mouseY>370){ //card 3
				console.log('card 3');

			}
			if(sketch.mouseX>1100&&sketch.mouseX<1201 && sketch.mouseY>370){ //card 4
				console.log('card 4');

			}
			if(sketch.mouseX>1200&&sketch.mouseX<1301 && sketch.mouseY>370){ //card 5
				console.log('card 5');

			}
			if(sketch.mouseX>1300&&sketch.mouseX<1401 && sketch.mouseY>370){ //card 6
				console.log('card 6');

			}
			if(sketch.mouseX>1400&&sketch.mouseX<1501 && sketch.mouseY>370){ //card 7
				console.log('card 7');

			}


		}	

			// use card
			if(sketch.mouseX>700&&sketch.mouseX<751 && sketch.mouseY>400&&sketch.mouseY<451){
				if(cardSelected==1){
					card1.x=550;card1.y=100;
					cardsUsed.push(card1);
					console.log(cards);console.log(cardsUsed);

				}
			}
			if(cardSelected==1 && (sketch.mouseX>550&&sketch.mouseX<651 && sketch.mouseY>100&&sketch.mouseY<251)){
				card1.x=800;card1.y=370;
				
			}	


			// end turn
			if(sketch.mouseX>700&&sketch.mouseX<751 && sketch.mouseY>460&&sketch.mouseY<511){
				console.log('ended turn');
				
				console.log(playerTurn);
				// card1.x+=10000;card1.y+=10000;
				playerTurn=false;
			}


		
	}
},'game-div');