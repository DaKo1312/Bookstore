function getBookTemplate(book, index) {
    return `
        <div class="book_card">
            <h2>${book.name}</h2>
            <div class="book_img">
                <img src="./assets/icon/book_cards1.png">
            </div>
            <div class="book_info_top">
                <span class="price">
                    ${book.price.toFixed(2)} EUR
                </span>
                <div class="likes_container">
                    <span>${book.likes}</span>
                    <span class="heart"data-index="${index}">
                    ${book.liked ? '❤️' : '🤍'}</span>
                </div>
            </div>
            <div class="book_infos">
                <p><b>Author:</b> ${book.author}</p>
                <p><b>Erscheinungsjahr:</b> ${book.publishedYear}</p>
                <p><b>Genre:</b> ${book.genre}</p>
            </div>
            <div class="comments_section">
                <h3>Kommentare:</h3>
                ${renderComments(book.comments)}
            </div>
            <div class="comment_input_container">
                <input class="comment_input"id="comment_input_${index}"type="text"placeholder="Teile etwas mit ...">
                <button onclick="addComment(${index})">📨</button>
            </div>
        </div>
    `;
}