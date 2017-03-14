/**
 * Created by mwaseem on 3/8/2017.
 */

var cheerio = require("cheerio");

var common = require('../common/common');

//var list = walkSync("D:/work/drugCrawler/",'data/');
//console.log(path.dirname(fs.realpathSync(__filename)));
//console.log(__dirname);
var list = common.walkSync("D:/work/depcrawler/",'data/');
var tree=[];

/*for (var j = 0; j < list.length; j++) {
    tree.push({
        url: '/' + list[j].filename.replace('.html', ''),
        name: 'app.' + list[j].filename.replace('.html', ''),
        views: {
            'menuContent': {
                templateUrl: list[j].path
            }
        }
    });
}*/


for(var i=0;i<list.length;i++) {
    var data = fs.readFileSync(list[i].path, {});


    var $ = cheerio.load(data.toString());
    var links = $('.symptomPageLink');


    for (var j = 0; j < links.length; j++) {
        var linkObj = {
            href: links[j].attribs.href.replace('.html', ''),
            url: "/symptom/"+list[i].filename.replace('.html', ''),
            text: links[j].children[0].data,
            data: {},
            parentpath: list[i].path,
            parentfilename: list[i].filename.replace('.html', ''),
            name: 'app.' + list[i].filename.replace('.html', ''),
            templateUrl: list[i].path
        }
        tree.push(linkObj);
    }
}

fs.writeFile('result.json',JSON.stringify(tree));