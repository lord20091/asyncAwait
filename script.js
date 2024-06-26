let commentsContainer = document.getElementById('commentsContainer');

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            let card = document.createElement('div');
            card.classList.add('card')
            let title = document.createElement('h2');
            title.textContent = comment.name;
            let body = document.createElement('p');
            body.textContent = comment.body;
            card.appendChild(title);
            card.appendChild(body);
            commentsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching comments:', error));