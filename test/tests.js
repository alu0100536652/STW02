var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32f";
        calcular();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calcular();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calcular();
        assert.deepEqual(converted.innerHTML, "Error! Revise los datos.");
    });
});