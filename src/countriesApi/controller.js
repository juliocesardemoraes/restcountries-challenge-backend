const { Router } = require("express");
const router = Router();
const { buscarPais } = require("./service.js");

router.get("/countries", async (req, res) => {
  if (!req.query?.pais) {
    return res.status(400).send({
      error: "A requisição não informou o pais corretamente",
    });
  }

  const paisInfo = await buscarPais(req.query?.pais);
  if (paisInfo.error) {
    return res.status(paisInfo.errorStatus).send({
      error: paisInfo,
    });
  }

  res.send({
    pais: paisInfo,
  });
});

module.exports = router;

// Controller(OK) -> Service(OK) -> Api(paises OK) -> Service -> Controller
