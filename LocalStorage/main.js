window.onload = function() {

    function getStorage() {
        try {
            return JSON.parse(localStorage.getItem('jsStorage') || '{"opened":false}');
        } catch(e) {
            return {
                opened: false
            };
        }
    }

    document.addEventListener('click', function(e) {
        var target = e.target,
            href;

        if (target.className && target.className.indexOf('link') > -1) {
            e.preventDefault();

            href = target.href;
            localStorage.setItem('href', href);

            if (!getStorage().opened) {
                window.open('index2.html');
            }
        }
    }, false);
};
