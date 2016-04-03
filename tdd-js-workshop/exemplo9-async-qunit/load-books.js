var LoadBooks = (function (params) {
    var target = params.target;

    return {
        load: function (busca) {
            $.getJSON("http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20google.books%20WHERE%20q%3D%22" + busca + "%22%20AND%20maxResults%3D5&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=?", function (data) {
                var books = data["query"]["results"]["json"]["items"];
                target.html("");
                for (var i = 0; i < books.length; i++) {
                    $("<li>").html(books[i]["volumeInfo"]["title"]).appendTo(target);
                };
            });
        }
    };
});
