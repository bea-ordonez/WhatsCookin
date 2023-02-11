const userData = fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users").then(response=>response.json()).catch(data=>console.log(data))
console.log(userData);

export default;