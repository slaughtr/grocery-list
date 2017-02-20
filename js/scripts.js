$(function() {
  $("#formOne").submit(function() {
    event.preventDefault();
    var itemArray = []
    for (var i = 1; i < 5; i++) {
      itemArray.push($("#item"+i).val());
    };
    $("#formOne").hide();
    itemArray.sort();
    itemArray.forEach(function(item) {
      $("#output ul").append("<li>"+item.toUpperCase()+"</li>");
    });

  });
});
