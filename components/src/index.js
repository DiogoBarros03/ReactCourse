import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments"> 
            <ApprovalCard>
                <div>
                    <h4>
                        WarNING MONSTERS COMMINGGGGGG!
                    </h4>
                    Are you sure you want to do this? DON?T OD tITHAS;
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="ArrozDefensor" 
                    timeAgo="Today at 2:00PM" 
                    comment ="Defendo a minha nação!!" 
                    img ={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="MassaAssassina" 
                    timeAgo="Today at 4:00PM" 
                    comment ="ATACAREI SEM PARAR! SMASSAAA!!!" 
                    img ={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>


    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);