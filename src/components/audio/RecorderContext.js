import React, { useState } from 'react';

const RecorderContext = React.createContext([{}, () => {}]);

const RecorderProvider = (props) => {
    const [state, setState] = useState({
        recorder : null,
        chunks : [],
    });
};
