QUnit.module("live-search");

QUnit.test("LiveSearch class must exist", function (assert) {
    var l = LiveSearch({input: document.createElement("input"), container: {}, elements: []});
    assert.ok(l instanceof Object);
});

QUnit.test("LiveSearch must show list of elements when rendered", function (assert) {
    var input = document.createElement("input"),
        container = document.createElement("container"),
        lis = [],
        l = LiveSearch({
            input: input,
            container: container,
            elements: ["Abobrinha", "Uva", "Maçã", "Abacaxi", "Melão"]
        });
    lis = container.querySelectorAll("li");
    assert.equal(lis.length, "5");
    assert.equal(lis[0].innerHTML, "Abobrinha");
    assert.equal(lis[1].innerHTML, "Uva");
    assert.equal(lis[2].innerHTML, "Maçã");
    assert.equal(lis[3].innerHTML, "Abacaxi");
    assert.equal(lis[4].innerHTML, "Melão");
});

QUnit.test("LiveSearch must show only elements with correct starting letters", function (assert) {
    var input = document.createElement("input"),
        container = document.createElement("container"),
        lis = [],
        l = LiveSearch({
            input: input,
            container: container,
            elements: ["Abobrinha", "Uva", "Maçã", "Abacaxi", "Melão"]
        }),
        syntetic_event = document.createEvent("KeyboardEvent");
    input.value = "A";
    syntetic_event.initKeyboardEvent("keyup");
    input.dispatchEvent(syntetic_event);

    lis = container.querySelectorAll("li");
    assert.equal(lis.length, "2");
    assert.equal(lis[0].innerHTML, "Abobrinha");
    assert.equal(lis[1].innerHTML, "Abacaxi");
});

QUnit.test("LiveSearch must realize a case insensitive search", function (assert) {
    var input = document.createElement("input"),
        container = document.createElement("container"),
        lis = [],
        l = LiveSearch({
            input: input,
            container: container,
            elements: ["Abobrinha", "Uva", "Maçã", "Abacaxi", "Melão"]
        }),
        syntetic_event = document.createEvent("KeyboardEvent");
    input.value = "m";
    syntetic_event.initKeyboardEvent("keyup");
    input.dispatchEvent(syntetic_event);

    lis = container.querySelectorAll("li");
    assert.equal(lis.length, "2");
    assert.equal(lis[0].innerHTML, "Maçã");
    assert.equal(lis[1].innerHTML, "Melão");
});
