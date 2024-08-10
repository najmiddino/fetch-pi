// let sendBtn = document.querySelector('.btn')

// let userNum = document.querySelector('.userNum')
// let userAge = document.querySelector('.userAge')
// let container = document.querySelector('.container')


// const url  = 'https://dummyjson.com/users'



// sendBtn.addEventListener('click', e => {
//   e.preventDefault()

//   const number = userNum.value
//   const age = userAge.value

//   const res =  async (url) => {
//     const response = await fetch(url) 
//     const data = await response.json()
//     return render(data, age, number)
//   }

//   res(url)

//   userNum.value = ''
//   userAge.value = ''
// })


// function render (arr, age, number) {
//   const users = arr.users

//   const cardNum = users.slice(0, number)
//   const cardAge = cardNum.filter(item=> item.age > age)

//   userAge.forEach(user => {
//     const user = document.createElement('div');
//     user.innerHTML = `
//       <h3>${user.firstName} ${user.lastName}</h3>
//       <p>Age: ${user.age}</p>
//       <p>Email: ${user.email}</p>
//     `;
//     container.appendChild(user);
//   });
// }   
 
   




























let sendBtn = document.querySelector('.btn');

let userNum = document.querySelector('.userNum');
let userAge = document.querySelector('.userAge');
let container = document.querySelector('.container');


let row = document.querySelector('.row')
const url = 'https://dummyjson.com/users';

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const number = userNum.value;
  const age = userAge.value;

  const res = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    render(data, age, number);
  };

  res(url);

  userNum.value = '';
  userAge.value = '';
});

function render(arr, age, number) {
  const users = arr.users;

  const cardNum = users.slice(0, number);
  const cardAge = cardNum.filter((item) => item.age > age);

  cardAge.forEach((user) => {
    const userCard = document.createElement('div');
    userCard.innerHTML = `
      <h3>${user.firstName} ${user.lastName}</h3>
      <p>Age: ${user.age}</p>
      <p>Email: ${user.email}</p>
    `;
    row.appendChild(userCard);
    userCard.classList.add('userCard')
  });
 
}
