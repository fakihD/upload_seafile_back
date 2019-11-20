// -- Load model needed for the project
const cloudProcess = require('./cloudProcess');

// -- AUTH
function actionAuth (req, res) {
    console.log("Action : cloud - AUTH");
    
    try{
        cloudProcess.processAuth(req.body.username, req.body.password).then((callback) => {
            console.log("Process : cloud - TOKEN : " + callback);

            res.send(callback);
        });
    } catch(err) {
        console.log("Process : cloud - AUTH : Error - " + err);

        res.send(err);
    }
};

// -- UPLOAD
function actionUpload (req, res) {
    console.log("Action : cloud - UPLOAD");
    
    try{
        cloudProcess.processAuth(req.body.username, req.body.password).then((token) => {
            console.log("Process : cloud - TOKEN : " + token);

            if(token != null){
                cloudProcess.processUpload(req.body.upload, token).then((callback) => {
                    res.send(callback);
                });
            }
        });
    } catch(err) {
        console.log("Process : cloud - UPLOAD : Error - " + err);

        res.send(err);
    }
};

exports.actionAuth = actionAuth;
exports.actionUpload = actionUpload;