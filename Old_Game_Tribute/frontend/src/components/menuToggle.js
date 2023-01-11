import { useState, useRef } from 'react';

function MenuToggle() {
    const [isActive, setActive] = useState(false);
    const menuToggleRef = useRef(null);
    const menuRef = useRef(null);

    const handleClick = () => {
        setActive(!isActive);
        menuToggleRef.current.classList.toggle('active');
        menuRef.current.classList.toggle('active');
    }

    return (
        <>
            <div className="toggle" ref={menuToggleRef} onClick={handleClick} ></div>
            <div className="menu" ref={menuRef} ></div>
        </>
    )
}

export default MenuToggle;