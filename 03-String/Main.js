// Concatenation (Combine String Together)

console.log(typeof "sdaq");

console.log("sadaq" + 10); // Type Coercion (Automatic type conversion)

console.log("$" + (2095 + 799) / 100);

const string = "Items (" + (1 + 1) + "): $" + (2095 + 799) / 100;

console.log(string);

// interpolation = insert value directly into a string (Template String)

const interpolation = `Items (${1 + 1}): $${(2095 + 799) / 100} `;

console.log(interpolation);
