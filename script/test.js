QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(myFunction(3),9, 'Tested with two relatively small positive numbers');
    assert.equal(myFunction(0),0, 'Tested with side value 0. ');
    assert.equal(myFunction(896785667456),0,'Tested with hours<0, result will be 0. ' );
    assert.equal(myFunction(-9),0, 'Tested with side value 0. ');
});