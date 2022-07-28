var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./config/database.properties');

console.log(properties.get("database"));
console.log(properties.get("hostname"));
console.log(properties.get("username"));
console.log(properties.get("password"));
console.log(properties.get("country"));
