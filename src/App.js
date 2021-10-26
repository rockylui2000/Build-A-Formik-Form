import React from "react";
import './index.css';
import {useFormik} from 'formik'
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      emailField: '',
      pswField: '',
    },
    onSubmit: value =>{
      alert('Hello ' + formik.values.emailField + ' ' + formik.values.pswField + ' is submitted');
    },
  validate: values => {
    let errors = {};
    if (!values.emailField) {
      errors.emailField = 'Field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formik.values.emailField)) {
      errors.emailField = 'Invalid email address';
    }
    if (!values.pswField) errors.pswField = 'Field required';
    return errors;
  }
  });
  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email</div>
      <input name="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
      {formik.errors.emailField ? <div style={{color:'red'}}>{formik.errors.emailField}</div>: null}
      <div>Password</div>
      <input name="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
      {formik.errors.pswField ? <div style={{color:'red'}}>{formik.errors.pswField}</div>: null}
      <button type="submitBtn">Submit</button> 
    </form>
    </div>
  );
}

export default App;
