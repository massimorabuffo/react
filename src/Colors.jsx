const Colors = ({ items }) => {
    return (
        <ul>
            {items.map((element) => 
                <li key={element.id}>{element.name}</li>
            )}
        </ul>
    )
}

export default Colors