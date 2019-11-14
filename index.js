var Memcached = require('memcached');
const express =  require('express');

//Initialiazations
const app = express();
var memcached = new Memcached('192.168.0.102:11211');


//Settings
app.set('appName', 'Node, Memcached moove-it challenge');
app.set('port', process.env.PORT || 3000);

//Server
app.listen(app.get('port'), () => {
    console.log(`${app.get('appName')} is running`);
    console.log(`Server on port ${app.get('port')}`);
});