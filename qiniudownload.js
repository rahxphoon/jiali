/**
 * Created by HECH on 8/18/2016.
 */
var qiniu = require("qiniu");


//需要填写你的 Access Key 和 Secret Key
qiniu.conf.ACCESS_KEY = 'h59RUHyq0lA3j-CMUi_s2jfopLN9yc_9gitFGC7E';
qiniu.conf.SECRET_KEY = 'XKLp9QjTRKtomR5OPtswCgSVN7jsu3fk0icgMvqN';

//构建bucketmanager对象
var client = new qiniu.rs.Client();

//你要测试的空间， 并且这个key在你空间中存在
bucket = 'jiali';
key = '16-8-18/87014158.jpg';

//删除资源
client.remove(bucket, key, function(err, ret) {
    if (!err) {
        // ok
    } else {
        console.log(err);
    }
});
