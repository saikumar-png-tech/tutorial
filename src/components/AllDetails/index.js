import {Component} from 'react'
import {v4} from 'uuid'

import EachUserDetails from '../EachUserDetails'

import './index.css'
const initialContainerBackgroundClassNames = [
'amber',
'blue',
'orange',
'emerald',
'teal',
'red',
'light-blue',
]



class AllDetails extends Component {
state = {
userId:'',
firstnameInput: '',
lastnameInput:'',
gmail:'',
designation: '',
commentsList: [],
}

deleteComment = commentId => {
const {commentsList} = this.state

this.setState({
commentsList: commentsList.filter(comment => comment.id !== commentId),
})
}

toggleIsLiked = id => {
this.setState(prevState => ({
commentsList: prevState.commentsList.map(eachComment => {
if (id === eachComment.id) {
return {...eachComment, isLiked: !eachComment.isLiked}
}
return eachComment
}),
}))
}
onEditDetails=id=> {
  const {commentsList,} = this.state
  const selectedComment=commentsList.find((eachComment)=> eachComment.id===id);
  if (selectedComment) {
    this.setState({
      firstnameInput:selectedComment.firstnameInput,
      lastnameInput:selectedComment.lastnameInput,
      userId:selectedComment.userId,
      gmail:selectedComment.gmail,
      designation:selectedComment.designation,
      commentsList:commentsList.filter((eachComment)=> eachComment.id !== id)
    })
  }

}

renderCommentsList = () => {
const {commentsList} = this.state

return commentsList.map(eachuser => (
<EachUserDetails key={eachuser.id} userDetails={eachuser} toggleIsLiked={this.toggleIsLiked} deleteComment={this.deleteComment} onEditDetails={this.onEditDetails} />
))
}

onAddComment = event => {
event.preventDefault()
const {firstnameInput, lastnameInput, userId, gmail, designation} = this.state
const initialBackgroundColorClassName = `initial-container ${
initialContainerBackgroundClassNames[
Math.ceil(
Math.random() * initialContainerBackgroundClassNames.length - 1,
)
]
}`

const newComment = {
id: v4(),
userId:userId,
firstnameInput: firstnameInput,
lastnameInput: lastnameInput,
gmail:gmail,
designation:designation,
isLiked: false,
initialClassName: initialBackgroundColorClassName,
}

this.setState(prevState => ({
commentsList: [...prevState.commentsList, newComment],
userId:'',
firstnameInput: '',
lastnameInput:'',
gmail:'',
designation: '',

}))
}

onChangeDesignation = event => {
this.setState({
designation: event.target.value,
})
}
onChangeGmail = event => {
this.setState({
gmail: event.target.value,
})
}
onChangeUserId = event => {
this.setState({
userId: event.target.value,
})
}

onChangeFirstNameInput = event => {
this.setState({
firstnameInput: event.target.value,
})
}
onChangeLastNameInput = event => {
this.setState({
lastnameInput: event.target.value,
})
}

render() {
const {firstnameInput, lastnameInput, commentsList, userId, gmail, designation} = this.state

return (
<div className="app-container">
    <div className="comments-container">
        <h1 className="app-heading">Users Details</h1>
        <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
                <p className="form-description">
                    Please enter your details here.
                </p>
                <input type="text" className="name-input" placeholder="UserId" value={userId} onChange={this.onChangeUserId} />
                <input type="text" className="name-input" placeholder="First Name" value={firstnameInput} onChange={this.onChangeFirstNameInput} />
                <input type="text" className="name-input" placeholder="Last Name" value={lastnameInput} onChange={this.onChangeLastNameInput} />
                <input type="text" className="name-input" placeholder="gamil" value={gmail} onChange={this.onChangeGmail} />
                <input placeholder="designation" className="comment-input" value={designation} onChange={this.onChangeDesignation} />
                <button type="submit" className="add-button">
                    Add Details
                </button>
            </form>
            <img className="image" src="https://i.ytimg.com/vi/EapATviMRpI/hq720.jpg" alt="comments" />
        </div>
        <hr className="line" />
        <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Details
        </p>
        <ul className="comments-list">{this.renderCommentsList()}</ul>
    </div>
</div>
)
}
}

export default AllDetails