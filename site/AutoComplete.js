// Get the input element and the suggestion list element
let input = document.getElementById("city_input");
let suggestionList = document.getElementById("list");

// Fetch the city data from the provided URL
fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json")
    .then(res => res.json())
    .then(data => {
        // Add event listener to the input element for keyup eventt
        input.addEventListener("keyup", event => {
            // Filter the city data based on the input value
            let matchingCity = data.filter(city => city.name.toLowerCase().startsWith(input.value.toLowerCase()));
            // Call the renderSuggestion function to display the matching cities
            renderSuggestion(matchingCity);
        });
    });

// Function to render the suggestions
function renderSuggestion(cities) {

    // Clear the existing suggestions
    suggestionList.innerHTML = '';
    
    // Iterate over the cities and create suggestion elements
    cities.forEach(city => {
        const suggestion = document.createElement("li");
        suggestion.textContent = city.name;
        
        // Add event listener to each suggestion for click event
        suggestion.addEventListener("click", event => {
            // Set the input value to the selected city name
            input.value = city.name;

            // Clear the suggestion list
            suggestionList.innerHTML = ``;

            //trigger the event of Get Weather
            // Define the custom event
            const customEvent = new Event('myCustomEvent');

            // Dispatch the custom event to trigger it in File B
            document.dispatchEvent(customEvent);

        });
        
        // Append the suggestion element to the suggestion list
        suggestionList.appendChild(suggestion);
    });
}
