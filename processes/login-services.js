var methods = {
  login : function(username, password) {
    if (username == 'admin' && password == 'admin') { return true; }
    return false;
  },
}

exports.data = methods;
