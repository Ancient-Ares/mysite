const express = require('express');
const router = express.Router();
const config = require('../config/config');
const API = require('wechat-api');
const wechat = require('wechat');
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
module.exports = router;


