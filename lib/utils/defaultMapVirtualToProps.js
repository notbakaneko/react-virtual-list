'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultMapToVirtualProps = function defaultMapToVirtualProps(_ref, _ref2) {
  var items = _ref.items,
      itemHeight = _ref.itemHeight,
      columns = _ref.columns;
  var firstItemIndex = _ref2.firstItemIndex,
      lastItemIndex = _ref2.lastItemIndex;

  var visibleItems = lastItemIndex > -1 ? items.slice(firstItemIndex, lastItemIndex + 1) : [];

  // style
  var height = Math.ceil(items.length / columns) * itemHeight;
  var paddingTop = Math.floor(firstItemIndex / columns) * itemHeight;

  return {
    virtual: {
      items: visibleItems,
      style: {
        height: height,
        paddingTop: paddingTop,
        boxSizing: 'border-box'
      }
    }
  };
};

exports.default = defaultMapToVirtualProps;