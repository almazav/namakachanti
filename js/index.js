function myFunction(){
    var x = document.getElementById("myTopNav");
    if (x.className == "topnav"){
        x.className += "responosive";

    } else{
        x.className ="topnav";
    }
}


$(function(){
    $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");

})