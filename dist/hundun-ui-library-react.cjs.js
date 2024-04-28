'use strict';

var React = require('react');
var antd = require('antd');

var HDButton = function HDButton(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "hd-button",
    onClick: onClick
  }, text), /*#__PURE__*/React.createElement(antd.Flex, {
    gap: "small",
    wrap: "wrap"
  }, /*#__PURE__*/React.createElement(antd.Button, {
    type: "primary"
  }, "Primary Button"), /*#__PURE__*/React.createElement(antd.Button, null, "Default Button"), /*#__PURE__*/React.createElement(antd.Button, {
    type: "dashed"
  }, "Dashed Button"), /*#__PURE__*/React.createElement(antd.Button, {
    type: "text"
  }, "Text Button"), /*#__PURE__*/React.createElement(antd.Button, {
    type: "link"
  }, "Link Button")));
};

var HDInput = function HDInput(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, text);
};

exports.HDButton = HDButton;
exports.HDInput = HDInput;
