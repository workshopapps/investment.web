import axios from 'axios';

export const getCompanyData = async (companyId) => {
    return await axios
        .get(`/company/${companyId}`)
        .then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
        .catch((err) => {
            console.log(err.error_message);
            return err;
        });
};

export default { getCompanyData };
