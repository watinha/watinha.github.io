QUnit.module("Load books");

QUnit.test("Object LoadBooks exists", function (assert) {
    var loader = LoadBooks({});
    assert.ok(loader instanceof Object);
});

QUnit.test("LoadBooks should load ASYNC from YQL passing parameter", function (assert) {
    var target_dummy = document.createElement("div"),
        loader = new LoadBooks({
            target: target_dummy
        }),
        results,
        trueGetJSON = $.getJSON,
        url_param;
    $.getJSON = function (url, callback) {
        url_param = url;
    };
    loader.load("Harry");

    assert.ok((url_param.search("Harry") >= 0), "url contains Harry");
    $.getJSON = trueGetJSON;
});

QUnit.test("LoadBooks.load should render elements from server", function (assert) {
    var target_dummy = $("<div>"),
        loader = new LoadBooks({
            target: target_dummy
        }),
        fake_json = { query: { results: { json: { items: [
            { volumeInfo: { title: "Ataque das abobrinhas", authors: "Abobrinha" } },
            { volumeInfo: { title: "Ataque dos pepinos", authors: "Pepino" } }
        ] } } } },
        results,
        trueGetJSON = $.getJSON,
        json_callback,
        url_param;

    $.getJSON = function (url, callback) {
        json_callback = callback;
        url_param = url;
    };
    loader.load("Harry");
    json_callback(fake_json);

    results = target_dummy.find("li");
    assert.equal(results.length, 2);
    assert.equal(results[0].innerHTML, "Ataque das abobrinhas");
    assert.equal(results[1].innerHTML, "Ataque dos pepinos");
    $.getJSON = trueGetJSON;
});

QUnit.test("LoadBooks.load should render elements from server cleanning past results", function (assert) {
    var target_dummy = $("<div>"),
        loader = new LoadBooks({
            target: target_dummy
        }),
        fake_json = { query: { results: { json: { items: [
            { volumeInfo: { title: "Ataque das abobrinhas", authors: "Abobrinha" } },
            { volumeInfo: { title: "Ataque dos pepinos", authors: "Pepino" } }
        ] } } } },
        results,
        trueGetJSON = $.getJSON,
        json_callback,
        url_param;

    $.getJSON = function (url, callback) {
        json_callback = callback;
        url_param = url;
    };
    loader.load("Harry");
    json_callback(fake_json);
    json_callback(fake_json);

    results = target_dummy.find("li");
    assert.equal(results.length, 2);
    assert.equal(results[0].innerHTML, "Ataque das abobrinhas");
    assert.equal(results[1].innerHTML, "Ataque dos pepinos");
    $.getJSON = trueGetJSON;
});

//QUnit.asyncTest("Object LoadBooks should load books from YQL", function (assert) {
//    expect(1);
//    var target_dummy = document.createElement("div"),
//        loader = new LoadBooks({
//            target: target_dummy
//        }),
//        results;
//    loader.load("Harry");
//    setTimeout(function () {
//        results = target_dummy.querySelectorAll("li");
//        assert.equal(results.length, 5);
//        QUnit.start();
//    }, 5000);
//});
