fetch("http://localhost:3000/articles")
    .then(response => response.json())
    .then(articles => {
        const row = <HTMLElement> document.querySelector('.row');
        articles.forEach((article : any) => {
            row.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 my-card">
                    <div class="card">
                        <img src="${article.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.abstract}</p>
                            <p class="card-text"><small class="text-muted">by ${article.author}</small></p>
                        </div>
                    </div>
                </div>
            `
        });
    })
    .catch(error => console.log('error', error));

// const headers: HeadersInit = {
//     'Content-Type': 'application/json',
// }

// const raw = JSON.stringify({ 
//     "name": "Superb Leaf Rake", 
//     "code": "GDN-0011", 
//     "releaseDate": "March 19, 2016",
//     "description": "Leaf rake with 48-inch wooden handle.",
//     "price": 19.95, "starRating": 3.2, 
//     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" 
// });

// const requestOptions : RequestInit  = {
//     method: 'POST',
//     headers: headers,
//     body: raw,
//     redirect: 'follow'
// };

// fetch("http://localhost:3000/products", requestOptions)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));