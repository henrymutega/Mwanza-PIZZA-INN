// user interface logic
$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Size</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">Crust</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-county">Topping</label>' +
                                   '<input type="text" class="form-control new-county">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#size").val();
    var inputtedCrust = $("input#crust").val();
    var inputtedTopping = $("input#topping").val();
    var newPizza = new Pizza(inputtedSize, inputtedCrust, inputtedTopping);

    if(inputtedSize == 'small'){
      return 500 + 100 + 50;
    };
    $("ul#contacts").append("<li><span class='contact'>" + newPizza.pizza() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newPizza.pizza());
      $(".first-name").text(newPizza.size);
      $(".last-name").text(newPizza.crust);
      $("ul#addresses").text("");
    });
// Reset the code.
    $("input#size").val("");
    $("input#crust").val("");
    $("input#topping").val("");
  });
});

// business logic
function Pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
 }
Pizza.prototype.pizza = function() {
  return this.size + " " + this.crust +" "+ this.topping;
}
