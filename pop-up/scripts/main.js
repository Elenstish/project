$(document).ready(function() {


/* **************** POP UP ****************** */

	$('.home_btn').click(function(){
		$('.popup_partner,.popup_overlay').fadeIn(400); 
	});
	$('.popup_close,.popup_overlay').click(function(){
		$('.popup_partner,.popup_overlay').fadeOut(400); 
	});

/* **************** VALIDATION ****************** */
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

	$(".subscribe_form").validate({
		rules: {
			firstname: "required",
			coname: "required",
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
				minlength: 5,
				number: true
			}
	    },
	    messages: {
			firstname: "Пожалуйста, введите имя",
			coname: "Пожалуйста, введите компании",
			checkbox: "Это поле обязательное",
			phone: {
				required: "Пожалуйста, введите телефон"
			},
			email: "Пожалуйста, введите email"
	    },

	submitHandler: function(form) {
	  $(form).ajaxSubmit();
	}
  });



});
