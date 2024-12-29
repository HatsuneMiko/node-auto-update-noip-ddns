# NO-IP DDNS定时更新

基于node定时动态更新no-ip（https://www.noip.com/）域名绑定的ip



## 怎么运行?

1.需要node.js环境

2.在ddns函数中填写你的域名和账号密码

```js
async function ddns() {
    //域名
    let hostname = ''
    // no-ip 账号
    let noipAccount = ''
    // no-ip 密码
    let noipPassword = ''
```

3.安装依赖

```shell
npm i 
```

4.运行

```shell
npm run start  
```

