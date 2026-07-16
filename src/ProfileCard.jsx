import React, { useState } from 'react'

function ProfileCard({ name, bio, role }) {
  
  // 1. PEHLI STATE: Likes badhane ke liye (Number)
  const [likes, setLikes] = useState(0)

  // 2. DOOSRI STATE: Follow status ke liye (True ya False)
  const [isFollowing, setIsFollowing] = useState(false)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  // 3. DOOSRA CLICK FUNCTION: Jo follow status ko toggle karega
  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    /* Humne saare code ko is main parent <div> (thailay) ke andar band kiya hai */
    <div style={{ 
      border: '2px solid #646cff', 
      borderRadius: '12px', 
      padding: '20px', 
      margin: '15px auto', 
      maxWidth: '300px',
      backgroundColor: '#f9f9f9',
      color: '#333',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      {/* 1. Heading Tag */}
      <h2>{name} 😎</h2>
      
      {/* 2. Paragraph Tag */}
      <p style={{ fontSize: '14px', margin: '10px 0' }}>{bio}</p>
      
      {/* 3. Role Wrapper */}
      <div style={{ marginBottom: '15px' }}>
        <span style={{ 
          background: '#646cff', 
          color: 'white', 
          padding: '5px 10px', 
          borderRadius: '15px',
          fontSize: '12px'
        }}>
          Role: {role}
        </span>
      </div>

      {/* 4. Like Button Tag */}
      <button 
        onClick={handleLike}
        style={{
          background: '#4caf50',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginRight: '8px'
        }}
      >
        👍 Like: {likes}
      </button>

      {/* 5. Follow Button Tag */}
      <button 
        onClick={handleFollow}
        style={{
          background: isFollowing ? '#ccc' : '#007bff',
          color: isFollowing ? '#c54545' : 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  )
}

export default ProfileCard