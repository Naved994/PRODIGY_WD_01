# Interactive Navigation Menu

A modern, responsive navigation menu with scroll-based styling and smooth interactions.

## Screenshots

### Home Section
![Home Section](screenshots/home.png)
*Welcome section with modern gradient navigation*

### About Section
![About Section](screenshots/about.png)
*About section showcasing skills and experience*

### Work Section
![Work Section](screenshots/work.png)
*Portfolio section displaying development and design services*

### Contact Section
![Contact Section](screenshots/contact.png)
*Contact information with elegant layout*

## Features

- Fixed navigation bar that changes style on scroll
- Smooth color transitions and modern gradient background
- Interactive hover effects on menu items
- Fully responsive layout for all devices
- Clean and modern card-based design
- Organized sections: Home, About, Work, and Contact

## Technologies Used

- HTML5 - Semantic markup and modern structure
- CSS3 - Advanced styling with flexbox, grid, and animations
- JavaScript (Vanilla) - Smooth scroll behavior and dynamic effects
- Font Awesome - Icons for enhanced visual appeal
- Google Fonts (Poppins) - Modern typography

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Naved994/Task-1.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-1
   ```
3. Open `index.html` in your web browser

## Project Structure

```
Task-1/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js          # JavaScript functionality
├── screenshots/       # Project screenshots
└── README.md         # Project documentation
```

## Usage

The navigation bar will automatically:
- Change background from dark to light when scrolling down
- Add shadow effect when scrolled
- Show hover effects on menu items
- Navigate to respective sections when clicking menu items

## Key Features Implementation

### Navigation
- Fixed position navbar with gradient background
- Smooth transition effects on scroll
- Responsive menu items with icons
- Dynamic hover effects

### Sections
- **Home**: Modern welcome message with call-to-action
- **About**: Skills showcase with interactive tags
- **Work**: Service cards with hover effects
- **Contact**: Clean contact information layout

## Customization

You can customize the appearance by modifying the following in `styles.css`:

### Colors
```css
:root {
  --primary-color: #2b4c7e;
  --secondary-color: #567ebd;
  --text-color: #2c3e50;
}
```

### Animations
```css
/* Adjust transition timing */
.nav-link {
  transition: all 0.3s ease;
}

/* Modify hover effects */
.service-card:hover {
  transform: translateY(-5px);
}
```

### Layout
- Modify `max-width` values for different section sizes
- Adjust `padding` and `margin` for spacing
- Change `grid-template-columns` for different layouts

## License

MIT License

Copyright (c) 2025 Sayed Naved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.
