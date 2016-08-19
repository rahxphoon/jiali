/**
 * Created by HECH on 8/18/2016.
 */
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/jiali');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var lightSchema = new Schema({
    link: String,
    title: String,
    price: String,
    name: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.light = db.model('light', lightSchema); //  与users集合关联