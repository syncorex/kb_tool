KT.Elements.Task.footer.push({
    html(taskElement, task) {
          billing_type = '';
          card_type = KT.boards.get(task.attributes.board_id)._cardTypes.get(task.attributes.card_type_id).attributes.name;
          if(card_type.search(/-/g) >= 0) {
            idx = card_type.search(/-/g);
            billing_type = $('<span style=\"opacity:.7; margin-right:3px;\">').text(card_type.slice(0,idx)).prop('outerHTML');
            card_type = card_type.slice(idx+1);
          }
          return $('<span> ')
            .text(card_type)
            .prop('outerHTML') + billing_type;
    },
});