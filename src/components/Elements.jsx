import styled from "styled-components";

export default function Elements({ icon, alternate, title, miniTitle }) {
    return (
        <Container>
            <div className="elementLeft">
                <div className="iconFrame">
                    <img src={icon} alt={alternate} />
                </div>
            </div>
            <div className="elementRight">
                <p className="title">{title}</p>
                <p className="miniTitle">{miniTitle}</p>
            </div>
        </Container>
    );
}
const Container = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    @media all and (max-width: 640px) {
                    gap: 10px;
                }
    .elementLeft {
        display: flex;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #007fff;
        padding: 10px ;
        justify-content: center;
        .iconFrame {
            width: 20px;
            @media all and (max-width:1280px) {
            width: 15px;
        }
            img {
                width: 100%;
            }
        }
    }
    .elementRight {
        font-size: 16px;
        @media all and (max-width:1280px) {
            font-size: 14px;
        }
        .title {
            color: #747474;
            font-family: 'nunito-bold';
        }
        .miniTitle {
            color: #747474;
            font-family: 'nunito-medium';
        }
    }
`;
