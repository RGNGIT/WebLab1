export default function CarouselNextButton(props) {
  return <button class="next-btn">{props.icon}</button>
}

CarouselNextButton.defaultProps = { icon: "X" }