import "../assets/css/Article.css";

export default function Article(props) {
    return (
        <article>
            <h2>{props.titulo}</h2>

            <p>
                Data da publicação
                <time datetime={props.data}>{props.dataFormatada}</time>    
            </p>

            <p>{props.conteudo1}</p>
            <p>{props.conteudo2}</p>

            <figure>
                <img src={props.imagem} alt={props.alt} />
                <figcaption>{props.legenda}</figcaption>
            </figure>
        </article>
    );
}