/*js functions


click button
open image or video link do i want it to go to a page with the image or open it in a viewer? probably link will be easeri. 

onclick should change text and call random image. 

*/

function randomImage(mood) {
  var canvas = document.getElementById('content');
  var title = document.getElementById('heading');
  var back = document.getElementById('footer');
  var choice = randNum();

if (mood ==='sad') {
  title.innerHTML = ("<h1> cheer up sad face!</h1>")

    if(choice == 1){    
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/Kqj2hkbDnyM?autoplay=1' frameborder='0' allowFullScreen></iframe>"   
   }
    else if (choice == 2) {
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/emxI-nRGWBE?autoplay=1' frameborder='0' allowfullscreen></iframe>"
    }
    else {
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/Tj6quKEn3dw?autoplay=1' frameborder='0' allowfullscreen></iframe></iframe>"
    } 
}
 if (mood ==='angry'){
  title.innerHTML = ("<h1> chill out mate!</h1>")
    if(choice == 1){    //meditation
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/z5CusXAwm6A?autoplay=1' frameborder='0' allowfullscreen></iframe>"   
   }                  //jazz
    else if (choice == 2) {
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/lasWefVUCsI?autoplay=1' frameborder='0' allowfullscreen></iframe>"
    }
    else { // hey arnold
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/vCugSeSnkIs?list=PL946E4A18A9CB10B8&autoplay=1' frameborder='0' allowfullscreen></iframe>"
    }
    console.log(choice);
}
 if (mood === 'happy')   {
  title.innerHTML = ("<h1> you'll watch anything then </h1>")
   if(choice == 1){    //cabbages
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/nZ3ZUoz6cWM?start=29&autoplay=1' frameborder='0' allowfullscreen></iframe>"   
   }                  //car park
   else if (choice == 2) {
   canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/kWhXp-C4DP4?start=10&autoplay=1' frameborder='0' allowfullscreen></iframe>"
    }
    else { // see saw
      canvas.innerHTML = "<iframe title='YouTube video player'   type=\'text/html\' width='640' height='390' src='https://www.youtube.com/embed/5Vkp03JOVYs?autoplay=1' frameborder='0' allowfullscreen></iframe>"
    }
 }     

}
function randNum(){
  var images = 3;
  var number = Math.floor(Math.random(1) * images) + 1;
  console.log(number);
  return number;
}
