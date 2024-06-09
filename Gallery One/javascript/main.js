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
});
