

import React from 'react';

export default function Button({ getUsersBtn }) {
    return (
            <button className={'button'} onClick={getUsersBtn}>Show users</button>
    );
}

