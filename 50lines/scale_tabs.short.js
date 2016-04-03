  jetpack.statusBar.append({
    html: "<div style='cursor: pointer;font-weight:bold;font-size:15px;background-color:#FFFF00;padding:0 5px 0 5px'>Scale!!!</div>",
    onReady: function(widget){
      $(widget).click(function(){
        var black_div = $(jetpack.tabs.focused.contentDocument.createElement("div"));
        black_div.attr({id: "black_div"});
        black_div.css({
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: "5% 25% 0 25%",
          backgroundColor: "#000000",
          zIndex: 9999,
          opacity: 0.9});
        black_div.html("<label style='color:FFFFFF;font-size:larger'>Select your tab: </label><br />");
        var filter_tab = $(jetpack.tabs.focused.contentDocument.createElement("input"));
        filter_tab.css({
          width: "50%"});
        filter_tab.keyup(function(event){
          var terms_filter = new RegExp(this.value , "i");
          for(cont_tabs = 0; (cont_tabs < jetpack.tabs.length); cont_tabs++){
            if(jetpack.tabs[cont_tabs].contentDocument.title.search(terms_filter) > -1 && !jetpack.tabs[cont_tabs].isClosed){
              $($(jetpack.tabs.focused.contentDocument).find("#ul_tabs li").get(cont_tabs)).css('display', 'list-item');
            }else{
              $($(jetpack.tabs.focused.contentDocument).find("#ul_tabs li").get(cont_tabs)).css('display', 'none');}}});
        black_div.append(filter_tab);
        var ul_tabs = $(jetpack.tabs.focused.contentDocument.createElement("ul"));
        ul_tabs.attr({id: "ul_tabs"});
        ul_tabs.css({
          color: "#FFFFFF",
          padding: 0});
        black_div.append(ul_tabs);
        $(jetpack.tabs.focused.contentDocument.body).append(black_div);
        for(cont_tabs = 0; (cont_tabs < jetpack.tabs.length); cont_tabs++){
            if(!jetpack.tabs[cont_tabs].isClosed){
              var suggestion_li = $(jetpack.tabs.focused.contentDocument.createElement("li"));
              suggestion_li.css({
                width: "50%",
                backgroundColor: "#333333",
                cursor: "pointer"});
              suggestion_li.data('tab', {tab_id: cont_tabs});
              suggestion_li.html("&#32;&#32;<img src='" + jetpack.tabs[cont_tabs].favicon + "' />&#32;&#32;" + jetpack.tabs[cont_tabs].contentDocument.title);
              suggestion_li.click(function(event){
                var previous_tab_document = $(jetpack.tabs.focused.contentDocument);
                jetpack.tabs[$(this).data('tab').tab_id].focus();
                previous_tab_document.find("#black_div").remove();});
              $(jetpack.tabs.focused.contentDocument.body).find("#ul_tabs").append(suggestion_li);}}
        filter_tab.focus();});}});