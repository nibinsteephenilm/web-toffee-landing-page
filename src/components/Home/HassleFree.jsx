import styled from "styled-components";
import Heading from "../Heading";
import Button from "../Button";

export default function HassleFree() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="left">
                    <Heading
                        lefttitle="Make your WordPress website GDPR and CCPA"
                        midtitle="compliant easy and hassle free!"
                        leftrightcolor="#EEE"
                        fontSize="32px"
                        lineheight="50px"
                    />
                    <p className="hassleContent">
                        Get a cookie consent banner set up on your website in
                        minutes!
                    </p>
                    <Button
                        text="Browse plugins"
                        width="195px"
                        padding="12px 20px"
                    />
                </div>

                <div className="right">
                    <div className="position">
                        <div className="hassleImage">
                            <img
                                src="/images/Hasslefree-Image.svg"
                                alt="Hasslefree Image"
                            />
                        </div>
                        <a href="#">Explore More</a>
                    </div>
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    background-color: #01112d;
    padding: 60px 0;
`;
const Wrapper = styled.div`
    position: relative;
    @media all and (max-width: 980px) {
        position: unset;
    }
    .left {
        width: 55%;
        @media all and (max-width: 980px) {
            width: 100%;
        }
        div.headline {
            p {
                @media all and (max-width: 1280px) {
                    font-size: 30px;
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
                        font-size: 30px;
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
        .hassleContent {
            color: #adadad;
            font-size: 17px;
            margin-top: 14px;
            margin-bottom: 32px;
            @media all and (max-width: 1280px) {
                font-size: 16px;
                margin-bottom: 24px;
            }
            @media all and (max-width: 1080px) {
                font-size: 15px;
            }
        }
    }
    .right {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(0, -29%);
        @media all and (max-width: 1280px) {
            right: -5%;
        }
        @media all and (max-width: 980px) {
            position: unset;
            transform: translate(0, 0);
            width: 100%;
        }
        .position {
            display: flex;
            align-items: center;
            position: relative;
            @media all and (max-width: 980px) {
                justify-content: center;
                position: unset;
                flex-direction: column;
            }
            .hassleImage {
                width: 800px;
                @media all and (max-width: 1280px) {
                    width: 700px;
                }
                @media all and (max-width: 1080px) {
                    width: 650px;
                }
                @media all and (max-width: 980px) {
                    display: flex;
                    justify-content: center;
                    width: 500px;
                }
                @media all and (max-width: 640px) {
                    width: 390px;
                }
                @media all and (max-width: 480px) {
                    width: 333px;
                }
            }

            a {
                position: absolute;
                transform: rotate(90deg);
                color: #eee;
                font-size: 16px;
                right: 0;
                @media all and (max-width: 1280px) {
                    font-size: 14px;
                }
                @media all and (max-width: 980px) {
                    position: unset;
                    transform: rotate(0deg);
                    margin-top: 5px;
                }
            }
        }
    }
`;
