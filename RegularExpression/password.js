var pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])(?=^.{8,12}$)/g;
var result = pattern.test('A#1_w!ijk');
console.log(result);