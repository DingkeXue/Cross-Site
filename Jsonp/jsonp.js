/*
* 封装 JSONP
* url 请求连接
* data 请求参数
* cb 回调函数
* */

function JSONP({url, params, cb}) {
    return new Promise(((resolve, reject) => {
        let script = document.createElement('script');
        window.cb = function (data) {
            resolve(data);
            document.body.removeChild(script);
        };

        // 拼接参数
        params = {...params, cb};  // wd=a&cb=callback
        let arrs = [];
        for (let key in params) {
            arrs.push(`${key}=${params[key]}`);
        }
        console.log(`${url}?${arrs.join('&')}`);
        script.src = `${url}?${arrs.join('&')}`;
        document.body.appendChild(script);
    }))
}

JSONP({
    url:'http://localhost:8080/api/jsonp',
    params: {msg: 'hello'},
    cb: 'callback'
});