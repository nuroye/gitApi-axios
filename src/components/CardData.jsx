import React from 'react';
import axios from 'axios';
import './CardData.css';
//import ShowUser from './ShowUser';



export default class CardData extends React.Component {

  state = {
    database: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users`)
      .then(res => {
        const database = res.data;
        this.setState({ database });
      })
  }

  render() {
    return (
      <ul>
        
        {
          this.state.database
            .map(data =>
              
              
             
                <div className='wrapper'>

                    <img className='avt' src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=150" alt="" />
                     <h4 className='list' key={data.id}>{data.id}</h4>
                     <h4 className='list' >{data.login}</h4>
                     <a href="/ShowUser" className='btn'>
                        Veiw Details
                        </a>
                     
                     
                </div>
                
            )
        }
      </ul>
    )
  }
}
