/**
 * Created by HECH on 8/18/2016.
 */
/**
 * Created by HECH on 6/2/2016.
 */
var cheerio = require('cheerio'),
    request = require('request'),
    chalk = require('chalk'),
    fs = require('fs'),
    promise = require('bluebird'),
    light=require('./model.js').light,
    result = [];
function crawOnePage(url) {
    return new Promise(function (resolve, reject) {
        request(url, function (err, resp, body) {
            console.log('Crawing ' + url);
            if (err)
                reject(err);
            $ = cheerio.load(body);
            $('div.col-xs-6.col-sm-3.col-md-3.col-lg-3.vertical-gutter-bottom.product-item.text-center-xs').each(function () {
                result.push(
                    {
                        imgsrc: $(this).find('img.zthumbImage.img-responsive').attr('src'),
                        link: "http://www.1stoplighting.com" + $(this).find('div.ProductImageWrapper a').attr('href'),
                        title: $(this).find('div.product-info-wrapper.vertical-gutter-top div.row.no-gutter.product-info').text(),
                        price: $(this).find('div.product-info-wrapper.vertical-gutter-top div.row.no-gutter.product-price span.stylePricetn.jQHDF span.styleSalePricenull').text()
                        //index:value
                    })
            })
            resolve(result);
        })
    })
}
var processAllJobs = function () {
    var files = [];
    for (var i = 100; i < 101; i++) {
        files.push(crawOnePage("http://www.1stoplighting.com/Ceiling-Fixtures/18-0-0-0/list.aspx?bid=cat&page=" + i));
    }
    return Promise.all(files);
}
processAllJobs().then(function (data) {
        var result = JSON.stringify(data);

        console.log('craw finished!!!')
        // console.log(result);
        fs.writeFile("1stoplighting.json", result);
    }
)

