const { config } = require("chai");

// Add your code here
function submitData(userNameInput, emailInput){
  let formData = {
    name: userNameInput,
    email: emailInput
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify(formData)
  }

  return fetch('http://localhost:3000/users', configObj).then(resp => resp.json()).then(json => {
    let element = document.createElement('p');
    element.innerHTML = json.id;
    document.querySelector("body").appendChild(element);
  }).catch(function(error) {
    let element = document.createElement('p');
    element.innerHTML = error.message;
    document.querySelector("body").appendChild(element);
  });
};

