import React from 'react';
import ReactDOM from 'react-dom';

// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealRef } from './components/04-useRef/RealRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-Memo/Memorize';
// import { Padre } from './components/06-Memo/Padre';
import { TodoApp } from './components/07-Reducer/TodoApp';


ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);

