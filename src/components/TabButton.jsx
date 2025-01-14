export default function TabButton({children, onClick, isSelected}){
    function handleClick(){
        console.log('1234');
    }
    return (
        <li>
            <button className={isSelected ? 'active' : ''} onClick={onClick} >{children}</button>
        </li>
    );
}