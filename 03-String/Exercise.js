console.log("My Name is: ");

console.log("sadaq");

console.log("My name is: " + "Sadaq");

console.log("Total Cost: $" + (5 + 3));

console.log(`Total Cost: $${5 + 3}`);

// alert(`Total Cost: $${5 + 3}`);

console.log("Total Cost:$ " + (599 + 295) / 100);

console.log(`Total Cost:$ ${(599 + 295) / 100}`);

// alert(`Total Cost:$ ${(599 + 295) / 100}`);

console.log(`Total Cost:$ ${(599 + 295) / 100}
Thank you, come again! 
`);

// Challenge Exercises

console.log(`Items(4):  $${(2095 + 2095 + 799 + 799) / 100}`);

console.log(`Items(4):  $${(2095 + 2095 + 799 + 799) / 100}
Shipping & handling:    $${(499 + 499) / 100}
`);

console.log(`Items(4):  $${(2095 + 2095 + 799 + 799) / 100}
Shipping & handling:    $${(499 + 499) / 100}
Total Before tax:       $${(5788 + 998) / 100}
`);

console.log(`Items(4):  $${(2095 + 2095 + 799 + 799) / 100}
Shipping & handling:    $${(499 + 499) / 100}
Total Before tax:       $${(5788 + 998) / 100}
Estimated tax (10%)     $${
  //  Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100
  Math.round((5788 + 998) * 0.1) / 100
}
`);

console.log(`Items(2):  $${(2095 + 799) / 100}
Shipping & handling:    $${0}
Total Before tax:       $${(2894 + 0) / 100}
Estimated tax (10%)     $${
  //  Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100
  Math.round(2894 * 0.1) / 100
}
`);
