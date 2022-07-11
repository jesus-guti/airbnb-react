import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
    const cards = data.map(item => {
        return (
            <Card
                item={item}
            />
        )
    }) 

    return ( 
      <div>
        <Navbar />
        <section className="flex flex-col gap-12 items-center my-10">
          {cards}
        </section>
      </div>
    )
}

export default App;