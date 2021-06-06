import {useState, useEffect} from 'react'
import validateInfo from './validateInfo'
const useForm = validateInfo =>{
    const [values, setValues] = useState({

        FirstName : '',
        LastName : '',
        EmailId : '',
        Phone : '',
        Type : ''
    });


    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e => {
        const {name,value} = e.target;
        setValues({
            ...values,
            [ name ] : value
        });
    };  

  //  const state = {
  //         credentials : {'FirstName' : '', 'LastName' : '','phone' : '','email' : ''}
  //   }


    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateInfo(values));
        setIsSubmitting(true);

        
        fetch('http://127.0.0.1:8000/api/users/', {
          method : 'POST',
          headers : {'Content-Type' : 'aaplication/json'},
          body : JSON.stringify()
        })
    };

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            // callback();
          }
        },
        [errors]
      );


    return {handleChange,values,handleSubmit,validateInfo,errors};

};

export default useForm;