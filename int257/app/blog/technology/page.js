export const revalidate=60
import React from 'react'

export default async function Technology() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'force-cache'})
    const data = await response.json()
    const posts=data.filter((item)=>item.userId===1)
    return (
        <div>           
            {posts.map((post)=>(
                <div key={post.id}>
                    Id:<p>{post.id}</p>
                    userId:<p>{post.userId}</p>
                    title:<p>{post.title}</p>
                    body:<p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}