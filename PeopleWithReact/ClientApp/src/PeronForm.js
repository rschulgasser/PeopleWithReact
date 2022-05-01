
import React from 'react';

class PeronForm extends React.Component {
    render() {
        
        const { firstName, lastName, age, onChangeFirstName,onChangeLastName, onChangeAge, onAddClick,onClearClick} = this.props;
        ;
        return (
            <div className="row jumbotron">
            <div className="col-md-3">
            <input type="text" placeholder="First Name"  class="form-control" value={firstName} onChange={onChangeFirstName}/>
            </div><div class="col-md-3">
             <input type="text" placeholder="Last Name"  class="form-control" value={lastName} onChange={onChangeLastName}/>
            </div><div class="col-md-3">
                <input type="text" placeholder="Age" name="age" class="form-control" value={age} onChange={onChangeAge}/>
                    </div><div class="col-md-3"><button class="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button class="btn btn-warning ml-3" onClick={onClearClick}>Clear All</button>
                    </div>
                        </div>


        )
    }
}

export default PeronForm;