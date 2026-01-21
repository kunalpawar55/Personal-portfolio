import airo from'../images/Airoplane.jpg'
import world from'../images/images.jpeg'
import uiux from '../images/Landing.jpg'
import cafe from '../images/CAFE.jpeg'
import sport from'../images/Sports.jpg'
import carslelo from'../images/Carslelo.jpeg'
export const data = [
    {
      id: 1,
      title: "Airoplane Booking",
      description: `  •	I spearheaded the development of a flight booking web application, utilizing HTML and CSS for the frontend, and Java for backend functionalities.
•	 Employing JDBC, I seamlessly connected the Java application to the database
•	User input was facilitated through JSP, enhancing user experience with HTML/CSS and managing HTTP
•	Sessions efficiently. Servlets were employed to store user data and implement
•	login/register functionality, while also adding cookies to the application.
•	Leveraging Servlet filters, I ensured robust password validation. This project showcases my adeptness in 
full-stack development, database integration, session management, and security measures, encapsulated.`,
                    
      imag :airo
    },
    {
      id: 2,
      title: "World Clock",
      description: `
        The World Clock Project leverages HTML, CSS, and JavaScript to deliver a dynamic and interactive experience. Its primary aim is to capture and display clock faces from around the world, showcasing diverse time zones and local times.
    
        Key Features and Goals:
    
        • Global Time Zones**: Display current local times for various cities across different time zones, allowing users to see the exact time in different parts of the world.
        
        • Interactive Interface**: Users can select and view multiple cities on a single page, with an intuitive interface that updates in real-time.
        
        • Responsive Design**: Built with responsive web design principles to ensure a seamless experience on desktops, tablets, and mobile devices.`,
      imag: world
    },
    {
      id:3,
      title:'Web and App Design',
      description: `During my internship, I worked on creating designs for a new project with a focus on UI/UX. For this project, I utilized the Figma tool to design user interfaces and enhance the user experience. My role involved developing creative and effective design solutions to meet project requirements and improve overall usability.`,
      imag:uiux
    },
    {
      id: 4,
      title: 'CAFE Bill Website',
      description: `I developed a café website using React.js with a focus on a rich user experience. Key features include:
    
    1. Billing System: Real-time updates on bills with detailed breakdowns, including item names, quantities, prices, and totals.
    2. Filtering Options: Dynamic filters for menu items based on category, price range, and popularity.
    3. User Interface: Fully responsive design for all devices, intuitive navigation, and efficient search functionality.
    4. Styling and Design: Modern, visually appealing design with Tailwind CSS for a clean, responsive layout.`,
      imag:cafe
    },
    {
      id: 5,
  title: "Tournament Management System",
  description: `I developed a comprehensive Tournament Management System using React.js, showcasing my ability to create robust, user-centric applications. Key features include:

1. Dynamic Match Listings: Displays upcoming matches with real-time updates, including details like date, prizes, and contact information.
2. WhatsApp Integration: Direct contact option for organizers via WhatsApp for seamless communication.
3. Add Tournament Feature: An easy-to-use form for adding tournaments, with validation and smooth submission functionality.
4. Responsive UI: Fully optimized for all devices, ensuring a seamless experience on desktops, tablets, and mobiles.
5. Modern Design: Stylish interface crafted using Tailwind CSS, ensuring both functionality and aesthetic appeal.
6. Search and Filters: Quick search options and dynamic filters to find specific matches or tournaments efficiently.`,
      imag:sport
    },
    {
      id: 6,
      title:"Cars bidding Website",
      description:`CarsLelo is a full-stack web application designed to simplify car browsing, booking, and management.
The platform allows users to register, log in securely, view available cars, and perform booking-related operations, while administrators can manage cars, users, and system data efficiently.

The application follows a secure JWT-based authentication architecture and is built using Spring Boot for backend and React for frontend, ensuring scalability, security, and high performance.

🔹 Tech Stack

Backend: Java, Spring Boot, Spring Security, JWT

Frontend: React.js, Axios

Database: MySQL

ORM: Hibernate / JPA

Security: BCrypt Password Encoding, JWT Authentication

Tools: Postman, Git, Maven`,
      imag:carslelo
    }
    
    
  ];
  