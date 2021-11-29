import React from 'react';
import SelectForm from "./SelectForm";


const Form = (props) => {
    const disabled = (!props.name.isValid || !props.surname.isValid || !props.age.isValid || !props.city.isValid);

    return (
        <form className='form' onSubmit={props.onSubmit}>
            <div className='form__group'>
                <input className='form__input' onPaste={props.name.onChange} value={props.name.value} onChange={props.name.onChange} onBlur={props.name.onBlur} type="text" name="name" placeholder="Name"/>
                {(props.name.isDirty && props.name.error) && <label className='label-error'>{props.name.error}</label>}
            </div>
            <div className='form__group'>
                <input className='form__input'  value={props.surname.value} onChange={props.surname.onChange} onBlur={props.surname.onBlur} type="text" name="surname" placeholder="Surname"/>
                {(props.surname.isDirty && props.surname.error) && <label className='label-error'>{props.surname.error}</label>}
            </div>
            <div className='form__group'>
                <input className='form__input'  value={props.age.value} onChange={props.age.onChange} onBlur={props.age.onBlur} type="text" name="age" placeholder="Age"/>
                {(props.age.isDirty && props.age.error) && <label className='label-error'>{props.age.error}</label>}
            </div>
            <div className='form__group'>
                <SelectForm city={props.city}/>
            </div>
            <button disabled={disabled} className='form__button button button_font-weight_bold' type='submit'>{props.submitName}</button>
        </form>
    );
};

export default Form;
