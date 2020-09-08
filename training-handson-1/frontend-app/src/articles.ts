fetch("http://localhost:3000/articles?include=comments")
    .then(response => response.json())
    .then(articles => {
        const row = <HTMLElement> document.querySelector('.row');
        articles.forEach((article : any, id: Number) => {
            row.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 my-card">
                    <div class="card">
                        <img src="${article.imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.abstract}</p>
                            <p class="card-text"><small class="text-muted">by ${article.author}</small></p>
                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#Comments${id}" aria-expanded="false" aria-controls="collapseExample">
                                    Show Comments
                            </button>
                            <div class="collapse my-collapse" id="Comments${id}">
                            ${
                                article.comments.length > 0 ? `
                                    ${article.comments.map((comment:any) => `
                                        <p class="card-text">${comment.commenter} -> ${comment.comment}</p>
                                    `).join('\n')}
                                ` 
                                : '<p class="card-text">No comments yet</p>'
                            }
                            </div>
                        </div>
                    </div>
                </div>
            `
        });
    })
    .catch(error => console.log('error', error));
    