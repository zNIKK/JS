import React from "react"

function Menu(props) {
    // com o map eu posso colocar quantos links for necessário tornando o nav mais generico ainda
    const listLinks =  props.links.map((link, index) =>  <li key={index}>{link}</li> )
    return (
        <ul className='menu'>
            {listLinks}
        </ul>
    )
}

export default Menu