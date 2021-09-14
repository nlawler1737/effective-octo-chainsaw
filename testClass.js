var Color=Color||(function () {

   //Accessible only here
   var privateArray=[];

   //Cannot be called from outside this function
   var privateFunction=function(){
   //console.log("private")
   }

   //Return only what must be publicly accessible, in this
   //case only the show() method
   return {
      show: function(input){
         privateFunction();
         return(input)
         //alert(input);
      },
      red: function(){
        return("red")
      }
   }
})();
