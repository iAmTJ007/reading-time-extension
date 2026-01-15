function renderReadingTime(article){
    if(!article)return;
    //first we extract text from the article
    const text=article.innerText;
    console.log(text)
    //now we have the text now we have to count the number of words in it
    //we will trim the text(remove starting and ending spaces if present),split it according to the condition
    //of getting whitespace
    const words=text.trim().split(/\s+/).filter((word)=>{
        return word.length>1;
    });
    console.log(words);
    console.log(words.length);
    //now calculate reading time
    const readingTime=Math.ceil(words.length/200);
    //create new element badge and attach it after h1 tag in article
    const badge=document.createElement("p");
    badge.textContent=`⏱️ ${readingTime} min read`;
    document.querySelector("h1").after(badge);
}
function fetchArticle(){
    const article=document.querySelector("article")||document.querySelector("articlePage")||document.querySelector("main")||document.body;
    console.log("fetching article");
    return article;
}
renderReadingTime(fetchArticle())
