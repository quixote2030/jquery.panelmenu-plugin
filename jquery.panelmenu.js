jQuery.panelmenu = function() {
	var jqpm_timeout = 250;
	var jqpm_timer = null;
	var jqpm_current_menu = null;
	
	return {
		initialize: function(menu_id) {
			jQuery("span.jq-pmenu-arrow").css("visibility", "visible");
			jQuery("#"+menu_id+" > li").bind("mouseover", jQuery.panelmenu.open_menu);
		   	jQuery("#"+menu_id+" > li").bind("mouseout",  jQuery.panelmenu.start_timer);
		},
		
		open_menu: function() {
			jQuery.panelmenu.cancel_timer();
		   	jQuery.panelmenu.close_menu();
			var current_menu = jQuery(this).children("div.jq-pmenu-panel").css("visibility", "visible");
			if(current_menu) {
				jqpm_current_menu = current_menu;
				current_menu.siblings("a").addClass("over-item");
				if(current_menu.hasClass("jq-pmenu-display-rl")) {
					var margin = current_menu[0].parentNode.clientWidth-current_menu[0].offsetWidth;
					current_menu.css("margin-left", ""+margin+"px");
				}
			}
		},
		
		close_menu: function() {
			if(jqpm_current_menu) {
				jqpm_current_menu.css("visibility", "hidden");
				jqpm_current_menu.siblings("a").removeClass("over-item");
				jqpm_current_menu = null;
			}
		},
		
		start_timer: function() {
			jqpm_timer = window.setTimeout(jQuery.panelmenu.close_menu, jqpm_timeout);
		},
		
		cancel_timer: function() {
			if(jqpm_timer) {  
				window.clearTimeout(jqpm_timer);
			  	jqpm_timer = null;
			}
		}
	};
}();