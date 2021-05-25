import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import MainInfo from "../Components/MainInfo";

class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <MainInfo />
            </div>
    );
    }
}

export default Home;