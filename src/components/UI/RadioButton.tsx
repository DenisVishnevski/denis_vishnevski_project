import * as React from 'react';
import '../../scss/UI/RadioButton.scss';

interface Props {
    name: string,
    id: number,
    onChange: (event: React.ChangeEvent<HTMLElement>) => void,
    isChecked: boolean,
    children: string,
    translate: (value: string) => string 
}
function RadioButton(props: Props) {
    const { name, id, onChange, isChecked, children, translate } = props;
    return (
        <div className="radio_button">
            <input
                type="radio"
                onChange={onChange}
                name={name}
                value={children}
                id={'radioButton' + id}
                defaultChecked={isChecked}
            />
            <label htmlFor={'radioButton' + id}>{translate(children)}</label>
        </div>
    );
}

export default RadioButton;