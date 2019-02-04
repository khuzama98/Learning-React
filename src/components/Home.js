import React from 'react';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import '../index.css'

class Home extends React.Component{

    state = {
        posts: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((success) => success.json() )
        .then((success) =>{
            this.setState({
                posts: success.slice(0,10)
            })
        })
      }    

    render(){
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(item => {
                return(
                    <div className="post card" key={item.id} >
                        <img src={Pokeball} alt="pokeball"/>
                        <div className="card-content">
                            <Link to={`/${item.id}`}>
                                <span className="card-title">{item.title}</span>
                            </Link>
                            <p>{item.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No post yet</div>
        )
        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
}
}

export default Home