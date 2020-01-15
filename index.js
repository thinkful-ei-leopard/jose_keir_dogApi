
function addUserImageNumber() {
    let userVal = $('.subButton').val();
    return `https://dog.ceo/api/breeds/image/random/${userVal}`
}



function getDogImages() {
    fetch(addUserImageNumber())
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
}





function displayResults(responseJson){
    // displays results
     $('.results').html(responseJson.message.forEach(element => `<img src="${element}" class="results-imgs">`))
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
    })
}


function main() {
    addUserImageNumber();
    watchForm();
    displayResults();
    getDogImages();
}

$(main)