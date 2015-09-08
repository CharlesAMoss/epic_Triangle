var triangle = function(x, y, z) {

    // var x = parseInt(x);
    // var y = parseInt(y);
    // var z = parseInt(z);

    var checkArray = [x,y,z];

    checkArray.sort(function(a,b){return b-a });

    if (!(checkArray[0] > (checkArray[1] + checkArray[2])))
    {
        if ((x === y) && ( x === z)) {

            return "This is an equilateral triangle";

        } else if ((x === y) || (x === z) || (y === z)) {

            return "This is an isosceles triangle";

        } else {

            return "This is a scalene triangle";

        }


    } else {

        return "This is not a triangle";

    }

};

$(document).ready(function() {
    $("form#tri").submit(function(event) {
        var x = parseInt($("input#x").val());
        var y = parseInt($("input#y").val());
        var z = parseInt($("input#z").val());
        var result = triangle(x, y, z);

        $("#result p").text(result);

        if (result === "This is a scalene triangle" ) {
            $('#im').html('<img src="images/scalene.jpg" />');
        }
        if (result === "This is an isosceles triangle" ) {
            $('#im').html('<img src="images/isosceles.jpg" />');
        }
        if (result === "This is an equilateral triangle" ) {
            $('#im').html('<img src="images/equilateral.jpg" />');
        }
        if (result === "This is not a triangle" ) {
            $('#im').html('<img src="images/not_tri.jpg" />');
        }




        $("#result").show();
        event.preventDefault();
  });

});
