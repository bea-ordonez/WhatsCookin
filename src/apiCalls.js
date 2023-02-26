const fetchData = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
  .then(res => res.json())  
  .catch(error => console.log(`Issue at: ${error}`))
};

// const postSavedRecipes = (savedRecipes) => {
//   fetch('http://localhost:3001/api/v1/usersRecipes', {
//     method: 'POST',
//     body: JSON.stringify(savedRecipes),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json()
//   })
//   .then(json => console.log('here is line 21 of postSaved', json)
//   .catch(error => console.log('Caught error:', error)))
// }
export default fetchData