var LiveSearch = (function (params) {
    var input = params.input,
        container = params.container,
        elements = params.elements,
        $public = {
            render: function () {
                var search_field = input.value;
                container.innerHTML = "";
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].search(new RegExp(search_field, "i")) == 0) {
                        var li = document.createElement("li");
                        li.innerHTML = elements[i];
                        container.appendChild(li);
                    };
                };
            }
        };

    input.addEventListener("keyup", function () {
        $public.render();
    });

    $public.render();
    return $public;
});
