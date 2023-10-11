const Colors = ({ items }) => {
    return (
        <ul>
            {items.map((element) => 
                <li>{element}</li>
            )}
        </ul>
    )
}

export default Colors