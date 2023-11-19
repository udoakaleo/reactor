import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd}) => {
   return (
    <header className="header">
       <h1>{title}</h1>
      <Button 
       color='green' 
       text= 'Add' 
       onClick = {onAdd}/>
    </header>

  )
}
Header.defaultProps = {
  title: 'TASK TRACKER',
}
Header.propTypes = {
 title : PropTypes.string 
}
export default Header