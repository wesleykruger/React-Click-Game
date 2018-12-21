import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import CardItem from "./cardItem"
import "./style.css";

import * as HarryPotterImage from "../../images/HarryPotter.jpg";
import * as DobbyImage from "../../images/Dobby.jpg";
import * as DumbledoreImage from "../../images/Dumbledore.jpg";
import * as FredAndGeorgeImage from "../../images/FredandGeorge.jpg";
import * as GinnyImage from "../../images/Ginny.jpg";
import * as HermioneImage from "../../images/Hermione.jpg";
import * as LupinImage from "../../images/Lupin.jpg";
import * as RonImage from "../../images/Ron.jpg";
import * as SiriusImage from "../../images/Sirius.jpg";
import * as SnapeImage from "../../images/Snape.jpg";
import * as TonksImage from "../../images/Tonks.jpg";
import * as VoldemortImage from "../../images/Voldemort.jpg";



class Character extends Component {
    state = {
        charArr: [{
            name: "Harry",
            src: HarryPotterImage,
            beenClicked: false,
        },
        {
            name: "Dobby",
            src: DobbyImage,
            beenClicked: false
        },
        {
            name: "Dumbledore",
            src: DumbledoreImage,
            beenClicked: false
        },
        {
            name: "FredAndGeorge",
            src: FredAndGeorgeImage,
            beenClicked: false
        },
        {
            name: "Ginny",
            src: GinnyImage,
            beenClicked: false
        },
        {
            name: "Hermione",
            src: HermioneImage,
            beenClicked: false
        },
        {
            name: "Lupin",
            src: LupinImage,
            beenClicked: false
        },
        {
            name: "Ron",
            src: RonImage,
            beenClicked: false
        },
        {
            name: "Sirius",
            src: SiriusImage,
            beenClicked: false
        },
        {
            name: "Snape",
            src: SnapeImage,
            beenClicked: false
        },
        {
            name: "Tonks",
            src: TonksImage,
            beenClicked: false
        },
        {
            name: "Voldemort",
            src: VoldemortImage,
            beenClicked: false
        }
        ]
    }


    componentDidMount() {
        console.log("mounted");
    }

    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    handleCharClick = event => {
        // const { name, value } = event.target;
         console.log(event);
        // for (i=0; i < this.state.charArr.length; i++) {
        //     if (this.state.charArr[i].name === name) {
        //         this.setState({
        //             this.state.charArr[i].beenClicked: true;
        //         })
        //     }
        // }

    }


    // function CharacterCard(props) {
    //     return (
    //         <div className="card">
    //             <div className="img-container" onClick={this.handleCharClick}>
    //                 <img alt={props.name} src={props.image} />
    //             </div>
    //         </div>
    //     );
    // }

    render() {
        return (
            <Container fluid>
                {this.state.charArr.map(character => {
                    return (
                        <CardItem onClick={this.handleCharClick}
                            key={character.name}
                            name={character.name}
                            src={character.src}
                        />
                    )
                })}
            </Container>
        )
    }


}

export default Character;
