

import './index.css'

const EachUserDetails = props => {
  const {userDetails} = props
  const {id, userId, firstnameInput, lastnameInput, gmail, designation, isLiked, initialClassName,} = userDetails
  const initial = firstnameInput ? firstnameInput[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }
  const onClickEdit=()=> {
    const {onEditDetails}=props 
    onEditDetails(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <div className='flex-items'>
            <p className="username-id">{userId}</p>
            <div className='name'>
                <p className="username-1">{firstnameInput}</p>
                <p className="username-1">{lastnameInput}</p>
            </div>
            

            <p className="username">{gmail}</p>
            <p className="comment">{designation}</p>
          </div>
          
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button className='editandSave' type="button"
            onClick={onClickEdit}>Edit</button>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )

}

export default EachUserDetails
