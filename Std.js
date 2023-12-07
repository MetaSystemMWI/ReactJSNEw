function Std(props) {
    console.log(props.name);
  return (
    <div style={{backgroundColor:"skyblue", margin: 50}}>
        <h1>Hello {props.name}</h1>
        {/* <h1>Email {props.email}</h1>
        <h1>Address {props.other.address}</h1>
        <h1>Mobile Number {props.other.mobile}</h1> */}
    </div>
  )
}
export default Std;