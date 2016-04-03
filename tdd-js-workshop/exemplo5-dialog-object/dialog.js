var Dialog = (function (params) {
    var dialog = params.dialog,
        overlay = params.overlay;

    return {
        show: function () {
            dialog.className = dialog.className.split(" ")[0];
            overlay.className = overlay.className.split(" ")[0];
        },
        hide: function () {
            dialog.className += " sumido";
            overlay.className += " sumido";
        }
    };
});
