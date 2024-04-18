import React from "react";

// 영화 클릭없이 직접 movie_detail을 입력하여 들어가면, 콘솔에서 state가 undefined로 뜬다. => 클릭한게 없으니 영화를 특정하지 않아서 정보를 받아 올 수 없음.
// function Detail({location}){
//     console.log(location);
//     return(
//         <span>I am from Detail in Home</span>
//     );
// }

class Detail extends React.Component{
    componentDidMount(){
        const { location } = this.props;
        console.log(location.state);
    }


    render(){
        return (
            <span>I am from Detail in Home</span>
        );
    }
}

export default Detail;