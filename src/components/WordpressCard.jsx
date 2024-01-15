import styled from "styled-components";
import Star from "./Home/Star";

export default function WordpressCard({
    image,
    title,
    description,
    other = 'true'
}) {
    return (
        <Container $other={other}>
            <div className="iconFrame">
                <div className="icon">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="ratingAndPrice">
                <div className="star">
                    <Star star="/icons/Blue-star.svg" />
                </div>
                <p className="price">$69 - $199</p>
            </div>
            <p className="title">{title}</p>
            <p className="description">{description}</p>
        </Container>
    );
}
const Container = styled.div`
    border-radius: 8px;
    border: 1px solid #ececec;
    background: #fff;
    position: relative;
    padding: ${(props) => (props.$other==='true' ? "32px" : "90px")} 30px 40px 30px;
    height: 100%;
    transition: all 0.3s ease-in-out;
    position: relative;
    cursor: pointer;
    @media all and (max-width: 1280px) {
        padding: ${(props) => (props.$other==='true' ? "32px" : "50px")} 30px 40px 30px;
    }
    @media all and (max-width: 1080px) {
        padding: ${(props) => (props.$other==='true' ? "32px" : "40px")} 20px 25px 20px;
    }
    @media all and (max-width: 640px) {
        padding: 36px 16px 16px 16px;
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 2%;
        right: 2%;
        background: url("/icons/Features-Card-Corner.svg") no-repeat;
        background-size: contain;
        width: 50px;
        height: 50px;
        @media all and (max-width: 1080px) {
            width: 40px;
            height: 40px;
        }
    }
    .iconFrame {
        transition: all 0.3s ease-in-out;
        padding: 20px;
        border-radius: 8px;
        background: #e6edfa;
        position: absolute;
        top: 0;
        transform: translate(0, -40%);
        @media all and (max-width: 1280px) {
            padding: 15px;
            transform: translate(-15%, -40%);
        }
        @media all and (max-width: 1080px) {
            padding: 13px;
        }
        .icon {
            width: 40px;
            @media all and (max-width: 1280px) {
                width: 30px;
            }
            @media all and (max-width: 1080px) {
                width: 22px;
            }
            img {
                width: 100%;
            }
        }
    }
    .ratingAndPrice {
        display: ${(props) => (props.$other==='true' ? "flex" : "none")};
        align-items: center;
        gap: 24px;
        justify-content: end;
        margin-bottom: 34px;
        @media all and (max-width: 768px) {
            margin-bottom: 20px;
        }
        @media all and (max-width: 640px) {
            gap: 11px;
        }
        .star {
            .starWidth {
                @media all and (max-width: 640px) {
                    gap: 4px;
                }
                .starFrame {
                    @media all and (max-width: 1280px) {
                        width: 18px;
                    }
                    @media all and (max-width: 768px) {
                        width: 14px;
                    }
                }
            }
        }
        .price {
            border-radius: 4px;
            background-color: #e6edfa;
            padding: 12px 24px;
            font-family: "nunito-medium";
            font-size: 18px;
            transition: 0.25s;
            @media all and (max-width: 1280px) {
                font-size: 16px;
                padding: 10px 18px;
            }
            @media all and (max-width: 768px) {
                font-size: 14px;
                padding: 8px;
            }
            @media all and (max-width: 640px) {
                padding: 4px 2px;
            }
            @media all and (max-width: 480px) {
                padding: 4px 7px;
            }
        }
    }
    .title {
        font-size: 26px;
        font-family: "nunito-semibold";
        margin-bottom: 16px;
        @media all and (max-width: 1280px) {
            font-size: 19px;
        }
        @media all and (max-width: 640px) {
            font-size: 17px;
        }
    }
    .description {
        color: #747474;
        line-height: 24px;
        font-size: 15px;
        @media all and (max-width: 1280px) {
            font-size: 14.5px;
            line-height: 23px;
        }
        @media all and (max-width: 640px) {
            font-size: 14px;
            line-height: 22px;
        }
    }
    &:hover {
        background-color: #071e45;
        .iconFrame {
            border: 1px solid #eee;
            background-color: #071e45;
            img {
                filter: ${(props) =>
                    props.$other==='true' ? "none" : "brightness(0) invert(1)"};
            }
        }
        .ratingAndPrice {
            .price {
                background-color: #b3d9f6;
            }
        }
        .title {
            color: #eee;
        }
        .description {
            color: #d9d9d9;
        }
    }
`;
