// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули


async function fetchUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();
        const usersContainer = document.getElementById("users-container");
        users.forEach(user =>{
            let userBlock = document.createElement('div');
            userBlock.className = 'user-block'
            userBlock.innerHTML = `
<p>ID: ${user.id}</p><h2>${user.name}</h2>
<a href="user-details.html?id=${user.id}" id="view-details">View details</a>
`;
            usersContainer.appendChild(userBlock);
        })

    }
    catch (error) {
        console.log('Error fetching users');
    }
}
fetchUsers();


// let prodContainer = document.getElementById('products');
// let userDetails = document.getElementById('user-button');
// let skip = 0;
// userDetails.onclick = function () {
//     fetch('https://jsonplaceholder.typicode.com/users?userId').then(res => res.json())
//         .then(value => {
//             let {products} = value;
//             for (const product of products) {
//                 let singleProductDiv = document.createElement('div');
//                 singleProductDiv.innerText = `${product.id} ${product.title}`;
//                 productContainer.appendChild(singleProductDiv);
//             }
//         });
//     skip += 10;
// };
//-------------------------------------------------------





// async function fetchPostsOfUser(userId) {
// let user = await fetch('https://jsonplaceholder.typicode.com/users/' + userId).then(value => value.json());
//     console.log(user)
// let posts = await fetch ('https://jsonplaceholder.typicode.com/posts?userId' + user.id).then(value => value.json());
//     console.log(posts)
//     return user;
// }
// fetchPostsOfUser(1)
// .then(response => response.json())
// .then(posts => {
//     for (const post of posts) {
//         fetch('https://jsonplaceholder.typicode.com/posts/POST_ID/comments')
//             .then(value => value.json())
//             .then(value => {
//                 console.log(value);
//             })
//     }
// })
