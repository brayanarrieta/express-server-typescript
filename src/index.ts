const bodyParser = require('body-parser');

import Server from './server/server';
import router from './router/router';

const server= Server.init(8000);

//add body-parser
server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({ extended: true }));
//assign router
server.app.use(router);


server.start(
    ()=>console.log("Server is running on port",server.app.get('port'))
);