const data = [
    {
        link: "apps/travelers/index.html",
        original: "https://www.instagram.com/p/Blulx22h9VD/",
        name:"Travelers."
    },
    
    {
        link: "apps/montblanc/index.html",
        original: "https://youtu.be/9dZmMPcaNIs",
        name:"Montblanc."
    }
]
let app = document.getElementById('app')
data.forEach(obj => {
    createCard(obj)

})
function createCard(infos) {
    console.log(infos)
    let card = document.createElement('a')
    card.setAttribute('class', 'card')
    card.setAttribute('href', infos.link)
    card.textContent = infos.name
    app.appendChild(card)
}