var neighborhoods = document.getElementsByClassName("dropdowncontent");

for (let i = 0; i < neighborhoods.length; i++) {
    neighborhoods[i].addEventListener("click", function() {
        console.log(i);
        document.getElementById("location").value=neighborhoods[i].innerHTML;
    });
}


document.getElementById("submit").addEventListener("click",function(){

    var myfood = document.getElementById("food").value;
    var mylocation = document.getElementById("location").value;
    foodSearch(myfood,mylocation);
    });

function foodSearch (myfood,mylocation) {
    $.ajax({
             url: "https://yelp-search.herokuapp.com/search",
             
             method: "GET",
             
             data: {
             	term: myfood,
            	location: mylocation
            	},

             success: function(response){
                 console.log(response);
               

                 response.businesses.forEach(myFunction);

                 function myFunction(item) {

                    console.log(item);

                    var element = document.getElementById("post-container");

                    var div = document.createElement("div");

                    var para = document.createElement("p");
                    var node = document.createTextNode(item.name);
                    para.appendChild(node);
                    div.appendChild(para);

                    var picture = document.createElement("img");
                    picture.src = item.image_url;
                    var link = document.createElement("a");
                    link.href= item.url;
                    link.appendChild(picture);
                    div.appendChild(link);

                    var para2 = document.createElement("p");
                    var node2 = document.createTextNode(item.display_phone);
                    para2.appendChild(node2);
                    div.appendChild(para2);

                    var para3 = document.createElement("p");
                    var node3 = document.createTextNode(item.location.address);
                    para3.appendChild(node3);
                    div.appendChild(para3);


                    element.appendChild(div);

                    }
     
                }

         })
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
}
}
}