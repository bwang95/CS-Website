var isUp = true;
$(document).ready(function(){
  $("#siteNavDesc").click(function(){
	if(isUp) $("#siteNavPanel").slideDown("slow", "swing", function(){isUp = false});
	else $("#siteNavPanel").slideUp("slow", "swing", function(){isUp = true;});		
  });
});