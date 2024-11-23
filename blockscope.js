const city = "New York";

function showDetails(){
    // parent block starts here
    let temperature = 30;

    if(temperature >= 30) {
        const hotDayMessage = "It's a hot day";
        console.log('Temperature in parent block:', temperature);

        if(true) {
            console.log("Message in nested block:", hotDayMessage);
        }
    }
    console.log(city);
};

showDetails();