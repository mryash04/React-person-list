import React from 'react';
import './index.css';

const App = () =>{
    return(
        <React.Fragment>
            <div className="person-lists">
                <Personlist />
            </div>
        </React.Fragment>
    )
};

const Personlist = () =>{

    const people = [
        {
            img: 74,
            name: 'Mark',
            job: 'Web Developer'
        },
        {
            img: 72,
            name: 'Tesluien',
            job: 'Marketing management'
        },
        {
            img: 78,
            name: 'Paul Boag',
            job: 'UI/UX Designer'
        }
    ];

    return(
        <React.Fragment>
            <div className="person-peoplelists">
                <Person listpeople = {people[0]} />
                <Person listpeople = {people[1]}
                        text="Marketing is an expansive area of expertise that 
                        encompasses many different focus areas,and job descriptions"
                 />
                <Person listpeople = {people[2]}  />
            </div>
        </React.Fragment>
    )
};

const Person = (props) =>{

    const url =`https://randomuser.me/api/portraits/thumb/men/${props.listpeople.img}.jpg`;

    return(
        <React.Fragment>
            <div className="person">
                <div className="person-image">
                    <img src={url} alt="personimage" />
                </div>
                <div className="information">
                    <h2>{props.listpeople.name}</h2>
                    <span style={{padding:"5px"}}>{props.text}</span>
                    <p>{props.listpeople.job}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
};

export default App;
