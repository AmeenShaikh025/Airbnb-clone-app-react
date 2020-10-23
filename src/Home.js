import React from 'react'

import "./Home.css";
import Banner from './Banner';
import Card from './Card';

import airbnb_1 from'./assets/airbnb_hotels/airbnb_1.jpg';
import airbnb_2 from'./assets/airbnb_hotels/airbnb_2.jpg';
import airbnb_3 from'./assets/airbnb_hotels/airbnb_3.jpg';
import airbnb_4 from'./assets/airbnb_hotels/airbnb_4.jpg';
import airbnb_5 from'./assets/airbnb_hotels/airbnb_5.jpg';
import airbnb_6 from'./assets/airbnb_hotels/airbnb_6.jpg';
import airbnb_7 from'./assets/airbnb_hotels/airbnb_7.jpg';

function Home() {
    return (
        <div className="home">
            <Banner />
                <div className="home__section"> 
                    <Card
                        src={airbnb_1}
                        title="Online Experiences"
                        description="Unique activities we can do together, led by a world of hosts."
                    />
                    <Card
                        src={airbnb_2}
                        title="Unique stays"
                        description="Spaces that are more than just a place to sleep."
                    />
                    <Card
                        src={airbnb_3}
                        title="Entire homes"
                        description="Comfortable private places, with room for friends or family."
                    />
                    <Card
                        src={airbnb_4}
                        title="3 Bedroom Flat in Bournemouth"
                        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                        price="$130/night"
                    />
                    <Card
                        src={airbnb_5}
                        title="Penthouse in London"
                        description="Enjoy the amazing sights of London with this stunning penthouse"
                        price="$350/night"
                    />
                    <Card
                        src={airbnb_6}
                        title="1 Bedroom apartment"
                        description="Superhost with great amenities and a fabolous shopping complex nearby"
                        price="$70/night"
                    />
                    <Card
                        src={airbnb_7}
                        title="3 Bedroom Flat in Belgaum"
                        description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                        price="$60/night"
                    />
                </div>
        </div>
    )
}

export default Home;
