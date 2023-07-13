function Avatar(props) {
  return (
    <img src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date}</div>
    </div>
  );
}

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{props.date}</div>
//     </div>
//   );
// }

const comment = {
  date : new Date().toLocaleTimeString(),
  text : "I hope I enjoy learning React!",
  author : {
    name : "Hello Peter",
    avatarUrl: "http://placekitten.com/g/64/64"
  }
};

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  // "Hello",
  document.getElementById("root")
);
