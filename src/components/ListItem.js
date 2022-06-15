const ListItem = (props) => {
    console.log(props.name);
    return (<ul><li>{props.name}</li></ul>)
}

export default ListItem;
