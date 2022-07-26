import React, {useState} from 'react';
import FormComment from "../Components/FormComment/FormComment";
import CommentLabel from "../Components/CommentLabel/CommentLabel";

const Admin = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className='Admin'>
            <FormComment setToggle = {setToggle}/>
            <CommentLabel setToggle = {setToggle} toggle = {toggle}/>
        </div>
    );
};

export default Admin;