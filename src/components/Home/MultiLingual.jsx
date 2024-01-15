import styled from "styled-components";
import Heading from "../Heading";
import BoxContent from "../BoxContent";
import Button from "../Button";
import Specifications from "../Specification";

export default function MultiLingual() {
    const MultiLingualKey = [
        "Bulgarian",
        "Czech",
        "Danish",
        "German(Deutsch)",
        "Spanish",
        "Swedish",
        "French",
        "Lcelandic",
        "Dutch",
        "Slovenian",
        "Italian",
        "Finnish",
        "Norwegian",
        "Bulgarian",
    ];
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <div className="left">
                    <div className="headingContainer">
                        <Heading
                            lefttitle="Cache plugin compatible and"
                            midtitle="multilingual support"
                        />
                    </div>
                    <BoxContent boxtext="And additional themes and plugins compatibility" />
                    <p className="firstParagraph">
                        Assured compatibility with the plugins like Official
                        Facebook Pixel, Google Analytics Dashboard Plugin for
                        WordPress by MonsterInsights, Smash Balloon, etc
                    </p>
                    <p className="lastParagraph">
                        Change the language of the banner according to the
                        language of your website. The GDPR Cookie Consent plugin
                        is made to be compatible with popular multilingual
                        websites like WPML, qTranslate, Polylang, etc.
                    </p>
                    <Button
                        text="Get plugin now"
                        width="195px"
                        padding="12px 20px"
                    />
                </div>
                <div className="right">
                    {MultiLingualKey.map((item, i) => (
                        <div className="eachSpecification" key={i}>
                            <Specifications
                                text={item}
                                fontcolor="#01112D"
                                fontSize="20px"
                                fontFamily="nunito-medium"
                                containerpadding="20px 17px"
                                containerwidth="575px"
                                containerbackground="#F2F6FC"
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    border-radius: 16px;
    border: 1px solid #acd8fb;
    padding: 100px 0;
    /* height: 100vh;
    overflow: scroll; */
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;

    .left {
        width: 45%;
        position: sticky;
        top: 200px;
        left: 0;
        height: max-content;
        @media all and (max-width: 768px) {
            width: 100%;
            position: unset;
        }
        .headingContainer {
            margin-bottom: 48px;
            @media all and (max-width: 480px) {
                margin-bottom: 22px;
            }
            div.headline {
                p {
                    @media all and (max-width: 1280px) {
                        font-size: 30px;
                        line-height: 40px;
                    }
                    @media all and (max-width: 480px) {
                        font-size: 24px;
                        line-height: 30px;
                    }
                    span {
                        @media all and (max-width: 1280px) {
                            font-size: 30px;
                            line-height: 40px;
                        }
                        @media all and (max-width: 480px) {
                            font-size: 24px;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
        .firstParagraph {
            color: #747474;
            font-size: 17px;
            margin: 32px 0;
            @media all and (max-width: 1280px) {
                font-size: 15px;
            }
            @media all and (max-width: 480px) {
                margin: 18px 0;
            }
        }
        .lastParagraph {
            color: #747474;
            margin-bottom: 64px;
            font-size: 17px;
            @media all and (max-width: 1280px) {
                font-size: 15px;
                margin-bottom: 50px;
            }
            @media all and (max-width: 480px) {
                margin-bottom: 26px;
            }
        }
    }
    .right {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 45%;
        @media all and (max-width: 768px) {
            width: 100%;
            margin-top: 30px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        @media all and (max-width: 480px) {
            grid-template-columns: repeat(1, 1fr);
            height: 300px;
            overflow: scroll;
        }

        .eachSpecification {
            border: 1px solid #fff;
            border-radius: 8px;

            div.eachspec {
                @media all and (max-width: 1280px) {
                    width: 100%;
                }
                @media all and (max-width: 768px) {
                    padding: 5px 10px;
                    border-radius: 4px;
                }
                .text {
                    @media all and (max-width: 1280px) {
                        font-size: 18px;
                    }
                    @media all and (max-width: 768px) {
                        font-size: 16px;
                    }
                }
            }
        }
    }
`;
