import './news-article.js';
import {newsurl} from './util.js';

window.addEventListener('load', () => {
    fetchNews();
    registerSW();
    getDate();
    
});

async function fetchNews(){
    const res = await fetch(newsurl);
    const json = await res.json();

    const main = document.querySelector('main');
    console.log(json.articles);

    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}

async function registerSW(){
    if ('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./serviceworker.js');
        } catch (e) {
            console.log('SW failed');
        }
    }
}

const getDate = () => {
    let today = new Date();
    const currDate = document.querySelector("#date");
    let usdate = today.toLocaleDateString("en-US");
    currDate.innerHTML = usdate;
}