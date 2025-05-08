import React from 'react';

function CreateUser({ username, onChange, onCreate }) {
    return (
        <div>
            <input
                name="todolist"
                placeholder="할 일을 입력하세요"
                onChange={onChange}
                value={username}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;
