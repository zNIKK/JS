const express = require('express');
const router = express.Router()
const linkController = require('../controllers/linkController')


router.get("/", linkController.allLinks)
router.get("/:title", linkController.redirect)
router.post("/",express.urlencoded({extended : true}), linkController.addLink)
router.get('/add', (req, res) => res.render("index", {error : false, body : {}}));
router.delete('/:id', linkController.deleteLink);
router.delete('/', express.json(), linkController.deleteLink);
router.get('/edit/:id', linkController.loadLink)
router.post("/edit/:id",express.urlencoded({extended : true}) , linkController.editLink)
module.exports = router