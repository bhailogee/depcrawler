var Crawler = require("crawler");
var url = require('url');
var fs= require('fs');

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else {
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server


            var path = res.options.uri;
            var directory="data/man/"+path.split('/')[path.split('/').length-1].replace('.html','');
            directory = directory.split('-');
            directory[directory.length-1]="";
            directory=directory.join("-");

            if (!fs.existsSync(directory)) {
                fs.mkdirSync(directory);
            }
            if(res.$('.symptomBoxMainContent').html()!=null) {
                fs.writeFile(directory + "/" + path.split('/')[path.split('/').length - 1], res.$('.symptomBoxMainContent').html(), function (err) {
                    if (err) throw err;
                    console.log('It\'s saved!');
                });

                if ($('.symptomBoxMain h2').text().trim().toLowerCase() == "feedback") {
                    //break the loop
                }
                else {
                    var filiePath  = directory + "/" + path.split('/')[path.split('/').length - 1];
                    var aa = filiePath.split('-');
                    aa[aa.length - 1] = getHtmlNumberIncr(filiePath, 1);
                    filiePath = aa.join('-');
                    while (fs.existsSync(filiePath)) {
                        var aa = filiePath.split('-');
                        aa[aa.length - 1] = getHtmlNumberIncr(filiePath, 1);
                        filiePath = aa.join('-');
                    }
                    path = path.split('-');
                    path[path.length-1]=getHtmlNumberIncr(filiePath, 0);
                    path = path.join('-');
                    c.queue(path);
                }
            }
        }
        done();
    }
});

//c.queue('https://www.drugs.com/symptom/diffuse-pain-1.html');
// Queue just one URL, with default callback

