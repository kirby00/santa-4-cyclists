// $(function(){
//     var initRegistrationDialog = function() {
//       var name = $( "#name" ),
//       email = $( "#email" ),
//       password = $( "#password" ),
//       password_confirmation = $( "#password_confirmation" ),
//       allFields = $( [] ).add( name ).add( email ).add( password ).add( password_confirmation )
//     },

//     var initLoginDialog = function() {
//       var email = $( "#email" );
//       var password = $( "#password" );
//       var allFields = $( [] ).add( email ).add( password );
//       var loginHandler = function() {
//         var bValid = true;
//         allFields.removeClass( "ui-state-error" );

//         bValid = bValid && checkLength( email, "email", 6, 80 );
//         bValid = bValid && checkLength( password, "password", 6, 16 );

//         if ( bValid ) {
//           var params = { user: { email: email.val(), password: password.val() } };
//           var callback = function() {
//             window.location = '/';
//           }
//           $.post('/login', params, callback);
//         }
//       };
//       $( "#login-form" ).dialog({
//         autoOpen: false,
//         height: 375,
//         width: 350,
//         modal: true,
//         buttons: {
//           Login: loginHandler
//         }
//       });
//     },
//   var bindNotLoggedInClick = function() {
//     $('.not_logged_in').click(function(e) {
//       e.preventDefault();
//       $( "#login-form" ).dialog("open");
//     });
//   };
//   initLoginDialog();
//   bindNotLoggedInClick();
// });

(function(){
  var init = {
    initRegistrationDialog: function() {
      var name = $( "#name" );
      var email = $( "#email" );
      var password = $( "#password" );
      var password_confirmation = $( "#password_confirmation" );
      var allFields = $( [] ).add( name ).add( email ).add( password ).add( password_confirmation );
      var registrationHandler = function() {
        var bValid = true;
        allFields.removeClass( "ui-state-error" );

        bValid = bValid && Utilities.checkLength( name, "username", 1, 25 );
        bValid = bValid && Utilities.checkLength( email, "email", 6, 80 );
        bValid = bValid && Utilities.checkLength( password, "password", 6, 16 );
        bValid = bValid && Utilities.checkLength( password_confirmation, "password_confirmation", 6, 16 );

        if ( bValid ) {
          var params = { user: { name: name.val(), email: email.val(), password: password.val(), password_confirmation: password_confirmation.val() } };
          var callback = function() {
            window.location = '/';
          }
          $.post('/users', params, callback);
        }
      };
      $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 575,
        width: 350,
        modal: true,
        buttons: {
          Register: registrationHandler
        }
      });
    },

    initLoginDialog: function() {
      var email = $( "#email" );
      var password = $( "#password" );
      var allFields = $( [] ).add( email ).add( password );
      var loginHandler = function() {
        var bValid = true;
        allFields.removeClass( "ui-state-error" );

        bValid = bValid && Utilities.checkLength( email, "email", 6, 80 );
        bValid = bValid && Utilities.checkLength( password, "password", 6, 16 );

        if ( bValid ) {
          var params = { user: { email: email.val(), password: password.val() } };
          var callback = function() {
            window.location = '/';
          }
          $.post('/login', params, callback);
        }
      };
      $( "#login-form" ).dialog({
        autoOpen: false,
        height: 375,
        width: 350,
        modal: true,
        buttons: {
          Login: loginHandler
        }
      });
    },

    bindNotLoggedInClick: function() {
      $('.not_logged_in').click(function(e) {
        e.preventDefault();
        $( "#login-form" ).dialog("open");
      });
    },
    bindRegisterClick: function() {  
      $('.registration').click(function(e) {
        e.preventDefault();
        $( "#dialog-form" ).dialog("open");
      });
    },

    run: function() {
      init.initLoginDialog();
      init.initRegistrationDialog();
      init.bindNotLoggedInClick();
      init.bindRegisterClick();
    }
  }  
  $(init.run);
})();