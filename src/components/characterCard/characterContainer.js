import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import { CharacterItem } from "./cardItem"
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



class CharacterContainer extends Component {
    state = {
        banner: "Choose characters!",
        score: 0,
        topScore: 0,
        charArr: [{
            name: "Harry",
            src: HarryPotterImage
        },
        {
            name: "Dobby",
            src: DobbyImage
        },
        {
            name: "Dumbledore",
            src: DumbledoreImage
        },
        {
            name: "FredAndGeorge",
            src: FredAndGeorgeImage
        },
        {
            name: "Ginny",
            src: GinnyImage
        },
        {
            name: "Hermione",
            src: HermioneImage
        },
        {
            name: "Lupin",
            src: LupinImage
        },
        {
            name: "Ron",
            src: RonImage
        },
        {
            name: "Sirius",
            src: SiriusImage
        },
        {
            name: "Snape",
            src: SnapeImage
        },
        {
            name: "Tonks",
            src: TonksImage
        },
        {
            name: "Voldemort",
            src: VoldemortImage
        }
        ],
        clickedArr: []
    }


    componentDidMount() {
        console.dir(this.state.charArr);
        this.shuffleArray(this.state.charArr)
    }

    // function to shuffle the order in which the pictures appear on the page
    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    handleCharClick = name => {
        //console.dir(this.state)
        // Picture has been previously clicked, reset game
        if (this.state.clickedArr.includes(name)) {
            this.setState({
                score: 0,
                banner: "Wrong! Try again!"
            })
        } else {
            // Picture has not yet been clicked, add point and contine
            let newScore = this.state.score += 1;
            let fancyNewArray = [];
            fancyNewArray.push(name);
            this.setState({
                clickedArr: fancyNewArray,
                score: newScore,
                banner: "You guessed correctly!"
            })
            if (this.state.score + 1 > this.state.topScore) {
                this.setState({
                    topScore: this.state.score
                })
            }
        }

        console.log("about to shuffle line 117 : ");
        console.dir(this.state.charArr)
        this.shuffleArray(this.state.charArr);

    }

    render() {
        let firstRow = [];
        let secondRow = [];
        let thirdRow = [];
        for (let i = 0; i < this.state.charArr.length; i++) {
            if (i < 4) {
                firstRow.push(this.state.charArr[i]);
            } else if (i < 8) {
                secondRow.push(this.state.charArr[i]);
            } else {
                thirdRow.push(this.state.charArr[i])
            }
        }
        return (
            <div className="background">
                <Container fluid>
                    <Row>
                        <span className="navbar">
                        <Col size="4">
                            <div className="navbar-brand">
                                Harry Potter React Clicky Game
                                </div>
                        </Col>
                        <Col size="4">
                            {this.state.banner}
                        </Col>
                        <Col size="4">
                            Score: {this.state.score} | Top Score: {this.state.topScore}
                        </Col>
                        </span>
                    </Row>
                    <span className="playArea">
                    <Row>
                        <Col size="2"></Col>
                        {firstRow.map(character => {
                            return (
                                <Col size="2">
                                    <CharacterItem onClick={() => this.handleCharClick(character.name)}
                                        key={character.name}
                                        name={character.name}
                                        src={character.src}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col size="2"></Col>
                        {secondRow.map(character => {
                            return (
                                <Col size="2">
                                    <CharacterItem onClick={() => this.handleCharClick(character.name)}
                                        key={character.name}
                                        name={character.name}
                                        src={character.src}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    <Row>
                        <Col size="2"></Col>
                        {thirdRow.map(character => {
                            return (
                                <Col size="2">
                                    <CharacterItem onClick={() => this.handleCharClick(character.name)}
                                        key={character.name}
                                        name={character.name}
                                        src={character.src}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                    </span>
                </Container>
            </div>
        )
    }


}

export default CharacterContainer;
