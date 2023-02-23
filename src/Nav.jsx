import arrowsnip from './assets/arrowsnip.png'
import searchsnip from './assets/searchsnip.png'

export default () => {
    return (
        <div className="nav">
            <img src={arrowsnip} className="icon"></img>
            <h2 className="top-characters">Top Characters</h2>
            <img src={searchsnip} className="icon"></img>
        </div>
    )
}