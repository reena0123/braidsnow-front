(function($){"use strict";if($(window).width()>767){if($('.theiaStickySidebar').length>0){$('.theiaStickySidebar').theiaStickySidebar({additionalMarginTop:30});}}
if($(window).width()<=991){var Sidemenu=function(){this.$menuItem=$('.main-nav a');};function init(){var $this=Sidemenu;$('.main-nav a').on('click',function(e){if($(this).parent().hasClass('has-submenu')){e.preventDefault();}
if(!$(this).hasClass('submenu')){$('ul',$(this).parents('ul:first')).slideUp(350);$('a',$(this).parents('ul:first')).removeClass('submenu');$(this).next('ul').slideDown(350);$(this).addClass('submenu');}else if($(this).hasClass('submenu')){$(this).removeClass('submenu');$(this).next('ul').slideUp(350);}});}
init();}
var maxLength=100;$('#review_desc').on('keyup change',function(){var length=$(this).val().length;length=maxLength-length;$('#chars').text(length);});if($('.select').length>0){$('.select').select2({minimumResultsForSearch:-1,width:'100%'});}
if($('.datetimepicker').length>0){$('.datetimepicker').datetimepicker({format:'DD/MM/YYYY',icons:{up:"fas fa-chevron-up",down:"fas fa-chevron-down",next:'fas fa-chevron-right',previous:'fas fa-chevron-left'}});}
if($('.floating').length>0){$('.floating').on('focus blur',function(e){$(this).parents('.form-focus').toggleClass('focused',(e.type==='focus'||this.value.length>0));}).trigger('blur');}
if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip();}
$('body').append('<div class="sidebar-overlay"></div>');$(document).on('click','#mobile_btn',function(){$('main-wrapper').toggleClass('slide-nav');$('.sidebar-overlay').toggleClass('opened');$('html').addClass('menu-opened');return false;});$(document).on('click','.sidebar-overlay',function(){$('html').removeClass('menu-opened');$(this).removeClass('opened');$('main-wrapper').removeClass('slide-nav');});$(document).on('click','#menu_close',function(){$('html').removeClass('menu-opened');$('.sidebar-overlay').removeClass('opened');$('main-wrapper').removeClass('slide-nav');});$(".hours-info").on('click','.trash',function(){$(this).closest('.hours-cont').remove();return false;});$(".add-hours").on('click',function(){var hourscontent='<div class="row form-row hours-cont">'+
'<div class="col-12 col-md-10">'+
'<div class="row form-row">'+
'<div class="col-12 col-md-6">'+
'<div class="form-group">'+
'<label>Start Time</label>'+
'<select class="form-control">'+
'<option>-</option>'+
'<option>12.00 am</option>'+
'<option>12.30 am</option>'+
'<option>1.00 am</option>'+
'<option>1.30 am</option>'+
'</select>'+
'</div>'+
'</div>'+
'<div class="col-12 col-md-6">'+
'<div class="form-group">'+
'<label>End Time</label>'+
'<select class="form-control">'+
'<option>-</option>'+
'<option>12.00 am</option>'+
'<option>12.30 am</option>'+
'<option>1.00 am</option>'+
'<option>1.30 am</option>'+
'</select>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>'+
'</div>';$(".hours-info").append(hourscontent);return false;});if($('.bookingrange').length>0){var start=moment().subtract(6,'days');var end=moment();function booking_range(start,end){$('.bookingrange span').html(start.format('MMMM D, YYYY')+' - '+end.format('MMMM D, YYYY'));}
$('.bookingrange').daterangepicker({startDate:start,endDate:end,ranges:{'Today':[moment(),moment()],'Yesterday':[moment().subtract(1,'days'),moment().subtract(1,'days')],'Last 7 Days':[moment().subtract(6,'days'),moment()],'Last 30 Days':[moment().subtract(29,'days'),moment()],'This Month':[moment().startOf('month'),moment().endOf('month')],'Last Month':[moment().subtract(1,'month').startOf('month'),moment().subtract(1,'month').endOf('month')]}},booking_range);booking_range(start,end);}
var chatAppTarget=$('.chat-window');(function(){if($(window).width()>991)
chatAppTarget.removeClass('chat-slide');$(document).on("click",".chat-window .chat-users-list a.media",function(){if($(window).width()<=991){chatAppTarget.addClass('chat-slide');}
return false;});$(document).on("click","#back_user_list",function(){if($(window).width()<=991){chatAppTarget.removeClass('chat-slide');}
return false;});})();if($('.owl-carousel.services-list').length>0){$('.owl-carousel.services-list').owlCarousel({loop:true,margin:15,nav:true,navText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],navContainer:'.mynav',responsive:{0:{items:1},500:{items:2},768:{items:3},1000:{items:4},1300:{items:4}}})}
if($('.owl-carousel.theraphist').length>0){$('.owl-carousel.theraphist').owlCarousel({loop:true,margin:15,nav:true,navText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],navContainer:'.mynav2',responsive:{0:{items:1},500:{items:2},700:{items:3},1000:{items:5}}})}
if($('.owl-carousel.reviews').length>0){$('.owl-carousel.reviews').owlCarousel({loop:true,margin:15,nav:true,navText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],navContainer:'.mynav3',responsive:{0:{items:1},768:{items:2},1000:{items:3}}})}
if($('.owl-carousel.news').length>0){$('.owl-carousel.news').owlCarousel({loop:true,margin:15,nav:true,navText:["<i class='fa fa-caret-left'></i>","<i class='fa fa-caret-right'></i>"],navContainer:'.mynav4',responsive:{0:{items:1},500:{items:2},768:{items:3},1000:{items:3}}})}})(jQuery);