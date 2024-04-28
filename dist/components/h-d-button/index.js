import React from 'react';
import { Flex, Button } from 'antd';

var HDButton = function HDButton(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "hd-button",
    onClick: onClick
  }, text), /*#__PURE__*/React.createElement(Flex, {
    gap: "small",
    wrap: "wrap"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "primary"
  }, "Primary Button"), /*#__PURE__*/React.createElement(Button, null, "Default Button"), /*#__PURE__*/React.createElement(Button, {
    type: "dashed"
  }, "Dashed Button"), /*#__PURE__*/React.createElement(Button, {
    type: "text"
  }, "Text Button"), /*#__PURE__*/React.createElement(Button, {
    type: "link"
  }, "Link Button")));
};

export { HDButton as default };
