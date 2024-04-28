import React from "react";
import { Button, Flex } from "antd";
import "./style.scss"; // 导入按钮样式
import { HDButtonProps } from "./type";

const HDButton = ({ text, onClick }: HDButtonProps) => {
  return (
    <div>
      <button className="hd-button" onClick={onClick}>
        {text}
      </button>
      <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
    </div>
  );
};

export default HDButton;
