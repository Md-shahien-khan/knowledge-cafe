import PropTypes from "prop-types";
const Bookmark = ({bookmark}) => {
    // step 15 
    const {title} = bookmark;
    return (
        <div className="bg-slate-400 p-4 m-4 rounded-xl">
            <h3 className="text-xl">{title}</h3>
            {

            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object
}

export default Bookmark;