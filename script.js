const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "./assets/GrayTShirt.png",
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "./assets/BlackJeans.png",
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "./assets/GreenJacket.png",
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "./assets/WhiteSneakers.png",
  },
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "./assets/BlueSweatshirt.png",
    colors: ["blue", "black"],
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "./assets/RedHoodie.png",
    colors: ["red", "green"],
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "./assets/YellowPullover.png",
    colors: ["yellow", "orange"],
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "./assets/PurpleJacket.png",
    colors: ["purple", "pink"],
  },
];

function generateCards(products, containerId) {
  const container = document.getElementById(containerId);

  products.forEach(function (singleproduct) {
    let colorDots = "";
    if (singleproduct.colors) {
      singleproduct.colors.forEach(function (singleColor) {
        colorDots =
          colorDots +
          `<span class="color-dot" style="background-color:${singleColor}"> </span>`;
      });
    }
    const cardHtml = `  
          <div class="card">
          <img src="${singleproduct.img}" alt="${singleproduct.title}" />
          <h2>${singleproduct.title}</h2>
          <p>${singleproduct.price}</p>
          <div class= "color-dot-container">${colorDots}</div>
          </div>`;
    container.innerHTML += cardHtml;
  });
}
generateCards(products1, "products1-container");
generateCards(products2, "products2-container");
