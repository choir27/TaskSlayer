const Account = ({ensureAuth}) => {


{console.log(ensureAuth)}
  return (
    <div>
      {ensureAuth ? <h1>Account</h1> : <h1>Not Authorized</h1>}
    </div>
  )
}

export default Account