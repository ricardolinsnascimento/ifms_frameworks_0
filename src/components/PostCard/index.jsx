export const PostCard = ({title, body, id,cover}) => {
    return (
        <div className = "post">            
            <img src = {cover} alt={title}/>            
            <h1>{title}</h1>
            <p> {body} </p>            
        </div>
    )
}