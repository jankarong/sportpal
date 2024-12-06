// Court database
export const courts = [
    {
      id: 1,
      title: "Drive Basketball Centre",
      location: "Richmond",
      distance: "14km",
      address: "123 Main St, Richmond, BC V6X 1A1",
      image: "basketball-court",
      description: "The Drive Basketball Court is a well-maintained outdoor court available for booking. Featuring regulation hoops and a smooth playing surface, it's great for pickup games, practice, or training. The court is open from 18:00-20:00.",
      price: "$40/hour",
      available_day_time: [
        {
          day: "Monday",
          time: "10:00 AM - 2:00 PM"
        },
        {
          day: "Wednesday",
          time: "2:00 PM - 6:00 PM"
        }
      ],
      contact: "788-0116",
      facilities: [
        "Regulation hoops",
        "Smooth playing surface",
        "Lighting",
        "Seating area"
      ],
      category: "basketball"
    },
    {
      id: 2,
      title: "Richmond Olympic Oval",
      location: "Richmond",
      distance: "18km",
      address: "456 Broad Ave, Richmond, BC V6Y 1A4",
      image: "basketball-court-2",
      description: "Spacious outdoor court with high-quality surface and nearby parking. Perfect for both casual games and organized tournaments. Features multiple courts and excellent facilities.",
      price: "$50/hour",
      available_day_time: [
        {
          day: "Tuesday",
          time: "9:00 AM - 12:00 PM"
        },
        {
          day: "Friday",
          time: "3:00 PM - 7:00 PM"
        }
      ],
      contact: "778-123-4567",
      facilities: [
        "Multiple courts",
        "High-quality surface",
        "Parking",
        "Changing rooms"
      ],
      category: "basketball"
    },
    {
      id: 3,
      title: "Minoru Sports Park",
      location: "Richmond",
      distance: "5km",
      address: "7191 Granville Ave, Richmond, BC V6Y 4G2",
      image: "basketball-court",
      description: "Park court with a scenic view, perfect for casual and competitive games. Well-maintained outdoor facilities with beautiful surroundings.",
      price: "$30/hour",
      available_day_time: [
        {
          day: "Thursday",
          time: "4:00 PM - 8:00 PM"
        },
        {
          day: "Saturday",
          time: "10:00 AM - 2:00 PM"
        }
      ],
      contact: "604-123-4567",
      facilities: [
        "Scenic view",
        "Outdoor lighting",
        "Water fountains",
        "Public restrooms"
      ],
      category: "basketball"
    },
    {
      id: 4,
      title: "Richmond Court Hub",
      location: "Richmond",
      distance: "10km",
      address: "789 Oak St, Richmond, BC V5Z 1T4",
      image: "basketball-court-2",
      description: "Indoor court with professional-grade flooring, ideal for basketball and volleyball. Climate-controlled environment perfect for year-round play.",
      price: "$45/hour",
      available_day_time: [
        {
          day: "Wednesday",
          time: "8:00 AM - 12:00 PM"
        },
        {
          day: "Saturday",
          time: "1:00 PM - 5:00 PM"
        }
      ],
      contact: "604-987-6543",
      facilities: [
        "Professional flooring",
        "Climate control",
        "Locker rooms",
        "Equipment rental"
      ],
      category: "basketball"
    },
    {
      id: 5,
      title: "Drive Badminton Centre",
      location: "Richmond",
      distance: "8km",
      address: "101 Pine St, Richmond, BC V5T 1A2",
      image: "badminton-court",
      description: "Modern indoor badminton facility with professional courts and equipment rental available. Perfect for both casual players and serious athletes.",
      price: "$35/hour",
      available_day_time: [
        {
          day: "Monday",
          time: "2:00 PM - 6:00 PM"
        },
        {
          day: "Thursday",
          time: "10:00 AM - 2:00 PM"
        }
      ],
      contact: "604-555-0123",
      facilities: [
        "Professional courts",
        "Equipment rental",
        "Changing rooms",
        "Pro shop"
      ],
      category: "badminton"
    }
  ];