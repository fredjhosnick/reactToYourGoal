function Validation(values){
    let error = {};
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    
    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email[0])) {
        error.email = "Email didn't match";
    } else {
        error.email = "";
    }
    
    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password[0])) {
        error.password = "Password didn't match";
    } else {
        error.password = "";
    }
    
    return error;
}
export default Validation;