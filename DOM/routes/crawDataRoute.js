/**
 * Created by HECH on 8/19/2016.
 */
var express = require('express'),
    controller = require('../controllers/crawedLightData.js');
module.exports = function (app) {
    var router = express.Router();
    router.route('craw/findAllData').post(controller.crawAllData)
}