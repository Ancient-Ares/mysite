var express = require('express');
var router = express.Router();

const rawBody = require('raw-body');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function (req, res, next) {
	//通过raw-body模块接收接口传过来的xml数据
	// var data = await rawBody(ctx.req, {length: ctx.length, limit: '1mb', encoding: ctx.charset});
	// console.log(data);
	res.send('');
})

module.exports = router;
