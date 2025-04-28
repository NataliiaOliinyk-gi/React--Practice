/** @jsxImportSource @emotion/react */

import { Card, Flex } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { AddToCartIcon } from "../icons";

const { Meta } = Card;

import {
    productCardWrapperStyle,
    // productCardImageWrapperStyle,
    // productCardImageStyle,
    // productCardTitleStyle,
    productCardPriceNameStyle,
    productCardPriceStyle,
    // productCardActionsStyle,
    productCardAddToCartIconStyle
} from "./styles"

const ProductCard = ({ id, image, name, price, addToCart }) => {
    return (
        <Card
            hoverable
            css={productCardWrapperStyle}
            cover={<img alt="example" src={image} />}
        >
            <Meta title={name} />
            <Flex justify="space-between" align="flex-end">
                <div>
                    <span css={productCardPriceNameStyle}>Цена:</span>
                    <span css={productCardPriceStyle}>{price} €</span>
                </div>
                <PlusCircleOutlined
                    css={productCardAddToCartIconStyle}
                    onClick={() => addToCart(id)}
                />
            </Flex>
        </Card>
        // <div css={productCardWrapperStyle}>
        //     <div css={productCardImageWrapperStyle}>
        //         <img
        //             css={productCardImageStyle}
        //             src={image}
        //             alt={name}
        //         />
        //     </div>
        //     <p css={productCardTitleStyle}>{name}</p>
        //     <div css={productCardActionsStyle}>
        //         <div>
        //             <span css={productCardPriceNameStyle}>Цена:</span>
        //             <span css={productCardPriceStyle}>{price} €</span>
        //         </div>
        //         <span css={productCardAddToCartIconStyle} onClick={() => addToCart(id)}><AddToCartIcon /></span>
        //     </div>
        // </div>
    );
};

export default ProductCard;