const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    },
    {
        title: 'Post Three',
        body: 'This is post three'
    }
];

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}<li/>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

const button = document.querySelector('.btn')
button.addEventListener('click', (e) => {
    e.preventDefault();
    getPost();
})