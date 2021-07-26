import React from 'react'
import {Container} from './styles'
import BlogLanding from './BlogLanding/BlogLanding'
import BlogPost from './BlogPost/BlogPost'
function Blog() {
    return (
        <Container>
            <BlogLanding/>
            <BlogPost/>
        </Container>
    
    )
}

export default Blog
