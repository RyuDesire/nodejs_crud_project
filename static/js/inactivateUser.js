const deleteButton = document.querySelectorAll('#delete')

console.log(deleteButton);
// deleteButton.addEventListener('click', async (event) => {
//   id = event.target.getAttribute('value');

//   const user = {
//     id: id
// };

// console.log(user);
// const response = await fetch('/delete', {
//     method: 'put',
//     headers: {
//         "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(user)
// }); 

// const result = await response.json();
// document.getElementById('operation-result').innerHTML = await result.message;
// getUsers();
// })