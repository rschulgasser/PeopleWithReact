import React from 'react';
import PeronForm from './PeronForm';

import PersonRow from './PersonRow';

class People extends React.Component {

    state = {
        people: [],
       
        firstName: '',
        lastName:'',
        age: ''
        
    }
                        onChangeFirstName = e => {
                        this.setState({ firstName: e.target.value });
                            }
                        onChangeLastName = e => {
                        this.setState({ lastName: e.target.value });
                                    }
                        onChangeAge= e => {
                        this.setState({ age: e.target.value });
                                            }
                        onAddClick = () => {
                        const { firstName,lastName,age, people} = this.state;
                                        const person={
                                            firstName,
                                            lastName,
                                            age
                                        }
                                    const copy = [...people, person];
                                  
                                    this.setState({ people: copy, firstName: '',lastName:'',age:'' });
                                    
                                }
                                onClearClick = () => {
                                    ;
                                              
                                                this.setState({ people: []});
                                                
                                            }
                           
                          

    render() {
        return (
            
            <div className='container mt-5'>
            
                <PeronForm 
                 firstName={this.state.firstName}
                 lastName={this.state.lastName}
                 age={this.state.age}
                 onChangeFirstName={this.onChangeFirstName}
                 onChangeLastName={this.onChangeLastName}
                 onChangeAge={this.onChangeAge}
                 onAddClick={this.onAddClick}
                 onClearClick={this.onClearClick}/>
                <div>
               
            <PersonRow people={this.state.people} />
           
            </div>
            </div>
            
        )

    }

}
                            

    export default People;