export default function TabButton({children, isSelected, ...props}){
    function handleClick(){
        console.log('1234');
    }
    return (
        <li>
            <button className={isSelected ? 'active' : ''} {...props} >{children}</button>
        </li>
    );
}