import * as Service from "../services/services.js"

function initURLListener() {
  $(window).on("hashchange", Service.changeRoutes);
  Service.changeRoutes();
}

//New Form of document.ready function//

$(function (){
  Service.changeRoutes("homeBody");
    initURLListener();
  });



