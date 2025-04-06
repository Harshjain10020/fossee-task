# fossee-task
# Aurora Theme for Drupal 10

A custom responsive Drupal 10 theme featuring a clean, modern design with configurable regions and Tailwind CSS integration.

## Overview

Aurora is a fully responsive Drupal 10 theme that provides:
- 6 customizable regions (Top Banner, Logo, Navigation Menu, Left Sidebar, Content, Footer)
- Integration with Tailwind CSS
- Custom Twig templates for page layout and navigation
- Mobile-friendly responsive design

## Installation

### Prerequisites
- Drupal 10.x installation
- Composer (for dependency management)
- Admin access to your Drupal site

### Installation Steps

1. Clone this repository into your Drupal installation's themes directory:
   ```bash
   cd /path/to/drupal/themes/custom/
   git clone https://github.com/yourusername/aurora-theme.git aurora
   ```

2. Navigate to your Drupal administration panel
   - Go to Appearance (/admin/appearance)
   - Find "Aurora" in the list of themes
   - Click "Install and set as default"

3. Configure blocks for each theme region:
   - Go to Structure > Block layout (/admin/structure/block)
   - Configure blocks for: Top Banner, Logo, Navigation Menu, Left Sidebar, Content, and Footer

## Theme Structure

```
aurora/
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── images/                 # Theme images
├── templates/              # Twig templates
│   ├── layout/
│   │   └── page.html.twig  # Main page template
│   ├── block/
│   │   └── block.html.twig # Block template
│   └── navigation/
│       └── menu--main.html.twig # Main menu template
├── aurora.info.yml         # Theme information
├── aurora.libraries.yml    # Asset libraries definition
└── aurora.theme            # PHP functions
```

## Customizations

### Regions

The theme defines the following regions:
- **Top Banner**: For site-wide announcements or headers
- **Logo**: For site branding elements
- **Navigation Menu**: For primary navigation
- **Left Sidebar**: For supplementary content and navigation
- **Content**: For main page content
- **Footer**: For footer content and site information

### Styling

- The theme uses a combination of custom CSS and Tailwind utility classes
- The color scheme features blue highlights with neutral backgrounds
- Responsive breakpoints ensure proper display on all devices

### Template Overrides

The theme includes custom templates for:
- Page layout (page.html.twig)
- Blocks (block.html.twig)
- Main menu (menu--main.html.twig)

## Development

### Prerequisites for Theme Development
- Node.js and npm (for frontend tooling if extending)
- Basic knowledge of Twig, CSS, and Drupal theming

### Making Changes

1. Modify CSS in the `css/style.css` file
2. Adjust templates in the `templates/` directory
3. Add custom PHP functions in `aurora.theme` file
4. Update theme metadata in `aurora.info.yml` if needed

## Browser Support

The theme has been tested and optimized for:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

## License

This theme is provided under the [MIT License](LICENSE).

## Credits

Developed by Harsh Jain  for the FOSSEE project.