c.queue(['https://www.drugs.com/symptom/forgetfulness-memory-loss-1.html',
    'https://www.drugs.com/symptom/hair-loss-in-men-1.html',
    'https://www.drugs.com/symptom/headache-1.html',
    'https://www.drugs.com/symptom/jaw-gum-or-tooth-pain-1.html',
    'https://www.drugs.com/symptom/lightheaded-with-standing-1.html',
    'https://www.drugs.com/symptom/neck-pain-1.html',
    'https://www.drugs.com/symptom/new-onset-dizziness-1.html',
    'https://www.drugs.com/symptom/swollen-glands-general-1.html',
    'https://www.drugs.com/symptom/swollen-glands-in-the-neck-1.html',
    'https://www.drugs.com/symptom/dry-eyes-and-mouth-1.html',
    'https://www.drugs.com/symptom/eye-discharge-1.html',
    'https://www.drugs.com/symptom/pain-in-the-eye-1.html',
    'https://www.drugs.com/symptom/problems-with-vision-1.html',
    'https://www.drugs.com/symptom/coughs-and-colds-1.html',
    'https://www.drugs.com/symptom/dry-mouth-and-excessive-thirst-1.html',
    'https://www.drugs.com/symptom/dry-skin-1.html',
    'https://www.drugs.com/symptom/earache-in-adults-1.html',
    'https://www.drugs.com/symptom/persistent-cough-1.html',
    'https://www.drugs.com/symptom/smell-and-taste-loss-1.html',
    'https://www.drugs.com/symptom/sore-throat-1.html',
    'https://www.drugs.com/symptom/sudden-hearing-loss-1.html',
    'https://www.drugs.com/symptom/swallowing-difficulty-1.html',
    'https://www.drugs.com/symptom/swollen-glands-general-1.html',
    'https://www.drugs.com/symptom/tinnitus-1.html',
    'https://www.drugs.com/symptom/chest-pain-1.html',
    'https://www.drugs.com/symptom/coughs-and-colds-1.html',
    'https://www.drugs.com/symptom/heart-palpitations-1.html',
    'https://www.drugs.com/symptom/low-back-pain-1.html',
    'https://www.drugs.com/symptom/numbness-or-tingling-1.html',
    'https://www.drugs.com/symptom/shortness-of-breath-in-adults-1.html',
    'https://www.drugs.com/symptom/wheezing-in-adults-1.html',
    'https://www.drugs.com/symptom/elbow-pain-1.html',
    'https://www.drugs.com/symptom/hand-pain-1.html',
    'https://www.drugs.com/symptom/nail-problems-1.html',
    'https://www.drugs.com/symptom/numbness-or-tingling-1.html',
    'https://www.drugs.com/symptom/shoulder-pain-1.html',
    'https://www.drugs.com/symptom/tremor-1.html',
    'https://www.drugs.com/symptom/wrist-pain-1.html',
    'https://www.drugs.com/symptom/acid-reflux-treatment-1.html',
    'https://www.drugs.com/symptom/blood-in-the-urine-in-men-1.html',
    'https://www.drugs.com/symptom/causes-of-impotence-1.html',
    'https://www.drugs.com/symptom/colon-cancer-screening-1.html',
    'https://www.drugs.com/symptom/constipation-in-adults-1.html',
    'https://www.drugs.com/symptom/diarrhea-1.html',
    'https://www.drugs.com/symptom/difficulty-passing-urine-1.html',
    'https://www.drugs.com/symptom/intestinal-gas-guide-1.html',
    'https://www.drugs.com/symptom/loss-of-control-of-urine-in-men-1.html',
    'https://www.drugs.com/symptom/lumps-or-pain-within-the-scrotum-1.html',
    'https://www.drugs.com/symptom/nausea-and-vomiting-1.html',
    'https://www.drugs.com/symptom/painful-or-frequent-urination-in-men-1.html',
    'https://www.drugs.com/symptom/penis-pain-sores-discharge-or-lumps-1.html',
    'https://www.drugs.com/symptom/rectal-bleeding-1.html',
    'https://www.drugs.com/symptom/rectal-pain-or-itching-1.html',
    'https://www.drugs.com/symptom/recurring-abdominal-pain-1.html',
    'https://www.drugs.com/symptom/sexual-problems-in-men-1.html',
    'https://www.drugs.com/symptom/treatment-of-impotence-1.html',
    'https://www.drugs.com/symptom/understanding-new-and-severe-abdominal-pain-1.html',
    'https://www.drugs.com/symptom/understanding-psa-1.html',
    'https://www.drugs.com/symptom/ankle-pain-1.html',
    'https://www.drugs.com/symptom/foot-pain-1.html',
    'https://www.drugs.com/symptom/hip-pain-1.html',
    'https://www.drugs.com/symptom/knee-pain-1.html',
    'https://www.drugs.com/symptom/leg-swelling-edema-new-onset-1.html',
    'https://www.drugs.com/symptom/numbness-or-tingling-1.html',
    'https://www.drugs.com/symptom/osteoarthritis-of-the-knee-1.html',
    'https://www.drugs.com/symptom/persistent-knee-swelling-1.html',
    'https://www.drugs.com/symptom/anxiety-1.html',
    'https://www.drugs.com/symptom/blacking-out-fainting-or-loss-of-consciousness-1.html',
    'https://www.drugs.com/symptom/blood-magnesium-test-1.html',
    'https://www.drugs.com/symptom/daytime-drowsiness-1.html',
    'https://www.drugs.com/symptom/depression-1.html',
    'https://www.drugs.com/symptom/diffuse-muscle-weakness-1.html',
    'https://www.drugs.com/symptom/diffuse-pain-1.html',
    'https://www.drugs.com/symptom/fever-in-adults-1.html',
    'https://www.drugs.com/symptom/forgetfulness-memory-loss-1.html',
    'https://www.drugs.com/symptom/gout-1.html',
    'https://www.drugs.com/symptom/helping-dry-skin-1.html',
    'https://www.drugs.com/symptom/hot-flashes-1.html',
    'https://www.drugs.com/symptom/imbalance-1.html',
    'https://www.drugs.com/symptom/insomnia-1.html',
    'https://www.drugs.com/symptom/itching-without-rash-1.html',
    'https://www.drugs.com/symptom/jaundice-in-adults-1.html',
    'https://www.drugs.com/symptom/numbness-or-tingling-1.html',
    'https://www.drugs.com/symptom/positive-ana-1.html',
    'https://www.drugs.com/symptom/positive-rheumatoid-factor-1.html',
    'https://www.drugs.com/symptom/raynaud-s-1.html',
    'https://www.drugs.com/symptom/unexplained-weight-gain-1.html',
    'https://www.drugs.com/symptom/unintentional-weight-loss-1.html']);


function getHtmlNumberIncr(a,b){return (parseInt(a.split('-')[a.split('-').length-1].replace('.html',''))+b).toString()+'.html'}

//$('a[href$="-1.html"]').map(function(n,k){return k.href})
