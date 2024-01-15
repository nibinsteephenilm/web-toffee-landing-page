import styled from "styled-components";
import SectionContent from "../SectionContent";
import Heading from "../Heading";
import Services from "../Services";

export default function Blocked() {
    return (
        <Container className="background">
            <SectionContent
                lefttitle="Have the non-necessary scripts "
                midtitle="blocked automatically"
                leftrightcolor="#EEE"
                boxtext="Automatically block all cookie script prior to the users’ consent"
                firstpara="The automatic script blocking feature allows you to block cookies before the consent is given with as little effort as installing and activating the plugin. GDPR Cookie Consent plugin allows you to get explicit consent with no pre-checked boxes."
                thirdpara="The plugin gives you the option to select which scripts need to be blocked automatically prior to consent and the scripts that need not be blocked."
                buttontext="Get plugin now"
                sectionimage="/images/Blocked-Image.svg"
                boxtextcolor="#D4D4D4"
                paragraphcolor="#D4D4D4"
                marginbottom="0"
                paddingbottom="0"
            />
            <div className="thirdParty wrapper">
                <div className="thridPartyLabel">
                    <Heading
                        lefttitle="The list of"
                        midtitle="third-party"
                        righttitle="scripts that are"
                        leftrightcolor="#EEE"
                        fontSize="20px"
                        lineheight="30px"
                    />
                    <Heading
                        midtitle="blocked automatically"
                        righttitle="include:"
                        leftrightcolor="#EEE"
                        fontSize="20px"
                        lineheight="30px"
                    />
                </div>
                <div className="services">
                    <Services />
                </div>
            </div>
        </Container>
    );
}
const Container = styled.div`
    background: linear-gradient(117deg, #01112d -0.03%, #071d44 99.38%);
    overflow: hidden;
    position: relative;
    .background {
        @media all and (max-width: 980px) {
            padding-bottom: 0;
        }
    }
    @media all and (max-width: 768px) {
        padding-top: 30px;
    }
    @media all and (max-width: 480px) {
            padding-top: 0;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        background: url("/images/Background-TopCorner.svg") no-repeat;
        background-size: contain;
        transform: translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background: url("/images/Background-TopCorner.svg") no-repeat;
        background-size: contain;
        transform: rotate(180deg) translate(8%, -8%);
        width: 80px;
        height: 80px;
        @media all and (max-width: 480px) {
            width: 50px;
            height: 50px;
        }
    }
    .thirdParty {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 48px;
        padding-bottom: 130px;
        flex-wrap: wrap;
        @media all and (max-width: 1080px) {
            padding-bottom: 70px;
        }
        @media all and (max-width: 768px) {
            padding-bottom: 90px;
        }
        @media all and (max-width: 480px) {
            padding-bottom: 60px;
        }

        .thridPartyLabel {
            padding: 10px 32px 10px 54px;
            width: 35%;
            @media all and (max-width: 1080px) {
                padding: 10px 0;
            }
            @media all and (max-width: 768px) {
                width: 100%;
            }
        }
        .services {
            width: 62%;
            @media all and (max-width: 768px) {
                width: 100%;
            }
        }
    }
`;
