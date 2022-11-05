'use strict';
const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const router = require('./contracts/routes');

const app = new Koa();
app.use(bodyParser())
app.use(router.routes());

const port = 3000;
app.listen(port,()=>{
    console.log(`App is running on ${port}`);
});