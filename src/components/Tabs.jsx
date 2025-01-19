export default function Tabs({children, buttons, ButtonContainer = 'menu'}){
    // if using camalcase, react would not reflect, require to use pascalcase
    //const ButtonContainer = buttonContainer;
    return <>
        <ButtonContainer>
            {buttons}
        </ButtonContainer>
        {children}
    </>
}