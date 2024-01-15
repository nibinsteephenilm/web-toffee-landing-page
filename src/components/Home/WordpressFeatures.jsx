import styled from "styled-components";
import Heading from "../Heading";
import wordpressCardKey from "../../util/WordpressCardKey";
import WordpressCard from "../WordpressCard";
export default function WordpressFeatures() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="featuresHeading">
                    <Heading
                        lefttitle="The fastest growing WordPress GDPR"
                        midtitle="cookie consent plugin"
                    />
                </div>
                <p className="featuresContent">
                    Making your journey to compliance with GDPR and CCPA easier
                    with powerful features
                </p>
                <div className="cardContainer">
                    {wordpressCardKey.map((item, i) => (
                        <div className="cards" key={i}>
                            <WordpressCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                other="false"
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .featuresHeading {
        width: 45%;
        text-align: center;
        margin-bottom: 12px;
        @media all and (max-width: 1280px) {
            width: 50%;
        }
        @media all and (max-width: 768px) {
            width: 100%;
            text-align: left;
        }
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 30px;
                    line-height: 43px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 27px;
                    line-height: 37px;
                }
                @media all and (max-width: 640px) {
                    font-size: 24px;
                    line-height: 30px;
                }
            }
            span {
                @media all and (max-width: 1280px) {
                    font-size: 30px;
                    line-height: 43px;
                }
                @media all and (max-width: 1080px) {
                    font-size: 27px;
                    line-height: 37px;
                }
                @media all and (max-width: 640px) {
                    font-size: 24px;
                    line-height: 30px;
                }
            }
        }
    }
    .featuresContent {
        letter-spacing: 0.22px;
        font-size: 18px;
        color: #747474;
        margin-bottom: 80px;
        @media all and (max-width: 1280px) {
            font-size: 17px;
        }
        @media all and (max-width: 1080px) {
            font-size: 15px;
        }
        @media all and (max-width: 768px) {
            margin-bottom: 50px;
            margin-top: 10px;
        }
        @media all and (max-width: 640px) {
            font-size: 14px;
            margin-bottom: 40px;
        }
    }
    .cardContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 60px 24px;
        @media all and (max-width: 1280px) {
            grid-gap: 50px 22px;
        }
        @media all and (max-width: 980px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media all and (max-width: 640px) {
            grid-gap: 32px 12px;
        }
        @media all and (max-width: 480px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
