import Event from "./pages/Event"

import { client } from "./lib/apollo"
import { gql, useQuery } from "@apollo/client"


function App() {

  return (
    <div>
      <Event />
    </div>
   
  )
}

export default App
