
export function changeRoutes() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("this function was imported");
  
    if (pageID != "") {
      $.get(`${pageID}.html`, function (data) {
        console.log("data" + data);
        $("#app").html(data);
      });
    } else {
      $.get("home.html", function (data) {
        console.log("data" + data);
        $("#app").html(data);
      });
      console.log("home");
    }
  }