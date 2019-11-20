const sf = require('node-seafile');

// -- AUTH
async function processAuth (username, password) {
  console.log("Process : cloud - AUTH : " + new ObjectId(req.params.id));

  try{
    return await sf.auth.getToken(username, password);
  } catch(err) {
    console.log("Process : cloud - AUTH : Error - " + err.name);

    return err;
  }
};

// -- UPLOAD
async function processUpload (upload, token) {
  console.log("Process : cloud - UPLOAD : " + new ObjectId(req.params.id));

  try{
    return await sf.api.post('/ping', upload, token);
  } catch(err) {
    console.log("Process : cloud - UPLOAD : Error - " + err.name);

    return err;
  }
};

exports.processAuth = processAuth;
exports.processUpload = processUpload;