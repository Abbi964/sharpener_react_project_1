import './Card.css';

function Card (props){
    const classes = 'card ' + props.className
    return <div data-price={props.price} id={props.id} className={classes}>{props.children}</div>
}

export default Card;