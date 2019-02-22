QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
    assert.equal(myFunction(7),49, 'Tested with int');
    assert.equal(myFunction(0),0, 'Tested to see if 0. ');
    assert.equal(myFunction(6000),0,'Tried to keep to the scope of my testing. ' );
    assert.equal(myFunction(-5),0, 'Value 0 if negative. ');
});

// QUnit.test('Testing calculateArea function with several sets of inputs', function (assert) {
//     assert.equal(rec(2,5),10, 'Tested with ');
//     assert.equal(rec(0),0, 'Tested to see if 0. ');
//     assert.equal(rec(5000,1),0,'Tried to keep to the scope of my testing. ' );
//     assert.equal(rec(-5,4),0, 'Value 0 if negative. ');
// });