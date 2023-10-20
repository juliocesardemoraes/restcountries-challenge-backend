const { Router } = require("express");
const router = Router();
const { buscarPais } = require("./service.js");

router.get("/countries", async (req, res) => {
  const paisInfo = await buscarPais(req.query?.pais);
  res.send({
    pais: paisInfo,
  });
});

module.exports = router;

// Controller(OK) -> Service(OK) -> Api(paises OK) -> Service -> Controller
