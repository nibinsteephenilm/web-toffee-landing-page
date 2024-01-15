import styled from "styled-components";
import Heading from "../Heading";
import WordpressCard from "../WordpressCard";

export default function OtherPlugins() {
    return (
        <Container className="background">
            <Wrapper className="wrapper">
                <Heading
                    lefttitle="You may also like"
                    midtitle="these plugins"
                />
                <div className="otherPluginCards">
                    <WordpressCard
                        image="/icons/Other-Plugin-icon1.svg"
                        title="WooCommerce PDF invoices, packing slips and credit notes"
                        description="Customize, auto-generate, and print WooCommerce PDF invoices, packing slips, and credit notes using a single plugin. You can send these documents to customers by attaching them to the order emails."
                    />
                    <WordpressCard
                        image="/icons/Other-Plugin-icon2.svg"
                        title="Smart Coupons for 
                    WooCommerce"
                        description="Create coupons to offer discounts and free products to your customers with Smart Coupons for WooCommerce. You can set up BOGO coupons, giveaways, gift cards, store credits, and more with this plugin."
                    />
                    <WordpressCard
                        image="/icons/Other-Plugin-icon3.svg"
                        title="Product Import Export Plugin For 
                    WooCommerce"
                        description="Seamlessly import/export your WooCommerce products including simple, variable, custom products and subscriptions. You may also import and export product images, tags, categories, reviews, and ratings."
                    />
                    <WordpressCard
                        image="/icons/Other-Plugin-icon4.svg"
                        title="WooCommerce PDF invoices, packing slips
                    and credit notes"
                        description="Customize, auto-generate, and print WooCommerce PDF invoices, packing slips, and credit notes using a single plugin. You can send these documents to customers by attaching them to the order emails."
                    />
                </div>
            </Wrapper>
        </Container>
    );
}
const Container = styled.div`
    padding-top: 100px;
    @media all and (max-width: 480px) {
        padding: 50px 0;
    }
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .headline {
        p {
            @media all and (max-width: 640px) {
                font-size: 27px;
                line-height: normal;
            }
            span {
                @media all and (max-width: 640px) {
                    font-size: 27px;
                    line-height: normal;
                }
            }
        }
    }
    .otherPluginCards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px 32px;
        margin-top: 100px;
        @media all and (max-width: 640px) {
            gap: 30px 5px;
        }
        @media all and (max-width: 480px) {
            grid-template-columns: repeat(1, 1fr);
            margin-top: 50px;
        }
    }
`;
