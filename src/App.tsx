import Event from "./pages/Event"

import { client } from "./lib/apollo"
import { ApolloProvider, gql, useQuery } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"


function App() {

  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
   
  )
}

export default App
