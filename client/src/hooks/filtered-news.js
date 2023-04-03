
export const useFilterNews = ({ events, filters }) => {
    const filterEventsNews = (events) => {
      const startDate = filters.startDate = new Date();
      const endDate = filters.endDate = new Date('9999-12-31');
      return events.filter((event) => {
        const eventDate = new Date(event.dtstart);
        return eventDate >= startDate && eventDate <= endDate;
      });
    };

    const filteredNews= filterEventsNews(events);

    return { filteredNews }
  }