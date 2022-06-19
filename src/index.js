// write your code here

//adding images to div on load
function appendOneImage(ramen){
  const div = document.querySelector("#ramen-menu")
  const img = document.createElement("img")
  img.src = `${ramen.image}`
  div.appendChild(img)
  img.addEventListener("click", (e) => {
    document.querySelector(".detail-image").src = ramen.image
    document.querySelector(".name").innerText = ramen.name
    document.querySelector(".restaurant").innerText = ramen.restaurant
    document.getElementById("rating-display").innerText = ramen.rating
    document.getElementById("comment-display").innerText = ramen.comment

  })

}

const fetchDataFromServer = () =>{
  fetch("http://localhost:3000/ramens")
  .then(resp => resp.json())
  .then(ramens => ramens.forEach(ramen => appendOneImage(ramen)))
}
fetchDataFromServer()


const addNewMeals = () => {
  const form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newMeals = {
      name: e.target.new_name.value,
      restaurant: e.target.new_restaurant.value,
      image: e.target.new_image.value,
      rating: e.target.new_rating.value,
      comment: e.target.new_comment.value
    }
    fetch("http://localhost:3000/ramens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "appalication/json"
      },
      body: JSON.stringify(newMeals)
    })
    .then(resp => resp.json())
    .then(ramens => ramens)

  location.reload()
  })
}
addNewMeals()






// function handleSubmit(e){
//   let imageObj = {
//     name: e.target.name.value,
//     image: e.target.image.value,
//     restaurant: e.target.restaurant.value,
//     rating: e.target.rating.value,
//     comment: e.target.comment.value
//   }
//   //submit to the DOM
//   oneImage(imageObj)
// }


// // function getImagesFromServer(){
// //   fetch("http://localhost:3000/ramens")
// //   .then(response => response.json())
// //   .then((ramens) => {
// //     ramens.forEach(ramen => ramens.forEach(ramen => appendOneImage(ramen)))
// //   })
// // }


// function addImage(imageObj){
//   fetch("http://localhost:3000/animals", {
//     method: "POST",                             //sending data to server
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify(imageObj)
//   })
//   .then(resp => resp.json())
//   .then(ramens => appendOneImage(ramens))
// }





// function initialize(){
//   ramens.forEach(ramen => {appendOneImage(ramen)})
//   handleSubmit()
//   getImagesFromServer();

// }
// initialize()









// function oneImage(){
//   const image = document.querySelector("#ramen_menu")
//   const imageOne = image.createElement("img");
//   imageOne.innerText = `
//   <img src = "${ramen.image}" alt = "${ramen.name}">
//   <h2>${ramen.name}</h2>
//   <h3> ${ramen.restaurant} </h3>
//   <p>
//     <span> ${ramen.rating} </span>
//   </p>
//   <p> ${ramen.comment} </p>
//   `;
  
//   const div = document.querySelector("#new-ramen");
//   div.appendChild(imageOne);

// }
// oneImage()