let discoverButton = document.getElementById('discover');
discoverButton.addEventListener('click', (e) => {
    document.getElementById('details').classList.remove('closed')
})
let closeButton = document.getElementById('close');
closeButton.addEventListener('click', (e) => {
    document.getElementById('details').classList.add('closed')
})