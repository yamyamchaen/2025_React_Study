import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : 'blue'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.todolist}
            </b>
            &nbsp;
            <button onClick={() => onToggle(user.id)}>
                {user.completed ? '미완료' : '완료'}
            </button>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;
