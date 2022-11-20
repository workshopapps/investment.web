// import { useState } from 'react';
// import validate from './LoginRules';

// const useForm = (validate, initialState = {}, validations = []) => {
//     const [values, setValues] = useState({ initialState });
//     const [errors, setErrors] = useState({});
//     const [isSubmitting, setIsSubmitting] = useState(true);

//     // const handleSubmit = (e) => {
//     //     if (e) e.preventDefault();
//     //     setErrors(validate(values));
//     //     setIsSubmitting(true);
//     //     console.log(values);
//     // };
//     const handleChange = (e) => {
//         const newValues = { ...values, [e.target.value]: e.target.value };
//         const { isSubmitting, errors } = validate(validations, newValues);
//         setValues(newValues);
//         setIsSubmitting(isSubmitting);
//         setErrors(errors);
//     };
//     return { values, handleChange, isSubmitting, errors };
// };

// export default useForm;
