const API_BASE_URL = 'https://fakestoreapi.com/products'

const Product_Fetch = () => {
    fetch(API_BASE_URL)
    .then((res) => res.json())
    .then((res) => Render_UI(res))
    .catch((err) => console.log(err))
    .finally(() => { console.log('api fetch completed')})
}

const Render_UI = (value) => {
    let mainDiv = document.getElementById('maincontainer');
    value.map((element, index) =>{
        let cardDiv = document.createElement('div');

        let img = document.createElement('img');
        let id = document.createElement('h5');
        let title = document.createElement('h2');
        let price = document.createElement('h2');
        let description = document.createElement('p');
        let category = document.createElement('p');

        img.src = element.image;
        id.innerText = element.id;
        title.innerText = element.title;
        price.innerText = element.price;
        description.innerText = element.description;
        category.innerText = element.category;

        cardDiv.className = "card-div";

        cardDiv.append(img, id, title, price, description, category);

        mainDiv.append(cardDiv);
    });
}