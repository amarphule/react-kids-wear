import React,{ createContext, useState, useContext,useEffect } from 'react'
import axios from 'axios'

const ProductContext = createContext()

const ProductProvider = ({children}) => {

    const [productLists, setProductLists] = useState([])

    useEffect(()=>{
        const getProducts = async ()=>{
            try {
                const resp = await axios("/api/products")
                setProductLists(resp.data.products)
            } catch (error) {
            console.log("log: ",error)     
            }
        }
        getProducts()
    },[])

  return (
    <ProductContext.Provider value={{productLists, setProductLists}}>{children}</ProductContext.Provider>
  )
}

const useProductLists = ()=>useContext(ProductContext)

export {ProductProvider, useProductLists} 