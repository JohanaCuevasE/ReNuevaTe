document.addEventListener('DOMContentLoaded', function() {
    const commentSection = document.querySelector('.comments-section');
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    storedComments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <div class="user-avatar">
                <i class="material-icons">person</i>
            </div>
            <div class="comment-content">
                <div class="user-info">
                    <span class="username">${comment.username}</span>
                    <div class="rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}</div>
                </div>
                <div class="comment-text">${comment.commentText}</div>
            </div>
        `;
        commentSection.insertBefore(newComment, document.querySelector('input'));
    });

    document.querySelector('button').addEventListener('click', function() {
        const username = document.querySelector('#username').value.trim();
        const commentText = document.querySelector('#commentText').value.trim();
        const rating = document.querySelector('#rating').value;

        if (username && commentText) {
            const newComment = {
                username: username,
                commentText: commentText,
                rating: rating
            };

            storedComments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(storedComments));

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <div class="user-avatar">
                    <i class="material-icons">person</i>
                </div>
                <div class="comment-content">
                    <div class="user-info">
                        <span class="username">${username}</span>
                        <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
                    </div>
                    <div class="comment-text">${commentText}</div>
                </div>
            `;
            commentSection.insertBefore(commentDiv, document.querySelector('input'));

            document.querySelector('#username').value = '';
            document.querySelector('#commentText').value = '';
            document.querySelector('#rating').value = '5';
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const commentSection = document.querySelector('.comments-section');
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];

    storedComments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `
            <div class="user-avatar">
                <i class="material-icons">person</i>
            </div>
            <div class="comment-content">
                <div class="user-info">
                    <span class="username">${comment.username}</span>
                    <div class="rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5 - comment.rating)}</div>
                </div>
                <div class="comment-text">${comment.commentText}</div>
            </div>
        `;
        commentSection.insertBefore(newComment, document.querySelector('#username'));
    });

    document.querySelector('#envíar').addEventListener('click', function() {
        const username = document.querySelector('#username').value.trim();
        const commentText = document.querySelector('#commentText').value.trim();
        const rating = document.querySelector('#rating').value;

        if (username && commentText) {
            const newComment = {
                username: username,
                commentText: commentText,
                rating: rating
            };

            storedComments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(storedComments));

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
                <div class="user-avatar">
                    <i class="material-icons">person</i>
                </div>
                <div class="comment-content">
                    <div class="user-info">
                        <span class="username">${username}</span>
                        <div class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</div>
                    </div>
                    <div class="comment-text">${commentText}</div>
                </div>
            `;
            commentSection.appendChild(commentDiv);

document.querySelector('#username').value = '';
document.querySelector('#commentText').value = '';
document.querySelector('#rating').value = '5';
window.location.reload();} else {
    alert('Por favor, completa todos los campos.');
}
    });
});


