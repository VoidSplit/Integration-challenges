let discoverButton = document.getElementById('discover');
discoverButton.addEventListener('click', (e) => {
    document.getElementById('details').classList.remove('closed')
})
let closeButton = document.getElementById('close');
closeButton.addEventListener('click', (e) => {
    document.getElementById('details').classList.add('closed')
})
let page = 0;
let navPrev = document.getElementById('navPrev')
let navNext = document.getElementById('navNext')
navNext.addEventListener('click', () => {
    if(page >= 0 && page <= pages.length) {
        if(page+1 < pages.length) {
            page++
            displayPage(page)
        }
    }
})
navPrev.addEventListener('click', () => {
    if(page >= 0 && page <= pages.length) {
        if(page-1 >= 0) {
            page--
            displayPage(page)
        }
    }
})
let pages = [
    {
        country: "Japan",
        city: "Tokyo",
        position: "1",
        description: "Tokyo. Japan's busy capital, mixes of ultramodern and the traditional, from neon-lit skyscrapers to historic temples",
        images: [
            "resources/media/Tokyo-1.jpg",
            "resources/media/Tokyo-2.jpg"
        ],
        stats: {
            area: 2.188,
            maxLength: 13.572
        }
        
    },
    {
        country: "Norway",
        city: "Lofoten",
        position: "2",
        description: "Lofoten is an archipelago in Norway, its known for its dramatic scenery with peaks like the Svolværgeita pinnacle jutting up into the sky",
        images: [
            "resources/media/Lofoten-1.jpg",
            "resources/media/Lofoten-2.jpg"
        ],
        stats: {
            area: 1.227,
            maxLength: 24.500
        }
        
    },
    {
        country: "Spain",
        city: "Barcelona",
        position: "3",
        description: "Barcelona is known for its colorful streets overlooked by the Sagrada Familia",
        images: [
            "resources/media/barcelone-1.jpg",
            "resources/media/barcelone-2.jpg"
        ],
        stats: {
            area: 101,
            maxLength: 24.500
        }
        
    },
    {
        country: "England",
        city: "London",
        position: "4",
        description: "In London you will find iconic buildings such as bigben, Buckingham Palace, the official residence of the Queen of England and other famous buildings.",
        images: [
            "resources/media/london-1.jpg",
            "resources/media/london-2.jpg"
        ],
        stats: {
            area: 1.572,
            maxLength: 32.600
        }
        
    },
    {
        country: "Greece",
        city: "Santorini",
        position: "5",
        description: "Santorini is one of the Cyclades islands in the Aegean Sea, it was devastated by a volcanic eruption in the 16th century BC, forever shaping its ruinned landscapes",
        images: [
            "resources/media/Santorini-1.jpg",
            "resources/media/Santorini-2.jpg"
        ],
        stats: {
            area: 76.19,
            maxLength: 18
        }
        
    }
]
function displayPage(index) {
    let countryElement = document.getElementsByClassName('countryElement')
    let cityElement = document.getElementsByClassName('cityElement')
    let positionElement = document.getElementById('positionElement')
    let firstDescriptionElement = document.getElementById('firstDescriptionElement')
    let secondDescriptionElement = document.getElementById('secondDescriptionElement')
    let firstImageElement = document.getElementById('firstImageElement')
    let secondImageElement = document.getElementById('secondImageElement')
    let statsAreaElement = document.getElementById('statsAreaElement')
    let statslengthElement = document.getElementById('statslengthElement')

    for(el of countryElement) {
        el.textContent = pages[index].country
    }
    for(el of cityElement) {
        el.textContent = pages[index].city
    }
    firstDescriptionElement.textContent = pages[index].description
    secondDescriptionElement.textContent = pages[index].description
    positionElement.textContent = `${pages[index].position}`
    firstImageElement.setAttribute('src', pages[index].images[0])
    secondImageElement.setAttribute('src', pages[index].images[1])
    statsAreaElement.textContent = `${pages[index].stats.area} KM²`
    statslengthElement.textContent = `${pages[index].stats.maxLength} KM`
}
displayPage(0)