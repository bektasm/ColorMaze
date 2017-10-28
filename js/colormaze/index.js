$(function () {
    $(document).keyup(function (event) {
        
        $(".selected").removeClass('selected');


        if (event.which == 37) {
            
            column--

            

        } else if (event.which == 38) {
            
            row--



        } else if (event.which == 39) {
            
            column++

        } else {
            
            row++

        }
   
        $('#'+row+'_'+column).addClass('selected');
        
    });
});

let row = 2;
let column = 2;
