import * as cors from "cors";
//options for cors midddleware
const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false
};
/*
* Access-Control-Allow-Credentials - This is set to true to enable credentials (I’m using passport in my Express.js
* application for authentication). This is because I set the credentials property in my options object to true.
*
* Access-Control-Allow-Headers - This matches the values that I provided the cors middleware in the allowedHeaders
* property of the configuration options.
*
* Access-Control-Allow-Methods - Again, this matches the values in the methods property.
*
* Access-Control-Allow-Origin - This is the value of my API_URL constant string. This is to limit CORS requests to a
* single origin, which is my Angular application. Note that this matches the Origin header value in the request.
* */

export default options;