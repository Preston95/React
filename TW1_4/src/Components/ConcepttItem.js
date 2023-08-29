

function ConceptItem(props){
    const img = props.img
    const title = props.title
    const desc = props.desc
    return (
        <ul id="concepts">
        <li className="concept">
          <img src={img} alt="TODO: TITLE" />
          <h2>{title}</h2>
          <p>{desc}</p>
        </li>
      </ul>
    );
}

export default ConceptItem;