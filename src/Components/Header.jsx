import Button from "./Button";

const Header = ({ title }) => {
    const handleClick = ()=>{
        console.log('Button click')
    }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={handleClick}/>
    </header>
  );
};

// Header.defaultProps = {
//     title: 'Task-Tracker',
// }
// Adding CSS style
// const styles = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
