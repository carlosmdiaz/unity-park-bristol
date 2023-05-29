export async function getAllEvents() {
    const response = await fetch('https://unity-park-bristol-default-rtdb.firebaseio.com/Events.json');
    const data = await response.json();
    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
    const allEvents = await getAllEvents();
    const { year, month } = dateFilter;
  
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
}

export async function getAllBusinesses() {
  const response = await fetch('https://unity-park-bristol-default-rtdb.firebaseio.com/Businesses.json');
  const data = await response.json();
  const businesses = [];

  for (const key in data) {
      businesses.push({
          id: key,
          ...data[key]
      });
  }
  return businesses;
}

export async function getBusinessById(id) {
  const allBusinesses = await getAllBusinesses();
  return allBusinesses.find((business) => business.id === id);
}