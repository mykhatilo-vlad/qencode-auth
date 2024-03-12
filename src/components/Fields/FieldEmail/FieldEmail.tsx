type FormEmailProps = {
    label: string,
    placeholder?: string,
    value: string,
    name: string,
    onChange: (value: string) => void
}

const FieldEmail = ({
    label,
    placeholder,
    value,
    name,
    onChange
}: FormEmailProps) => {

    return (
        <label>
            <span className="fz-0">{label}</span>

            <input 
                required
                type="email"
                name={name} 
                placeholder={placeholder}
                defaultValue={value}
                onChange={(ev) => onChange(ev.target.value)}
              />
        </label>
    );
}

export default FieldEmail;