var triangle = function(x, y, z) {

    var x = parseInt(x);
    var y = parseInt(y);
    var z = parseInt(z);

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
