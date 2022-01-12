import React from "react";
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
        query{
            Movies{
                id
                title
                medium_cover_image
                isLiked @client
            }
        }
`

function Home() {

    const { loading, error, data } = useQuery(GET_MOVIES);
    console.log(loading, error, data);

    return (
        loading ? 
            ("loading...") 
        :
            data.Movies ?
                <div>
                    {data.Movies.map((movie) => 
                        <Movie 
                            key={movie.id} 
                            id={movie.id} 
                            title={movie.title} 
                            isLiked={movie.isLiked}
                            poster ={movie.medium_cover_image}
                        />
                    )}
                </div>
                
            :
                ("data fetch error")
    );
}
export default Home;