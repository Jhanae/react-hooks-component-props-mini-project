import Article from "./Article";

function ArticleList({posts}) {
    const article = posts.map((articlePost) => (
        <Article
            key={posts.id}
            title={posts.title}
            date={posts.date}
            preview={posts.preview}
            minutes={posts.minutes}
        />
    ));

    return (
        <main>{article}</main>
    )

}
export default ArticleList;