export default function validateInfo(values) {
    let errors = {}

    if(!values.FirstName.trim()){
        errors.FirstName = "FirstName required"
    }

    //Lastname
    if(!values.LastName.trim()) {
        errors.LastName = "Last Name required"
    }

    //Email
    if(!values.EmailId){
        errors.EmailId= "Email required"
    }

    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.EmailId)){
        errors.EmailId = "Invalid Email"
    }
    if(!values.Phone){
        errors.Phone = "Phone number required"
    }
    else if(values.Phone.length < 10){
        errors.Phone = "Invalid Phone number"
    }
    if(!values.Type){
        errors.Type = "Select one of storage type"
    }

    return errors;
}