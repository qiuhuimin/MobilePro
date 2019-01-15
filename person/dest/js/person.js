'use strict';

;(function () {
    if (getCookie('userTel')) {
        var username = getCookie('userTel');
        $('.user-name a').hide();
        $('.userxm').html(username);
    } else {
        $('.user-name a').show();
        $('a').on(function (e) {
            location.href = 'login.html';
            e.preventDefault();
        });
        $('a').click(function (e) {
            location.href = 'login.html';
            e.preventDefault();
        });
    }
})();