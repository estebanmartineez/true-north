const axios = require('axios');
const config = require('../helpers/config');

const getTitles = async (sentences) => {
    return await axios.get(`${config.HIPSUM_URI}${sentences}`);
}

module.exports = {
    getTitles
}
