import { Link } from "react-router-dom";
import { gql, useMutation } from '@apollo/client';

const LIKE_MOVIE = gql`
    mutation toggleLikeMovie($id: Int!){
        toggleLikeMovie(id: $id) @client
    }
`;

function Movie({ id, title, poster, isLiked }){

    const [likeMovie] = useMutation(LIKE_MOVIE, { variables: {id: +id}});

    return(
        <div>
            <div>
                {title}
            </div>
            <Link to={`/movie/${id}`}>
                <img src={poster} alt={title}></img>
            </Link>
            <button onClick={likeMovie}>{isLiked? "unLike" : "Like"}</button>
        </div>
    );
}

export default Movie;