import styled from "styled-components";
import Button from "../Button";
export default function CookieTab() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <p className="left">GDPR Cookie Consent Plugin (CCPA Ready)</p>
                <div className="right">
                    <ul>
                        <li>
                            <a href="#">Reviews</a>
                        </li>
                        <li>
                            <a href="#">Descriptions</a>
                        </li>
                        <li>
                            <a href="#">Technical info</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                    <Button
                        backgroundColor="#007FFF"
                        text="Get Plugin"
                        textcolor="#EEE"
                        width="125px"
                        padding="7px 10px"
                        fontsize="14px"
                        arrow="none"
                    />
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: 12px;
    background: #091f49;
    z-index: 2;
    @media all and (max-width: 480px) {
                    border-radius: 6px;
                }
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
    @media all and (max-width: 480px) {
                    padding: 4px 0;
                }
    .left {
        color: #d4d4d4;
        font-size: 14px;
        @media all and (max-width: 480px) {
                    font-size: 10px;
                }
    }
    .right {
        display: flex;
        gap: 32px;
        @media all and (max-width: 1080px) {
            gap: 22px;
        }
        ul {
            display: flex;
            @media all and (max-width: 980px) {
               display: none;
            }
            li {
                display: flex;
                align-items: center;
                &::after {
                    content: "";
                    display: flex;
                    height: 12px;
                    width: 1px;
                    background-color: #d4d4d4;
                    margin: 0 16px;
                    @media all and (max-width: 1080px) {
                        margin: 0 10px;
                    }
                }
                a {
                    color: #d4d4d4;
                    font-size: 14px;
                }
            }
            :last-child {
                &::after {
                    display: none;
                }
            }
        }
       
            button.button {
                @media all and (max-width: 1280px) {
                width: 95px;
                padding: 3px 8px;
                font-size: 14px;
            }
            @media all and (max-width: 980px) {
                padding: 1px 0;
            }
            @media all and (max-width: 480px) {
                    font-size: 10px;
                    width: 68px;
                }
        }
    }
`;
