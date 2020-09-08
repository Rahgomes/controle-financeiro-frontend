import React from 'react'

export default function DateSelect() {
    return (
        <div>
            <select class="browser-default" style={{ width: 'auto', marginRight: 5 + 'px', marginLeft: 5 + 'px' }}>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    )
}
