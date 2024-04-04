let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getrequest(){
  let div = document.createAttribute('div')
  div.className= 'card'
  div.innerHTML=` 
  <h2>Woody</h2>
  <img src="[toy_image_url]" class="toy-avatar" />
  <p>4 Likes</p>
  <button class="like-btn" id="[toy_id]">Like ❤️</button>`
  
document.querySelector('toy-collection').appendChild(div)

}
// console.log(getrequest);

function patchrequest(){
  fetch('http://localhost:3000/toys'),{
    method : 'PATCH',
    headers:{
       "Content-Type": "application/json",
        Accept: "application/json"
     },
     body: JSON.stringify({
        "name": "Jessie",
        "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
        "likes": 0
     })
 }
}

