import React, {FC} from 'react';
import counter from "../store/counter";
import {observer} from "mobx-react-lite";

export const Counter: FC = observer(() => {

    return (
        <div>
            Count: {counter.count}
            <div>
                <button onClick={() => counter.increment()}>+</button>
                <button onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
})
