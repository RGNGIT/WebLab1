export default function CarouselNextButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    class: "next-btn"
  }, props.icon);
}
CarouselNextButton.defaultProps = {
  icon: "X"
};