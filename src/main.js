const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
 const promises = ids.map((id) => {
   const url = `${BASE_URL}/constellations/${id}`;
   return axios.delete(url);
 }) ;

 return Promise.all(promises);
}

const ids =

module.exports = {
  bulkDelete,
};
