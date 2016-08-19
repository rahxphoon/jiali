/**
 * Created by HECH on 8/18/2016.
 */
var light = require('./../models/model.js').light;
//var test = new light({
//    link: 'ss',
//    title: 'test website'
//});
//
//test.save(function (err, result) {
//    if (!err) {
//        console.log('Successfully!!!')
//    }
//});
light.create({
    title:'ssssss'
},function(err,resule){
    if(!err){
        console.log('succ   ')
    }
})