(function($) {
$(function(){
	var taskCloseAnswered = false;
	var isAlreadyClosed = ($("[name='Status']").val() === "closed");
	if(isAlreadyClosed)
		return;

	$(".foswikiSubmit").click(function(){
		$(this).addClass("clicked");
	});

	$("[name='main']").on('submit', function(evt){
		if(!$(".foswikiSubmit").hasClass("clicked"))
			return true;
		if(foswiki.Edit.isValidateMandatoryFieldsFailed)
			return false;
		if($("[name='Status']").val() === "closed"){
			if(taskCloseAnswered)
				return true;
			swal({
		        title: jsi18n.get('projectsapp', 'Close project tasks?'),
		        text: jsi18n.get('projectsapp', 'You are about to close this project. Would you also like to close all associated tasks?'),
		        type: 'info',
		        showCancelButton: true,
		        confirmButtonColor: '#6CCE86',
		        cancelButtonColor: '#BDBDBD',
		        confirmButtonText: jsi18n.get('projectsapp', 'Yes'),
		        cancelButtonText: jsi18n.get('projectsapp', 'No'),
		        closeOnConfirm: true,
		        allowOutsideClick: false
		      }, function(confirmed) {
		      	taskCloseAnswered=true;
		      	if(confirmed){
		      		var contexts = [];
					for(var i = 0; i < 5; i++){
						contexts.push("" + foswiki.preferences.WEB + "." + foswiki.preferences.TOPIC + "M" + i);
					}
					$('<input />').attr('type', 'hidden')
						.attr('name', 'taskquery')
						.attr('value', JSON.stringify({"Context": contexts}))
						.appendTo($("[name='main']"));

					$('<input />').attr('type', 'hidden')
						.attr('name', 'taskupdate')
						.attr('value', JSON.stringify({"Status": "closed"}))
						.appendTo($("[name='main']"));
		      	}
		      	$(function(){
		      		$("[name='main']").submit();
		      	});
		        return confirmed;
		      }
		    );
		    return false;
		}
		else
			return true;
	});
});
})(jQuery);
