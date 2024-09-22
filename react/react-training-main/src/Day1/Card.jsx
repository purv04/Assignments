
import selfimg from "../src/day1/media/photo.jpg"

function Card(){
    return(
        <div>
            <img src={selfimg} alt="" />
            <h1>Happy Birthday Angha</h1>
            <p>today is my birthday .</p>
        </div>
    )
}

export default Card;