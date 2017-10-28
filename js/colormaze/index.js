let row = 2;
let column = 2;

$(function () {
    $(document).keyup(function (event) {
        $(".selected").removeClass('selected');

        if (event.which == 37 && column > 1) {
            column--
        } else if (event.which == 38 && row > 1) {
            row--
        } else if (event.which == 39 && column < 3) {
            column++
        } else if (event.which == 40 && row < 3) {
            row++
        } 

        $('#' + row + '_' + column).addClass('selected');

    });
});
