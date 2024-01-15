import styled from "styled-components";
import Star from "./Star";

export default function Footer() {
    return (
        <Container>
            <Wrapper className="wrapper">
                <div className="logoSection">
                    <div className="logoAndMedia">
                        <a href="#" className="logo">
                            <img
                                src="/icons/Footer-logo.svg"
                                alt="Footer Logo"
                            />
                        </a>
                        <ul className="socialMedia">
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/Instagram_Icon.svg"
                                        alt="Instagram"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/Facebook-Icon.svg"
                                        alt="Facebook"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/LinkedIn-Icon.svg"
                                        alt="X"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/LinkedIn-Icon.svg"
                                        alt="Linked In"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/icons/Youtube-Icon.svg"
                                        alt="Youtube"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="trustpilotRating">
                        <div className="trustpilot">
                            <img
                                src="/icons/Trust-Pilot-Icon.svg"
                                alt="Trustpilot Logo"
                            />
                        </div>
                        <Star star="/icons/Footer-Star.svg" width="20px" />
                    </div>
                </div>
                <ul className="linkSection">
                    <li>
                        <ul>
                            <li>
                                <a href="#">Our plugins</a>
                            </li>
                            <li>
                                <a href="#">GDPR Cookie Consent</a>
                            </li>
                            <li>
                                <a href="#">PDF Invoices & Packings Slips</a>
                            </li>
                            <li>
                                <a href="#">Product Import Export Plugin</a>
                            </li>
                            <li>
                                <a href="#">User & Customer Import Expor</a>
                            </li>
                            <li>
                                <a href="#">Import Export Suite</a>
                            </li>
                            <li>
                                <a href="#">Sequential Order Numbers</a>
                            </li>
                            <li>
                                <a href="#">Smart Coupons for WooCommerce</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Get Started</a>
                            </li>
                            <li>
                                <a href="#">Plugins</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Affiliates</a>
                            </li>
                            <li>
                                <a href="#">We're hiring</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Help & Support</a>
                            </li>
                            <li>
                                <a href="#">Documentation</a>
                            </li>
                            <li>
                                <a href="#">Documentation (Basic)</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Support</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Refund Policy</a>
                            </li>
                            <li>
                                <a href="#">Support Policy</a>
                            </li>
                            <li>
                                <a href="#">License Activation</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </Wrapper>
            <p className="copyright wrapper">
                © 2023 WebToffee. All rights reserved.
            </p>
        </Container>
    );
}
const Container = styled.div`
    background: #031126;
    padding-top: 230px;
    @media all and (max-width: 980px) {
        padding-top: 170px;
    }
    @media all and (max-width: 640px) {
        padding-top: 115px;
    }
    .copyright {
        text-align: center;
        color: #aaa;
        font-size: 14px;
        padding: 40px 0;
        border-top: 1px solid #aaa;
        @media all and (max-width: 1280px) {
            padding: 18px 0;
            font-size: 13px;
        }
    }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    flex-wrap: wrap;
    @media all and (max-width: 640px) {
        margin-bottom: 12px;
    }
    .logoSection {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media all and (max-width: 980px) {
            width: 100%;
            flex-direction: row;
            align-items: start;
        }
        @media all and (max-width: 480px) {
            flex-direction: column;
        }
        .logoAndMedia {
            @media all and (max-width: 480px) {
                margin-bottom: 20px;
            }
            .logo {
                width: 183px;
                display: block;
                margin-bottom: 40px;
                @media all and (max-width: 1280px) {
                    width: 120px;
                    margin-bottom: 30px;
                }
                @media all and (max-width: 980px) {
                    width: 92px;
                }
                @media all and (max-width: 640px) {
                    width: 80px;
                    margin-bottom: 24px;
                }
            }
            .socialMedia {
                display: flex;
                gap: 8px;
                @media all and (max-width: 1280px) {
                    gap: 6px;
                }
                li {
                    a {
                        width: 35px;
                        display: block;
                        @media all and (max-width: 1280px) {
                            width: 25px;
                        }
                    }
                }
            }
        }
        .trustpilotRating {
            .trustpilot {
                width: 102px;
                margin-bottom: 10px;
                @media all and (max-width: 1280px) {
                    width: 98px;
                }
                @media all and (max-width: 640px) {
                    width: 80px;
                    margin-bottom: 5.5px;
                }
            }
            .starWidth {
                @media all and (max-width: 640px) {
                    gap: 4px;
                }
                .starFrame {
                    @media all and (max-width: 1280px) {
                        width: 15px;
                    }
                }
            }
        }
    }
    .linkSection {
        display: flex;
        gap: 73px;
        @media all and (max-width: 1280px) {
            gap: 38px;
        }
        @media all and (max-width: 1080px) {
            gap: 33px;
        }
        @media all and (max-width: 980px) {
            width: 100%;
            margin-top: 30px;
        }
        @media all and (max-width: 640px) {
            gap: 34px;
        }
        @media all and (max-width: 480px) {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 15px;
        }

        li {
            ul {
                li {
                    margin-bottom: 10px;
                    @media all and (max-width: 640px) {
                        display: none;
                    }
                    a {
                        color: #aaa;
                        font-size: 16px;
                        cursor: default;
                        @media all and (max-width: 1280px) {
                            font-size: 14px;
                        }
                    }
                }
                :nth-child(1) {
                    margin-bottom: 24px;
                    @media all and (max-width: 640px) {
                        display: block;
                    }
                    @media all and (max-width: 480px) {
                        margin-bottom: 0;
                    }
                    a {
                        color: #fff;
                        font-size: 20px;
                        font-family: "nunito-medium";
                        @media all and (max-width: 1280px) {
                            font-size: 16px;
                        }
                        @media all and (max-width: 640px) {
                            font-size: 15px;
                        }
                        @media all and (max-width: 480px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
`;
