import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from '@apollo/client';
import Suggestion from "../components/Suggestion";

const GET_MOVIE = gql`
        query getMovieById($id: Int!){
            MovieById(id: $id){
                id
                title
                language
                rating
                medium_cover_image
                description_intro
            }
            Suggestions(id: $id){
                id
                title
                medium_cover_image
            }
        }
`

function Detail() {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_MOVIE, { variables:  { id : +id }});
    console.log(loading, data);
    
    return(
        loading ? 
            <div>
                {`This page is loading`}
            </div>
        :
            (data&&data.MovieById) ?
                <div>
                    <img src={data.MovieById.medium_cover_image} alt={data.MovieById.title}/>
                    <div>
                        {`Title : ${data.MovieById.title}`}
                    </div>
                    <div>
                        {`Rating : ${data.MovieById.rating}`}
                    </div>
                    <div>
                        {`Language : ${data.MovieById.language}`}
                    </div>
                    <div>
                        {`Summary : ${data.MovieById.description_intro}`}
                    </div>

                    <div>Suggestions</div>
                    {data.Suggestions.map((suggestion) => 
                        <Suggestion 
                            key={suggestion.id}
                            id={suggestion.id}
                            title={suggestion.title}
                            poster={suggestion.medium_cover_image}
                        /> 
                    )}
                </div> 
            : 
                ("Data fetch Error")
    );

}
export default Detail;