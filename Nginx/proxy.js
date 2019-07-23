/*
* proxy 服务器
* 域名和 domain1 相同，端口号是 81
* */
server {
    // 监听端口号
    listen: 80;
    // 监听域名
    server_name: www.domain1.com;
    // 对 /api 下的请求进行代理
    location /api {
        // 代理目标地址
        proxy_pass http://www.domain2.com:8080;
        // 修改 cookie 里域名
        proxy_cookie_domain www.domain2.com www.domain1.com;
        index index.html index.htm;

        // 设置访问源
        add_header Access-Control-Allow-Origin http://www.domain1.com;
        add_header Access-Control-Allow-Credentials true;
    }
}
