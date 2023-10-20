const axios = require("axios");

const buscarPais = async (pais) => {
  console.log("Aqui", pais);

  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${pais}`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { buscarPais };
