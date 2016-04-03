function Contador () {
    var cont = 0, timer,
        incrementar = function () {
            cont++;
        },
        restart_time = function () {
            timer = setInterval(function () {
                incrementar();
            }, 1000);
        };
    restart_time();
    return {
        restart_time: restart_time,
        stop_time: function () {
            clearTimeout(timer);
        },
        alert_time: function () {
            document.body.innerHTML += "<p>" + (cont) + "</p>";
        }
    };
};
