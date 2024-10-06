export default function CarouselPrevButton(props) {
  return <button class="prev-btn">{props.icon}</button>
}

CarouselPrevButton.defaultProps = { icon: "X" }