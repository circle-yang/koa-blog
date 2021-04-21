/*
 * @Author: your name
 * @Date: 2021-04-15 09:44:26
 * @LastEditTime: 2021-04-16 10:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-blog\app.js
 */

const Koa = require('koa');
const fs = require('fs'); // 引入fs
const Router = require('koa-router'); // 引入koa-router

const app = new Koa();
const router = new Router();

// 响应.Koa原生路由实现
app.use(ctx => {
    const {url} = ctx.request
    ctx.response.body = url
});

app.listen(3000, () => {
    console.log('App started on http://localhost:3000')
});