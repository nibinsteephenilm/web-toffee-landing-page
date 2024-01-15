import styled from "styled-components";

export default function UnderlineButton() {
    return (
        <Container href="#">
            <p>View all reviews</p>
            <div className="arrow">
                <img src="/icons/butttonArrow.svg" alt="Right arrow" />
            </div>
        </Container>
    );
}
const Container = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    @media all and (max-width: 480px) {
                    gap: 5px;
                }
    &::after {
        content: "";
        width: 13%;
        height: 1px;
        background-color: #eee;
        position: absolute;
        bottom: -8px;
        transition: 0.5s;
        @media all and (max-width: 1280px) {
            bottom: -3px;
        }
    }
    &:hover {
        &::after {
            width: 100%;
        }
    }
    p {
        color: #fff;
        font-family: "nunito-semibold";
        font-size: 20px;
        @media all and (max-width: 1280px) {
            font-size: 16px;
        }
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    .arrow {
        @media all and (max-width: 1280px) {
            width: 18px;
        }
        @media all and (max-width: 480px) {
                    width: 14px;
                }
    }
`;
