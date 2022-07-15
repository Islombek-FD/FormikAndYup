import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas';

const onSubmit = async (values, actions) => {
   console.log(actions, values);

   await new Promise(resolve => setTimeout(resolve, 4000));

   actions.resetForm()
}

function BasicForm() {
   const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         age: '',
         password: '',
         confirmPassword: ''
      },
      validationSchema: basicSchema,
      onSubmit,
   })

   return (
      <div>
         <h2>BasicForm</h2>

         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor='email'>Email</label>
               <input onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? 'input-error' : ''} type="email" id='email' value={values.email} />
            </div>

            <div>
               <label htmlFor='age'>Age</label>
               <input onChange={handleChange} onBlur={handleBlur} className={errors.age && touched.age ? 'input-error' : ''} type="number" id='age' value={values.age} />
            </div>

            <div>
               <label htmlFor='password'>Password</label>
               <input onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? 'input-error' : ''} type="password" id='password' value={values.password} />
            </div>

            <div>
               <label htmlFor='confirmPassword'>Confirm password</label>
               <input onChange={handleChange} onBlur={handleBlur} className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''} type="password" id='confirmPassword' value={values.confirmPassword} />
            </div>

            <button type='submit' disabled={isSubmitting}>Send</button>
         </form>
      </div>
   )
}

export default BasicForm;