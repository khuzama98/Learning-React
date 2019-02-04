import React , { Component } from 'react';

class Post extends Component {

    state={
        post: []
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts/'+ this.props.match.params.post_id)
        .then((success) => success.json() )
        .then((success) =>{
            // console.log(success)
            this.setState({
                post: success
            })
        })
    }

    render(){
        const post = this.state;
        console.log(post.post.body)
        // const toDisplay = post.map(item => {
        //     return(
        //         <div>
        //             <h5>{item.title}</h5>
        //             <p>{item.body}</p>
        //         </div>        
        //     )
        // })
        return(
            <div className='container'>
                <h4 className="center">Post</h4>
                <p>Post # {this.props.match.params.post_id}</p>
                {/* {toDisplay} */}
                <h5>{post.post.title}</h5>
                <p>{post.post.body}</p>
            </div>
        )
    }
}

export default Post