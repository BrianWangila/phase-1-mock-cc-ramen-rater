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

