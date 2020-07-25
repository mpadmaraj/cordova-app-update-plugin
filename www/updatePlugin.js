var InAppUpdateLoader = function(require, exports, module) {
  var exec = require('cordova/exec');

  function UpdatePlugin() {}

  UpdatePlugin.prototype.update = function(successCallback, errorCallback, config) {
    exec(successCallback, errorCallback, 'UpdatePlugin', 'update', [{ 'flexibleUpdateStalenessDays': config.flexibleUpdateStalenessDays, 'immediateUpdateStalenessDays': config.immediateUpdateStalenessDays }]);
  }


  var inAppUpdate = new UpdatePlugin();
  module.exports = inAppUpdate;
};

InAppUpdateLoader(require, exports, module);
 
cordova.define("cordova/plugin/InAppUpdate", InAppUpdateLoader);
