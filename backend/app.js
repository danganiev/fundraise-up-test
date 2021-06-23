const Koa = require('koa');
const KoaRouter = require('koa-router')
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new KoaRouter();

const mongoClient = new MongoClient("mongodb://root:example@mongo:27017/", { useUnifiedTopology: true });

let dbClient;
async function connectToDB(){
    console.log("Connecting to mongodb...")
    dbClient = await mongoClient.connect();
    app.context.collection = dbClient.db("fundraise-db").collection("donations");
    console.log("Connected to mongodb");
}
connectToDB();

router.post("donate", "/donate", (ctx) => {
    let donation = ctx.request.body.donation;
    if (donation){
        ctx.collection.insertOne({donation: ctx.request.body.donation})
    }

    ctx.body = {
        ok: true
    };
})

// middleware
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods());

console.log('Starting fundraise up test server...')
app.listen(3000);
console.log('Listening to port 3000')
