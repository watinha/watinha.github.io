  jetpack.future.import("menu");
  
  function filterTabs(filter_string){
     $(jetpack.tabs.focused.contentDocument.body).find("#ul_tabs").html("");
     var terms_filter = new RegExp(filter_string , "i");
     for(cont_tabs = 0; (cont_tabs < jetpack.tabs.length); cont_tabs++){
        if(jetpack.tabs[cont_tabs].contentDocument.title.search(terms_filter) > -1 && !jetpack.tabs[cont_tabs].isClosed){
          var suggestion_li = $(jetpack.tabs.focused.contentDocument.createElement("li"));
          suggestion_li.attr({
            id: jetpack.tabs[cont_tabs].url  
          });
          suggestion_li.css({
            display: "block",
            width: "100%",
            backgroundColor: "#333333",
            border: "solid 2px #999999",
            textIndent: 0,
            padding: "5px 10px 5px 10px",
            MozBorderRadius: "5px",
            marginBottom: "3px",
            fontSize: "large",
            cursor: "pointer",
            fontFamily: "Georgia, 'Times New Roman', Times"
          });
          suggestion_li.data('tab', {tab_id: cont_tabs});
          suggestion_li.html("<img src='" + jetpack.tabs[cont_tabs].favicon + "' />&#32;&#32;" + jetpack.tabs[cont_tabs].contentDocument.title);
          suggestion_li.click(function(event){
            var previous_tab_document = $(jetpack.tabs.focused.contentDocument);
            jetpack.tabs[$(this).data('tab').tab_id].focus();
            previous_tab_document.find("#div_exit").remove();
            previous_tab_document.find("#black_div").remove();
          });
          suggestion_li.mouseover(function(event){
            $(this).css({
              backgroundColor: "#0033AA"
            });
          });
          suggestion_li.mouseleave(function(event){
            $(this).css({
              backgroundColor: "#333333"
            });
          });
          $(jetpack.tabs.focused.contentDocument.body).find("#ul_tabs").append(suggestion_li);
        }
    } 
  }

  function scaleTabs(){
    var document_current_tab = jetpack.tabs.focused.contentDocument;
    
    if($(document_current_tab).find("#black_div").attr("id") != null)
      return ;

    var black_div = $(document_current_tab.createElement("div"));
    black_div.attr({
      id: "black_div"
    });
    black_div.css({
      position: "absolute",
      top: "5%",
      left: "25%",
      width: "50%",
      padding: "0 0 0 0",
      zIndex: 9999,
      opacity: 0
    });

    var div_exit = $(document_current_tab.createElement("div"));
    div_exit.attr({
      id: "div_exit"  
    });
    div_exit.css({
      position: "absolute",
      top: 0,
      left: 0,
      width: $(document_current_tab.body).width(),
      height: $(document_current_tab.body).height(),
      backgroundColor: "#000000",
      zIndex: 9998,
      opacity: 0
    });
    div_exit.click(function(event){
      $(document_current_tab).find("#div_exit").remove();
      $(document_current_tab).find("#black_div").remove();
    });
    
    var label_filter = $(document_current_tab.createElement("label"));
    label_filter.attr({
      id: "label_filter",
      for: "filter_tab"
    });
    label_filter.css({
      color: "#FFFFFF",
      fontSize: "larger"
    });
    label_filter.html("Select your tab: ");
    black_div.append(label_filter);
    
    var br_element = $(document_current_tab.createElement("br"));
    black_div.append(br_element);
  
    var filter_tab = $(document_current_tab.createElement("input"));
    filter_tab.attr({
      id: "filter_tab",
      name: "filter_tab",
      type: "text"
    });
    filter_tab.css({
      width: "100%",
      fontSize: "large"
    });
    filter_tab.data("keyboard_selected", {count: -1});
    filter_tab.keyup(function(event){
      if(event.keyCode == 27){
        black_div.remove();
        div_exit.remove();
        return ;
      }
      if(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13){
        var current_selected = $(this).data("keyboard_selected").count;
        var filter_selections = $(document_current_tab).find("#ul_tabs li");
        
        if(event.keyCode == 13 && current_selected != -1){
          var previous_tab_document = $(jetpack.tabs.focused.contentDocument);
          jetpack.tabs[$(filter_selections.get(current_selected)).data("tab").tab_id].focus();
          previous_tab_document.find("#div_exit").remove();
          previous_tab_document.find("#black_div").remove();
        }
        if(event.keyCode == 40)
          current_selected = current_selected + 1;
        if(event.keyCode == 38)
          current_selected = current_selected - 1;
        if(current_selected >= filter_selections.size()){
          current_selected = 0;
        }
        if(current_selected < 0){
          current_selected = filter_selections.size() - 1;  
        }
        filter_selections.css({backgroundColor: "#333333"});
        $(filter_selections.get(current_selected)).css({backgroundColor: "#0033AA"});
        filter_tab.data("keyboard_selected", {count: current_selected});
      }
      else{
        filterTabs(this.value);
        filter_tab.data("keyboard_selected", {count: -1});
      }
    });
    black_div.append(filter_tab);
  
    var ul_tabs = $(document_current_tab.createElement("ul"));
    ul_tabs.attr({
      id: "ul_tabs"
    });
    ul_tabs.css({
      width: "100%",
      color: "#FFFFFF",
      display: "block",
      textIndent: 0,
      padding: 0
    });
    black_div.append(ul_tabs);
  
    $(document_current_tab.body).append(div_exit);
    $(document_current_tab.body).append(black_div);
    div_exit.fadeTo(500, 0.85);
    black_div.fadeTo(500, 0.85);
    
    filterTabs("");
    filter_tab.focus();
  }
  
  jetpack.menu.tools.add({
    label: "Scale tabs",
    command: scaleTabs,
    access: "e"
  });
  
  jetpack.statusBar.append({
    html: "<button>Scale!!!</button>",
    onReady: function(widget){
      $(widget).click(function(){
        scaleTabs();
      });
      $(widget).hover(function(){
        scaleTabs();
      });
    }
  });

  jetpack.tabs.onFocus(function(){
    for(var cont_tabs = 0; cont_tabs < jetpack.tabs.length;cont_tabs++){
      $(jetpack.tabs[cont_tabs].contentDocument).find("#black_div").remove(); 
      $(jetpack.tabs[cont_tabs].contentDocument).find("#div_exit").remove(); 
    }  
  });
