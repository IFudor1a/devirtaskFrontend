import React, {useState} from 'react';
import FormComment from "../FormComment/FormComment";
import Api from "../../api";
import './CommentsItems.css';
const CommentsItems = ({comment, setToggle, back}) => {
    const [active, isActive] = useState(false);
    const [updateId, setUpdateId] = useState(false);
    const [parentId, setParentId] = useState(null);
    const nested = back.filter(bk => bk.parentID === comment._id);
    const replies = (nested || []).map(rep => {
        return <CommentsItems key={rep._id} back={back} comment={rep} setToggle={setToggle}/>
    })
    const handleDelete = (id) => {
        Api.delete(id);
        console.log('Delete')
        setToggle(true)
    }
    const handleAdd = (id) => {
        isActive(true);
        setParentId(id);
    }
    const handleUpdate = (id) => {
        isActive(true);
        setParentId(id);
        setUpdateId(true);

    }
    return (
        <div style={{marginLeft: "40px"}}>
            <div className='comment'>
                <div className='item'>
                    <h3>Author: {comment.author}</h3>
                    <p>{comment.comment}</p>
                </div>
                <div className='holder'>
                    <button onClick={() => handleAdd(comment._id)}>Comment</button>
                    <button onClick={() => handleDelete(comment._id)}>Delete</button>
                    <button onClick={() => handleUpdate(comment._id)}>Edit</button>
                </div>
            </div>
            {replies}
            {active && <FormComment updateId = {updateId} setUpdateID = {setUpdateId} setToggle={setToggle} parentId = {parentId} setParentId = {setParentId} isActive = {isActive}/>}
        </div>
    );
};

export default CommentsItems;