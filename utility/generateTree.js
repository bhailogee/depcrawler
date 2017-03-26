/**
 * Created by mwaseem on 3/8/2017.
 */

var cheerio = require("cheerio");
var fs = require('fs');

var walkSync = function(dir,rel, filelist) {
  var fs = fs || require('fs'),
    files = fs.readdirSync(dir+rel);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir +rel+ file).isDirectory()) {
      filelist = walkSync(dir, rel+file + '/', filelist);
    }
    else {
      filelist.push({path: rel + file, filename: file});
    }
  });
  return filelist;
};


var list = walkSync("E:/homework/depcrawler/",'data/');
var tree=[];

for(var i=0;i<list.length;i++) {
  var data = fs.readFileSync(list[i].path, {});


  var $ = cheerio.load(data.toString());
  var links = $('.symptomPageLink');


  for (var j = 0; j < links.length; j++) {
    var linkObj = {
      href: links[j].attribs.href.replace('/symptom/', '').replace('.html', ''),
      text: links[j].children[0].data,
      data:{},
      parentpath: list[i].path,
      parentfilename: list[i].filename.replace('.html', ''),
      name: list[i].filename.replace('.html', ''),
      templateUrl: list[i].path
    }
    tree.push(linkObj);
  }
}

fs.writeFile('result.json',JSON.stringify(tree));