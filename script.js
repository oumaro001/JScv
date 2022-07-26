/*le loader */

const fadeOut = () =>{
    const loaderWrapper = 
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');

}

window.addEventListener('load',fadeOut);

/*-------------------------Video acceuil ----------------------------------------*/

let videoAccueil = document.querySelector('.videoAccueil');


//fleche remonter

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
      document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    };
  });
/*--------Experience Pro-----------*/
let experience = document.querySelector('.exp');
let btnExp = document.getElementById('experience');


btnExp.addEventListener('click',() =>{

    formation.style.display='none';
    porfolio.style.display="none";
    videoAccueil.style.display="none";
    experience.style.display='flex';
    blockCentreInteret.style.display="none";
    competence.style.display="none";
    experience.style.animation="opacity 1s ease-in-out forwards reverse";

})

/*--------Formation-----------*/

let formation = document.querySelector('.formation');
let btnFormation = document.getElementById('formation');

btnFormation.addEventListener('click',() =>{

    experience.style.display="none";
    formation.style.display="flex";
    porfolio.style.display="none";
    competence.style.display="none";
    videoAccueil.style.display="none";
    blockCentreInteret.style.display="none";
    formation.style.animation="opacity 1s ease-in-out forwards reverse"

    
   


})

/*----------------Porfolio---------------*/

let porfolio= document.querySelector('.porfolio');
let btnPorfolio = document.getElementById('porfolio');



btnPorfolio.addEventListener('click',()=>{

    formation.style.display='none';
    experience.style.display="none";
    videoAccueil.style.display="none";
    porfolio.style.display='flex';
    blockCentreInteret.style.display="none";
    competence.style.display="none";
    porfolio.style.animation="opacity 1s ease-in-out forwards reverse"

})


/*------------------Compétence----------------------*/

let competence = document.querySelector('.competence');
let btnCompetence = document.getElementById('competence');


btnCompetence.addEventListener('click',()=>{

    formation.style.display='none';
    experience.style.display="none";
    porfolio.style.display="none";
    videoAccueil.style.display="none";
    blockCentreInteret.style.display="none";
    competence.style.display="flex";
    competence.style.animation="opacity 1s ease-in-out forwards reverse"

})


let btnAutresComp = document.getElementById('btnAutresComp');// boutton autre competnce de la page competence
let btnComp = document.getElementById('btnComp');//boutton competence de la page competence


let BlockCard = document.querySelector('.BlockCard');//block card competence
let BlockAutres = document.querySelector('.BlockAutres');//block autres competences


btnAutresComp.addEventListener('click',()=>{

    BlockCard.style.display="none";
    BlockAutres.style.display="flex";
    BlockAutres.style.animation="opacity 1s ease-in-out forwards reverse"

})

btnComp.addEventListener('click',()=>{


    BlockAutres.style.display="none";
    BlockCard.style.display="flex";
    BlockCard.style.animation="opacity 1s ease-in-out forwards reverse"
})





//-------------------Centre d'interêt---------------------------------

let centreInteret = document.getElementById('centreInteret');
let videoCentreInteret = document.querySelector('.videoCentreInteret');
let blockCentreInteret = document.querySelector('.centreInteret');



centreInteret.addEventListener('click',()=>{

    formation.style.display='none';
    experience.style.display="none";
    porfolio.style.display="none";
    videoAccueil.style.display="none";
    competence.style.display="none";
    blockCentreInteret.style.display="flex";

})

//les boutons de la page centre interet

let btnSport = document.getElementById('sport');
let btnMangas = document.getElementById('mangas');
let btnVoyage = document.getElementById('voyage');
let btnLecture = document.getElementById('lecture');
let btnNature = document.getElementById('nature');
let btnAuto = document.getElementById('automobile');


btnSport.addEventListener('click',()=>{

    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/odtvC4R_YUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse"

})

btnMangas.addEventListener('click',()=>{

    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/y-96ds9N1Wg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse"
})

 
btnVoyage.addEventListener('click',()=>{

    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/G5RpJwCJDqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse";
})


btnLecture.addEventListener('click',()=>{


    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/Ze5jSeX4Iws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse";
})

btnNature.addEventListener('click',()=>{


    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/RK1K2bCg4J8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse";
})

btnNature.addEventListener('click',()=>{


    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/RK1K2bCg4J8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse";
})

btnAuto.addEventListener('click',()=>{


    videoCentreInteret.innerHTML="";
    videoCentreInteret.innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/YAWt-gktZqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    videoCentreInteret.style.animation="opacity 1s ease-in-out forwards reverse";
})