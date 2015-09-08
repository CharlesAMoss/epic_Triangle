describe('triangle', function() {
    it("returns a string", function() {
        expect(triangle(2, 2 ,8)).to.be.a("string");
    });

    it("is not a triangle", function() {
         expect(triangle(2, 2 ,8)).to.equal("This is not a triangle");
    });

    it("is a triangle", function() {
         expect(triangle(3, 3 ,3)).to.not.equal("This is not a triangle");
    });

    it("is an equilateral triangle", function() {
         expect(triangle(3, 3 ,3)).to.equal("This is an equilateral triangle");
    });

});
