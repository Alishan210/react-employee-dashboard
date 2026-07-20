import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'

// Default Data (Jab pehli dafa app chalegi tab use hoga)
const initialDevelopers = [
  { 
    id: 1, 
    name: "Ali Bhai", 
    role: "React Student",
    bio: "React seekhne wala ek behtareen aur passionate developer!", 
    email: "ali.dev@example.com",
    contact: "+92 300 1234567",
    experience: "Fresh Graduate",
    salary: "65,000 PKR",
    country: "Pakistan",
    qualification: "BS Software Engineering"
  },
  { 
    id: 2, 
    name: "Zeeshan Khan", 
    role: "Backend Dev",
    bio: "Node.js, Express aur databases ka ustad.", 
    email: "zeeshan@example.com",
    contact: "+92 321 7654321",
    experience: "2 Years",
    salary: "120,000 PKR",
    country: "Pakistan",
    qualification: "BS Computer Science"
  }
]

function App() {
  // 1️⃣ INITIAL STATE: LocalStorage se data parhein, agar na mile to default data lein
  const [developers, setDevelopers] = useState(() => {
    const savedData = localStorage.getItem('employee_dashboard_data')
    return savedData ? JSON.parse(savedData) : initialDevelopers
  })

  const [newName, setNewName] = useState("")

  // 2️⃣ AUTO SAVE: Jab bhi 'developers' array change ho, LocalStorage update ho jaye
  useEffect(() => {
    localStorage.setItem('employee_dashboard_data', JSON.stringify(developers))
  }, [developers])

  // Add Employee
  const addDeveloper = () => {
    if (newName.trim() === "") return
    const newDev = {
      id: Date.now(), 
      name: newName,
      role: "Junior Developer",
      bio: "Abhi abhi is team me shamil huye hain!",
      email: "new.dev@company.com",
      contact: "Not Provided",
      experience: "Fresh",
      salary: "50,000 PKR",
      country: "Pakistan",
      qualification: "Graduated"
    }
    setDevelopers([...developers, newDev])
    setNewName("")
  }

  // Delete Employee
  const deleteDeveloper = (idToFilter) => {
    setDevelopers(developers.filter(dev => dev.id !== idToFilter))
  }

  // Update Employee
  const updateDeveloper = (idToUpdate, updatedFields) => {
    setDevelopers(developers.map(dev => {
      if (dev.id === idToUpdate) {
        return { ...dev, ...updatedFields }
      }
      return dev
    }))
  }

  // Reset Data (Testing ke liye option)
  const resetToDefault = () => {
    if (window.confirm("Kya aap saara data reset karke original state par lana chahte hain?")) {
      setDevelopers(initialDevelopers)
      localStorage.removeItem('employee_dashboard_data')
    }
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', textAlign: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>Professional Employee Dashboard 💼</h1>
      
      {/* Input & Action Bar */}
      <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Naya Employee Naam..." 
          value={newName}
          onChange={(e) => setNewName(e.target.value)} 
          style={{ padding: '12px', fontSize: '16px', borderRadius: '6px', border: '2px solid #646cff', width: '280px' }}
        />
        <button onClick={addDeveloper} style={{ padding: '12px 24px', fontSize: '16px', background: '#646cff', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Add Employee
        </button>
        
        {/* Reset Button */}
        <button onClick={resetToDefault} style={{ padding: '12px 16px', fontSize: '14px', background: '#e5e7eb', color: '#374151', border: '1px solid #d1d5db', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
          🔄 Reset Data
        </button>
      </div>

      {/* Developers Cards List */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '25px', padding: '10px' }}>
        {developers.length === 0 ? (
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Koi employee nahi mila. Upar se naya add karein!</p>
        ) : (
          developers.map((dev) => (
            <ProfileCard 
              key={dev.id} 
              id={dev.id}
              name={dev.name} 
              role={dev.role} 
              bio={dev.bio} 
              email={dev.email}
              contact={dev.contact}
              experience={dev.experience}
              salary={dev.salary}
              country={dev.country}
              qualification={dev.qualification}
              onDelete={deleteDeveloper}
              onUpdate={updateDeveloper}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default App