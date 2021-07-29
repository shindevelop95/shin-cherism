export const galleryData = [
    {
        id:"1",
        "image":"../images/blog/b1.jpg",
        "animate":"fade-left"
    },
    {
        id:"2",
        "image":"../images/blog/b2.jpg",
        "animate":"fade-left"
    },
    {
        id:"3",
        "image":"../images/blog/b3.jpg",
        "animate":"fade-left"
    },
    {
        id:"4",
        "image":"../images/blog/b4.jpg",
        "animate":"fade-down"
    },
    {
        id:"5",
        "image":"../images/blog/b5.jpg",
        "animate":"fade-down"
    },
    {
        id:"6",
        "image":"../images/blog/b6.jpg",
        "animate":"fade-down"
    },
]

export const landingData = [
    { "url": "../images/landing/landbanner1.jpg", "id":"1","name":"home",  "animate":"fade-up" },
    { "url": "../images/landing/landbanner2.jpg", "id":"2","name":"office","animate":"fade-down" },
    { "url": "../images/landing/landbanner3.jpg", "id":"3","name":"garden","animate":"fade-up" }
]

export const landingDataTwo = [];
for(var i = 1; i <= 3; i++){
 landingDataTwo.push({id:i,url:`../images/slides/s${i}.jpg`})
}

export const landingDataThree = [
    { "url": "../images/landing/feature1.png","bottom":"", "id":"1","animate":"fade-up", "duration":"3000"},
    { "url": "../images/landing/feature2.png","bottom":"-50px", "id":"2", "animate":"fade-down",  "duration":"2500"},
    { "url": "../images/landing/feature3.png","bottom":"-280px", "id":"3", "animate":"fade-up",  "duration":"2000"}
];

export const landingDataFour = [];
for(var i = 1; i <= 3; i++){
 landingDataFour.push({id:i,url:`../images/gallery/gallery${i}.jpg`})
}
