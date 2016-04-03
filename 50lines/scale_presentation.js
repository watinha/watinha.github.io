var last_visited_tab = window.location.hash;
function check_tab(){
  if(window.location.hash != last_visited_tab && !$("div#nav ul li a[href=" + window.location.hash + "]").hasClass('clicked')){
      last_visited_tab = window.location.hash;
      $("div#nav ul li a[href=" + window.location.hash + "]").click();
  }
  setTimeout("check_tab()", 1000);
}
$(document).ready(function(event){
  var link_abas = $("div#nav ul li a");
  link_abas.click(function(){
    $("div#header div#moving").fadeTo(500, 0.3);
    $("div#header div#moving p").fadeTo(500, 0.2);
    $("div#top_left").fadeTo(1000, 1);
    last_visited_tab = this.href;
    $("div#nav ul li a").removeClass("clicked");
    $(this).addClass("clicked");
    var cont_aba = $("div#nav ul li a").index(this);
    $("div.hidden div").slideUp(500);
    $($("div.hidden div").get(cont_aba)).slideDown(1500);
  });
  $("ul#howto_lightbox li a").lightBox();
  setTimeout("check_tab();", 1000);
});
