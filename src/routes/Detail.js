import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        // console.log(this.props); // history 정보도 나온다.
        const { location, history } = this.props;
        // console.log(location.state); // undefined가 나온다(movie-detail로 직접 이동했을 때)
        if(location.state === undefined){
            // redirect 할거다 (home으로 돌아온다)
            history.push("/");
        }
    }

    // render 실행 후 > componentDidMount 실행
    render(){
        const { location } = this.props;
        if (location.state) {
            return (
                <span>{location.state.title}</span>
            );
        } else {
            return null;
        }
    }
}

export default Detail;