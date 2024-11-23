function calculateArea(radius) {
    const pi = 3.14;
    let area = pi * radius * radius;

    if (radius > 0){
        var message = "The area is calculated";
        console.log('inside if block:', message);
    }

    console.log('Area', area);
    console.log("PI", pi);
    console.log("Message", message);
}

calculateArea(5);


// console.log("Outside function, radius", radius);
console.log("Outside function, pi", pi);
console.log("Outside function, area", area);
console.log("Outside function, message", message);
