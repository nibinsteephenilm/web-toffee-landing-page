import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

export default function SharedLayout() {
    return (
        <>
            <Wrapper className="wrapper">
                <a href="#" className="logo">
                    <img src="/icons/Logo.svg" alt="Logo" />
                </a>
                <ul>
                    <li>
                        <a href="#" className="active">
                            home
                        </a>
                    </li>
                    <li>
                        <a href="#">plugins</a>
                    </li>
                    <li>
                        <a href="#">shopify app</a>
                    </li>
                    <li>
                        <a href="#">bundles</a>
                    </li>
                    <li>
                        <a href="#">blog</a>
                    </li>
                    <li>
                        <a href="#">documentation</a>
                    </li>
                    <li>
                        <a href="#">support</a>
                    </li>
                </ul>
                <Button
                    text="Login"
                    backgroundcolor="none"
                    textcolor="#007fff"
                    width="140px"
                    arrow="none"
                />
            </Wrapper>

            <Outlet />
        </>
    );
}

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
    padding-top: 28px;
    @media all and (max-width: 1280px) {
        padding-top: 0;
    }
    @media all and (max-width: 480px) {
        margin-top: 47px;
    }
    button.button {
        @media all and (max-width: 1280px) {
            width: 120px;
        }
        @media all and (max-width: 1080px) {
            width: 100px;
        }
        @media all and (max-width: 980px) {
            width: 80px;
            padding: 5px 10px;
        }
        @media all and (max-width: 640px) {
            width: 74px;
            padding: 3px 10px;
        }
        @media all and (max-width: 480px) {
                    width: 60px;
                    padding: 1px 10px;
                }
    }

    .logo {
        display: flex;
        align-items: center;
        width: 250px;
        @media all and (max-width: 1280px) {
            max-width: 200px;
        }
        @media all and (max-width: 1080px) {
            width: 170px;
        }
        @media all and (max-width: 640px) {
            width: 150px;
        }
        @media all and (max-width: 480px) {
                    width: 120px;
                }
    }
    ul {
        display: flex;
        align-items: center;
        gap: 16px;
        @media all and (max-width: 1280px) {
            gap: 6px;
        }
        @media all and (max-width: 1080px) {
            gap: 10px;
        }
        @media all and (max-width: 980px) {
            display: none;
        }
        li {
            .active {
                position: relative;
                display: flex;
                font-family: "nunito-bold";
                color: #007fff;
                font-size: 16px;
                @media all and (max-width: 1280px) {
                    font-size: 15px;
                }
                &::after {
                    content: "";
                    width: 15px;
                    height: 2px;
                    background-color: #007fff;
                    position: absolute;
                    bottom: 10%;
                    left: 7px;
                    border-radius: 10px;
                    @media all and (max-width: 1080px) {
                        left: 0;
                        bottom: 0;
                    }
                }
            }
            a {
                padding: 6px;
                text-transform: capitalize;
                color: #747474;
                position: relative;
                font-size: 16px;
                @media all and (max-width: 1280px) {
                    font-size: 15px;
                }
                @media all and (max-width: 1080px) {
                    padding: 0;
                }
                &:hover {
                    display: flex;
                    font-family: "nunito-bold";
                    color: #007fff;
                    &::after {
                        content: "";
                        width: 15px;
                        height: 2px;
                        background-color: #007fff;
                        position: absolute;
                        bottom: 20%;
                        left: 7px;
                        border-radius: 10px;
                        @media all and (max-width: 1080px) {
                            left: 0;
                            bottom: 0;
                        }
                    }
                }
            }
        }
    }
`;
