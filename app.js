const publicIp = require('public-ip');
const axios = require('axios');
const Buffer = require('buffer').Buffer; // 用于 base64 编码

let ip = ''

async function ddns() {
    //域名
    let hostname = ''
    // no-ip 账号
    let noipAccount = ''
    // no-ip 密码
    let noipPassword = ''
    // 获取本机ip
    if(ip === await publicIp.v4()){
        console.log(`当前IP还是：${ip},不重新提交解析地址。`)
        return null
    }else{
        ip = await publicIp.v4()
        console.log(`本机公网ip:${ip}`);
    }

    let auth = Buffer.from(`${noipAccount}:${noipPassword}`).toString('base64');

    axios.get(`https://dynupdate.no-ip.com/nic/update?hostname=${hostname}&myip=${ip}`, {
        headers : {
            'Authorization': `Basic ${auth}`,
            'User-Agent': 'ddnslib.UpdateNoIP/1.0 Cocoonshu'
        }
    })
    .then(response => {
        console.log('status:'+response.status);
        console.log('statusText:'+response.statusText);
        console.log('data:'+response.data);
        console.log(`已将${ip}解析到${hostname}`);
    })
    .catch(error => {
        console.error('Error posting data:', error);
    });

}

//先执行一次
ddns()
setInterval(ddns,30000)
