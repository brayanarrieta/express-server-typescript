import express=require('express');


export default class Server{
    public app:express.Application;


    constructor(private port : number) {
        this.app=express()
        // Express configuration
        this.app.set("port", process.env.PORT || port);
    }

    // The simbol is for optional
    start(callback ?: Function){
        this.app.listen(this.port,callback)
    }

    static init(port:number): Server{
        return new Server(port);
    }

}