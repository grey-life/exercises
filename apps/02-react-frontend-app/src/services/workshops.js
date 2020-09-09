import axios from 'axios';

const getWorkshops = () => {
    return axios.get(`http://workshops-server.herokuapp.com/workshops`)
        .then((response) => {
            return response.data;
        });
}

const getWorkshopsDetails = (id) => {
    return axios.get(`http://workshops-server.herokuapp.com/workshops/${id}`)
        .then((response) => {
            return response.data;
        });
}

export {
    getWorkshops,
    getWorkshopsDetails,
}
