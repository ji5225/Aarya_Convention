# Aarya Convention - Premium Event Venue

## 📌 Project Overview
Aarya Convention is a modern, responsive website for a premium event venue and convention center. The website showcases the venue's facilities, services, and provides a seamless booking experience for potential clients.

## 🚀 Features
- **Responsive Design**: Works on all devices
- **Interactive Gallery**: Showcases venue spaces and past events
- **Service Showcase**: Detailed service information with modal popups
- **Booking System**: Integrated event booking form
- **Virtual Tour**: Interactive video section
- **Animations**: Smooth scroll and hover effects
- **Contact Form**: Easy communication with the venue

## 🛠️ Tech Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome
- **Hosting**: Static website (compatible with Netlify, Vercel, etc.)

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code, Sublime Text, etc.)
- Node.js (optional, for local development server)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aarya-convention.git
   cd aarya-convention
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   npx serve .
   ```
   Then open http://localhost:3000 in your browser.

## 🏗️ Project Structure
```
aarya-convention/
├── assets/
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── images/                 # All website images
│   ├── js/
│   │   └── script.js           # Main JavaScript file
│   └── logo/                   # Logo files
├── index.html                  # Homepage
├── gallery.html               # Gallery page
└── README.md                  # This file
```

## 📝 Code Documentation

### JavaScript Architecture

#### 1. Navigation
- **File**: `script.js`
- **Functionality**:
  - Smooth scrolling to sections
  - Mobile menu toggle
  - Navbar scroll effects

#### 2. Animations
- **Implementation**: Intersection Observer API
- **Features**:
  - Fade-in animations on scroll
  - Staggered animations for lists
  - Parallax effects on background images

#### 3. Service Popup System
```javascript
// Service data structure
const serviceData = {
    'service_id': {
        description: 'Service description',
        gallery: ['image1.jpg', 'image2.jpg']
    }
};
```

#### 4. Form Handling
- **Features**:
  - Client-side validation
  - Form submission handling
  - Success/error feedback

### CSS Architecture
- **BEM Methodology**: Used for class naming
- **Responsive Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## 🎨 Styling Guidelines
1. **Color Scheme**:
   - Primary: #1a365d (Navy Blue)
   - Secondary: #c53030 (Red)
   - Accent: #ecc94b (Gold)
   - Text: #2d3748 (Dark Gray)
   - Background: #f7fafc (Light Gray)

2. **Typography**:
   - Headings: 'Adam', sans-serif
   - Body: 'Roboto', sans-serif

## 🔧 Maintenance

### Adding New Services
1. Add service HTML in `index.html`
2. Update service data in `script.js`
3. Add corresponding images to `assets/images/`

### Updating Gallery
1. Add new images to `assets/images/gallery/`
2. Update gallery section in `gallery.html`

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact
For any queries, please contact:
- Email: mr.jeai5225@gmail.com