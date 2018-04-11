import _Object$setPrototypeOf from 'babel-runtime/core-js/object/set-prototype-of';
import _Object$create from 'babel-runtime/core-js/object/create';
import _Object$defineProperty from 'babel-runtime/core-js/object/define-property';
import _Dialog from '@icedesign/base/lib/dialog';
import _Select from '@icedesign/base/lib/select';
import _Input from '@icedesign/base/lib/input';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _Grid from '@icedesign/base/lib/grid';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; _Object$defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = _Object$create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint no-unused-expressions: 0 */
import React, { Component } from 'react';

import { FormBinderWrapper as IceFormBinderWrapper, FormBinder as IceFormBinder, FormError as IceFormError } from '@icedesign/form-binder';
import DialogDecorator from './DialogDecorator';

var Col = _Grid.Col,
    Row = _Grid.Row;


var typeData = [{ label: '清单', value: '清单' }, { label: '单品', value: '单品' }];

var FormDialog = function (_Component) {
  _inherits(FormDialog, _Component);

  function FormDialog(props) {
    _classCallCheck(this, FormDialog);

    var _this = _possibleConstructorReturn(this, (FormDialog.__proto__ || _Object$getPrototypeOf(FormDialog)).call(this, props));

    _this.onFormChange = function (value) {
      _this.setState({
        value: value
      });
    };

    _this.onOkHandler = function () {
      _this.props.onOk && _this.props.onOk(_this.state.value);
    };

    _this.state = {
      visible: props.visible,
      value: props.value
    };
    return _this;
  }

  _createClass(FormDialog, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        _Dialog,
        {
          title: '\u7F16\u8F91\u6570\u636E',
          onClose: this.props.onClose,
          onCancel: this.props.onCancel,
          onOk: this.onOkHandler,
          visible: this.state.visible,
          style: { width: 400 }
        },
        React.createElement(
          IceFormBinderWrapper,
          {
            value: this.state.value,
            onChange: this.onFormChange
          },
          React.createElement(
            'div',
            null,
            React.createElement(
              Row,
              null,
              React.createElement(
                Col,
                { span: 4 },
                React.createElement(
                  'span',
                  { style: styles.label },
                  '\u6807\u9898'
                )
              ),
              React.createElement(
                Col,
                { span: 18 },
                React.createElement(
                  IceFormBinder,
                  { required: true, max: 20, message: '\u5F53\u524D\u6807\u9898\u5FC5\u586B' },
                  React.createElement(_Input, { style: styles.formField, name: 'title' })
                ),
                React.createElement(IceFormError, { name: 'title' })
              )
            ),
            React.createElement(
              Row,
              { style: styles.row },
              React.createElement(
                Col,
                { span: 4 },
                React.createElement(
                  'span',
                  { style: styles.label },
                  '\u7C7B\u578B'
                )
              ),
              React.createElement(
                Col,
                { span: 18 },
                React.createElement(
                  IceFormBinder,
                  null,
                  React.createElement(_Select, {
                    dataSource: typeData,
                    style: styles.formField,
                    name: 'type'
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return FormDialog;
}(Component);

var styles = {
  row: {
    marginTop: '10px'
  },
  label: {
    lineHeight: '30px'
  },
  formField: {
    width: '100%'
  }
};

export default DialogDecorator(FormDialog);