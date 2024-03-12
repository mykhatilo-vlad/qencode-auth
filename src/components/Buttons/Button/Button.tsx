
type ButtonProps = {
    label: string,
    classes?: string[],
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    onClick?:  React.DOMAttributes<HTMLButtonElement>['onClick'],
}

const Button = ( {label, classes, type, onClick}: ButtonProps ) => {

    return ( 
        <button 
            className={ classes?.join(' ') }
            type={type || 'button'}
            onClick={onClick}
        >{label}</button>
     )
}

export default Button;