var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'post',
  password: 'Long2311a*',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(err);
});

// api get data from postgreSql
router.get('/getdata', function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  //get data 
  pool.query('SELECT * FROM post_info', (err, response) =>{
    if(err){
      console.log(err);
    } else {
      // console.log(response);
      // console.log(response.rows);
      res.send(response.rows);
    }
    // pool.end();
    
  })
});

router.get('/add', function(req, res, next) {
   res.render('add', {});
});


router.post('/add', function(req, res, next) {
  var post_name = req.body.post_name,
  post_category = req.body.post_category,
  image = req.body.image;
  
  pool.query("INSERT INTO post_info (post_name,post_category,image) VALUES ($1,$2,$3)",[post_name,post_category,image], (err,response) => {
    if(err){
      res.send(err);
    } else {
      res.send('add success' + post_name + post_category + image);
    }
  })

});


module.exports = router;
