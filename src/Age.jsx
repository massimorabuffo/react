function Age({ age }) {
    return (
        <>
            {!!age && <p>Your age is {age}.</p>}
        </>
    )
}

export default Age