'use strict';

//////////////////////////////
/////// Global Variables/////
////////////////////////////

let all = [];

let form= document.getElementById( 'form' );

let headerContent= ['#' , 'Image', 'Name', 'Season'];


//////////////////////////////
/////// Header          /////
////////////////////////////

function headerRender(){
  const parentElement = document.getElementById( 'table' );

  const thRow = document.createElement( 'tr' );
  parentElement.appendChild( thRow );

  for ( let i=0 ; i<headerContent.length; i++ ){
    const thData = document.createElement( 'th' );
    thRow.appendChild( thData );
    thData.textContent=headerContent[i];
  }
}






//////////////////////////////
/////// Constructor     /////
////////////////////////////

function Flower ( name, category, season ){
  this.name=name;
  this.category=category;
  this.season=season;
  this.remove='X';

  this.img=`./${category}.jpeg`;

  all.push( this );
}



Flower.prototype.render=function(){
  const parentElement = document.getElementById( 'table' );

  const trElement = document.createElement( 'tr' );
  parentElement.appendChild( trElement );

  const tdRemove = document.createElement( 'td' );
  trElement.appendChild( tdRemove );
  tdRemove.textContent=this.remove;

  const tdImage = document.createElement( 'td' );
  trElement.appendChild( tdImage );
  const img = document.createElement( 'img' );
  tdImage.appendChild( img );
  img.setAttribute( 'src', `${this.img}` );
  img.setAttribute( 'height' , '100px' );
  img.setAttribute( 'width' , '100px' );

  const tdName = document.createElement( 'td' );
  trElement.appendChild( tdName );
  tdName.textContent=this.name;

  const tdSeason = document.createElement( 'td' );
  trElement.appendChild( tdSeason );
  tdSeason.textContent=this.season;



};

function localStorageRender(){

  const parentElement = document.getElementById( 'table' );

  for( let i=0; i<all.length; i++ ){

    const trElement = document.createElement( 'tr' );
    parentElement.appendChild( trElement );

    const tdRemove = document.createElement( 'td' );
    trElement.appendChild( tdRemove );
    tdRemove.textContent=all[i].remove;

    const tdImage = document.createElement( 'td' );
    trElement.appendChild( tdImage );
    const img = document.createElement( 'img' );
    tdImage.appendChild( img );
    img.setAttribute( 'src', `${all[i].img}` );
    img.setAttribute( 'height' , '100px' );
    img.setAttribute( 'width' , '100px' );

    const tdName = document.createElement( 'td' );
    trElement.appendChild( tdName );
    tdName.textContent=all[i].name;

    const tdSeason = document.createElement( 'td' );
    trElement.appendChild( tdSeason );
    tdSeason.textContent=all[i].season;



  }



}

// Flower.prototype.renderHeader= function(){
//   const parentElement = document.getElementById( 'table' );

//   const thRow= document.createElement( 'tr' );
//   parentElement.appendChild( thRow );

//   const thData = document.createElement( 'th' );
//   thRow.appendChild( thData );
//   thData.text='#';

//   const thDataImg = document.createElement( 'th' );
//   thRow.appendChild( thDataImg );
//   thDataImg.text='Image';

//   const thDataName= document.createElement( 'th' );
//   thRow.appendChild( thDataName );
//   thDataName.text='Name ';

//   const thDataSeason= document.createElement( 'th' );
//   thRow.appendChild( thDataSeason );
//   thDataSeason.text='Season';

// };


//////////////////////////////
/////// Get Item          ///
////////////////////////////

let getItem = localStorage.getItem( 'flower' );
if( getItem ){
  all=JSON.parse( getItem );
}




//////////////////////////////
/////// Handle Submit     ///
////////////////////////////

function handleSubmit( event ){
  event.preventDefault();

  let flowerName= event.target.flowerName.value;
  let flowerCategory= event.target.category.value;
  let flowerSeason= event.target.season.value;

  let newFlower = new Flower( flowerName,flowerCategory,flowerSeason );
  newFlower.render();

  localStorage.setItem( 'flower', JSON.stringify( all ) );
}



function clearFunction (){
  const table = document.getElementById( 'table' );
  table.innerHTML= ' ';
  localStorage.clear();
  headerRender();
}





//////////////////////////////
/////// INVOKE            ///
////////////////////////////

form.addEventListener( 'submit', handleSubmit );
headerRender();
localStorageRender();
console.log( all );
