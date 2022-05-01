import React from 'react';


class PersonRow extends React.Component {
    
    GenerateRow = (person) => {
        const{firstName,lastName,age}=person
        let className=""
        if(age>65){
            className+="bg-danger"
        }
        return <tr className={className}><td>{firstName}</td><td>{lastName}</td><td>{age}</td></tr>
     }
    render() {
        
       
            const { people} = this.props;
            if (people.length === 0) {
                return <h1 className='justify-content-center'>No person added. Be the first!</h1>
            }
            else {
                  return <>
                  
                  <div>
                  <table className="table table-hover table-striped table-bordered">
              <thead><tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
              </tr>
              </thead>
              <tbody>
                 { people.map(p => this.GenerateRow(p))}
                  </tbody>
           
           </table>
 
                  
             </div> 
             </>
             
                  
            }
        
    }

}
export default PersonRow;
