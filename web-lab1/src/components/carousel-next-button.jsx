export default function CarouselNextButton(props) {
  return <button className="next-btn">{props.icon}</button>
}

CarouselNextButton.defaultProps = { icon: "X" }