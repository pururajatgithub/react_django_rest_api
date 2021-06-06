import React from 'react';
import useForm from './useForm';
import validateInfo from  './validateInfo';
import './Form.css';
const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm , validateInfo);



    return(

        <div className="form-content-center">
            <form className="form" method="POST" onSubmit={handleSubmit}>
                <h1>
                    Register Here
                </h1>
                <div className="form-group">
                  <label className="form-label" for="FirstName">First Name</label>
                  <input type="text" className="form-control" name="FirstName" id="FirstName"  placeholder="Enter your first name" value={values.FirstName}  onChange={handleChange}  required />
                  {errors.FirstName && <p>{errors.FirstName}</p>}
                </div>
                
                <div className="form-inline form-group">
                  <label className="form-label" for="LastName">Last Name</label>
                  <input type="text" className="form-control" name="LastName" id="LastName" aria-describedby="helpId" placeholder="Enter your last name" value={values.LastName}  onChange={handleChange} required />
                  {errors.LastName && <p>{errors.LastName}</p>}
                </div>

                <div className="form-inline form-group">
                  <label className="form-label" for="EmailId">Email Address</label>
                  <input type="email" className="form-control" name="EmailId" id="EmailId" aria-describedby="helpId" placeholder="Enter your email address" value={values.EmailId}  onChange={handleChange} required />
                  {errors.EmailId && <p>{errors.EmailId}</p>}
                </div>

                <div className="form-inline form-group">
                  <label className="form-label" for="Phone">Phone Number</label>
                  <input type="phone" className="form-control" name="Phone" id="Phone" aria-describedby="helpId" placeholder="1234567890" value={values.Phone}  onChange={handleChange} required />
                  {errors.Phone && <p>{errors.Phone}</p>}
                </div>
                <div className="form-inline form-group">
                  <label className="form-label" htmlFor="Type">Storage Type</label>
                  <select className="form-control" id="Type" name="Type" value={values.Type}  onChange={handleChange}  >
                    
                    <option className="form-control" value={"DataBase"}>Database</option>
                    <option className="form-control" value={"LocalFile"}>Local File</option>
                  </select>
                  {errors.Type && <p>{errors.Type}</p>}
                </div>
                <button className="form-input-btn" type="submit">Submit</button>
            </form>
            
        </div>
    );
};


export default FormSignup;