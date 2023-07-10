let imageElement = document.querySelector('.img-wrapper img');

let generateBtn = document.querySelector('.generate-btn button');
// console.log(generateBtn)

generateBtn.addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(respond) {
        return respond.json()
    })
    .then(function(respond) {
        console.log(respond);
        imageElement.src = respond.message
    })
    .catch(function(err) {
        console.log(err)
    })
    .finally(function() {
        
    })
})