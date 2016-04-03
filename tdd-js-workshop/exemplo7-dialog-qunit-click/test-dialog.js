QUnit.module("Dialog module");

QUnit.test("Constructing a Dialog object", function (assert) {
    var dialog = Dialog({});
    assert.ok(dialog instanceof Object, "Dialog function returns an object");
});

QUnit.test("Dialog must have a show method", function (assert) {
    var dialog = Dialog({});
    assert.ok(dialog.show instanceof Function, "Dialog.show must be a valid function");
});

QUnit.test("Dialog.show must show an overlay", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    overlay_dummy.className = "sumido";
    dialog.show();
    assert.equal(overlay_dummy.className, "", "Dialog.show must remove sumido className");
});

QUnit.test("Dialog.show must show a dialog", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    dialog_dummy.className = "sumido";
    dialog.show();
    assert.equal(dialog_dummy.className, "", "Dialog.show must remove sumido className");
});

QUnit.test("Dialog.show must just remove the sumido class", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    dialog_dummy.className = "abobrinha abacate sumido alegre";
    overlay_dummy.className = "abobrinha supimpa sumido alegre";
    dialog.show();
    assert.equal(dialog_dummy.className, "abobrinha abacate alegre", "Dialog.show must remove sumido className");
    assert.equal(overlay_dummy.className, "abobrinha supimpa alegre", "Dialog.show must remove sumido className");
});

QUnit.test("Dialog.hide must be a valid function", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    assert.ok(dialog.hide instanceof Function, "Dialog.hide must be a function");
});

QUnit.test("Dialog.hide must set the sumido className", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    dialog.hide();
    assert.equal(overlay_dummy.className, "sumido");
    assert.equal(dialog_dummy.className, "sumido");
});

QUnit.test("Dialog.hide must set the sumido className", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        });
    overlay_dummy.className = "abobrinha abacate supimpa";
    dialog_dummy.className = "legal duas_vezes";
    dialog.hide();
    assert.equal(overlay_dummy.className, "abobrinha abacate supimpa sumido");
    assert.equal(dialog_dummy.className, "legal duas_vezes sumido");
});

QUnit.test("Dialog must have a fechar button", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        }),
        fechar_button = null;
    fechar_button = dialog_dummy.querySelector("button");
    assert.equal(fechar_button.innerHTML, "fechar", "there must be a close button");
});

QUnit.test("Dialog fechar button must close the dialog", function (assert) {
    var overlay_dummy = document.createElement("div"),
        dialog_dummy = document.createElement("div"),
        dialog = Dialog({
            overlay: overlay_dummy,
            dialog: dialog_dummy
        }),
        fechar_button = null,
        syntetic_click = document.createEvent("MouseEvent"),
        hide_called = false;

    dialog.hide = function () {
        hide_called = true;
    };

    fechar_button = dialog_dummy.querySelector("button");
    syntetic_click.initMouseEvent("click");
    fechar_button.dispatchEvent(syntetic_click);

    assert.ok(hide_called, "method hide should have been called");
});
