
var scattered = {
  provides: ['express/middleware/register'],
  args: ['express/log', 'svc!controllers/setup']
};

module.exports = function(log, setupControllers) {
  var module = {};

  module.register = function(expressApp) {
    return setupControllers(expressApp);
  };
  
  return module;
};
module.exports.__module = scattered;

