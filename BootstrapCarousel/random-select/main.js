/*window.onload=function(){
};*/

$(document).ready(function () {
    $("Rul").hide();
    $("input").click(function(){

     let numberOfListItem=$("inli").length;
     let randomChildNumber=Math.floor(Math.random()* numberOfListItem);
     
     $("h1").text($("inli").eq(randomChildNumber).text());
    });

});
