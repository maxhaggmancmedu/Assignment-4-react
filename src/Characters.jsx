export default ({name, imageUrl}) => {
    return (
        <div className="character">
            <img className="character-image" src={imageUrl}></img>
            <h3>{name}</h3>
        </div>
    )
}