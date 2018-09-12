module.exports = (api, options, rootOptions) => {
    api.extendPackage({
      dependencies: {
      }
    });
  
    api.render(
      {
        "./src/plugins/notify/index.js": "./templates/plugins/notify/index.js"
      },
      options
    );
  
    const fs = require("fs");
  
    api.onCreateComplete(() => {
    });
  };
  