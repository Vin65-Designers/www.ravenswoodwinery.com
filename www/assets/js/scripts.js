﻿var v65 = {
	global : {
		init : function(){
			v65.global.addButtonListener();
			v65.global.mainMenuHover();
			v65.global.subMenuDisplay();
		},
		addButtonListener : function(){
			if(document.addEventListener){
				document.addEventListener("touchstart", function(){}, true);
			}
		},
		mainMenuHover : function(){
			$(".mainMenu ul li ul li").hover(function(){
				$(this).parent().parent().children("a").toggleClass("hover");
			});
		},
		subMenuDisplay : function(){
			if($(".subMenu").length && !$(".subMenu li").length){
				$(".subMenu").remove();
			}
		}
	},
	conversionTracking : {
		dataSet:"",
		init : function(){
			v65.conversionTracking.landingPage();
		},
		conversionPage : function(options){
			var defaults = {
				conversionID : 1,
				displayOrder : 1,
				linkAlias : "Checkout"
			},
			settings = $.extend(defaults, options);
			
			if(document.cookie.length){
				var jobid = v65.cookies.readCookie("JobID"),
						emailaddr = v65.cookies.readCookie("EmailAddr"),
						listid = v65.cookies.readCookie("ListID"),
						batchid = v65.cookies.readCookie("BatchID"),
						urlid = v65.cookies.readCookie("UrlID"),
						memberid = v65.cookies.readCookie("MemberID");

				trackingData = '<img src="';
				trackingData += "http://click.exacttarget.com/conversion.aspx?xml=<system><system_name>tracking</system_name><action>conversion</action>";
				trackingData += "<member_id>"+memberid+"</member_id>";
				trackingData += "<job_id>"+jobid+"</job_id>";
				trackingData += "<email>"+emailaddr+"</email>";
				trackingData += "<list>"+listid+"</list>";
				trackingData += "<BatchID>"+batchid+"</BatchID>";
				trackingData += "<original_link_id>"+urlid+"</original_link_id>";
				trackingData += "<conversion_link_id>"+convid+"</conversion_link_id>";
				trackingData += "<link_alias>"+linkalias+"</link_alias>";
				trackingData += "<display_order>"+displayorder+"</display_order>";
				trackingData += "<data_set>"+v65.conversionTracking.dataset+"</data_set>";
				trackingData += "</system>'";
				trackingData += " width='1' height='1'>";

				document.write(trackingData);
			}
		},
		landingPage : function(){
			if(document.location.search.length){
				var qstr = document.location.search;
						qstr = qstr.substring(1,qstr.length),
						vars = [];

				vars = qstr.split("&");

				for(i=0;i<vars.length;i++){
					cookieCase = vars[i].split("=");
					switch(cookieCase[0]){
					case "e":
						e = cookieCase[1];
						v65.cookies.createCookie("EmailAddr",e,1);
						break;
					case "j":
						j = cookieCase[1];
						v65.cookies.createCookie("JobID",j,1);
						break;
					case "l":
						l = cookieCase[1];
						v65.cookies.createCookie("ListID",l,1);
						break
					case "jb":
						jb = cookieCase[1];
						v65.cookies.createCookie("BatchID",jb,1);
						break;
					case "u":
						u = cookieCase[1];
						v65.cookies.createCookie("UrlID",u,1);
						break;
					case "mid":
						mid = cookieCase[1];
						v65.cookies.createCookie("MemberID",mid,1);
						break;
					default:
						break;
					}
				}
			}
		}
	},
	cookies : {
		createCookie : function(name,value,days) {
			var expires = "";

			if (days) {
				var date = new Date();
				date.setTime(date.getTime()+(days*24*60*60*1000));
				expires = "; expires="+date.toGMTString();
			}

			document.cookie = name+"="+value+expires+"; path=/";
		},
		readCookie : function(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==' ') c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		},
		eraseCookie : function(name) {
			createCookie(name,"",-1);
		}
	},
	home : {
		init : function(){
			// v65.home.initPhotoGallery();
			v65.home.wrapHomepageFeatures();
		},
		initPhotoGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryId : "964891e4-a231-7b8c-5b46-2cc64a607476"
				});
			}
		},
		wrapHomepageFeatures : function(){
			if($(".homepageFeatures .v65-pod").length){
				$(".homepageFeatures .v65-pod").each(function(){
					$(this).addClass('v65-group').wrap('<div class="podWrapper">');
				});
				$(".homepageFeatures .v65-pod").equalize(2);
			}
		}
	},
	page : {
		init : function(){
			v65.page.initPhotoGallery();
			v65.page.loadVineyardData();
			v65.page.productGroupRowClear();
			v65.page.scrollToBottom();
			v65.page.scrollToTop();
		},
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.

						galleryHeight : 420, // This value is translated to 420px and will change the photogallery height
						galleryWidth : 630, // This value is translated to 630px and will change the photogallery width
						pauseTime : 5000, // Adjust how long the image is displayed for. Value is in milliseconds
						animSpeed : 1000, // Adjust the transition speed between images. Value is in milliseconds
						controlNav : false, // hide the 1,2,3 navigation
						directionNav : false // hide the arrow navigation
					*/
				});
			}
		},
		loadVineyardData : function(){
			if($(".vineyards .v65-leftSelected").length){
				$(".v65-leftSelected").parent().find('li').find('a').addClass('vineyardLink');
				$(".vineyardLink").click(function() {

					if($(this).hasClass('activeVineyard')){
						$('html, body').delay(100).animate({ scrollTop: $('.vineyardContent').offset().top - 40 }, 750);
						return false;
					}

					$(".vineyardLink").removeClass('activeVineyard');

					var url = $(this).attr('href'), loadingSpinner = '<img src="/assets/images/loading.gif" />';

					$(".vineyardLink").each(function(){
						if($(this).attr('href') === url){
							$(this).addClass('activeVineyard');
						}
					});
					
					if (url.indexOf("?") == -1) {
						url += '?overrideLayout=1';
					} else {
						url += '&overrideLayout=1';
					}

					$(".vineyardContent").html(loadingSpinner);

					$.get(url, function(data) {
						$(".vineyardContent").html(data);
						$('html, body').delay(100).animate({ scrollTop: $('.vineyardContent').offset().top - 40 }, 750);
					});
					return false;
				});
			}
		},
		productGroupRowClear : function(){
			if($(".v65-productGroup").length){
				for(var i = 1; i <= $(".v65-productGroup-product").length; i++){
					if(i % 2 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-2Up-rowClear"></div>');
					} else if (i % 3 === 0){
						$(".v65-productGroup-product").eq(i).before('<div class="v65-clear productGroup-3Up-rowClear"></div>');
					}
				}
			}
		},
		scrollToBottom : function(){
			$('.footerMenuLink').click(function() {
				$("html, body").animate({ scrollTop: ($("a[name='footerMenu']").offset().top - 20) }, 400);
				return false;
			});
		},
		scrollToTop : function(){
			$(window).scroll(function() {
				if($(document).scrollTop() > 150 && $(window).width() < 580){
					$(".backToTop").css("display", "block");
					$('.v65-productAddToCart-drilldown').addClass('v65-productAddToCart-drilldownActivate');
					$("footer").css("margin-bottom", $('.v65-productAddToCart-drilldownActivate').outerHeight())

				} else{
					$(".backToTop").css("display", "none");
					$('.v65-productAddToCart-drilldown').removeClass('v65-productAddToCart-drilldownActivate');
					$("footer").removeAttr('style');
				}
			});

			$('.backToTop').click(function() {
				$("html, body").animate({ scrollTop: 0 }, 400);
				return false;
			});
		}
	}
}

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : $("#pagePhotoGallery").attr("v65jsphotogalleryheight"),
			galleryWidth : $("#pagePhotoGallery").attr("v65jsphotogallerywidth"),
			timestamp : "&timestamp="+ new Date().getTime(),
			effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
			slices:15, // For slice animations
			animSpeed:500, // Slide transition speed
			pauseTime:5000, // How long each slide will show
			startSlide:0, // Set starting Slide (0 index)
			directionNav:true, // Next & Prev navigation
			directionNavHide:true, // Only show on hover
			controlNav:true // 1,2,3... navigation
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var images = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						caption = $(this).attr('caption'),
						url = $(this).attr('link');
					if (url === undefined) {
						images += '<img src="'+location+photo+'" title="'+caption+'"/>';
					} else{
						images += '<a href="'+url+'"><img src="'+location+photo+'" title="'+caption+'"/></a>';
					}
				});
				gallery.append(images);
			},
			complete: function(){
	   			gallery.nivoSlider({
					effect:settings.effect,
					slices:settings.slices,
					animSpeed:settings.animSpeed,
					pauseTime:settings.pauseTime,
					startSlide:settings.startSlide,
					directionNav:settings.directionNav,
					directionNavHide:settings.directionNavHide,
					controlNav:settings.controlNav
				});
	   		}
	   	});
	}
})(jQuery);

;(function($,undefined){
	$.fn.equalize = function(length){
		for(var i = 0; i < this.length; i+=length) {
			var elems = this.slice(i, i+length),
					equalizeArray = [];
			for(j = 0; j < length; j++){
				equalizeArray.push(elems.eq(j).height());
			}
			var height = Math.max.apply( Math, equalizeArray);
			elems.css('min-height', height);
		}
		return this;
	}
})(jQuery);

v65.global.init();
v65.conversionTracking.init();
v65.home.init();
v65.page.init();