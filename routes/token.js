var express = require('express');
var router = express.Router();
var appID = 'wx7b56fa9456d5c29e';
var appSecret = 'fd144eaee98fb05f73e9b538f56a5f06';
var token = 'afjgs007wechatToken';
var API = require('wechat-api');
var api = new API(appID,appSecret);
var app = express();
var wechat = require('wechat');
var config = {
	appid: appID,
	appsecret: appSecret,
	token: token
};


/* GET home page. */
router.get('/', wechat(config, function (req, res, next) {
	var message = req.weixin;
	console.log(message);
	res.reply("Hello");
}));
/*
 * 响应微信测试服务器的连接验证
 **/
router.get('/', function(req, res){
	var echostr = req.query.echostr,
		signature = req.query.signature;
	console.log(signature);
	res.send(req.query.echostr);
});
/*
 * 测试获取token命令
 **/
router.get('/getToken',function(req,res) {
	api.getLatestToken(function(err,token) {
		res.send(token);
	});
});
module.exports = router;


