const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for purchases and events
const purchases = [];
const events = [];

/**
 * Endpoint to handle ticket purchase submissions.
 * Expects form data with fields: eventSelect, ticketQuantity, buyerName, buyerEmail, buyerPhone,
 * cardNumber, cardExpiry, cardCVV.
 */
app.post('/api/purchase', (req, res) => {
  const { eventSelect, ticketQuantity, buyerName, buyerEmail, buyerPhone, cardNumber, cardExpiry, cardCVV } = req.body;

  // Basic validation: ensure all required fields are provided
  if (!eventSelect || !ticketQuantity || !buyerName || !buyerEmail || !buyerPhone || !cardNumber || !cardExpiry || !cardCVV) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const purchase = {
    id: purchases.length + 1,
    event: eventSelect,
    quantity: ticketQuantity,
    buyer: { name: buyerName, email: buyerEmail, phone: buyerPhone },
    payment: { cardNumber, cardExpiry, cardCVV },
    timestamp: new Date()
  };

  purchases.push(purchase);

  res.json({ message: 'Purchase successful', purchase });
});

/**
 * Endpoint to handle event creation submissions.
 * Expects form data with fields: eventTitle, eventDate, eventTime, eventLocation, eventCategory,
 * eventDescription, ticketPrice, availableTickets, eventImageUrl (optional).
 */
app.post('/api/create_event', (req, res) => {
  const { eventTitle, eventDate, eventTime, eventLocation, eventCategory, eventDescription, ticketPrice, availableTickets, eventImageUrl } = req.body;

  // Basic validation: ensure all required fields are provided
  if (!eventTitle || !eventDate || !eventTime || !eventLocation || !eventCategory || !eventDescription || !ticketPrice || !availableTickets) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const event = {
    id: events.length + 1,
    title: eventTitle,
    date: eventDate,
    time: eventTime,
    location: eventLocation,
    category: eventCategory,
    description: eventDescription,
    price: ticketPrice,
    availableTickets: availableTickets,
    imageUrl: eventImageUrl || '',
    timestamp: new Date()
  };

  events.push(event);

  res.json({ message: 'Event created successfully', event });
});

/**
 * Optional endpoint to retrieve all created events.
 */
app.get('/api/events', (req, res) => {
  res.json({ events });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
