const axios = require("axios");

const buscarPais = async (pais) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${pais}`
    );

    return response.data;
  } catch (error) {
    return {
      error: "Erro na api",
      errorCause: error,
      errorStatus: error.response?.data?.status || 500,
    };
  }
};

module.exports = { buscarPais };
