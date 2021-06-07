const container = document.querySelector('.container');
const user = document.querySelector('.user');
const btn = document.querySelector('.btn');

btn.addEventListener('click', getUser);
document.addEventListener('DOMContentLoaded', getLocalStorageUser)

  function getUser(){
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      getUserData(data)
      localStorage.setItem('user', JSON.stringify(data))
    })

    .catch(err => {
      user.innerHTML = `<h2>${err.message}</h2>`
    })
}

function getUserData(userData){
  user.innerHTML = userData.results.map((person)=>(
        `
        <img class="user-image" src=${person.picture.large} alt="random-user" />
        <div class="user-info">
        <h2>Name: ${person.name.title} ${person.name.first} ${person.name.last}</h2>
        <h3>Username: ${person.login.username}</h3>
        <h3>Gender: ${person.gender}</h3>
        <h3>Age : ${person.dob.age} years old </h3>
        <h3>Nationality: ${person.nat} </h3>
        <h3>Email: ${person.email}</h3>
        <h3>Cell: ${person.cell}</h3>
        <h3>Address: ${person.location.street.number}, ${person.location.street.name}, ${person.location.city} ${person.location.state}, ${person.location.country}</h3>
        </div>
        `
      ))
    }
    
function getLocalStorageUser(){
  const localUser = JSON.parse(localStorage.getItem('user'));
  getUserData(localUser);
}