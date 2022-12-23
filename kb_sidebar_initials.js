(function() {

  function sidebarInitials(taskElement) {
    if(kt = taskElement.kt) 
	if(props = kt.props) 
	if(taskId = props.taskId)
	if(props.task.attributes.assigned_user)
	if(initials = props.task.attributes.assigned_user.initials) {
		spSelector = '.kt-side-panel-widget-task[data-task-id=\"'+taskId+'\"]';
    if($(spSelector + ' .recur_header').length == 0)
      $(spSelector).prepend('<div class=\"recur_header\"></div>');
    spSelector = spSelector + ' .recur_header';
		if($(spSelector + ' .recur_initials').length > 0)
			$(spSelector + ' .recur_initials').remove();
		$(spSelector).append('<div class=\"recur_initials\">'+initials+'</div>');
	}
    	
	
  };

  $(window).on('kt-task:render', function(e) {
    return sidebarInitials(e.target);
  });

  KT.onInit(function() {
    return setTimeout(function() {
      return $('kt-task').each(function() {
        return sidebarInitials(this);
      });
    }, 750);
  });
}).call(this);
