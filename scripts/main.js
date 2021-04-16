"use strict";

$(function(){
  console.log("TEST");
 $("#footer-content").load("pages/footer.html");     // Loads The Footer Element.
 $("#header-content").load("pages/header.html"); // Loads The Header Element.

 function loadContent(pageName) {
   switch (pageName) {
     case "home":
       $("#main-content").load("pages/home.html");
       break;
     case "giveaway":
       $("#main-content").load("pages/giveaway.html");
       break;
   }
 }
}());
