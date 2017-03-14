/**
 * Created by mwaseem on 3/14/2017.
 */
var fs = require('fs');
var common= {
    walkSync: function (dir, rel, filelist) {
        var fs = fs || require('fs'),
            files = fs.readdirSync(dir + rel);
        filelist = filelist || [];
        files.forEach(function (file) {
            if (fs.statSync(dir + rel + file).isDirectory()) {
                filelist = walkSync(dir, rel + file + '/', filelist);
            }
            else {
                filelist.push({path: rel + file, filename: file});
            }
        });
        return filelist;
    },
    getList: function (path, filelist) {
        var fs = fs || require('fs'),
            files = fs.readdirSync(path);

        filelist = filelist || [];
        files.forEach(function (file) {
            if (fs.statSync(path + file).isDirectory()) {
                filelist = common.getList(path + file + '/', filelist);
            }
            else {
                filelist.push(path + file);
            }
        });
        return filelist;
    },
    readFilesAndExecute: function (list, fn) {
        list.forEach(function(filepath){

            var response = fs.readFileSync(filepath,'ascii');
            fn(filepath,response);
        });
    },
    writeFileWithData:function(path,data) {
        fs.writeFile(path, data, 'ascii');
    }
}


module.exports=common;


