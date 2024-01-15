import styled from "styled-components";
import Heading from "../Heading";
import PurchaseCard from "../PurchaseCard";
import Star from "./Star";
import Specifications from "../Specification";
export default function Purchase() {
    return (
        <Container className="background">
            <div className="purchaseHeading">
                <div className="purchaseTitle">
                    <Heading
                        lefttitle="The Best Plugin for CCPA and GDPR"
                        midtitle="Cookie Consent"
                        leftrightcolor="#EEE"
                    />
                </div>
                <div className="moneyback">
                    <p className="guarantee">
                        100% no-risk Money Back guarantee
                    </p>
                    <div className="moneybackFrame">
                        <img
                            src="/images/Moneyback-image.svg"
                            alt="Money back image"
                        />
                    </div>
                </div>
            </div>
            <Wrapper className="wrapper">
                <div className="cardContainer">
                    <PurchaseCard count="Single Site" cost="69.00" />
                    <PurchaseCard
                        count="Upto 25 Sites"
                        cost="399.00"
                        recommended="block"
                    />
                    <PurchaseCard count="Upto 5 Sites" cost="199.00" />
                </div>
                <div className="consent">
                    <div className="plugin">
                        <div className="pluginHeading">
                            <Heading
                                lefttitle="GDPR Cookie Consent Plugin"
                                midtitle="(CCPA Ready)"
                                leftrightcolor="#EEE"
                                fontSize="24px"
                                lineheight="35px"
                            />
                        </div>
                        <div className="review">
                            <Star star="/icons/Gold-star.svg" />
                            <p className="reviewText">119 Reviews</p>
                        </div>
                    </div>
                    <ul className="purchaseSpecifications">
                        <li>
                            <Specifications
                                text="Extensive Cookie banner customization"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Automatically block cookies/script"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Scan and list cookies"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="User Consent logging"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Granular consent based on cookie categories"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Location based exclusion for banner"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                        <li>
                            <Specifications
                                text="Explicit/Implicit consent"
                                radius="27px"
                                fontSize="17px"
                            />
                        </li>
                    </ul>
                </div>
                <div className="moreInfo">
                    <p className="updateDetails">
                        A subscription entitles you to 1 year of updates and
                        support from the date of purchase.
                    </p>
                    <ul>
                        <li>Version 2.4.0</li>
                        <li>
                            <a href="#">Changelog</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.section`
    padding: 115px 0;
    border-radius: 16px;
    background: radial-gradient(
        43.84% 50% at 50% 50%,
        #0d2759 0%,
        #01112d 100%
    );
    overflow: hidden;
    position: relative;
    @media all and (max-width: 980px) {
        padding: 50px 0;
    }
    @media all and (max-width: 768px) {
        padding: 90px 0;
    }
    @media all and (max-width: 480px) {
        padding: 60px 0;
    }

    @keyframes glare {
        0% {
            top: -13%;
            left: -13%;
        }
        100% {
            top: 62%;
            left: 62%;
        }
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        background: url("/images/Background-TopCorner.svg") no-repeat;
        background-size: contain;
        transform: translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: url("/images/Background-TopCorner.svg") no-repeat;
        background-size: contain;
        transform: rotate(180deg) translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }

    .purchaseHeading {
        display: flex;
        justify-content: center;
        position: relative;
        margin-bottom: 80px;
        @media all and (max-width: 1080px) {
            margin-bottom: 42px;
        }
        @media all and (max-width: 480px) {
            margin-bottom: 30px;
        }
        .purchaseTitle {
            width: 40%;
            text-align: center;
            @media all and (max-width: 768px) {
                width: 90%;
            }

            div.headline {
                p {
                    @media all and (max-width: 1280px) {
                        font-size: 30px;
                        line-height: 49px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 21px;
                        line-height: 30px;
                    }
                }
                span {
                    @media all and (max-width: 1280px) {
                        font-size: 30px;
                        line-height: 49px;
                    }
                    @media all and (max-width: 1080px) {
                        font-size: 27px;
                        line-height: 37px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 21px;
                        line-height: 30px;
                    }
                }
            }
        }
        .moneyback {
            display: flex;
            align-items: center;
            position: absolute;
            left: 0;
            .guarantee {
                font-size: 17px;
                color: #eee;
                border-top: 1px solid #f5f5f5;
                border-bottom: 1px solid #f5f5f5;
                width: 228px;
                padding: 10px 34px;
                display: flex;
                @media all and (max-width: 1280px) {
                    font-size: 14px;
                    width: 172px;
                    padding: 10px 20px;
                }
                @media all and (max-width: 1080px) {
                    width: 159px;
                    padding: 5px 11px;
                }
                @media all and (max-width: 980px) {
                    display: none;
                }
            }
            .moneybackFrame {
                transform: translatex(-13%);
                width: 140px;
                display: flex;
                @media all and (max-width: 1280px) {
                    width: 115px;
                }
                @media all and (max-width: 1080px) {
                    width: 90px;
                }
                @media all and (max-width: 980px) {
                    transform: translateX(0);
                    margin-left: 20px;
                }
                @media all and (max-width: 768px) {
                    display: none;
                }
            }
        }
    }
`;
const Wrapper = styled.div`
    .cardContainer {
        display: flex;
        gap: 32px;
        margin-bottom: 32px;
        @media all and (max-width: 768px) {
            gap: 7px;
        }
        @media all and (max-width: 640px) {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
    }
    .consent {
        display: flex;
        justify-content: space-between;
        padding: 32px;
        border-radius: 8px;
        border: 1px solid rgba(116, 116, 116, 0.4);
        background: #01112d;
        flex-wrap: wrap;
        @media all and (max-width: 640px) {
            gap: 25px;
        }
        @media all and (max-width: 480px) {
            padding: 20px;
        }
        .plugin {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 32%;
            @media all and (max-width: 640px) {
                width: 100%;
            }
            .pluginHeading {
                div.headline {
                    p {
                        @media all and (max-width: 1080px) {
                            font-size: 18px;
                            line-height: 28px;
                        }
                        @media all and (max-width: 480px) {
                            font-size: 16px;
                            line-height: 22px;
                        }
                        span {
                            @media all and (max-width: 1080px) {
                                font-size: 18px;
                                line-height: 28px;
                            }
                            @media all and (max-width: 480px) {
                                font-size: 16px;
                                line-height: 22px;
                            }
                        }
                    }
                }
            }
            .review {
                display: flex;
                gap: 16px;
                align-items: center;
                @media all and (max-width: 1280px) {
                    flex-direction: column;
                    align-items: start;
                    gap: 5px;
                    margin-top: 20px;
                }
                .starWidth {
                    @media all and (max-width: 480px) {
                        gap: 4px;
                    }
                    .starFrame {
                        @media all and (max-width: 1280px) {
                            width: 18px;
                        }
                        @media all and (max-width: 480px) {
                            width: 16px;
                        }
                    }
                }
                p {
                    color: #f3f3f3;
                    font-size: 18px;
                    font-family: "nunito-bold";
                    text-decoration: underline;
                    @media all and (max-width: 1080px) {
                        font-size: 16px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 15px;
                    }
                }
            }
        }
        .purchaseSpecifications {
            column-count: 2;
            @media all and (max-width: 980px) {
                column-count: 1;
            }
            @media all and (max-width: 640px) {
                width: 100%;
            }
            li {
                margin-bottom: 20px;
                div.eachspec {
                    .text {
                        @media all and (max-width: 1080px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
    .moreInfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 48px;
        @media all and (max-width: 768px) {
            margin-top: 22px;
        }
        p {
            color: #c3c3c3;
            font-size: 22px;
            margin-bottom: 16px;
            @media all and (max-width: 1080px) {
                font-size: 17px;
            }
            @media all and (max-width: 980px) {
                font-size: 14px;
            }
            @media all and (max-width: 640px) {
                width: 90%;
            }
            @media all and (max-width: 480px) {
                width: 100%;
                text-align: center;
                margin-bottom: 22px;
            }
        }
        ul {
            display: flex;

            @media all and (max-width: 480px) {
                flex-wrap: wrap;
                justify-content: center;
            }
            :nth-child(3) {
                @media all and (max-width: 480px) {
                    border-right: none;
                    padding-right: 0;
                }
            }
            li {
                color: #ececec;
                font-family: "nunito-medium";
                border-right: 1px solid #7383a0;
                line-height: 12px;
                display: flex;
                align-items: center;
                padding: 0 65px;
                @media all and (max-width: 1080px) {
                    padding: 0 35px;
                }
                @media all and (max-width: 640px) {
                    padding: 0 10px;
                }

                a {
                    color: #007fff;
                    font-family: "nunito-medium";
                    @media all and (max-width: 1080px) {
                        font-size: 14px;
                    }
                    @media all and (max-width: 980px) {
                        font-size: 13px;
                    }
                }
            }
            :nth-child(1) {
                padding-left: 0;
            }
            :nth-child(4) {
                padding-right: 0;
                border-right: none;
                @media all and (max-width: 480px) {
                       margin-top: 10px;
                       padding: 0 10px;
                       border-right: 1px solid #7383a0;
                       border-left: 1px solid #7383a0;
                    }
            }
        }
    }
`;
