import React /*,{useContext, useEffect}*/ from 'react'
//import noteContext from '../context/notes/noteContext'

const About = () => {

  return (
    <>
  <div>
  <h3 style={{fontSize: 40, textAlign:'center'}}>Welcome to iNotebook - Your Secure Note-taking Solution!</h3>
  <p style={{fontSize:20, textAlign:'center'}}>
  iNotebook is a feature-rich and secure note-taking web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to create, manage, and organize their notes efficiently with a modern and user-friendly interface.
  </p>
  </div>
  <div>
    <ul className="list-group">
    <h4>✨ Key Features </h4>
    <li className="list-group-item border border-black my-2 rounded-2">  
    <h5>🔐 User Authentication (Login & Signup)</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Secure JWT-based authentication ensures that only registered users can access their notes.
    </li>
    <li>
    Passwords are encrypted using bcrypt for added security.
    </li>
    </p>
    </li>
    <li className="list-group-item border border-black my-2 rounded-2">  
    <h5>🔐 User Authentication (Login & Signup)</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Secure JWT-based authentication ensures that only registered users can access their notes.
    </li>
    <li>
    Passwords are encrypted using bcrypt for added security.
    </li>
    </p>
    </li>
    <li className="list-group-item border border-black my-2 rounded-2">  
    <h5>📝 Add New Notes</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Users can quickly create and save notes with a title and description.
    </li>
    <li>
    Notes are stored securely in a MongoDB database.
    </li>
    </p>
    </li><li className="list-group-item border border-black my-2 rounded-2">  
    <h5>✏️ Edit Existing Notes</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Easily modify any saved notes without having to delete and rewrite them.
    </li>
    <li>
    Real-time updates ensure smooth editing.
    </li>
    </p>
    </li>
    <li className="list-group-item border border-black my-2 rounded-2">  
    <h5>🗑️ Delete Notes</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Remove unnecessary notes with a simple delete button.
    </li>
    <li>
    A confirmation prompt prevents accidental deletions.
    </li>
    </p>
    </li><li className="list-group-item border border-black my-2 rounded-2">  
    <h5>📂 Organized Notes Dashboard</h5>
    <p style={{marginLeft: 35}}>
    <li>
    A clean and intuitive interface displays all your notes in a structured format.
    </li>
    <li>
    Responsive design ensures a seamless experience on mobile and desktop devices.
    </li>
    </p>
    </li>
    <li className="list-group-item border border-black my-2 rounded-2">  
    <h5>🚀 Fast & Lightweight</h5>
    <p style={{marginLeft: 35}}>
    <li>
    Built with React.js for a smooth UI and Node.js + Express.js for an optimized backend.
    </li>
    <li>
    Uses MongoDB for efficient data storage and retrieval.
    </li>
    </p>
    </li>
    </ul>
  </div>
    </>
    
  )
}

export default About
