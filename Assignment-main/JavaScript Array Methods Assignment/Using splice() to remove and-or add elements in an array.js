let cars = ['Tesla', 'BMW', 'Audi'];
// Remove 1 element at index 1 ('BMW') and add 'Mercedes' and 'Ferrari' at the same position
cars.splice(1, 1, 'Mercedes', 'Ferrari');
console.log(cars); // Output: ['Tesla', 'Mercedes', 'Ferrari', 'Audi']
