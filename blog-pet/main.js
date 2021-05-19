const postsList = document.getElementById('posts-list');

function createPost({ header, poster, text, id, link }) {
    
    const li = document.createElement('li');
    li.classList.add('post');
    li.id = id;
    
    const delBtn = document.createElement('button');
    delBtn.classList.add('post__btn__delete');
    delBtn.textContent = '❌';

    const a = document.createElement('a');
    a.href = link;

    const  h4 = document.createElement('h4');
    h4.classList.add('post__header');
    

    const post__poster = document.createElement('div');
    post__poster.classList.add('post__poster');

    const post_img = document.createElement('img');
    post_img.src= poster;
   

    const post__body =document.createElement('div');
    post__body.classList.add('post__body');
    
    li.append(delBtn, a, post__poster, post__body);
    h4.append(a, header);
    a.append(img);
    post__body.append(text);

    return li
   
}

async function init() {
    postsList.innerHTML = '';
    const responce = await fetch('http://inno-ijl.ru/multystub/stc-21-03/posts', {
        cors: 'no-cors'
    });
    const posts = await responce.json();

    for (let i = 0; i < posts.body.length; i++) {
        const post = createPost(posts.body[i]);
        
        postsList.innerHTML += post;
    }
}

init();
