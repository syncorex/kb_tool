(function() {

  function sidebarCardType(taskElement) {
    if(kt = taskElement.kt) 
	if(props = kt.props) 
	if(taskId = props.taskId)
	if(props.task.attributes.assigned_user)
	if(cardType = KT.boards.get(props.task.attributes.board_id)._cardTypes.get(props.task.attributes.card_type_id).attributes.name) {
		spSelector = '.kt-side-panel-widget-task[data-task-id=\"'+taskId+'\"]';
    if($(spSelector + ' .recur_header').length == 0)
      $(spSelector).prepend('<div class=\"recur_header\"></div>');
    spSelector = spSelector + ' .recur_header';
		if($(spSelector + ' .recur_card_type').length > 0)
			$(spSelector + ' .recur_card_type').remove();
		$(spSelector).prepend('<div class=\"recur_card_type\">'+cardType+'</div>');
	}
    	
	
  };

  $(window).on('kt-task:render', function(e) {
    return sidebarCardType(e.target);
  });

  KT.onInit(function() {
    return setTimeout(function() {
      return $('kt-task').each(function() {
        return sidebarCardType(this);
      });
    }, 750);
  });
}).call(this);
