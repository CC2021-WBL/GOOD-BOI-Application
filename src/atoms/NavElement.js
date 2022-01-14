import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


const Element=styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 100px;
border: 1px solid black;
/* *{margin:0} */
h3{color:#AEAEAE;}
h1{color:#323F4B}
`
const Wrapper=styled.div`
height: 100%;
width:68px;
display:flex;
align-items:center;
justify-content: space-between;
position: relative;

.aaa{color:red;}
`
const NavElement = (props) => {
    return(
        <>
        <Element>
            <Wrapper>
        <FontAwesomeIcon icon={faChevronLeft} className='aaa' />
            <h3>wróć</h3>
            </Wrapper>
            <h1 color='#323F4B'>{props.text}</h1>
            </Element>
        </>
    )
}

export default NavElement;