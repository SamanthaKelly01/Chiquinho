const startDB = require("./MongoDB");

class Loaders {
    start() {
        startDB();
    }
}

module.exports = new Loaders(); 
