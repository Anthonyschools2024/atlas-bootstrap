# Ticket Evolution

Ticket Evolution is a web application that allows users to purchase concert tickets and enables event coordinators to create new events. The project is built using HTML, CSS (with Bootstrap), and Node.js/Express for the back end. It features a fully responsive design with a baby blue background theme.

## Features

- **Responsive Front-End:**  
  - **Home Page:** Displays a carousel of concert images and quotes.  
  - **Purchase Tickets:** Lets users buy tickets. The event selection dropdown is dynamically populated from the back-end.  
  - **Create Event:** Allows event coordinators to create and post new events with detailed information.

- **Back-End API (Node.js/Express):**  
  - **Static File Serving:** Serves all front-end files from the `public` folder.
  - **API Endpoints:**  
    - `GET /api/events` - Retrieves all created events.
    - `POST /api/purchase` - Processes ticket purchase submissions.
    - `POST /api/create_event` - Processes new event submissions.
  - **In-Memory Data Storage:** For demonstration purposes, event and purchase data are stored in memory.

- **Styling:**  
  - The entire site uses a baby blue background (`#89CFF0`) with minimal custom CSS.
  - Bootstrap ensures that the layout is responsive on all devices.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository or download the project files.
2. Open your terminal and navigate to the project directory
3. Go into the public folder and click on the index file to take veiw if the webpage!
