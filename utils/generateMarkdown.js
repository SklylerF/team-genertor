
//Generates a README using info from index.js
function generateMarkdown(data) {
  //changes values 
  const { manager, managerID, managerEmail, managerOfficeNumber, engineer, } = data;

  //Returns the completed README
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
       <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${managerID}</h6>
    <p class="card-text">${managerOfficeNumber}</p>
    <a href="#" class="card-link">${managerEmail}</a>
  </div>
</div>
  </body>
  </html>
 

  `;
}


module.exports = generateMarkdown;