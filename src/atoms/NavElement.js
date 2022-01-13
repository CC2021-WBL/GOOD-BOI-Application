import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const NavElement = (props) => {
    return(
        <>
            <FontAwesomeIcon icon={faChevronLeft} />
            <h1>{props.text}</h1>
        </>
    )
}

export default NavElement;