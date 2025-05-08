import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
    const [inputs, setInputs] = useState({
        todolist: ''
    });
    const { todolist } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            todolist: '똥싸기',
            active: true,
            completed: false
        },
        {
            id: 2,
            todolist: '세수하기',
            active: false,
            completed: false
        },
        {
            id: 3,
            todolist: '밥먹기',
            active: false,
            completed: false
        }
    ]);

    const nextId = useRef(4);

    const onCreate = () => {
        const user = {
            id: nextId.current,
            todolist,
            active: false,
            completed: false
        };
        setUsers(users.concat(user));
        setInputs({ todolist: '' });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, completed: !user.completed } : user
            )
        );
    };

    return (
        <>
            <CreateUser
                username={todolist}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
    );
}

export default App;
