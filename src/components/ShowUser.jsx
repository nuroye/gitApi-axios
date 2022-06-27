/*
import axios from "axios";
import { useState } from "react"
import CardData from "./CardData";



const ShowUser = () => {
    state = {
        display: []
      } 
    
      componentDidMount() {
        axios.get(`https://api.github.com/username`)
          .then(res => {
            const display = res.data;
            this.setState({ display });
           
          })
      }

      render() 
        return(
            <ul>
        
        {
          this.state.display
            .map(datacool =>
              
              
             
                <div className='wrapper'>

                     <h4  key={datacool.id}>{datacool.id}</h4>
                     <h4>{datacool.login}</h4>
                     <h4>{datacool.avatar_url}</h4>
                    
                     
                     
                </div>
                
            )
        }
      </ul>
        )
      }
    }


export default ShowUser;
*/