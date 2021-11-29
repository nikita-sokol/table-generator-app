import React from 'react';

const RowEmpty = () => {
    return (
        <tr className='table__row table__row_font_italic'>
            <td className='table__td'>Name</td>
            <td className='table__td'>Surname</td>
            <td className='table__td'>Age</td>
            <td className='table__td'>City</td>
            <td className='table__td'></td>
        </tr>
    );
};

export default RowEmpty;
