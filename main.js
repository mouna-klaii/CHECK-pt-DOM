//var likes = document.querySelectorAll('.like')
//var supp = Array.from(document.querySelectorAll('.supprimer'))
//var incr = Array.from(document.querySelectorAll('.incrementer'))
//var decr = Array.from(document.querySelectorAll('.decrimenter'))
const incr = document.querySelector('.incr')
const decr = document.querySelector('.decr')
var compteur = 0;
incr.addEventListener("click" ,function(){
   compteur++;
    console.log =('conter')
    conter.innerHTML = compteur
}  )
  decr.addEventListener("click", function(){
   if(compteur > 0){
       compteur--
   }else{
      null
   }
    conter.innerHTML = compteur
})
//$('#my-button').click(function(){
    //var btn = $(this);
   // btn.addClass('active');
//});

   //btnlike.addEventListener("click" , function(){
   // if(btnlike.style.color =="black"){
        //    btnlike.style.color = "red";
       // }
       // else{
        //    btnlike.style.color = "black";
      // }
   // })
//for (let like of likes) {
  //  like.addEventListener("click" , function(){
    //    if (like.color.style =='black'){
      //      like.color.style = 'red';
      //  }else{
      //      like.color.style = 'black';
     //   }
   // })
//}