console.log("welcome to my website");
let audioElement=new Audio('0.mp3');
let songIndex=0;
let masterplay=document.getElementById('masterPlay');
let myprogressBar=document.getElementById('bar');
let songItem=Array.from(document.getElementsByClassName('songtot'));
let songs= [
    { songName:'mere-bina',
      
       filePath:'1.mp3'
    },
    { songName:'mai hu saat tere',
    filePath:'2.mp3'
    },
    { songName:'subanallah',
    filePath:'3.mp3'
    },
    { songName:'sang hu tere',
    filePath:'4.mp3'
    },
    { songName:'Rabba',
    filePath:'5.mp3'
    },
    { songName:'wavin flag',
    filePath:'6.mp3'
    },
    { songName:'see you again',
    filePath:'7.mp3'
    },
    { songName:'ennie meenie',
    filePath:'8.mp3'
    },
    { songName:'stay',
    filePath:'9.mp3'
    },
    { songName:'girls like you',
    filePath:'10.mp3'
    }
]
  songItem.forEach((element,i)=>{
     console.log(element);
     element.getElementsByClassName('songnm')[0].innerHTML=songs[i].songName;
  })

 masterplay.addEventListener('click',()=>{
     if(audioElement.paused||audioElement.currentTime==0){
                   audioElement.play();
                   masterplay.classList.remove('fa-play-circle');
                  masterplay.classList.add('fa-pause-circle');
     }else{
      audioElement.pause();
      masterplay.classList.remove('fa-pause-circle');
     masterplay.classList.add('fa-play-circle');

     }
 })
 audioElement.addEventListener('timeupdate',()=>{
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   myprogressBar.value=progress;
 })
 myprogressBar.addEventListener('change',()=>{
   audioElement.currentTime=myprogressBar.value*audioElement.duration/100;
 })
 const makeAllplay =()=>{
   Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
     element.classList.add('fa-play-circle');
   })
 }
 Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
         element.addEventListener('click',(e)=>{
             makeAllplay();
             songIndex=parseInt(e.target.id);
             e.target.classList.remove('fa-play-circle')
             e.target.classList.add('fa-pause-circle')
             audioElement.src=`${songIndex+1}.mp3`;
             audioElement.currentTime=0;
             audioElement.play();
             masterplay.classList.remove('fa-play-circle');
             masterplay.classList.add('fa-pause-circle');
         })
 })
 document.getElementById('next').addEventListener('click',()=>{
   if(songIndex>=10){
     songIndex=0;
   }else{
     songIndex+=1;
   }
   audioElement.src=`${songIndex+1}.mp3`;
   audioElement.currentTime=0;
   audioElement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-pause-circle');

 })
 document.getElementById('back').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=10;
  }else{
    songIndex-=1;
  }
  audioElement.src=`${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');

})