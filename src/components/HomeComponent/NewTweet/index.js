import { MU_IMG_PATH } from "../images"

export default function NewTweet () {
    return (
        <div>
            <img src={MU_IMG_PATH} style={{width: 50, height: 50, borderRadius: 50}}/>
            <input placeholder="What`s happening?" style={{border:'none', fontSize: 18}} className='mx-3'/>
        </div>
    )
}