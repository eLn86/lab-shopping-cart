$('.createItemButton').on('click', function(e) {
  var productRow = $(e.target).parent().parent();
  var name = $(productRow).find('.new-item-name').val();
  var price = $(productRow).find('.new-item-price').val();
  if ($.isEmptyObject(name) === true || name === '') {
      alert('Item name cannot be empty');
    }

  else if ($.isNumeric(price) === false) {
      alert('Only numerical values are accepted');
      $(productRow).find('.new-item-price').val('');
    }
  else {
      price = Number(price).toFixed(2);
      var itemToAppend =
      '<div class="row productRow itemRow">' +
        '<div class="col-md-3 col-xs-3">' +
          '<h5>' + name + '</h5>' +
        '</div>' +
        '<div class="col-md-2 col-xs-2">' +
        '<h5 class="itemPrice">$' + price + '</h5>' +
        '</div>' +
        '<div class="col-md-4 col-xs-4">' +
            '<div class="row">' +
              '<div class="col-md-1">' +
              '<h5>QTY</h5>' +
            '</div>' +
              '<div class="col-md-6">' +
               '<input class="quantity" value="" />' +
              '</div>' +
              '<div class="col-md-1">' +
              '<button class="cancelButton">Clear</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '<div class="col-md-1 col-xs-1">' +
          '<h5 class="totalPrice">$0.00</h5>' +
        '</div>' +
        '<div class="col-md-2 col-xs-2">' +
          '<button class="deleteButton">Delete Item</button>' +
        '</div>' +
      '</div>';

      $(itemToAppend).appendTo($('.wrapper'));
      $(productRow).find('.new-item-name').val('');
      $(productRow).find('.new-item-price').val('');

      $('.deleteButton').on('click', function(e) {
        var productRow = $(e.target).parents('.productRow');
        $(productRow).find('.row')

        setTimeout(
          function() {
            $(productRow).remove();
          }, 500);

      });

      $('.cancelButton').on('click', function(e) {
      var productRow = $(e.target).parent().parent().parent().parent();
      var quantity = $(productRow).find('.quantity').val('');
      });

      $('.quantity').focus(function(e) {
        $(this).keyup(function() {
          var isNumber = $(e.target).val();
          if($.isNumeric(isNumber) === true || $.isEmptyObject(isNumber) === true) {
            var quantity = $(e.target).val();
            quantity = Number(quantity).toFixed(2);
            var productRow = $(e.target).parent().parent().parent().parent();
            var price = $(productRow).find('.itemPrice').text().replace("$","");
            price = Number(price).toFixed(2);
            var gTotal = quantity * price;
            gTotal = Number(gTotal).toFixed(2);
            $(productRow).find('.totalPrice').replaceWith('<h5 class="totalPrice">$'+gTotal+'</h5>');
          }
            else if($.isNumeric(isNumber) === false) {
            alert('Please enter a number');
            var productRow = $(e.target).parent().parent().parent().parent();
            var quantity = $(productRow).find('.quantity').val('');
          }
        });
      });

    }
});

$('.deleteButton').on('click', function(e) {
  var productRow = $(e.target).parents('.productRow');
  $(productRow).find('.row')

  setTimeout(
    function() {
      $(productRow).remove();
    }, 500);

});

$('.calculateButton').on('click', function() {
  var prices = $(".totalPrice").text();
  var pricesArray = prices.split('$');
  var total = pricesArray.reduce(function(acc, currValue, index, array) {
    array[index] = +array[index];
    return acc + array[index];
  },0);
  total = Number(total).toFixed(2);
  $(".finalTotalPrice").replaceWith('<h1 class="finalTotalPrice">$'+total+'</h1>');
  });


$('.cancelButton').on('click', function(e) {
var productRow = $(e.target).parent().parent().parent().parent();
$(productRow).find('.quantity').val('');
$(productRow).find('.totalPrice').replaceWith('<h5 class="totalPrice">$0.00</h5>');
});

$('.clearAll').on('click', function(e) {
$('.quantity').val('');
$('.totalPrice').replaceWith('<h5 class="totalPrice">$0.00</h5>');
$('.finalTotalPrice').replaceWith('<h1 class="finalTotalPrice">$0.00</h1>');
});


$('.quantity').focus(function(e) {
  $(this).keyup(function() {
    var isNumber = $(e.target).val();
    if($.isNumeric(isNumber) === true || $.isEmptyObject(isNumber) === true) {
      var quantity = $(e.target).val();
      quantity = Number(quantity).toFixed(2);
      var productRow = $(e.target).parent().parent().parent().parent();
      var price = $(productRow).find('.itemPrice').text().replace("$","");
      price = Number(price).toFixed(2);
      var gTotal = quantity * price;
      gTotal = Number(gTotal).toFixed(2);
      $(productRow).find('.totalPrice').replaceWith('<h5 class="totalPrice">$'+gTotal+'</h5>');
    }
      else if($.isNumeric(isNumber) === false) {
      alert('Please enter a number');
      var productRow = $(e.target).parent().parent().parent().parent();
      var quantity = $(productRow).find('.quantity').val('');
    }
  });
});
