import React from 'react'
// Hum doosri file ko yahan import kar rahe hain
import ProfileCard from './ProfileCard' 

function App() {
  return (
    // Saare code ko humne ek main parent <div> ke andar rakha hai taake error na aaye
    <div style={{ padding: '30px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>React Props Ka Jadoo 🪄</h1>
      <p>Component ek hi hai, lekin data sab ka alag hai!</p>
      
      {/* Pehla Card: Ali Bhai Ka */}
      <ProfileCard 
        name="Ali Bhai" 
        bio="React seekhne wala ek behtareen developer!" 
        role="React Student" 
      />
      
      {/* Doosra Card */}
      <ProfileCard 
        name="Zeeshan" 
        bio="Node.js aur databases ka badshah!" 
        role="Backend Dev" 
      />
      
      {/* Teesra Card */}
      <ProfileCard 
        name="Ayesha" 
        bio="Khoobsurat UI designs banane wali expert." 
        role="UI/UX Designer" 
      />
    </div>
  )
}

export default App