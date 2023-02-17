var img = document.querySelector('.img');
var text = document.querySelector('.txt');

function toggle() {
    img.classList.toggle('show');
    text.classList.remove('txt');
}


// The image variable
//let image = document.createElement('img');
// Image source
//image.src = 'https://images.unsplash.com/photo-1673976384292-52c493a5b783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';

// Display tag variable
//let img = document.querySelector('.newImage');
//document.body.prepend(image);