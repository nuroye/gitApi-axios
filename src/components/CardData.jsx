import React from 'react';
import axios from 'axios';
import './CardData.css';
import {Link} from 'react-router-dom'



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
                  <div>
                    <img className='avt' src={data.avatar_url} alt="" />
                     <h4 className='list' key={data.id}>{data.id}</h4>
                     <h4 className='list' >{data.login}</h4>
                     <Link to="/showuser" className='btn'>
                        Veiw Details
                        </Link>
                  </div>
                     
                </div>
                
            )
        }
      </ul>
    )
  }
}
