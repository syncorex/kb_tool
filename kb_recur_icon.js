KT.Elements.Task.header.push({
    html(taskElement, task) {
        if(task.attributes.tags.indexOf("Recur") >= 0) {
          return $('<i>')
            .attr('class', 'kt-icon-cw-1')
            .attr('title', task.attributes.tags.match(/Recur[0-9A-Za-z\-\s]+/g))
            .prop('outerHTML');
        }
    },
});