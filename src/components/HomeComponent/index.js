import NewTweet from "./NewTweet";
import TweetList from "./TweetsList";

export default function Home() {
    return (
    <div className="w-50 mt-3 mx-3">
        <h5>Home</h5>
        <NewTweet/>
        <TweetList/>
    </div>
    )
 }