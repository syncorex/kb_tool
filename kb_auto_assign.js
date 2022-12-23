KT.tasks.groupUpdateFilters.push({
  name: '_swimlane_auto_assign',
  action: function(tasks, attrs) {
    if(window.event.ctrlKey) {
      return;
    }
    var sl; var slName;
    if (attrs && attrs['swimlane_id'] && _.filter(tasks, function(t) {
      return t.get('swimlane_id') === attrs['swimlane_id'];
    }).length === 0) {
      if (sl = KT.Swimlane.get(attrs['swimlane_id'])) {
        slName = (sl.attributes.name || '').toLowerCase();
        tasks[0].board().collaborators().each( function(c){
          if(c.attributes.name.toLowerCase().indexOf(slName) >= 0 || slName.indexOf( '@' + c.get('initials').toLowerCase()) >= 0){
            console.log("match found!"); 
            return attrs.assigned_user_id = c.id;
          }
        })
      }
    }
  }
});