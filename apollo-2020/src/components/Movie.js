import { Link } from "react-router-dom";

function Movie({ id, title, poster }){
    return(
        <div>
            <div>
                {title}
            </div>
            <Link to={`/movie/${id}`}>
                <img src={poster} alt={title}></img>
            </Link>
        </div>
    );
}

export default Movie;