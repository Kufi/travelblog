import React from "react"
import Entry from "./components/Entry"
import Headbar from "./components/Headbar"
import data from "./data"

function App() {
    const entries = data.map( (item) => {
        return (
            <Entry 
                key={item.googleMapsUrl}
                item={item}
            />
        )
    })
    
    return (
        <main>
            <Headbar />
            <section className="entries">
               {entries}
            </section>
        </main>
    )
}

export default App