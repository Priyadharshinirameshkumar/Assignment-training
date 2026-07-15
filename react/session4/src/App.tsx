// import PropDrillingDemo from "./components/PropDrillingDemo"

// function App() {
//   return (
//     <div>
//       <PropDrillingDemo />
//     </div>
//   )
// }

// export default App


// import Navbar from './components/Navbar'
// import ThemedCard from './components/ThemedCard'

// function App() {
//   return (
//     <div>
//       <Navbar />

//       <div style={{ padding: '16px' }}>
//         <ThemedCard name="Rahul" score={92} />

//         <ThemedCard name="Priya" score={78} />

//         <ThemedCard name="Amit" score={45} />
//       </div>
//     </div>
//   )
// }

// export default App


import Navbar from './components/Navbar'
import ThemedCard from './components/ThemedCard'

import { useInterns } from './contexts/intern-context'

function App() {
  const { interns, isLoading } = useInterns()

  if (isLoading) {
    return <p>Loading interns...</p>
  }

  return (
    <div>
      <Navbar />

      <div style={{ padding: '16px' }}>
        {interns.map(intern => (
          <ThemedCard
            key={intern.id}
            name={intern.name}
            score={intern.score}
          />
        ))}
      </div>
    </div>
  )
}

export default App