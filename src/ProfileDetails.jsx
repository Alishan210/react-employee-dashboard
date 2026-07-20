import React from 'react'

function ProfileDetails({ email, contact, qualification, experience, salary, country }) {
  // Common style for rows
  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    padding: '6px 0',
    borderBottom: '1px dashed #e0e0e0',
    textAlign: 'left'
  }

  const labelStyle = {
    fontWeight: 'bold',
    color: '#666'
  }

  const valueStyle = {
    color: '#333',
    fontWeight: '500'
  }

  return (
    <div style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '10px', marginBottom: '20px' }}>
      <div style={rowStyle}>
        <span style={labelStyle}>📧 Email:</span>
        <span style={valueStyle}>{email}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>📞 Contact:</span>
        <span style={valueStyle}>{contact}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>🎓 Degree:</span>
        <span style={valueStyle}>{qualification}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>⏳ Experience:</span>
        <span style={valueStyle}>{experience}</span>
      </div>
      <div style={rowStyle}>
        <span style={labelStyle}>💰 Salary:</span>
        <span style={valueStyle}>{salary}</span>
      </div>
      <div style={{ ...rowStyle, borderBottom: 'none' }}>
        <span style={labelStyle}>📍 Country:</span>
        <span style={valueStyle}>{country}</span>
      </div>
    </div>
  )
}

export default ProfileDetails