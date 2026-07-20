import React, { useState } from 'react'
import ProfileDetails from './ProfileDetails'
import EditProfileForm from './EditProfileForm' // 👈 Naya Component Import Kar Liya

function ProfileCard({ 
  id, name, role, bio, email, contact, experience, salary, country, qualification, onDelete, onUpdate 
}) {
  const [likes, setLikes] = useState(0)
  const [isFollowing, setIsFollowing] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleLike = () => setLikes(likes + 1)
  const handleFollow = () => setIsFollowing(!isFollowing)

  const handleSave = (updatedData) => {
    onUpdate(id, updatedData)
    setIsEditing(false)
  }

  const isStudent = role === "React Student"

  return (
    <div style={{ 
      border: isStudent ? '3px solid #ffd700' : '1px solid #e0e0e0', 
      borderRadius: '16px', padding: '25px', width: '320px', backgroundColor: 'white',
      color: '#333', textAlign: 'center', position: 'relative',
      boxShadow: isStudent ? '0 8px 20px rgba(255, 215, 0, 0.25)' : '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      
      {/* Delete Button */}
      <button 
        onClick={() => onDelete(id)} 
        style={{ position: 'absolute', top: '12px', left: '12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '50%', width: '26px', height: '26px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        ✕
      </button>

      {/* Edit / Cancel Toggle Button */}
      <button 
        onClick={() => setIsEditing(!isEditing)}
        style={{
          position: 'absolute', top: '12px', right: isStudent && !isEditing ? '110px' : '12px',
          background: isEditing ? '#f3f4f6' : '#e0e7ff', color: isEditing ? '#374151' : '#4338ca',
          border: 'none', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer'
        }}
      >
        {isEditing ? 'Cancel' : '📝 Edit'}
      </button>

      {/* TOP TALENT Badge */}
      {isStudent && !isEditing && (
        <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#fffbeb', color: '#b45309', border: '1px solid #fcd34d', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>
          ⭐ TOP TALENT
        </div>
      )}

      {/* 🎯 CONDITION: Agar Edit chal raha hai to Form component dikhao, werna Display */}
      {isEditing ? (
        <EditProfileForm 
          initialData={{ name, role, bio, email, contact, qualification, experience, salary, country }} 
          onSave={handleSave} 
        />
      ) : (
        <>
          <div style={{ marginTop: '15px' }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '22px', color: '#111827' }}>{name}</h2>
            <span style={{ background: isStudent ? '#fef3c7' : '#e0e7ff', color: isStudent ? '#b45309' : '#4338ca', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', display: 'inline-block', marginBottom: '12px' }}>
              {role}
            </span>
          </div>

          <p style={{ fontSize: '13px', color: '#6b7280', margin: '0 0 20px 0', fontStyle: 'italic', lineHeight: '1.4' }}>
            "{bio}"
          </p>

          <ProfileDetails email={email} contact={contact} qualification={qualification} experience={experience} salary={salary} country={country} />

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={handleLike} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', flex: 1, fontSize: '13px' }}>
              ❤️ Like: {likes}
            </button>
            <button onClick={handleFollow} style={{ background: isFollowing ? '#e5e7eb' : '#1f2937', color: isFollowing ? '#374151' : 'white', border: 'none', padding: '10px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', flex: 1, fontSize: '13px' }}>
              {isFollowing ? 'Connected' : 'Connect'}
            </button>
          </div>
        </>
      )}

    </div>
  )
}

export default ProfileCard