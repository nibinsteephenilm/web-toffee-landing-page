import styled from "styled-components";
import Heading from "../Heading";
import Star from "./Star";
import TrustPilotReviewCard from "../TrustPilotReviewCard";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TrustpilotReview() {
    var settings = {
        dots: false,
        // infinite: true,
        // speed: 500,
        arrows: false,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const arrow = useRef();

    const handleLeftClick = (e) => {
        e.preventDefault();
        arrow.current.slickPrev();
    };
    const handleRightClick = (e) => {
        e.preventDefault();
        arrow.current.slickNext();
    };
    return (
        <Container className="background">
            <div className="heading wrapper">
                <Heading
                    lefttitle="See what our customers have to say about GDPR plugin on "
                    midtitle="Trustpilot"
                />
            </div>
            <div className="bottom">
                <div className="bottomBackground">
                    <div className="backgroundCorner"></div>
                </div>
                <div className="rating">
                    <p className="excellent">excellent</p>
                    <Star star="/icons/Gold-star.svg" />
                    <p className="reviewNumber">
                        Based on <span>702 reviews</span>
                    </p>
                    <div className="trustpilotLogo">
                        <img
                            src="/icons/Trust-Pilot-Icon.svg"
                            alt="Trust pilot Icon"
                        />
                    </div>
                </div>
                <div className="userReviews">
                    <Slider
                        {...settings}
                        style={{ display: "flex", width: "100%" }}
                        ref={arrow}
                    >
                        <TrustPilotReviewCard
                            title="The best cookie system for WordPress"
                            description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                            name="Jidnjidun"
                            date="22 Jun 2023"
                            image="/images/Trustpilot-person-image.svg"
                        />
                        <TrustPilotReviewCard
                            title="The best cookie system for WordPress"
                            description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                            name="Jidnjidun"
                            date="22 Jun 2023"
                            image="/images/Trustpilot-person-image.svg"
                        />
                        <TrustPilotReviewCard
                            title="The best cookie system for WordPress"
                            description="For me it is the best cookie system for WordPress. I recommend it to all my clients. It avoids a lot of work in a very efficient way."
                            name="Jidnjidun"
                            date="22 Jun 2023"
                            image="/images/Trustpilot-person-image.svg"
                        />
                    </Slider>
                    <div className="reviewButtons">
                        <a className="arrow" onClick={handleLeftClick}>
                            <img src="/icons/arrow-left.svg" alt="Left Arrow" />
                        </a>
                        <a className="arrow" onClick={handleRightClick}>
                            <img
                                src="/icons/arrow-right.svg"
                                alt="right arrow"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    background-color: #f0f7fd;
    padding-top: 100px;
    padding-bottom: 80px;
    @media all and (max-width: 480px) {
            padding: 50px 0;
        }
    .heading {
        width: 60%;
        text-align: center;
        @media all and (max-width: 640px) {
            width: 100%;
        }
       
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 30px;
                    line-height: 43px;
                }
                @media all and (max-width: 640px) {
                    font-size: 27px;
                    line-height: 37px;
                }
                span {
                    @media all and (max-width: 1280px) {
                        font-size: 30px;
                        line-height: 43px;
                    }
                    @media all and (max-width: 640px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                }
            }
        }
    }
    .bottom {
        margin-top: 80px;
        padding-top: 6%;
        padding-bottom: 8%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        flex-wrap: wrap;
        @media all and (max-width: 1080px) {
            padding-top: 8%;
        }
        @media all and (max-width: 640px) {
            padding-top: 50px;
        }
        @media all and (max-width: 480px) {
            margin-top: 10px;
        }
        .bottomBackground {
            border-radius: 0px 8px 8px 0px;
            background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.2) 0%,
                    rgba(0, 0, 0, 0.2) 100%
                ),
                linear-gradient(101deg, #01112d 0%, #061d43 128.42%);
            position: absolute;
            left: 0;
            height: 100%;
            width: 80%;
            @media all and (max-width: 980px) {
                width: 100%;
            }
            .backgroundCorner {
                width: 100%;
                height: 100%;
                position: relative;
                &::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: url("/images/Trust-Pilot-background-top-corner.svg")
                        no-repeat;
                    background-size: contain;
                    transform: translate(8%, -8%);
                    width: 80px;
                    height: 80px;
                    @media all and (max-width: 480px) {
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
        .rating {
            margin-left: 6%;
            width: 14%;
            z-index: 1;
            @media all and (max-width: 1479px) {
                width: 17%;
            }
            @media all and (max-width: 980px) {
                width: 100%;
            }

            .starWidth {
                .starFrame {
                    @media all and (max-width: 1280px) {
                        width: 20px;
                    }
                }
            }
            .excellent {
                color: #f3f5f9;
                text-transform: capitalize;
                font-family: "nunito-medium";
                font-size: 37px;
                margin-bottom: 8px;
                @media all and (max-width: 1280px) {
                    font-size: 33px;
                }
            }
            .reviewNumber {
                color: #f3f5f9;
                font-size: 20px;
                margin-top: 16px;
                margin-bottom: 20px;
                @media all and (max-width: 1280px) {
                    font-size: 16px;
                    margin-bottom: 16px;
                }
                span {
                    color: #fff;
                    font-size: 20px;
                    text-decoration: underline;
                    @media all and (max-width: 1280px) {
                        font-size: 16px;
                    }
                }
            }
            .trustpilotLogo {
                width: 128px;
            }
        }
        .userReviews {
            overflow: hidden;
            /* flex: 1; */
            width: 73%;
            z-index: 1;
            @media all and (max-width: 1479px) {
                width: 67%;
            }
            @media all and (max-width: 1340px) {
                width: 70%;
            }
            @media all and (max-width: 980px) {
                width: 100%;
                margin-left: 30px;
                margin-top: 30px;
            }
            .reviewButtons {
                display: flex;
                gap: 16px;
                margin-top: 16px;
                @media all and (max-width: 1280px) {
                    gap: 10px;
                }
                .arrow {
                    border-radius: 4px;
                    border: 1px solid var(--Neutral-100, #eee);
                    background: #05122a;
                    padding: 10px;
                    width: 40px;
                    cursor: pointer;
                    @media all and (max-width: 1280px) {
                        padding: 7px;
                        width: 30px;
                    }
                }
            }
        }
        .slick-track {
            display: flex;
            flex-direction: row-reverse;
        }
    }
`;
