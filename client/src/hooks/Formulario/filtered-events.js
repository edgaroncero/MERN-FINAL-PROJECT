

export const useFilterEvents = ({ events, filters }) => {
    const filterEvents = (events) => {
      const startDate = filters.startDate.split('/').reverse().join('-')
      const endDate = filters.endDate.split('/').reverse().join('-')
      return events?.filter(event => {
        return (
          event.price <= filters.maxPrice &&
           (
             !filters.title ||
             event.title.toLowerCase().includes(filters.title.toLowerCase())
           ) &&
           (
              filters.category === 'All' ||
              event.category === filters.category
           ) && 
           (
             filters.city === 'All' ||
             event.city === filters.city
           ) && 
           (
            !filters.startDate || 
            event.dtstart >= startDate
           ) &&
           ( 
             !filters.endDate || 
             event.dtend <= endDate
           )
        )
      })
    }
  
    const filteredEvents = filterEvents(events);

    return ({ filteredEvents })
  }