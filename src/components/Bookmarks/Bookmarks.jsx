import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
// step 14 call the bookmarks here
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-200 m-4">
            <div>
                <h3 className="text-4xl">Reading time : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">BookMarked Blogs : {bookmarks.length}</h2>
            {/* step 16 */}
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
    readingTime : PropTypes.number
}

export default Bookmarks;