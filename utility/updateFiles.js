/**
 * Created by mwaseem on 3/14/2017.
 */



var cheerio = require("cheerio");
var common = require('../common/common');
var path = "D:/work/depcrawler/application/depression/www/data/man/depression/";

common.readFilesAndExecute(common.getList(path),function(_p,data){
    var $ = cheerio.load(data);
    var links =$('.symptomPageLink');
    for(var i=0;i<links.length;i++) {
        $('.symptomPageLink')[i].attribs.href = '/#' + $('.symptomPageLink')[i].attribs.href.replace(".html", "");
    }
    common.writeFileWithData(_p,$.html());
});

debugger;
