export default function CarouselPrevButton(props) {
  return <button className="prev-btn">{props.icon}</button>
}

CarouselPrevButton.defaultProps = { icon: "X" }