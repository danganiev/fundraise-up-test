const Koa = require('koa');
const KoaRouter = require('koa-router')

const app = new Koa();
const router = new KoaRouter();

router.post("donate", "/donate", (ctx) => {
    ctx.body = {
        ok: true
    };
})

console.log('Starting fundraise up test server...')
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
console.log('Listening to port 3000')
