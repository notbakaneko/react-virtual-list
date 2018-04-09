const defaultMapToVirtualProps = ({
  items,
  itemHeight,
  columns,
}, {
  firstItemIndex,
  lastItemIndex,
}) => {
  const visibleItems = lastItemIndex > -1 ? items.slice(firstItemIndex, lastItemIndex + 1) : [];

  // style
  const height = Math.ceil(items.length / columns) * itemHeight;
  const paddingTop = Math.floor(firstItemIndex / columns) * itemHeight;

  return {
    virtual: {
      items: visibleItems,
      style: {
        height,
        paddingTop,
        boxSizing: 'border-box',
      },
    }
  };
}

export default defaultMapToVirtualProps;
