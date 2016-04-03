  jetpack.future.import("menu");

  var divs_snapshots = [];

  function show_snapshots(){
    var filter_div = $(jetpack.tabs.focused.contentDocument).find("#filter_div");
    if(filter_div.size() > 0)
      filter_div.remove();

    var snapshot_view = $(jetpack.tabs.focused.contentDocument).find("#snapshot_view");
    if(snapshot_view.size() > 0)  
      snapshot_view.remove();
   
    if($(jetpack.tabs.focused.contentDocument.body).find("#black_div").size() == 0){
      var black_div = $(jetpack.tabs.focused.contentDocument.createElement("div"));
      black_div.attr({
       id: "black_div"  
      });
      black_div.css({
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000000",
        zIndex: 9998,
        opacity: 0
      });
      black_div.click(function(event){
        $(jetpack.tabs.focused.contentDocument).find("#black_div").remove();
        $(jetpack.tabs.focused.contentDocument).find("#filter_div").remove();
        $(jetpack.tabs.focused.contentDocument).find("#snapshot_view").remove();
      });
      $(jetpack.tabs.focused.contentDocument.body).append(black_div);
      black_div.fadeTo(500, 0.85);
    }

    if($(jetpack.tabs.focused.contentDocument.body).find("#snapshot_div_snapshot").attr("id") != null)
      return ;
    
    divs_snapshots = [];

    var document_current_tab = jetpack.tabs.focused.contentDocument;
    
    var snapshot_div = $(document_current_tab.createElement("div"));
    snapshot_div.attr({
      id: "snapshot_div_snapshot"
    });
    snapshot_div.css({
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "100%",
      padding: "3% 3% 3% 3%",
      textAlign: "center",
      zIndex: 9999,
      opacity: 0,
    });

    var label_filter = $(document_current_tab.createElement("label"));
    label_filter.attr({
      id: "label_filter_snapshot",
      for: "filter_tab_snapshot"
    });
    label_filter.css({
      color: "#FFFFFF",
      fontSize: "larger",
      width: "50%",
      margin: "0 22% 10px 22%",
      display: "block",
      textAlign: "left"
    });
    label_filter.html("Select your tab: ");
    snapshot_div.append(label_filter);

    var filter_tab = $(document_current_tab.createElement("input"));
    filter_tab.attr({
      id: "filter_tab_snapshot",
      name: "filter_tab_snapshot",
      type: "text"   
    });
    filter_tab.css({
      width: "50%",
      fontSize: "large",
      margin: "0 22% 10px 22%"
    });
    filter_tab.data("selected", {selected_count: -1});
    filter_tab.keyup(function(event){
      /* 
        26 -> ESC
        40 -> down arrow
        38 -> up arrow
        39 -> right arrow
        37 -> left arrow
        13 -> enter
        */
      if(event.keyCode == 27){
        snapshot_div.remove();
        filter_view.remove();
        $(jetpack.tabs.focused.contentDocument).find("#black_div").remove();
        return ;
      }
      if(event.keyCode == 39){
        var selected = $(this).data("selected").selected_count + 1;
        var selected_divs = $($(jetpack.tabs.focused.contentDocument).find("div#snapshot_div_snapshot div.selected"));
        if(selected != 0)
          $(selected_divs.get(selected - 1)).css({opacity: 0.5});
        if(selected >= selected_divs.size()){
          selected = 0;
        }
        $(selected_divs.get(selected)).css({opacity: 1});
        $(this).data("selected", {selected_count: (selected)});
        return ;
      }
      if(event.keyCode == 37){
        var selected = $(this).data("selected").selected_count - 1;
        var selected_divs = $($(jetpack.tabs.focused.contentDocument).find("div#snapshot_div_snapshot div.selected"));
        if(selected != -2)
          $(selected_divs.get(selected + 1)).css({opacity: 0.5});
        if(selected < 0){
          selected = selected_divs.size() - 1;
        }
        $(selected_divs.get(selected)).css({opacity: 1});
        $(this).data("selected", {selected_count: (selected)});
        return ;
      }
      if(event.keyCode == 40){
        var number_per_row = Math.floor(jetpack.tabs.focused.contentWindow.innerWidth/(20 + 150*(jetpack.tabs.focused.contentWindow.innerWidth/jetpack.tabs.focused.contentWindow.innerHeight)));
        var selected = $(this).data("selected").selected_count + number_per_row;
        var selected_divs = $($(jetpack.tabs.focused.contentDocument).find("div#snapshot_div_snapshot div.selected"));
        selected_divs.css({opacity: 0.5});
        if(selected >= selected_divs.size()){
          selected = selected%number_per_row;
        }
        $(selected_divs.get(selected)).css({opacity: 1});
        $(this).data("selected", {selected_count: (selected)});
        return ;
      }
      if(event.keyCode == 38){
        var number_per_row = Math.floor(jetpack.tabs.focused.contentWindow.innerWidth/(20 + 150*(jetpack.tabs.focused.contentWindow.innerWidth/jetpack.tabs.focused.contentWindow.innerHeight)));
        var selected = $(this).data("selected").selected_count - number_per_row;
        var selected_divs = $($(jetpack.tabs.focused.contentDocument).find("div#snapshot_div_snapshot div.selected"));
        if(selected < 0){
          selected = number_per_row*Math.ceil(selected_divs.size()/number_per_row) - number_per_row + (selected + number_per_row)%number_per_row;
        }
        if(selected < selected_divs.size()){
          selected_divs.css({opacity: 0.5});
          $(selected_divs.get(selected)).css({opacity: 1});
          $(this).data("selected", {selected_count: (selected)});
        }
          
        return ;
      }
      if(event.keyCode == 13){
        var selected = $(this).data("selected").selected_count;
        var selected_divs = $($(jetpack.tabs.focused.contentDocument).find("div#snapshot_div_snapshot div.selected"));
        if(selected != -1)
          jetpack.tabs[($(selected_divs.get(selected)).data("tab_count").tab_id)].focus();
        snapshot_div.remove();
        filter_view.remove();
        $(jetpack.tabs.focused.contentDocument).find("#black_div").remove();    
      }
      var terms_filter = new RegExp(this.value , "i");
      $(this).data("selected", {selected_count: -1});
      for(var cont_tabs = 0; cont_tabs < jetpack.tabs.length; cont_tabs++){
        divs_snapshots[cont_tabs].css({opacity: 0.5});
        if(jetpack.tabs[cont_tabs].contentDocument.title.search(terms_filter) > -1 && !jetpack.tabs[cont_tabs].isClosed){
          divs_snapshots[cont_tabs].css({display: "inline"});
          divs_snapshots[cont_tabs].addClass("selected");
        }else{
          divs_snapshots[cont_tabs].css({display: "none"});
          divs_snapshots[cont_tabs].removeClass("selected");
        }    
      }    
    });
    snapshot_div.append(filter_tab);
    
	  var filter_view = $(document_current_tab.createElement("button"));
	  filter_view.attr({
	  	id: "filter_view"
	  });
	  filter_view.css({
      position: "fixed",
      right: "10%",
      top: "10%", 
      fontSize: "1em",
      fontFamily: "Georgia, 'Times New Roman', Times",
      zIndex: 9999,
      mozOpacity: 0
	  });
    filter_view.html("List view");
    filter_view.click(function(event){
      $(this).remove();
      snapshot_div.remove();
      $(jetpack.tabs.focused.contentDocument).find("#black_div").remove();
      scaleTabs();
    });
	  snapshot_div.append(filter_view);

	  $(document_current_tab.body).append(snapshot_div);
   
	  snapshot_div.fadeTo(1000, 1);
    filter_view.fadeTo(1000, 1);


    for(var cont_tabs = 0; cont_tabs < jetpack.tabs.length; cont_tabs++){
      var tab_snapshot = tabs_snapshot(cont_tabs, document_current_tab);
      var div_snapshot = $(document_current_tab.createElement("div"));
      div_snapshot.css({
        position: "relative", 
        display: "inline", 
        margin: "20px", 
        opacity: 0.7
      });
      div_snapshot.addClass("selected");
      div_snapshot.hover(function(event){
        $(this).css({
          opacity: 1
        });
      }, function(event){
        $(this).css({
          opacity: 0.5
        });
      });
      div_snapshot.data("tab_count", {tab_id: cont_tabs});
      div_snapshot.click(function(event){
        jetpack.tabs[$(this).data("tab_count").tab_id].focus();
        snapshot_div.remove();
        filter_view.remove();
        $(jetpack.tabs.focused.contentDocument).find("#black_div").remove();
      });
      div_snapshot.append(tab_snapshot).append("<span style='bottom: 0;left: 0; position: absolute; color: #FFFFFF; width: 100%; background-color: #000000; opacity: 0.8; padding: 5px; font-size: 1.3em;'><img alt='" + jetpack.tabs[cont_tabs].contentDocument.title + "' src='" + jetpack.tabs[cont_tabs].favicon + "' />&#32;&#32;" + jetpack.tabs[cont_tabs].contentDocument.title  + "</span>");
      divs_snapshots.push(div_snapshot);
      snapshot_div.append($(div_snapshot));
    }
	
	  filter_tab.focus();
 }

 function tabs_snapshot(cont_tabs, document_current_tab){

    var canvas_element = document_current_tab.createElement("canvas");
    canvas_element.id = "canvas" + cont_tabs;
    canvas_element.style.height = "150px";
    canvas_element.style.width = Math.round(150*(jetpack.tabs[cont_tabs].contentWindow.innerWidth/jetpack.tabs[cont_tabs].contentWindow.innerHeight)) + "px";
    canvas_element.height = jetpack.tabs[cont_tabs].contentWindow.innerHeight;
    canvas_element.width = jetpack.tabs[cont_tabs].contentWindow.innerWidth;

    var context = canvas_element.getContext("2d");
    context.drawWindow(jetpack.tabs[cont_tabs].contentWindow, 0, 0, jetpack.tabs[cont_tabs].contentWindow.innerWidth, jetpack.tabs[cont_tabs].contentWindow.innerHeight, "rgb(0, 0, 0)");
    return canvas_element;
 }

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
            previous_tab_document.find("#black_div").remove();
            previous_tab_document.find("#filter_div").remove();
            previous_tab_document.find("#snapshot_view").remove();
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
    
    if($(document_current_tab).find("#filter_div").attr("id") != null)
      return ;

    var filter_div = $(document_current_tab.createElement("div"));
    filter_div.attr({
      id: "filter_div"
    });
    filter_div.css({
      position: "absolute",
      top: "5%",
      left: "25%",
      width: "50%",
      padding: "0 0 0 0",
      zIndex: 9999,
      opacity: 0
    });

    var black_div = $(document_current_tab.createElement("div"));
    black_div.attr({
      id: "black_div"  
    });
    black_div.css({
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
      zIndex: 9998,
      opacity: 0
    });
    black_div.click(function(event){
      $(document_current_tab).find("#black_div").remove();
      $(document_current_tab).find("#filter_div").remove();
      $(document_current_tab).find("#snapshot_view").remove();
    });

    var snapshot_view = $(document_current_tab.createElement("button"));
    snapshot_view.attr({
      id: "snapshot_view",
      href: "#"
    });
    snapshot_view.css({
      position: "fixed",
      right: "5%",
      top: "3%", 
      fontSize: "1em",
      fontFamily: "Georgia, 'Times New Roman', Times",
      zIndex: 9999,
      mozOpacity: 0
    });
    snapshot_view.html("Snapshot view");
    snapshot_view.click(function(event){
      show_snapshots(event);
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
    filter_div.append(label_filter);
    
    var br_element = $(document_current_tab.createElement("br"));
    filter_div.append(br_element);
  
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
        filter_div.remove();
        black_div.remove();
        snapshot_view.remove();
        return ;
      }
      if(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13){
        var current_selected = $(this).data("keyboard_selected").count;
        var filter_selections = $(document_current_tab).find("#ul_tabs li");
        
        if(event.keyCode == 13 && current_selected != -1){
          var previous_tab_document = $(jetpack.tabs.focused.contentDocument);
          jetpack.tabs[$(filter_selections.get(current_selected)).data("tab").tab_id].focus();
          previous_tab_document.find("#black_div").remove();
          previous_tab_document.find("#filter_div").remove();
          previous_tab_document.find("#snapshot_view").remove();
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
    filter_div.append(filter_tab);
  
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
    filter_div.append(ul_tabs);

    $(document_current_tab.body).append(snapshot_view);
    snapshot_view.fadeTo(500, 0.85);

    $(document_current_tab.body).append(black_div);
    $(document_current_tab.body).append(filter_div);
    black_div.fadeTo(500, 0.85);
    filter_div.fadeTo(500, 0.85);
    
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
        show_snapshots();
      });
      $(widget).hover(function(){
        show_snapshots();
      });
    }
  });

  jetpack.tabs.onFocus(function(){
    for(var cont_tabs = 0; cont_tabs < jetpack.tabs.length;cont_tabs++){
      $(jetpack.tabs[cont_tabs].contentDocument).find("#filter_div").remove(); 
      $(jetpack.tabs[cont_tabs].contentDocument).find("#black_div").remove(); 
      $(jetpack.tabs[cont_tabs].contentDocument).find("#snapshot_view").remove();
      $(jetpack.tabs[cont_tabs].contentDocument).find("#snapshot_div_snapshot").remove(); 
    }  
  });
