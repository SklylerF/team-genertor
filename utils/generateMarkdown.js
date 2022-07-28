
//Generates a README using info from index.js
function generateMarkdown(data) {
  //changes values 
  const { manager, managerID, managerEmail, managerOfficeNumber, engineer, } = data;

  //Returns the completed README
  return `
    
  # ${manager}
  * ${managerID}
  * ${managerEmail}
  * ${managerOfficeNumber}
  

  `;
}


module.exports = generateMarkdown;