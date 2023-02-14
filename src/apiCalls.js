const fetchData = (info) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${info}`)
  .then(res => res.json())  
  .catch(error => console.log(`Issue at: ${error}`))
};

export default fetchData;
