export const galleryData = [
  {
    id: "1",
    image: "../images/blog/b1-min.jpg",
    animate: "fade-left",
  },
  {
    id: "2",
    image: "../images/blog/b2-min.jpg",
    animate: "fade-left",
  },
  {
    id: "3",
    image: "../images/blog/b3-min.jpg",
    animate: "fade-left",
  },
  {
    id: "4",
    image: "../images/blog/b4-min.jpg",
    animate: "fade-down",
  },
  {
    id: "5",
    image: "../images/blog/b5-min.jpg",
    animate: "fade-down",
  },
  {
    id: "6",
    image: "../images/blog/b6-min.jpg",
    animate: "fade-down",
  },
];

export const landingData = [
  {
    url: "../images/landing/landbanner1-min.jpg",
    id: "1",
    name: "Home",
    animate: "fade-up",
  },
  {
    url: "../images/landing/landbanner2-min.jpg",
    id: "2",
    name: "Office",
    animate: "fade-down",
  },
  {
    url: "../images/landing/landbanner3-min.jpg",
    id: "3",
    name: "Garden",
    animate: "fade-up",
  },
];

export const landingDataTwo = [];
for (let i = 1; i <= 3; i++) {
  landingDataTwo.push({ id: i, url: `../images/slides/s${i}.jpg` });
}

export const landingDataThree = [
  {
    url: "../images/landing/feature1.png",
    bottom: "",
    id: "1",
    animate: "fade-up",
    duration: "3000",
  },
  {
    url: "../images/landing/feature2.png",
    bottom: "-50px",
    id: "2",
    animate: "fade-down",
    duration: "2500",
  },
  {
    url: "../images/landing/feature3.png",
    bottom: "-280px",
    id: "3",
    animate: "fade-up",
    duration: "2000",
  },
];

export const landingDataFour = [];
for (let i = 1; i <= 3; i++) {
  landingDataFour.push({ id: i, url: `../images/gallery/gallery${i}.jpg` });
}
