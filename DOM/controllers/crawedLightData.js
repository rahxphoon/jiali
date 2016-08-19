/**
 * Created by HECH on 8/19/2016.
 */
var mongoose = require('mongoose'),
    light = require('../models/crawedLightModel.js').light;
exports.crawAllData = light.find({}, {}, function (err, result) {
    if (err) {
        console.error(err)
    }
    else {
        console.info(result);
    }
});
exports.crawAllData = crawAllData;