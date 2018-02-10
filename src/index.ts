import Server from './server/server';
import router from './router/router';



const server= Server.init(8000);
server.app.use(router);
server.start(()=>console.log("Server is running on port",server.app.get('port'))
);