import "./home.css"
import { products } from "../../products/products"
import CardProduct from "../../products/cardProducts/cardProducts"
import { useRef, useState } from "react"
import { isDisabled } from "@testing-library/user-event/dist/utils"

export default function Home() {
    const inputtitle = useRef()


    const [category, UseCategory] = useState("")
   

    const productFiltred =  products.filter(product => product.category === category)

    return (
        <div className="home">
           
            <div className="homeButtons">
                <button onClick={() => {UseCategory("")}} className="filterButtons" disabled={category==""}>Todos</button>
                <button onClick={() => {UseCategory("Kit Avanzado")}} className="filterButtons" disabled={category=="Kit Avanzado"}>Kit Avanzado</button>
                <button onClick={() => {UseCategory("Kit De Inicio")}} className="filterButtons" disabled={category=="Kit De Inicio"}>Kit De Inicio</button>
                <button onClick={() => {UseCategory("POD")}} className="filterButtons" disabled={category=="POD"}>POD</button>
            
            </div>
            <div className="productDiv">
               
                {
                (category =="")?  products.map(product => <CardProduct id={product.id} {...product} />) : productFiltred.map(product => <CardProduct id={product.id} {...product} />)
                } 
            </div>
        </div>

    )
}