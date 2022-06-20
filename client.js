console.log('Here are all the available people:', people);

$(document).ready(readyWhenever)

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function appendImages() {
    // console.log('working!')

    for (let i=0; i<people.length; i++) {
        $("#imageContainer").append(`<img src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris">`)
    }
}

function readyWhenever() {
    // console.log('This is all good so far!')
    appendImages();
}