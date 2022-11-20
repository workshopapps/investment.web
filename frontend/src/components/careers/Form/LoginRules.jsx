export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.fullName) {
        errors.fullName = 'Your Full name is required';
    } else if (values.fullName.length < 5) {
        errors.fullName = 'Full name must be more than 5 characters';
    }
    if (!values.message) {
        errors.message = 'We want to Know you';
    } else if (values.message.length < 100) {
        errors.message = 'Message must be more than 50 characters';
    }
    return errors;
}
