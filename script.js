function renderBooks() {
    let contentRef = document.getElementById('book_container');
    contentRef.innerHTML = '';
    for (let index = 0; index < books.length; index++) {
        let book = books[index];
        contentRef.innerHTML += getBookTemplate(book, index);
    }

    addLikeListener();
}

function renderComments(comments) {
    let commentsHTML = '';
    for (let index = 0; index < comments.length; index++) {
        commentsHTML += `
            <div class="single_comment">
                <b>${comments[index].name}</b>: 
                ${comments[index].comment}
            </div>
        `;
    }
    return commentsHTML;
}

function addLikeListener() {
    let heartRef = document.querySelectorAll('.heart');
    for (let index = 0; index < heartRef.length; index++) {
        heartRef[index].addEventListener('click', function () {
            let bookIndex = this.dataset.index;

            toggleLike(bookIndex);
        });
    }
}

function toggleLike(index) {
    if (books[index].liked) {
        books[index].likes--;
        books[index].liked = false;
    } else {
        books[index].likes++;
        books[index].liked = true;
    }

    saveToLocalStorage();
    renderBooks();
}

function addComment(index) {
    let inputRef = document.getElementById(`comment_input_${index}`)
    let newComment = inputRef.value;
        if (newComment.length > 0) {
            books[index].comments.push({
                name: 'Karl-Heinz',
                comment: newComment
            });
            inputRef.value = '';

            saveToLocalStorage();
            renderBooks();
        }
}

function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
}

function loadFromLocalStorage() {
    let loadToBooks = localStorage.getItem('books');
    if (loadToBooks) {
        books = JSON.parse(loadToBooks);
    }
}

loadFromLocalStorage();