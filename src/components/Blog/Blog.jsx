import React from 'react'
import Footer from '../Footer/Footer'
import {Container} from './styles'
import BlogLanding from './BlogLanding/BlogLanding'
import BlogPost from './BlogPost/BlogPost'
import BlogProfile from './BlogProfile/BlogProfile'
function Blog() {
    return (
        <Container>
            <BlogLanding/>
            <BlogPost/>
            <BlogProfile/>
            <Footer/>
        </Container>
    
    )
}

export default Blog
