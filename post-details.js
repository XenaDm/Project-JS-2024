//     На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
async function fetchUserPostsDetails() {
    try {
        let paramsPost = new URLSearchParams(window.location.search);
        let postId = paramsPost.get('id');

        let postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        let post = await postResponse.json();
        let postDetailsContainer = document.getElementById('post-details');
        postDetailsContainer.innerHTML =`
        <p><strong>Post ID:</strong> ${post.id}</p>
            <p><strong>Title:</strong> ${post.title}</p>
            <p><strong>Body:</strong> ${post.body}</p>
        `;
        let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        let comments = await commentsResponse.json();
        let commentsContainer = document.getElementById('post-comments');
        commentsContainer.innerHTML = comments.map(comment => `
        <div class="comment">
                <p><strong>Comment ID:</strong> ${comment.id}</p>
                <p><strong>Name:</strong> ${comment.name}</p>
                <p><strong>Email:</strong> ${comment.email}</p>
                <p><strong>Body:</strong> ${comment.body}</p>
            </div>
        `).join('');
    } catch (er) {
        console.error('Error fetching post details or comments:', error);
    }
}
fetchUserPostsDetails();