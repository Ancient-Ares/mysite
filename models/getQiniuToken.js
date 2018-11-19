const fs = require("fs");
const qiniu = require("qiniu");

// 获取uploadToken
async function getToken(params) {
    const accessKey = 'jOQuF11jsFsH3uEtMqYDiQlSoUrBKRquxTGTfLNI';
    const secretKey = 'zmX4J6dCTJcTXTMvoE2u9Q2Am5-T-LL6PpX6cr4k';
    const bucket = 'nmw-img';
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const putPolicy = new qiniu.rs.PutPolicy({
        scope: bucket
    });
    const uploadToken = putPolicy.uploadToken(mac)
    return await uploadToken
}

module.exports = {
    getToken
}