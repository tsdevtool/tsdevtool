import { Col } from "antd"
import React from 'react'
import { WrapperHeader, WrapperTextHeader } from "./style"
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}><WrapperTextHeader>TS-Shop</WrapperTextHeader></Col>
        <Col span={12}>middle</Col>
        <Col span={6}>right</Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent