# JobHub - Job Portal Website

A fully responsive, visually stunning job portal that provides updates on government jobs, private jobs, hackathons, results, admit cards, syllabus, and applications.

## Features

- **Modern Design**: Mint Whisper & Dark Mustard color scheme with professional yet engaging design
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Dynamic Notification Banner**: Real-time updates for urgent job/hackathon notifications
- **Advanced Search**: Smart autocomplete and filtering options
- **Interactive UI**: Enhanced hover effects, smooth transitions, and 3D elements
- **Comprehensive Job Listings**: Structured job posts with eligibility, salary, location, and apply links
- **Hackathon Section**: Detailed hackathon listings with themes, deadlines, prizes, and registration links
- **Results & Admit Cards**: Downloadable results and admit cards with notification system
- **Syllabus & Exam Prep**: Section-wise syllabus and downloadable PDFs
- **Subscription System**: Email alerts for new opportunities

## Technology Stack

- React.js
- React Router for navigation
- Styled Components for styling
- Font Awesome for icons
- Modern JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Vishal141014/Job-and-Hackathons-Portal-.git
   cd job-portal
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
job-portal/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── JobCard.js
│   │   ├── HackathonCard.js
│   │   ├── ResultCard.js
│   │   ├── SyllabusSection.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── GovtJobsPage.js
│   │   ├── PrivateJobsPage.js
│   │   ├── HackathonsPage.js
│   │   ├── ResultsPage.js
│   │   ├── AdmitCardsPage.js
│   │   └── SyllabusPage.js
│   ├── assets/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   ├── index.css
│   └── script.js
└── package.json
```

## Customization

- **Colors**: Edit the CSS variables in `src/index.css` to change the color scheme
- **Content**: Update the sample data in each component to reflect your actual job listings and information
- **Images**: Replace placeholder images with your own in the components

## Deployment

To build the project for production:

```
npm run build
```

This will create a `build` directory with optimized production files that can be deployed to any static hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Placeholder.com for placeholder images during development 