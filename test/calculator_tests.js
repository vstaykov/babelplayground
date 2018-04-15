import should from "should";
import {Calculator} from "../src/es2015_export.js"

describe("Calculator", function(){
    describe("#add()", function(){
        it("should return negative value when result is negative", function(){
            var calc = new Calculator();
            calc.add(-5, -2).should.be.below(0);
        });
    });

    describe("#multiply()", function(){
        it("should return zero when one of the values is zero", function(){
            var calc = new Calculator();
            calc.multiply(0, 7).should.be.equal(0);
        });
    })
})