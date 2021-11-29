import React, {useState} from 'react';

const SelectForm = (props) => {
    const [selectActive, setSelectActive] = useState(false)

    const toggleActive = () => {
        setSelectActive(!selectActive)
    }
    const selectOption = (e) => {
        props.city.changeValue(e.target.textContent)
    }

    return (
        <div className={(selectActive) ? "form__select select select_active" : 'form__select select'} onClick={toggleActive}>
            <div className="select__value" >{(props.city.value) ? props.city.value : 'City'}</div>
            <div className="select__list">
                <div className="select__option" onClick={selectOption}>Riga</div>
                <div className="select__option" onClick={selectOption}>Daugavpils</div>
                <div className="select__option" onClick={selectOption}>Jūrmala</div>
                <div className="select__option" onClick={selectOption}>Ventspils</div>
            </div>
            {(props.city.isDirty && props.city.error) && <label className='label-error'>{props.city.error}</label>}
        </div>
    );
};

export default SelectForm;
