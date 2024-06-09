//selecting each photo
const photo_one = document.getElementById("photo_one");
const photo_two = document.getElementById("photo_two");
const photo_three = document.getElementById("photo_three");
const photo_four = document.getElementById("photo_four");
const photo_one_img = document.querySelector(".photo-one");
const phome = document.getElementById("phome"); //id added to img-1
//Adding event listner to each photo

//Event Listner for photo one ----------------------------------------
photo_one.addEventListener("mouseover", () => {
  //here we need to create the box that will show up whenever we hover on photo
  const div = document.createElement("div");
  //set classname of box to div element
  div.className = "box1";
  photo_one_img.appendChild(div);
  //adding opacity of 0 to each photo whenever we hover to photo one
  phome.style.opacity = 0; //extend id added to the img-1
  photo_two.style.opacity = 0;
  photo_three.style.opacity = 0;
  photo_four.style.opacity = 0;
  //adding mouseout listener so that whenever we move out our mouse the box will be hidden
  photo_one.addEventListener("mouseout", () => {
    div.style.display = "none";
    //removing opacity of 1 to each whenever we move out mouse from photo one
    photo_one.style.opacity = 1;
    photo_two.style.opacity = 1;
    photo_three.style.opacity = 1;
    photo_four.style.opacity = 1;
    phome.style.opacity = 1;
  });
});
