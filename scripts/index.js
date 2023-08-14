const getData = (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return response;
        });
}

async function getPhotos() {
    const photo = await getData("https://dummyjson.com/products");
    return bigPhoto.results;
}

async function getBigPhoto() {
    const photo = await getData("https://dummyjson.com/products/1");
    return bigPhoto.results;
}

function drawBigPhoto() {
    getBigPhoto().then((response) => {
        const photo = response.map((photo) => {
            return `<div class="photos">
                <div class="big-photo">
                    <img src="${photo.images}" alt="">
                </div>                
            </div>`;
        });
        document.getElementById("photo").innerHTML = photo.join("");

    });
}

drawBigPhoto();

function drawSmallPhotos() {
    getPhotos().then((response) => {
        const photo = response.map((photo) => {
            return `<div class="photos">            
                <div class="small-photos">
                    <img src="${photo.images[0]}" alt="">
                    <img src="https://i.dummyjson.com/products/2/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/3/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/4/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/5/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/6/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/7/thumbnail.jpg" alt="">
                    <img src="https://i.dummyjson.com/products/8/thumbnail.jpg" alt="">
                </div>
            </div>`;
        });
        document.getElementById("photo").innerHTML = photo.join("");

    });
}

drawSmallPhotos();