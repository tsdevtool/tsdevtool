import { StarFilled } from "@ant-design/icons";
import React from "react";
import logo from "../../assets/images/official.png";
import {
  StyleNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./style";

const CartComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <img
        src={logo}
        style={{
          width: "68px",
          height: "14px",
          position: "absolute",
          top: "-1px",
          left: "-1px",
          borderTopLeftRaidus: "3px",
        }}
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <span> | Sold</span>
      </WrapperReportText>
      <WrapperPriceText>
        1.246$<WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CartComponent;
