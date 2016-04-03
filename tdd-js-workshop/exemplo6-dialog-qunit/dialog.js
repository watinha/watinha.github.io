var Dialog = (function (params) {
    var overlay = params.overlay,
        dialog = params.dialog;
    return {
        show: function () {
            var overlay_classes = overlay.className.split(" "),
                dialog_classes = dialog.className.split(" ");
            overlay_classes.splice(overlay_classes.indexOf("sumido"), 1);
            overlay.className = overlay_classes.join(" ");
            dialog_classes.splice(dialog_classes.indexOf("sumido"), 1);
            dialog.className = dialog_classes.join(" ");
        },
        hide: function () {
            overlay.className += (overlay.className == "" ? "sumido" : " sumido");
            dialog.className += (dialog.className == "" ? "sumido" : " sumido");
        }
    };
});
