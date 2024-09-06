// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

async function fetchUserDetails() {
    const params = new URLSearchParams(window.location.search);
    let userId = params.get('id');
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let user = await response.json();
        let userDetailsContainer = document.getElementById('user-details');

            userDetailsContainer.innerHTML = `
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Name:</strong> ${user.name}</p>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> ${user.website}</p>
                    <p><strong>Company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, ${user.address.geo.lat}, ${user.address.geo.lng}</p>`
    } catch (er) {
        console.log('Error fetching user details:', error)
    }
}
fetchUserDetails()
async function fetchUserPosts() {
    try {
        const params = new URLSearchParams(window.location.search);
        const userId = params.get('id');

        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await postResponse.json();
        const userPostsContainer = document.getElementById('user-posts');

        userPostsContainer.innerHTML = posts.map(post => `
            <div class="post-block">
                <p><strong>${post.title}</strong></p>
                <a href="post-details.html?id=${post.id}">View post details</a>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching user posts:', error);
    }
}

document.getElementById('posts-btn').addEventListener('click', fetchUserPosts);

fetchUserDetails();
// fetchUserDetails()
//
// async function fetchUserPosts() {
// try{
//     let postResponse = await fetch(`https://jsonplaceholder.typicode.com/users/` + userId + `/posts`)
//     let posts = await postResponse.json();
//     let userPostsContainer = document.getElementById('user-posts');
//     userPostsContainer.innerHTML = posts.map(post => `
// <div>
// <p><strong>${post.title}</strong></p>
// <a href="post-details.html?id=${post.id}">View post details</a>
// </div>
// `).join('');
// }catch (er) {
//     console.error('Error fetching user posts:', error);
// }
// }
// fetchUserPosts();


