import styled from "styled-components";
import Button from "./Button";
export default function PurchaseCard({ count, cost, recommended }) {
    return (
        <Container $recommended={recommended}>
            <p className="sitecount">
                {count} <span>Recommended</span>
            </p>
            <p className="cost">
                ${cost}
                <span> per year</span>
            </p>
            <ButtonContainer>
                <Button
                    text="Add to cart"
                    arrow="flex"
                    backgroundcolor="none"
                    width="100%"
                />
            </ButtonContainer>
        </Container>
    );
}
const ButtonContainer = styled.div`
    button.button {
        width: 100%;
    }
`;
const Container = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(116, 116, 116, 0.4);
    background: #01112d;
    padding: 36px;
    flex: 1;
    cursor: pointer;
    transition: 0.25s;
    @media all and (max-width: 980px) {
        padding: 15px;
    }
    @media all and (max-width: 640px) {
        width: 75%;
    }
    &:hover {
        background-color: #fff;
        border: 1px solid #fff;
        transform: scale(1.05);
        .sitecount {
            color: #000;
        }
        .cost {
            color: #000;
            span {
                color: #000;
            }
        }
        ${ButtonContainer} {
            background-color: #007fff;
            color: blue;
        }
    }
    .sitecount {
        color: #eee;
        font-size: 25px;
        font-family: "nunito-medium";
        letter-spacing: 0.3px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media all and (max-width: 1400px) {
            font-size: 22px;
        }
        @media all and (max-width: 1080px) {
            font-size: 18px;
        }
        @media all and (max-width: 768px) {
            font-size: 16px;
        }

        span {
            display: ${(props) =>
                props.$recommended ? props.$recommended : "none"};
            font-size: 14px;
            color: #007fff;
            padding: 10px 18px;
            border-radius: 4px;
            border: 1px solid var(--Prm, #007fff);
            @media all and (max-width: 1400px) {
                padding: 5px 15px;
            }
            @media all and (max-width: 1280px) {
                display: none;
            }
        }
    }
    .cost {
        font-size: 40px;
        color: #eee;
        letter-spacing: 0.48px;
        font-family: "nunito-bold";
        padding-bottom: 24px;
        border-bottom: 0.5px solid #747474;
        margin-bottom: 28px;
        @media all and (max-width: 1400px) {
            font-size: 35px;
        }
        @media all and (max-width: 1080px) {
            font-size: 27px;
        }
        @media all and (max-width: 768px) {
            font-size: 22px;
        }
        span {
            color: #eee;
            font-size: 18px;
            font-family: "nunito-medium";
            @media all and (max-width: 1400px) {
                font-size: 16px;
            }
            @media all and (max-width: 1080px) {
                font-size: 14px;
            }
        }
    }
`;
