(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('antd')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'antd'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyComponentLibrary = {}, global.React, global.antd));
})(this, (function (exports, React, antd) { 'use strict';

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

}));
