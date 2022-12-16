function join() {
  var foodname = document.getElementById('foodname').value;
  var URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`;
  fetch(URL)
    .then(res => res.json())
    .then(data => showData(data));
  document.getElementById('foodname').value = "";
}
function showData(data) {
  var oldContent = document.getElementById('container');
  oldContent.textContent = "";
  var number = document.getElementById('number').value;
  if(number>data.meals.length){
    number = data.meals.length;
  }
  for (var item = 0; item < number; item++) {
    var newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${data.meals[item].strMealThumb}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${data.meals[item].strMeal}</h5>
    </div>
  </div>`;
    newDiv.classList.add("meal-style");
    oldContent.appendChild(newDiv);
  }
  document.getElementById('number').value = "";
}