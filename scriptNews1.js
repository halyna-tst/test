const params = new URLSearchParams(window.location.search);
const title = params.get('title');
const text = params.get('text');

if (title && text) {
    document.getElementById('card-header-news').textContent = decodeURIComponent(title);
    document.getElementById('textNews-news').textContent = decodeURIComponent(text);
}