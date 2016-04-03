var Dialog = (function (params) {
    var overlay = params.overlay,
        dialog = params.dialog,
        close_button = document.createElement("button"),
        $public = {
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

    close_button.innerHTML = "fechar";
    close_button.addEventListener("click", function () {
        $public.hide();
    });

    if (dialog)
        dialog.appendChild(close_button);

    return $public;
});
