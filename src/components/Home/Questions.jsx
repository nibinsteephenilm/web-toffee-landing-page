import styled from "styled-components";
import Heading from "../Heading";
import { QuestionsKey } from "../../util/QuestionsKey";
import { useState } from "react";

export default function Questions() {
    const [activeQuestion, setActiveQuestion] = useState("");

    const handleClick = (index) => {
        if (index === activeQuestion) {
            setActiveQuestion("");
        } else {
            setActiveQuestion(index);
        }
    };
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="top">
                    <Heading lefttitle="Frequently Ask" midtitle="Questions" />
                    <p className="questionContent">
                        Do you have a question about the ‘GDPR Cookie Consent?
                        See the list below for our most frequently asked
                        questions.
                    </p>
                </div>
                <div className="bottom">
                    {QuestionsKey.map((item, i) => (
                        <div
                            className={`eachQuestion ${
                                i === activeQuestion ? "active" : null
                            }`}
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            <div className="head">
                                <div className="title">{item.title}</div>
                                <div className="arrow">
                                    <img
                                        src="/icons/Show-More-Arrow.svg"
                                        alt="Show more Arrow"
                                    />
                                </div>
                            </div>
                            <div className="description">
                                <p className="first">{item.first}</p>
                                <p className="second">{item.second}</p>
                                <p className="third">{item.third}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    padding-bottom: 300px;
    position: relative;
    @media all and (max-width: 1280px) {
        padding-bottom: 180px;
    }
    @media all and (max-width: 640px) {
        padding-bottom: 100px;
    }
    &::after {
        content: "";
        background-image: url("/images/Question-lap.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 1100px;
        height: 650px;
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        @media all and (max-width: 1280px) {
            width: 750px;
            height: 478px;
        }
        @media all and (max-width: 980px) {
            width: 605px;
            height: 385px;
        }
        @media all and (max-width: 640px) {
            width: 394px;
            height: 251px;
        }
        @media all and (max-width: 480px) {
            width: 333px;
            height: 212px;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 60px;
        @media all and (max-width: 980px) {
            margin-bottom: 30px;
        }
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 35px;
                    line-height: 43px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 27px;
                    line-height: 37px;
                }
                span {
                    @media all and (max-width: 1080px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                }
            }
        }
        .questionContent {
            width: 49%;
            font-size: 18px;
            color: #747474;
            margin-top: 24px;
            @media all and (max-width: 1280px) {
                font-size: 17px;
            }
            @media all and (max-width: 1080px) {
                font-size: 16px;
            }
            @media all and (max-width: 640px) {
                width: 100%;
                font-size: 15px;
            }
        }
    }
    .bottom {
        width: 75%;
        @media all and (max-width: 640px) {
            width: 95%;
        }
        .eachQuestion {
            border-bottom: 1px solid #d4d4d4;
            padding: 24px 0;
            @media all and (max-width: 1280px) {
                padding: 20px 0;
            }
            @media all and (max-width: 1080px) {
                padding: 18px 0;
            }
            @media all and (max-width: 640px) {
                padding: 14px 0;
            }
            .head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                cursor: pointer;
                .title {
                    color: #0a0a0a;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                    transition: 0.25s;
                    @media all and (max-width: 1280px) {
                        font-size: 20px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 17px;
                    }
                    @media all and (max-width: 640px) {
                        font-size: 15px;
                    }
                }
                .arrow {
                    width: 28px;
                    transition: 0.5s;
                    @media all and (max-width: 1280px) {
                        width: 25px;
                    }
                    @media all and (max-width: 1080px) {
                        width: 20px;
                    }
                }
            }

            .description {
                height: 0;
                visibility: hidden;
                transition: height 0.3s ease-in-out;
                p {
                    color: #747474;
                    font-size: 18px;
                    line-height: 30px;
                    @media all and (max-width: 1280px) {
                        font-size: 17px;
                        line-height: 28px;
                    }
                    @media all and (max-width: 1280px) {
                        font-size: 15px;
                        line-height: 25px;
                    }
                    @media all and (max-width: 640px) {
                        font-size: 14px;
                        line-height: normal;
                    }
                }
            }
        }
        .active {
            .head {
                margin-bottom: 16px;
                .arrow {
                    transform: rotate(180deg);
                }
                .title {
                    color: #3182ff;
                    font-family: "nunito-semibold";
                    font-size: 22px;
                    @media all and (max-width: 1280px) {
                        font-size: 20px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 17px;
                    }
                    @media all and (max-width: 640px) {
                        font-size: 15px;
                    }
                }
            }
            .description {
                height: 200px;
                visibility: visible;
                @media all and (max-width: 640px) {
                    height: 210px;
                }
                @media all and (max-width: 480px) {
                    height: 270px;
                }
            }
        }
        .eachQuestion:nth-child(2).active {
            .description {
                height: 100px;
                @media all and (max-width: 640px) {
                    height: 110px;
                }
                @media all and (max-width: 480px) {
                    height: 150px;
                }
            }
        }
    }
`;
