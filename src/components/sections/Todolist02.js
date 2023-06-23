import React, {useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { RecoilRoot } from 'recoil';
import { todoListState, todoList } from '../atoms';

const Todolist02 = () => { 

    const [list, setList] = useRecoilState(todoListState);
    const todos = useRecoilValue(todoList);
    
    function generateUniqueID() {
        var timestamp = new Date().getTime(); 
        var randomNumber = Math.floor(Math.random() * 10000);
        var uniqueID = timestamp + '-' + randomNumber;
        return uniqueID;
    }

    const add = () => {
        if (value == "") return;
        const newObj = { title: value, id: generateUniqueID() }
        setList([...list, newObj]);
        setValue('');
    };

    const remove = (id) => {
        const newList = list.filter((item) => { return item.id != id});
        setList(newList);
        setEditValue('');
        setEditId('');
        setEditShow(false);
    };

    const [value, setValue] = useState('');
    const [editShow, setEditShow] = useState(false);
    const [editValue, setEditValue] = useState('');
    const [editId, setEditId] = useState('');
    
    const edit = () => {

        if (editValue == "") return;
        setEditValue('');
        setEditId('');
        setEditShow(false);

        const index = list.findIndex(function(element) {
            return element.id == editId;
          });

        const newList = [...list];

        const newObj = {
            id:  generateUniqueID(),
            title: editValue
        }

        newList[index] = newObj; 
        setList(newList);
        
    }

    return (
        <div className="mx-5 mt-5">
            <h1>Todo List</h1>
            <input className="form-control w-50" type="text" value={value} onChange={(e) => { setValue(e.target.value)}} />
            <button className="btn btn-success mt-3" onClick={() => { add(); }}>Add</button>

            {todos?.map((d, i) => (
                <div key={i} className="d-flex align-items-center mt-4">
                    <p> {i + 1}. {d?.title}</p>
                    <button className="btn btn-primary ms-3" onClick={() => { remove(d.id); }}>Remove</button>
                    <button className="btn btn-success ms-3" onClick={() => { setEditShow(true); setEditId(d.id); setEditValue(d.title) }}>Edit</button>
                </div>
            ))}

            {editShow && 
            <div className="mt-5">
                <input className="form-control w-50" type="text" value={editValue} onChange={(e) => { setEditValue(e.target.value)}} />
                <button className="btn btn-success mt-3" onClick={() => { edit(); }}>Save Changes</button>
            </div>
            }

        </div>
    );

};

export default Todolist02;

