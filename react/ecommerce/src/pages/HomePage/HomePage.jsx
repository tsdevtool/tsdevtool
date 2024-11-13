import React from "react";
import slider1 from "../../assets/images/Slider1.avif";
import slider2 from "../../assets/images/Slider2.avif";
import slider3 from "../../assets/images/Slider3.avif";
import slider4 from "../../assets/images/Slider4.avif";
import CartComponent from "../../components/CardComponent/CartComponent";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
const HomePage = () => {
  const arr = ["TV", "Refrigerator", "Laptop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#efefef", padding: "0 120px" }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CartComponent />
        </div>
      </div>
    </>
  );
};
export default HomePage;
