
$(document).ready( () => {


$("#dropDown").hide();


});



if (screen.width<766) {
$(document).ready( () =>{
   
        $(".items").hide();
        $("#dropDown").show();
         $("#dropDown").addClass('drop');


         $("#dropDown").click(() => {

        $(".flex-container").css("flex-direction", "column");
        $(".items").slideToggle();
        $(".back").css("background-color","#f1f1f1");
    })


    });


}






