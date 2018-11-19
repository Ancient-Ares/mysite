const express = require('express');
const router = express.Router();
const config = require('../config/config');
const API = require('wechat-api');
const wechat = require('wechat');
const rawBody = require('raw-body');
const api = new API(config.appid, config.appsecret);
const app = express();

/* GET home page. */
router.get('/', wechat(config, function (req, res, next) {
	const message = req.weixin;
	console.log(message);
	res.reply("Hello");
}));
/*
 * 响应微信测试服务器的连接验证
 **/
router.get('/', function (req, res) {
	const echostr = req.query.echostr
	const signature = req.query.signature;
	console.log(signature);
	res.send(req.query.echostr);
});
/*
 * 测试获取token命令
 **/
router.get('/getToken', function (req, res) {
	api.getLatestToken(function (err, token) {
		res.send(token);
	});
});

router.post('/', async (ctx) => {
	//通过raw-body模块接收接口传过来的xml数据
	var data = await rawBody(ctx.req, {length: ctx.length, limit: '1mb', encoding: ctx.charset});
	console.log(data);
	ctx.status = 200;
	ctx.type = 'application/xml';
	ctx.body = '';
})

module.exports = router;


