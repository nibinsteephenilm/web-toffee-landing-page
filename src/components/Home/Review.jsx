import styled from "styled-components";
import Heading from "../Heading";
import Star from "./Star";
import ReviewCard from "../ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import UnderlineButton from "../UnderlineButton";

export default function Review() {
    var settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
    };
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="heading">
                    <Heading
                        lefttitle="Trusted by 1 Million+ Websites in"
                        midtitle="100+ Countries"
                        leftrightcolor="#EEE"
                        fontSize="35px"
                    />
                </div>
                <div className="rating">
                    <div className="customerRating">
                        <div className="starRating">
                            <Star star="/icons/Gold-star.svg" />
                            <span>4.96 of 5</span>
                        </div>
                        <p className="customer">Customer ratings</p>
                    </div>
                    <div className="trustPilotReview">
                        <Heading
                            lefttitle="See our"
                            midtitle="703"
                            righttitle="reviews on"
                            leftrightcolor="#EEE"
                            fontSize="18px"
                            lineheight="normal"
                        />
                        <a href="#" className="trustPilot">
                            <img
                                src="/icons/Trust-Pilot-Icon.svg"
                                alt="Trust Pilot Logo"
                            />
                        </a>
                    </div>
                </div>
            </Wrapper>
            <PublicReview>
                <Slider {...settings} className="sliderContainer">
                    <div className="cardContainer">
                        <ReviewCard
                            image="/images/ReviewPerson1.svg"
                            name="Bobby sAP"
                            job="Web Developer"
                            title="Easy plugin!!!"
                            description="I buy for the moment just one license to see if is so powerful 
                    like ppl says. I want to thank you very much for this plugin and i 
                    will continue to bu..."
                        />
                    </div>
                    <div className="cardContainer">
                        <ReviewCard
                            image="/images/ReviewPerson2.svg"
                            name="Sarah Banks"
                            job="Web Developer"
                            title="Recommendable Plugin!"
                            description="Definitely recommend this to website developers, online business consultants, website owners. It's a fantastic solution for a re..."
                        />
                    </div>
                    <div className="cardContainer">
                        <ReviewCard
                            image="/images/ReviewPerson3.svg"
                            name="Rene Andritsch"
                            job="Web Developer"
                            title="A plugin that suits all my GDPR needs!"
                            description="A plugin that suits all my GDPR needs. Lots of features and 
                        amazing support. Thank you!"
                        />
                    </div>
                </Slider>
                <div className="underlineButton">
                    <UnderlineButton />
                </div>
            </PublicReview>
        </Container>
    );
}
const Container = styled.div`
    background: linear-gradient(95deg, #010e25 24.46%, #061632 75.21%);
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    align-items: center;
    margin-bottom: 80px;
    flex-wrap: wrap;
    @media all and (max-width: 980px) {
        margin-bottom: 60px;
    }
    @media all and (max-width: 480px) {
        padding-top: 50px;
    }
    .heading {
        width: 38%;
        @media all and (max-width: 980px) {
            width: 100%;
        }
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 35px;
                    line-height: 40px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 27px;
                    line-height: 37px;
                }
                @media all and (max-width: 480px) {
                    font-size: 24px;
                    line-height: 30px;
                }
                span {
                    @media all and (max-width: 1280px) {
                        font-size: 35px;
                        line-height: 40px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 24px;
                        line-height: 30px;
                    }
                }
            }
        }
    }
    .rating {
        display: flex;
        @media all and (max-width: 980px) {
            margin-top: 25px;
        }
        @media all and (max-width: 480px) {
            flex-wrap: wrap;
        }
        .customerRating {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-right: 60px;
            @media all and (max-width: 1280px) {
                padding-right: 45px;
            }
            @media all and (max-width: 640px) {
                padding-right: 31px;
            }
            @media all and (max-width: 480px) {
                width: 100%;
                padding-right: 0;
                margin-bottom: 20px;
            }

            .starRating {
                display: flex;
                align-items: center;
                gap: 16px;
                @media all and (max-width: 640px) {
                    gap: 10px;
                }
                @media all and (max-width: 480px) {
                    margin-bottom: 5px;
                }
                .starWidth {
                    @media all and (max-width: 640px) {
                        gap: 5px;
                    }
                    .starFrame {
                        @media all and (max-width: 1080px) {
                            width: 18px;
                        }
                    }
                }
                span {
                    color: #eee;
                    font-family: "nunito-medium";
                    @media all and (max-width: 640px) {
                        font-size: 14px;
                    }
                }
            }
            .customer {
                color: #dbdbdb;
                font-family: "nunito-medium";
                @media all and (max-width: 640px) {
                    font-size: 16px;
                }
            }
        }
        .trustPilotReview {
            padding-left: 60px;
            position: relative;
            @media all and (max-width: 1280px) {
                padding-left: 45px;
            }
            @media all and (max-width: 640px) {
                padding-left: 31px;
            }
            @media all and (max-width: 480px) {
                width: 100%;
                padding-left: 0;
            }
            .headline {
                p {
                    @media all and (max-width: 640px) {
                        font-size: 16px;
                    }

                    span {
                        @media all and (max-width: 640px) {
                            font-size: 16px;
                        }
                    }
                }
            }
            &::before {
                content: "";
                height: 65%;
                width: 1px;
                background-color: #ddf0ff;
                display: block;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                @media all and (max-width: 480px) {
                    display: none;
                }
            }
            .trustPilot {
                margin-top: 5px;
                display: block;
                width: 140px;
                @media all and (max-width: 768px) {
                    width: 100px;
                }
                @media all and (max-width: 640px) {
                    width: 90px;
                }
            }
        }
    }
`;
const PublicReview = styled.div`
    padding-bottom: 100px;
    @media all and (max-width: 480px) {
        padding-bottom: 50px;
    }
    .slick-track {
        display: flex;
        width: 100%;
    }
    .cardContainer {
        width: 100%;
        height: 100%;
    }
    .underlineButton {
        margin-top: 56px;
        display: flex;
        justify-content: center;
    }
`;
