/*
 * @Author: your name
 * @Date: 2021-04-15 09:44:26
 * @LastEditTime: 2021-04-21 16:21:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa-blog\app.js
 */
import Koa from "koa"
// import fs from "fs"
import Router from "koa-router"

const app = new Koa();
const router = new Router();

// 响应.Koa原生路由实现
app.use(ctx => {
    const { url } = ctx.request
    ctx.response.body = url
});

// 使用accepts作为内容协商，告诉服务器浏览器接受什么样的书记类型,默认返回类型 text/plain
//ctx.request.accepts再请求头部附带信息
//ctx.response.type指定返回类型


app.listen(3000, () => {
    console.log('App started on http://localhost:3000')
});