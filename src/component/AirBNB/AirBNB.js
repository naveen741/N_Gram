import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "../../data/airBNBData"
import './AirBNB.css'

export default function AirBNB() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
         
    return (
        <div className="airBNB">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}