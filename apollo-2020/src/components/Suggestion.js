function Suggestion({ id, title, poster}){
    return(
        <div>
            <div>
                {title}
            </div>
            <img src={poster} alt={title}></img>
        </div>
    );
}

export default Suggestion;