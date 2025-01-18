let currentPage = 1;
const limit = 3;

// Показываем прелоадер
function showLoader() {
    document.querySelector('.preloader').style.display = 'block';
}
// Прелоадер скрывается по завершению всех запросов
jQuery(document).ready(function($) {
    $(window).on('load', function () {
        setTimeout(() => {
            var $preloader = $('.preloader'),
                $loader = $preloader.find('.preloader__loader');
            $loader.fadeOut();
            $preloader.delay(250).fadeOut(200);
        }, 2000); // небольшая задержка 
        
    });
    
});
// Скрываем прелоадер
function hideLoader() {
    document.querySelector('.preloader').style.display = 'none';
}
hideLoader();

// Выводим посты в окно Posts

async function getPosts(page) {
    //showLoader();
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let posts = await response.json();
        let container = document.getElementById('posts');
        container.innerHTML = '';

        posts.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<h6>${item.title || item.name}</h6><p>${item.body || item.email}</p>`;
            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Выводим комментарии в окно Comments

async function getComments(page) {
    //showLoader();
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let comments = await response.json();
        let container = document.getElementById('comments');
        container.innerHTML = '';

        comments.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<h6>${item.name}</h6><p>${item.body}</p>`;
            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}

// Выводим пользователей в окно Users

async function getUsers(page) {
    //showLoader();
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let users = await response.json();
        let container = document.getElementById('users');
        container.innerHTML = '';

        users.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `<h6>${item.name}</h6><p>${item.email}</p>`;
            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}

document.getElementById('next-page1').addEventListener('click', () => {
    currentPage++;
    getPosts(currentPage);
});

document.getElementById('next-page2').addEventListener('click', () => {
    currentPage++;
    getComments(currentPage);
});

document.getElementById('next-page3').addEventListener('click', () => {
    currentPage++;
    getUsers(currentPage);
});

window.addEventListener("load", () => {
    getPosts(currentPage);
    getComments(currentPage);
    getUsers(currentPage);
});

 

// Находим пост по названию и выводим в модальное окно

$('.posts_form_search').on('submit', function(event){
    //event.stopPropagation();
    event.preventDefault();
    const query = $('#search-posts').val().toLowerCase();
    getModalPosts(currentPage, query);
    return false;
});

async function getModalPosts(page, query = '') {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let posts = await response.json();
        let container = document.getElementById('postsModulSerch');
        
        container.innerHTML = '';

        let filteredPosts = posts.filter(post => post.title.toLowerCase().includes(query));

        filteredPosts.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.innerHTML = `<h5 class="title-modal">${item.title}</h5><p>${item.body}</p>`;
            container.appendChild(itemElement);
        });
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}

window.addEventListener("load", getModalPosts);

// Находим комментарий по названию и выводим в модальное окно


$('.comments_form_search').on('submit', function(event){
    
    event.preventDefault();
    const query = $('#search-comments').val().toLowerCase();
    getModalComments(currentPage, query);
    return false;
});

async function getModalComments(page, query1 = '') {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let postComments = await response.json();
        let container = document.getElementById('commentsModulSerch');
        
        container.innerHTML = '';

        let filteredComments = postComments.filter(comment => comment.name.toLowerCase().includes(query1));

        filteredComments.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.innerHTML = `<h5 class="title-modal">${item.name}</h5><p>${item.body}</p>`;
            container.appendChild(itemElement);
            
        });
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}
window.addEventListener("load", getModalComments);

// Находим пользователя по имени и выводим в модальное окно

$('.users_form_search').on('submit', function(event){
    
    event.preventDefault();
    const query = $('#search-users').val().toLowerCase();
    getModalUsers(currentPage, query);
    return false;
});

async function getModalUsers(page, query2 = '') {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }

        let postUsers = await response.json();
        let container = document.getElementById('usersModulSerch');
        
        container.innerHTML = '';

        const filteredUsers = postUsers.filter(comment => comment.name.toLowerCase().includes(query2));

        filteredUsers.forEach(item => {
            let itemElement = document.createElement('div');
            itemElement.innerHTML = `<h5 class="title-modal">${item.name}</h5><p>${item.email}</p>`;
            container.appendChild(itemElement);
            
        });
    } catch (error) {
        console.error('Ошибка:', error);
    } 
}
window.addEventListener("load", getModalUsers);

// Сортировка Постов по возростанию и убыванию

async function getSortedPosts(page, sortOrderPosts) {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        let postsModulSort = await response.json();
        let container = document.getElementById('posts');
        container.innerHTML = '';

        postsModulSort.sort((a, b)  => {
            if (sortOrderPosts ==='asc-posts') {
                
                return a.title.localeCompare(b.title);              
            } else  if (sortOrderPosts ==='desc-posts') {
                
                return b.title.localeCompare(a.title);
            }
        });
        
        postsModulSort.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `<h6>${item.title || item.name}</h6><p>${item.body || item.email}</p>`;
        container.appendChild(itemElement);
        console.log(container);
        });
       
    } catch (error) {
        console.error('Ошибка:', error);
    };
     
};

document.querySelectorAll('input[name="sortOrderPosts"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let sortOrderPosts = this.value;
        getSortedPosts(currentPage, sortOrderPosts);
        
    });
});

// Сортировка Комментариев по возростанию и убыванию

async function getSortedComments(page, sortOrderComments) {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        let commentsModulSort = await response.json();
        let container = document.getElementById('comments');
        container.innerHTML = '';

        commentsModulSort.sort((a, b)  => {
            if (sortOrderComments ==='asc-comments') {
                
                return a.name.localeCompare(b.name);              
            } else  if (sortOrderComments ==='desc-comments') {
                
                return b.name.localeCompare(a.name);
            }
        });
        
        commentsModulSort.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `<h6>${item.name}</h6><p>${item.body || item.email}</p>`;
        container.appendChild(itemElement);
        console.log(container);
        });
       
    } catch (error) {
        console.error('Ошибка:', error);
    };
     
};

document.querySelectorAll('input[name="sortOrderComments"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let sortOrderComments = this.value;
        getSortedComments(currentPage, sortOrderComments);
        
    });
});

// Сортировка Пользователей по возростанию и убыванию

async function getSortedUsers(page, sortOrderUsers) {
    
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}&_page=${page}`);
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        console.log(sortOrderUsers);
        let usersModulSort = await response.json();
        let container = document.getElementById('users');
        container.innerHTML = '';

        usersModulSort.sort((a, b)  => {
            if (sortOrderUsers ==='asc-users') {
                
                return a.name.localeCompare(b.name);              
            } else  if (sortOrderUsers ==='desc-users') {
                
                return b.name.localeCompare(a.name);
            }
        });
        
        usersModulSort.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.innerHTML = `<h6>${item.name}</h6><p>${item.body || item.email}</p>`;
        container.appendChild(itemElement);
        console.log(container);
        });
       
    } catch (error) {
        console.error('Ошибка:', error);
    };
     
};

document.querySelectorAll('input[name="sortOrderUsers"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let sortOrderUsers = this.value;
        getSortedUsers(currentPage, sortOrderUsers);
        
    });
});
