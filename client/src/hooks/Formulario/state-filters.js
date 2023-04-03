import { useState } from "react"
export function useHandleFiltersChange () {
const [maxPrice, setMaxPrice] = useState(600)
const [filters, setFilters] = useState({
    title: '',
    category: 'All',
    city: 'All',
    startDate: '',
    endDate: '',
    maxPrice: 600
  }) 

    const handleTitle = (e) => {
      setFilters(prevState => ({ ...prevState, title: e.target.value }))
    }
   
    const handleCategory = (e) => {
      setFilters(prevState => ({ ...prevState, category: e.target.value }))
    }
  
    const handleCity = (e) => {
      setFilters(prevState => ({ ...prevState, city: e.target.value }))
    }
  
    const handleStartDate = (e) => {
      setFilters(prevState => ({ ...prevState, startDate: e.target.value }))
    }
  
    const handlePrice = (e) => {
      setMaxPrice(e.target.value)
      setFilters(prevstate => ({...prevstate, maxPrice: e.target.value}))
    }
  
    const handleEndDate = (e) => {
      setFilters(prevState => ({ ...prevState, endDate: e.target.value }))
    }
  
    return { handleTitle, handleCategory, handleCity, handleStartDate, handlePrice, handleEndDate, filters, maxPrice }
  }

    