import {useState} from 'react';

import './Counter.scss';

export default function Counter() {

    const [count, setCount] = useState(22);

    return (
        <>
            <div style={{fontSize: '22px'}}>{count}</div>
            <button onClick={() => setCount(count => count + 1)}>increnebt</button>
        </>
    );
}
