window.onload = function() {
    // 设置当前页面已被打开
    localStorage.setItem('jsStorage', JSON.stringify({
        opened: true
    }));

    var elTargetWin = document.getElementById('targetWin');

    function setTargetWin() {
        var href = localStorage.getItem('href');
        if(href && elTargetWin.src !== href) {
            elTargetWin.src = localStorage.getItem('href');
        }
    }

    // 初始化
    setTargetWin();

    // bad
    // setInterval(function() {
    //     setTargetWin();
    // }, 1000);

    window.addEventListener('storage', function(e) {
        if (e.key === 'href') {
            setTargetWin();
        }
    }, false);
};

window.onbeforeunload = function() {
    // 设置当前已被关闭，a.html需重新打开
    localStorage.setItem('jsStorage', JSON.stringify({
        opened: false
    }));
};
