export default function CarouselPrevButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    class: "prev-btn"
  }, props.icon);
}
CarouselPrevButton.defaultProps = {
  icon: "X"
};