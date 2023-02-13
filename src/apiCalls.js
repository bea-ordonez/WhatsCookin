const fetchData = (info) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${info}`)
  .then(res => res.json())  
  .catch(error => console.log(`Issue at: ${error}`))
}

<<<<<<< HEAD
//export default
=======
export default fetchData;
>>>>>>> 2cfc933aac8fb81dd6e51ad5c9d0a137c8f3c39c
