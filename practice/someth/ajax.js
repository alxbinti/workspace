$(document).ready(function() {
    var root = 'https://jsonplaceholder.typicode.com/posts'
    $.ajax({
        url: root,
        method: 'GET',
        success: function(response) {
            console.log(response);
            
            var articleParagraph = document.getElementById('articles');
            var template = document.getElementById('template');

            for (var i = 0; i < 10; i++) {

                var articleDiv = template.cloneNode(true);
                articleDiv.id = '';

                articleId = articleDiv.querySelector('.article_id');
                articleId.innerHTML = response[i].id;

                articleTitle = articleDiv.querySelector('.article_title');
                articleTitle.innerHTML = response[i].title;

                articleBody = articleDiv.querySelector('.article_body');
                articleBody.innerHTML = response[i].body;

                articleParagraph.appendChild(articleDiv);
                
            }
        }
    })
})