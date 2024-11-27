const Validation = (value) => {
    let error = {};
  
    if (!value.email) {
      error.email = "Name Is Required";
    }
    else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
        error.email = "Email invalid";
      }
    if (!value.subject) {
      error.subject = "subject is Requierd";
    } 
  
    if (!value.massage) {
      error.message = "message Is Required";
    }
  
    return error;
  };
  
  export default Validation;