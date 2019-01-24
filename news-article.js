class NewsArticle extends HTMLElement {

    set article(article){
        this.innerHTML = `
            <a class="newslink" href="${article.url}" target="_blank">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage || ''}">
                <p>${article.publishedAt || ''}</p>
                <p>${article.description || ''}</p>
                <p><strong>From:</strong> ${article.source.name || ''}</p>
            </a>
        `;
    }
}

customElements.define('news-article', NewsArticle);