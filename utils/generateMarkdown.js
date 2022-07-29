
//Generates a README using info from index.js
function generateMarkdown(data) {
  //changes values 
  const { manager, managerID, managerEmail, managerOfficeNumber, engineer, } = data;

  //Returns the completed README
  return `
    
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${managerID}</h6>
    <p class="card-text">${managerOfficeNumber}</p>
    <a href="#" class="card-link">${managerEmail}</a>
  </div>
</div>

  `;
}


module.exports = generateMarkdown;