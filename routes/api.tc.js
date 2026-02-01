// @ts-check

const express = require("express");
const router = express.Router();
const apiService = require("../services/apiService.tc");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
router.get("/users", (req, res) => {
  const users = apiService.getUsers();
  res.json(users);
});

const kp = 12;

module.exports = router;

