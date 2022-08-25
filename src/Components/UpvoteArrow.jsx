import { updateVotes } from '../api';
import './Component-Style/Votes.css'

const UpvoteArrow = ({article_id, setDisplayVotes, err, setErr}) => {

    const handleUpvote = () => {
        setDisplayVotes((currentVotes) => {
            return currentVotes = currentVotes + 1;
        })
        setErr(null);
        updateVotes(article_id, 1).catch((err) => {
            setDisplayVotes((currentVotes) => {
                return currentVotes = currentVotes - 1;
            })
            setErr('Error voting - please try again');
        });
    }

    return <button onClick={()=> handleUpvote()}>
            <svg className='upvote' alt="Upvote button" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"/></svg>
        </button>
};

export default UpvoteArrow;