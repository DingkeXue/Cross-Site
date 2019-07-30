/*
* Nginx 反向代理实现思路：
* 通过 nginx 配置一个代理服务器（域名与 domain1 相同，端口不同）做跳板，反向代理访问 domain2 接口，并且
* 可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录
* 当前域名：domain1 端口号：80
* */
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.responseText);
      }
  }
};
// 访问 nginx 中的代理服务器。切记，这里的路径要是用相对路径
xhr.open('get', '/api/user', true);
// 是否携带 cookie
xhr.withCredentials = true;
xhr.send(null);
