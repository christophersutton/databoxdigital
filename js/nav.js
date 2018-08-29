// DOM ready
   $(function() {
     
      // Create the dropdown base
      $("<select />").appendTo("#header");
      
      // Create default option to fall back to
      $("<option />", {
         "value"   : "",
         "text"    : "Menu"
      }).appendTo("#header select");
      
      // Populate dropdown with menu items. Loop through non-active first,
      // then if there's an active nav item, add it and drop the default.
      $(".nav a").each(function() {
        var el = $(this);

        if(!el.parent().hasClass("active")) {
          $("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
          }).appendTo("#header select"); 
        }
        else {
          $("<option />", {
            "selected": "selected",
            "value"   : el.attr("href"),
            "text"    : el.text()
          }).appendTo("#header select");

          $('option[value=""]').remove();
        }
      });
      
     // make dropdown actually work
      $("#header select").change(function() {
        window.location = $(this).find("option:selected").val();
      });
   
   });
  