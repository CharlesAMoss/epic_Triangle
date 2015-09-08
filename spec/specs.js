describe('triangle', function() {
    it("returns a string", function() {
        expect(triangle(2, 2, 8)).to.be.a("string");
    });

    it("is not a triangle", function() {
        expect(triangle(2, 2, 8)).to.equal("This is not a triangle");
    });

    it("is a triangle", function() {
        expect(triangle(3, 3, 3)).to.not.equal("This is not a triangle");
    });

    it("is an equilateral triangle", function() {
        expect(triangle(3, 3, 3)).to.equal("This is an equilateral triangle");
    });

    it("is an isosceles triangle", function (){
        expect(triangle(2, 3, 3)).to.equal("This is an isosceles triangle");
    });

    it("is a scalene triangle", function (){
        expect(triangle(2 ,3, 4)).to.equal("This is a scalene triangle");
    });
});
