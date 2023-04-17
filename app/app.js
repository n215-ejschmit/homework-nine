var homeBody = `<div class="homeContent">
<div class="hero">
 <div class="info">
   <h1>Decorating Ideas</h1>
   <h3>
     "Home is Where The Heart Is." Expressing Creativity Since 1994.
   </h3>
   <div class="blogButton">
     <a href="blog.html"> <span>Our Blog</span></a>
   </div>
 </div>
 <div class="footer">
   <p>Copyright PrettierRooms 1994</p>
 </div>
</div>

</div>`;

var aboutBody = `<div class="about">

<div class="left">

</div>

<div class="right">
  <h2>About Us</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim facilisis gravida neque convallis a. Tincidunt vitae semper quis lectus nulla at volutpat diam. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie ac. Euismod in pellentesque massa placerat duis ultricies lacus. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Nisl tincidunt eget nullam non. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Amet consectetur adipiscing elit ut aliquam purus sit amet. Convallis convallis tellus id interdum. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse.

  </p>
</div>
</div>`;

var blogBody = `<div class="blog">
<div class="left">
  <div class="imgbox imageOne"></div>
  <div class="imgbox imageTwo"></div>
</div>
<div class="right">
  <div class="blogDays">
    <div class="dayOne">
      <h2>Blog Day #1:</h2>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit libero. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Massa placerat duis ultricies lacus. Nullam ac tortor vitae purus."
    </div>

    <div class="dayTwo">
      <h2>Blog Day #2:</h2>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt tortor aliquam nulla facilisi. Mattis nunc sed blandit libero. Consequat mauris nunc congue nisi vitae suscipit tellus. Risus sed vulputate odio ut enim. Lorem dolor sed viverra ipsum nunc aliquet. Enim ut tellus elementum sagittis vitae et leo duis ut. Turpis egestas integer eget aliquet nibh. Id diam vel quam elementum. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Massa placerat duis ultricies lacus. Nullam ac tortor vitae purus."
      </p>
    </div>
  </div>
</div>
</div>`;

var contactBody = `<div class="contact">
<div class="left">

</div>
<div class="right">
  <h2>Contact Us</h2>
  <div class="form">
    <p>Name:</p>
    <input type="text">
    <p>Email:</p>
    <input type="text">
    <p>Phone:</p>
    <input type="text">
    <div class="button">
      <a href="#"><Span>Submit</Span></a>
    </div>
  </div>
  

  </div>
</div>`;


function initListeners(){

  $("nav a").on("click", function(e){
    let btnID = e.currentTarget.id;
    var pageContentID = btnID + "Body";
    console.log(eval(pageContentID));
    changePageContent(pageContentID);
  });
}

function changePageContent
(pageContentVarName) {
  $("#app").html(eval(pageContentVarName));
}

$(document).ready(function (){
    changePageContent("homeBody");
    initListeners();
  });



