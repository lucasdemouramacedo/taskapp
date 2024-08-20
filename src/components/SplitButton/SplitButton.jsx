import { useEffect, useRef, useState } from 'react';
import style from './SplitButton.module.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";


function SplitButton() {
    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const dropdownRef = useRef(null);

    const handleClick = (e) => {
        setIsVisible(!isVisible)
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        setPosition({ x: rect.left - 80, y: rect.top + 30 })
    }

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsVisible(false);
        }
    };

    const handleScroll = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll, true); // o "true" captura o evento durante a fase de captura

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <div onClick={handleClick} className={style.icon}>
                <BsThreeDotsVertical />
            </div>
            {isVisible && <div className={style.items} style={{ top: position.y + 'px', left: position.x + 'px' }}>
                <p className={style.item}>
                    <a href="#">
                        <div className={style.iconItem}>
                            <MdOutlineEdit />
                        </div>
                        <span>Editar</span>
                    </a>
                </p>
                <p className={style.item}>
                    <a href="#">
                        <div className={style.iconItem}>
                            <IoMdClose />
                        </div>
                        <span>Excluir</span>
                    </a>
                </p>
            </div>}
        </div>
    )
}

export default SplitButton