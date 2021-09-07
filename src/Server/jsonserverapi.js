//json-server -github

const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require("path")
//const router = jsonServer.router(path.join(__dirname,'db.json'))
const router = jsonServer.router(path.join("./src/server",'db.json'))
const middlewares = jsonServer.defaults({
    static:"node_modules/json-server/dist"
})

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use(function (req,res,next){
    setTimeout(next,0);
})
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})

//server tourism post request
server.post("/places/", function(req,res,next){
    let error = checkPlace(req.body);
    if(error){
        res.status(400).send(error);
    }
    else{
        //generate the slug for title
        req.body.slug = generateurlslug(req.body.title);
        next();
    }
})

function generateurlslug(value){
    return value;
}
function checkPlace(place){
    if(place.title)
        return "Please enter title";
    return "";
}

// Use default router
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running at port 3001')
})

function generateurlSlug(value) {
    return value
      .replace(/[^a-z0-9_]+/gi, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase();
  }

function checkPlace(place) {
    if (!place.title) return "PlaceTitle is required.";
    if (!place.ptofattraction) return "faomus for is required.";
    return "";
  }