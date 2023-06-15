
const Card = (props) => {

    const getNewJoke = () => {
        props.jokesOptions.refetch()
    }

    return (
        props.jokes.error? <div>
            Your life is a joke. No jokes for you.
        </div> :
        <div style={{display: "flex", "justify-content": "center", "align-items": "center", "flex-direction": "column", gap: "1.5rem"}}>
            <h1>{props.jokes.category} Joke</h1>
            {props.jokes.type === "twopart"?<>
                <p>{props.jokes.setup}</p>
                <p>{props.jokes.delivery}</p>
            </>:<>
                <p>{props.jokes.joke}</p>
            </>}
            <button class="btn" onClick={getNewJoke}>New Joke</button>
        </div>
    )
}

export default Card