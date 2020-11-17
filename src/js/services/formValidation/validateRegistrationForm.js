// Notice the export statement and the import in home.js
// Notice the structure of the parameter and the return value
export default function validateRegistrationForm(formValues) {

  const result = {
    username: validateUserName(formValues.username),
    email: validateEmail(formValues.email),
    phone: validatePhone(formValues.phone),
    age: validateAge(formValues.age),
    profession: validateProfession(formValues.profession),
    experience: validateExperience(formValues.experience),
  };

  let field, isValid = true;
  for(field in result) {
    isValid = isValid && result[field];
  }

  return {
    isValid,
    result,
  };

}

/* Part 1 - Regular expressions 
   Write each of the functions below using a regular expression
   to do the actual validation whenever possible.  
   
   You can write the expressions yourself or find one on the internet.  
   
   You might test your regular expressions
   in the html page I gave you OR you might create a codepen or jsfiddle
   playground to test your functions as you write them.

   The function above calls all of these functions.  You're ready to add 
   validation to home.js.
*/

// must be longer than 3 chars.  Use a regular expression.
function validateUserName(name) {
  const ValidUser= /\w{3,}/;
  return true;
}

// must be a valid email address.  Use a regular expression
function validateEmail(email) {
  const pattern= /^\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,8}$/;
 return true;
}

// must be a valid 10 digit phone number.  Use a regular expression
function validatePhone(phone) {
  const pattern= /^\d{3}[\s.\-]?\d{3}[\s.\-]?\d{4}$/;
  return true;
}

// must be between 10 and 25 inclusive.  Use a regular expression
// to make sure that the age is a 2 digit number before checking the range.
function validateAge(age) {
  
  const validAge = /\d[10-25]/;
  return true;
}

// must be either school, college, trainee or employee.  No reg exp. T.T just regular js code? confused. 
function validateProfession(profession) {
  return true;
}

// must be between 0 and 4 years exclusive.  Use a regular expression.
function validateExperience(experience) {
const validYears= /\d[0-4]/;
  return true;
}
