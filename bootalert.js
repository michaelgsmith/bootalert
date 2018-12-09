var jAlert = {
		/*******************************************
		 * Simple object to display multiple
		 * types of alert messages
		 * 
		 ******************************************/	
		show : function(alert, o) {
			/* Display a standard inline alert message
			 		Parameters:
			 		alert		: text - should match alertName prop in alert custom control
			 		o			{
						title		: text
						body 		: text
			 			alertType 	: text (success, warning, danger, info) 
			 			alertIcon	: text (font awesome icon class, ex.  fa-user)
			 			autoClose 	: boolean (defaults to false)
			 			growl		: boolean (defaults to false.  if true, a growl like message will be displayed instead of an inline alert)
			 			closeInterval : number (in milliseconds.  defaults to 3000)
			 			clickToClose : boolean (defaults to true)
			 		}
			*/
			$(alert + " .alertImg").remove();
			$(alert + " .alertIcon").css("display","");
			
			if (!o.hasOwnProperty("clickToClose")) {
				o.clickToClose = true;
			}
			if ((typeof o) == "string") {
				var ob = {};
				ob = JSON.parse(o);
				o = ob;
			}

			$(alert + " .alertMsg").attr('class', 'alertMsg alert alert-' + o.alertType);
			$(alert + " .alertMsgTitle").html(o.title);
			o.hideTitle ? $(alert + " .alertMsgTitle").hide() : "";
			$(alert + " .alertMsgBody").html(unescape(o.body));
			$(alert + " .close").click(function() {
				// Hide the alert
				//$(".alert",$(alert)).fadeOut();
				if (o.killOnClose) {
					$(alert).remove();
				} else {
					$(alert).fadeOut();
				}
				
			});
			
			// Show the alert
			$(alert + " .alert").fadeIn('fast');
			$(alert).fadeIn('fast');
			
			// autoclose
			if (o.autoClose) {
				if ((o.autoClose == true) || (o.autoClose == "true")) {
					var closeInterval = o.closeInterval != null ? o.closeInterval : 3000; 
					setTimeout(function(){ $(".alert").fadeOut("fast"); }, closeInterval);
				}
			}
			
			// Setup the icon if value exists
			if (o.alertIcon) {
				if (o.alertIcon.indexOf("fa-") == 0) {
					// assuming this is a FontAwesome icon
					$(alert + " .alertIcon").attr("class","alertIcon fa " + o.alertIcon);
				} else {
					$(alert + " .alertIcon").css("display","none")
					// assuming this is an image
					$(alert + " .alertImg").remove();
					$("<div style='float:left;margin:0 15px 10px 0' class='alertImg'><img src='" + o.alertIcon + "' class='img-square img-circle-lgx' /></div>").insertBefore(alert + " .alertMsgTitle");
				}
			}
			
			// Check for growl
			if (o.growl) {
				$(alert + " .alert").addClass("growl");
			} else {
				$(alert + " .alert").removeClass("growl");
			}
			
			// add close handler to body
			if (o.clickToClose) {
				$(alert).click(function() {
					// Hide the alert
					//$(".alert").fadeOut();
					$(alert).fadeOut();
				});
			}
		},
		standByOn : function(o) {
			// First check the incoming type and convert to 
			// an object if need be
			if (typeof o == "string") {
				var o = {"target":o}
			}
			
			// Update the text of the overlay
			if (o.text) {
				$("#refreshOverlayText").html(o.text);
			}
			
			var overlay = $("#refreshOverlay");
			
			// Get the position of the target node
			var targetPos = x$(o.target).offset();
			var tTop = targetPos.top;
			var tLeft = targetPos.left;
			var tWidth = x$(o.target).css('width');
	        var tHeight = x$(o.target).css('height');
	        
	        x$(o.target).fadeTo( "fast" , 0.25);
	        overlay.css({ opacity: 0.75 });

			overlay.css({
			    position: 'absolute',
			    top: tTop,
			    left: tLeft,
			    width: tWidth,
			    height: tHeight
	   
			});
	  //      overlay.css('text-align','center');
	        
	        overlay.fadeIn("fast");
	        overlay.css('display','table');
		},
		standByOff : function(o) {
			if (typeof o == "string") {
				var o = {"target":o}
			}
			var overlay = $("#refreshOverlay");
			overlay.fadeOut("fast");
			x$(o.target).fadeTo( "fast" , 1, function(){
				$("#refreshOverlayText").html('');
			});
			
		},
		popup : function(e,mode,o) {
			if (mode == "hide") {
				$(e).popup("hide");
				return;
			}
			o.html ? $(e + " .popupHtml").html(o.html) : "";
			o.spin ? $(e + " .fa-spin").show() : $(e + " .fa-spin").hide();
			$(e).popup("show");
		},
		confirm : function(o) {
			/*
			 	modalTitle 	: 	String
			 	modalBody	:	String	: can be text or html
			 	fnYes		:	function
			 	fnNo		:	function
			 */
			try {
				$(".modalClientSideConfirmTitle",$(".modalClientSideConfirm")).html(o.modalTitle);
				$(".modal-body",$(".modalClientSideConfirm")).html(o.modalBody);
				$(".btnYes").unbind().click(o.fnYes);
				$(".btnNo").unbind().click(o.fnNo);
				$(".modal-body",$(".modalClientSideConfirm")).css("height","auto");
				$(".modal-dialog",$(".modalClientSideConfirm")).css("width","600px");
				$(".modalClientSideConfirm").modal("show");
				
			} catch(e) {
				alert("error in confirm")
			}
		},
		alert : function(o) {
			$(".modalClientSideAlertTitle",$(".modalClientSideAlert")).html(o.modalTitle);
			$(".modal-body",$(".modalClientSideAlert")).html(o.modalBody);
			$(".modal-body",$(".modalClientSideAlert")).css("height","auto");
			$(".modal-dialog",$(".modalClientSideAlert")).css("width","600px");
			$(".modalClientSideAlert").modal("show");
		}
			
	}
