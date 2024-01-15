import styled from "styled-components";

export default function ReviewCard({ image, title, description, name, job }) {
    return (
        <Container>
            <div className="image">
                <img src={image} alt={name} />
            </div>
            <div className="personalReview">
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    background-color: #fcfeff;
    padding: 40px;
    border-radius: 16px;
    gap: 32px;
    align-items: center;
    height: 312px;
    width: 743px;
    /* flex-wrap: wrap; */
    margin-right: 32px;
    @media all and (max-width: 1280px) {
        width: 600px;
        height: 235px;
        padding: 20px;
    }
    @media all and (max-width: 768px) {
        width: 500px;
        height: 210px;
        padding: 15px;
    }
    @media all and (max-width: 640px) {
        margin: 0 5px;
        gap: 22px;
        width: 460px;
    }
    @media all and (max-width: 480px) {
        width: 340px;
        gap: 18px;
        padding: 10px;
    }
    

    .image {
        display: flex;
        align-items: center;
        width: 220px;
        /* height: 220px; */
        @media all and (max-width: 1280px) {
            width: 160px;
        }
        @media all and (max-width: 768px) {
            width: 140px;
        }
        @media all and (max-width: 480px) {
                    width: 100px;
                }
        img {
            width: 100%;
            border-radius: 16px;
        }
    }
    .personalReview {
        flex: 1;
        .title {
            font-size: 22px;
            font-family: "nunito-semibold";
            color: #0a0a0a;
            margin-bottom: 24px;
            @media all and (max-width: 1280px) {
                font-size: 19px;
            }
            @media all and (max-width: 768px) {
                margin-bottom: 15px;
            }
            @media all and (max-width: 480px) {
                    font-size: 17px;
                }
        }
        .description {
            font-size: 14px;
            color: #747474;
            margin-bottom: 24px;
            @media all and (max-width: 768px) {
                margin-bottom: 15px;
            }
            @media all and (max-width: 480px) {
                    margin-bottom: 10px;
                }
        }
        .name {
            font-size: 20px;
            font-family: "nunito-medium";
            color: #0a0a0a;
            @media all and (max-width: 1280px) {
                font-size: 18px;
            }
        }
        .job {
            color: #747474;
            font-size: 14px;
        }
    }
`;
