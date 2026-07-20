import React, { useState } from 'react'

function EditProfileForm({ initialData, onSave }) {
  // Local States form handling ke liye
  const [editName, setEditName] = useState(initialData.name)
  const [editRole, setEditRole] = useState(initialData.role)
  const [editBio, setEditBio] = useState(initialData.bio)
  const [editEmail, setEditEmail] = useState(initialData.email)
  const [editContact, setEditContact] = useState(initialData.contact)
  const [editQualification, setEditQualification] = useState(initialData.qualification)
  const [editExperience, setEditExperience] = useState(initialData.experience)
  const [editSalary, setEditSalary] = useState(initialData.salary)
  const [editCountry, setEditCountry] = useState(initialData.country)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({
      name: editName,
      role: editRole,
      bio: editBio,
      email: editEmail,
      contact: editContact,
      qualification: editQualification,
      experience: editExperience,
      salary: editSalary,
      country: editCountry
    })
  }

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '13px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
      <h3 style={{ margin: '0 0 10px 0', textAlign: 'center', color: '#646cff' }}>Edit Employee Data</h3>
      
      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Name:</label>
      <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Role:</label>
      <input type="text" value={editRole} onChange={(e) => setEditRole(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Bio:</label>
      <input type="text" value={editBio} onChange={(e) => setEditBio(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Email:</label>
      <input type="email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Contact:</label>
      <input type="text" value={editContact} onChange={(e) => setEditContact(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Degree:</label>
      <input type="text" value={editQualification} onChange={(e) => setEditQualification(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Experience:</label>
      <input type="text" value={editExperience} onChange={(e) => setEditExperience(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Salary:</label>
      <input type="text" value={editSalary} onChange={(e) => setEditSalary(e.target.value)} style={inputStyle} /></div>

      <div><label style={{ fontSize: '11px', fontWeight: 'bold', color: '#666' }}>Country:</label>
      <input type="text" value={editCountry} onChange={(e) => setEditCountry(e.target.value)} style={inputStyle} /></div>

      <button 
        type="submit"
        style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}
      >
        💾 Save All Changes
      </button>
    </form>
  )
}

export default EditProfileForm