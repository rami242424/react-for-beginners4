import { useEffect } from "react";
import { useParams } from "react-router-dom";
// useParams : useParams함수를 사용하면 React Router는 바로 이 변수의 값(id값)을 넘겨줌



function Detail(){
    const {id} = useParams(); 
    // console.log(id);
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <h1>Detail</h1>
    )
}

export default Detail;