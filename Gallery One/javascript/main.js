//selecting  each photo
const photo1 = document.getElementById("photo1");
const photo2 = document.getElementById("photo2");
const photo3 = document.getElementById("photo3");
const photo4 = document.getElementById("photo4");
const caption = document.getElementById("caption");
//selecting the container division
const container = document.querySelector(".container");
photo1.addEventListener("mouseover", () => {
  //create divison element--------------
  const div = document.createElement("div");
  //SET  class name of box to div
  div.classList.add("box", "box1");
  //create h2 element
  const h2 = document.createElement("h2");
  //set classname of box-caption-header to h2
  h2.className = "box-caption-header";
  //assign value to h2
  h2.innerHTML = "FONNEC <br/> FOX";

  //create p element
  const p = document.createElement("p");
  //set classname of box-caption-country to p
  p.className = "box-caption-country";
  p.innerText = "South Africa";
  //create anchor element
  const link = document.createElement("a");
  //set attribute href and its value to a
  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";
  //append h2,p,a to a div element
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);
  photo4.style.opacity = 0;
  photo3.style.opacity = 0;

  photo2.style.opacity = 1;
  photo2.style.width = "100px";

  photo2.style.top = "-3%";
  photo2.style.marginTop = "-55%";
  photo2.style.marginLeft = "-0%";
  caption.style.display = "none";

  //set opacity of 0 whenever we hover or put cursor on photo4
  photo1.style.opacity = 0;
  //set mouse out event so that any time we move out our cursor to photo 4 the div or box will display nothing
  photo1.addEventListener("mouseout", () => {
    div.style.display = "none";
    //set opacity of 1 whenever we move out our cursor on photo4
    photo1.style.opacity = 1;
    photo4.style.opacity = 1;
    photo2.style.opacity = 1;
    photo3.style.opacity = 1;
    photo2.style.position = "";
    caption.style.display = "block";
    photo2.style.width = "590px";
    photo2.style.marginTop = "0";
    photo2.style.marginLeft = "0px";
  });
});

//Event listeners for photo1 End---------------------------------------
//Event listeners for photo2 start---------------------------------------
photo2.addEventListener("mouseover", () => {
  //create divison element--------------
  const div = document.createElement("div");
  //SET  class name of box to div
  div.className = "box";
  //create h2 element
  const h2 = document.createElement("h2");
  //set classname of box-caption-header to h2
  h2.className = "box-caption-header";
  //assign value to h2
  h2.innerHTML = "HUMPBACK <br/> WHALE";
  photo4.style.opacity = 0;
  photo3.style.opacity = 0;

  //create p element
  const p = document.createElement("p");
  //set classname of box-caption-country to p
  p.className = "box-caption-country";
  p.innerText = "South Africa";
  //create anchor element
  const link = document.createElement("a");
  //set attribute href and its value to a
  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";
  //append h2,p,a to a div element
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);
  //adding box in the center
  div.style.left = "27%";
  //set opacity of 0 whenever we hover or put cursor on photo4
  photo2.style.opacity = 0;
  //set mouse out event so that any time we move out our cursor to photo 4 the div or box will display nothing

  photo2.addEventListener("mouseout", () => {
    div.style.display = "none";
    //set opacity of 1 whenever we move out our cursor on photo4
    photo2.style.opacity = 1;
    photo4.style.opacity = 1;
    photo3.style.opacity = 1;
  });
});
//Event listeners for photo2 end---------------------------------------

//Event listeners for photo3 start---------------------------------------
photo3.addEventListener("mouseover", () => {
  //create divison element--------------
  const div = document.createElement("div");
  //SET  class name of box to div
  div.className = "box";
  //create h2 element
  const h2 = document.createElement("h2");
  //set classname of box-caption-header to h2
  h2.className = "box-caption-header";
  //assign value to h2
  h2.innerHTML = "COMMON BROWN <br/> BABOON";

  //create p element
  const p = document.createElement("p");
  //set classname of box-caption-country to p
  p.className = "box-caption-country";
  p.innerText = "South Africa";
  //create anchor element
  const link = document.createElement("a");
  //set attribute href and its value to a
  link.setAttribute("href", "https://google.com");
  link.textContent = "Know More >";
  photo4.style.opacity = 0;
  //append h2,p,a to a div element
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(link);
  container.appendChild(div);
  //adding box in the center
  div.style.left = "35%";
  //set opacity of 0 whenever we hover or put cursor on photo4
  photo3.style.opacity = 0;
  //set mouse out event so that any time we move out our cursor to photo 4 the div or box will display nothing

  photo3.addEventListener("mouseout", () => {
    div.style.display = "none";
    //set opacity of 1 whenever we move out our cursor on photo4
    photo3.style.opacity = 1;
    photo4.style.opacity = 1;
  });
});
