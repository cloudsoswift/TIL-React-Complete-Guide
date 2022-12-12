import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; // 원하는 className + 외부에서 할당 받는 className
  return <div className={classes}>{props.children}</div>; // props.children << 해당 Component의 여,닫는 태그 사이의 Content
}

export default Card;