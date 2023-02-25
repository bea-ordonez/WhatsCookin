const fetchData = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
  .then(res => res.json())  
  .catch(error => console.log(`Issue at: ${error}`))
};

export default fetchData;
