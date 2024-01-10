import {useState} from 'react';

import classes from './Counter.module.scss';

export default function Counter() {

    const [count, setCount] = useState(22);

    return (
        <>
            <div style={{fontSize: '22px'}}>{count}</div>
            <button className={classes.button} onClick={() => setCount(count => count + 1)}>increnebt</button>
        </>
    );
}
