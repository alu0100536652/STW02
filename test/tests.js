var assert = chai.assert;

suite('Conversor de temperatura', function() {
    test('0 Celsius deben ser 32 Farenheit', function() {
        original.value = "0c";
        calcular();
        assert.equal(converted.innerHTML, "32.0 Farenheit");
    });
    test('32 Farenheit deben ser 0 Celsius', function() {
        original.value = "32f";
        calcular();
        assert.equal(converted.innerHTML, "0.0 Celsius");
    });
    test('45 Celsius no puede ser 0 Farenheit', function() {
        original.value = "45C";
        calcular();
        assert.notEqual(converted.innerHTML, "0.0 Farenheit");
    });
    test('5A debe dar un Error!', function() {
        original.value = "5X";
        calcular();
        assert.deepEqual(converted.innerHTML, "Error! Revise los datos.");
    });
    test('s debe dar un  Error!', function() {
        original.value = "s";
        calcular();
        assert.notDeepEqual(converted.innerHTML, "0.0 Farenheit");
    });
    test('Debe aceptar numeros con exponentes, 32e2c', function() {
        original.value = "32e2c";
        calcular();
        assert.equal(converted.innerHTML, "35.6 Farenheit");
    });
});