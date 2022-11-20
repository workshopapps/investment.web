export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.fullName) {
        errors.fullName = 'Full Name is required';
    }
    if (!values.message) {
        errors.message = "You've got to tell me about yourself.";
    }
    return errors;
}
