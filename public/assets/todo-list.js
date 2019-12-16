$(document).ready(function(){

  // Function runs when we have a submit event on the form.
  $('form').on('submit', function(){

      // Stores input by the user on the front end on this variables
      var item = $('form input');
      // Grabs the item and stores it in this item property so
      // that we can add it to the array.
      var todo = {item: item.val()};

      // Doing a  ajax request to the server using jquery.
      $.ajax({
        type: 'POST',
        // the route for the post request
        url: '/todo',
        data: todo,
        // Grabds updated data that is sent back to us.
        success: function(data){
          //do something with the data via front-end framework so that
          // when we reload the page the data is render to the broswer.
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        // Route for the delete request
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
