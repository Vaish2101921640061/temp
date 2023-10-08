function convertTemperature() {
    // Get input values
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    // Perform the conversion
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = (temperatureInput * 9/5) + 32;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = temperatureInput + 273.15;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (temperatureInput - 32) * 5/9;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = ((temperatureInput - 32) * 5/9) + 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = temperatureInput - 273.15;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = ((temperatureInput - 273.15) * 9/5) + 32;
    } else {
        result = temperatureInput; // If units are the same
    }

    // Display the result
    document.getElementById("resultText").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}

