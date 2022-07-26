import React from 'react';
import './Credentials.css';
const credentials = [
    {name: "Contacts", values: [{name: "Mobile", value: "8774xxxxxxx"}, {name: "Telegram", value: "IFudor1a"}, {name: "Github", value: "github.com/IFudor1a"}]},
    {name: "LoremIpsum", values: [{name: "Telegram", value: "IFudor1a"}, {name: "Mobile", value: "8774xxxxxxx"}, {name: "Github", value: "github.com/IFudor1a"}]},
    {name: "LoremIpsum", values: [{name: "Github", value: "github.com/IFudor1a"}, {name: "Mobile", value: "8774xxxxxxx"}, {name: "Telegram", value: "IFudor1a"}]}
]

const Credentials = () => {
    return (
        <div className='credentials'>
            {credentials.map(item => (
              <div className='row'>
                <h3 className='title'>{item.name}</h3>
                <div className='box'>
            {item.values.map(value => (
                <div className='columns'>
                    <h3 className='name'>{value.name}</h3>
                    <p className='value'>{value.value}</p>
                </div>
            ))}
                </div>
              </div>
            ))}
        </div>
    );
};

export default Credentials;