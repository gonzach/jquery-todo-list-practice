$(document)
    .ready(function () {
        function generateUUID() {
            /*jshint bitwise:false */
            var i,
                random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 16 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }
                uuid += (i === 12
                    ? 4
                    : (i === 16
                        ? (random & 3 | 8)
                        : random)).toString(16);
            }
            return uuid;
        }

        $("#button").click(function(){
            var val = $(".input-text").val();
            if ( val !== "" ){
               $('element').attr('id', 'value');
               $("ol").append("<li id= '' class= ''><input name='done-todo' class='done-todo' type='checkbox'><span contenteditable='true'>" + val + "</span></li>");
               $('ol li').attr('id', generateUUID());
               $(".input-text").val("");
            }
        });

       $('ol').on('change', ':checkbox', function () {
            if (this.checked) {
                $(this).closest('li').css('text-decoration', 'line-through');
                $(this).closest('li').addClass('checked');
            } else {
                $(this).closest('li').css('text-decoration', 'none');
                $(this).closest('li').removeClass('checked');
            }
        });

       jQuery("a[data-filter='complete']").click(function(){
              console.log("completed");
              $('ul > li a').removeClass('selected');
              $(this).addClass('selected');
              $('li').show();
              $('ol li:not(.checked)').hide();
       });

        jQuery("a[data-filter='active']").click(function(){
            console.log("active");
            $('ul > li a').removeClass('selected');
            $(this).addClass('selected');
             $('li').show();
            $('li.checked').hide();
       });

       jQuery("a[data-filter='all']").click(function(){
            console.log("all");
            $('ul > li a').removeClass('selected');
            $(this).addClass('selected');
            $('li').show();
       });

         $('.input-text').keypress(function (e) {
          var key = e.which;
          if(key == 13) {
             $("#button").click();
             return false;
           }
         });

       $('#input').keypress(function(e) {
         var key = e.which;
         if(key == 13) {
           e.preventDefault();
          }
       });
});