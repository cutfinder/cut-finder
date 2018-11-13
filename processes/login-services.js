var methods = {
  login : function(username, password) {
    var loginJSON = require('../credentials.json')
    //var jsonObj = JSON.parse(loginJSON);
    //var validPass = JSON.parse('../credentials.json').password;
    if (username == loginJSON.username && password == loginJSON.password) { return true; }
    return false;
  },
}

exports.data = methods;
