const Post = ({text}) => {
  const trim = (str) => {
    if(str.length > 15){
      return str.substr(0,30) + "..."
    }
  }
  
  return (
    <div>{trim(text)}</div>
  )
}

export default Post