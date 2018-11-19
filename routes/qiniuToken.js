var express = require('express');
var router = express.Router();
const qiniu = require('../models/getQiniuToken')

router.route('/')
    .get((req, res, next) => {
        (async () => {
            const token = await qiniu.getToken()
            return {
                code: 0,
                token
            }
        })()
            .then(r => {
                res.json(r)
            })
            .catch(e => {
                next(e)
            })
    })

module.exports = router
