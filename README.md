# IIS Portal Prototype

A clickable prototype for the BC Government Identity Integration Service (IIS) portal. This application provides a single platform for BC government teams to integrate with identity providers and manage authentication services.

## Project Overview

This is an interactive prototype that demonstrates the user experience for:
- **Client Teams**: Request and manage identity service integrations
- **Administrators**: Review and approve integration requests
- **General Users**: Learn about available identity services

## Features

### Core Functionality
- 🔐 Integration request wizard with intelligent routing
- 📊 Client dashboard for managing integrations
- ⚙️ Admin dashboard for approving requests
- 💾 LocalStorage-based data persistence
- 🔄 Full CRUD operations (Create, Read, Update, Delete)
- 🎨 BC Government design system integration

### Interactive Elements
- Functional approval/rejection workflows
- Interactive resource dialogs (docs, API reference, guides)
- Breadcrumb navigation
- Loading and empty states
- Toast notifications for user feedback
- Status badges and visual indicators

### Identity Providers Supported
- BC Services Card
- BCeID (Basic and Business)
- IDIR

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn-ui** - Component library
- **Radix UI** - Accessible primitives
- **Tailwind CSS** - Utility-first styling
- **BC Design System** - BC Government branding

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Recommended: [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for Node version management

### Installation

```sh

# Clone the repository
git clone https://github.com/bcgov/iis-portal-prototype.git

# Navigate to the project directory
cd iis-portal-prototype

# Install dependencies
npm install
```

### Development

```sh
# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080/`

### Build

```sh
# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview
```

### Linting

```sh
# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components
│   ├── wizard/         # Integration wizard components
│   ├── BCHeader.tsx    # BC Government header
│   ├── Breadcrumbs.tsx # Navigation breadcrumbs
│   ├── ResourceDialog.tsx # Modal dialogs
│   └── StatusBadge.tsx # Status indicators
├── data/
│   └── mockData.ts     # Centralized mock data
├── hooks/
│   ├── use-mobile.tsx  # Mobile detection
│   ├── use-toast.ts    # Toast notifications
│   └── useIntegrations.ts # Integration state management
├── lib/
│   └── utils.ts        # Utility functions
├── pages/              # Route pages
│   ├── Index.tsx       # Landing page
│   ├── Login.tsx       # Login page
│   ├── ClientDashboard.tsx    # Client dashboard
│   ├── AdminDashboard.tsx     # Admin dashboard
│   ├── NewIntegration.tsx     # Create integration
│   ├── EditIntegration.tsx    # Edit integration
│   ├── IntegrationDetails.tsx # View integration
│   └── NotFound.tsx    # 404 page
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Using the Prototype

### As a Client Team

1. Navigate to the **Client Dashboard** (`/client`)
2. Click **"Request New Integration"**
3. Complete the wizard:
   - Provide project information
   - Define technical requirements
   - Review recommended solution
   - Configure environments
   - Submit request
4. View your integrations in the dashboard
5. Edit or delete integrations as needed

### As an Administrator

1. Navigate to the **Admin Dashboard** (`/admin`)
2. Review pending integration requests
3. Click **"Approve"** or **"Reject"** for each request
4. View system statistics and recent activity

### Exploring Resources

- Click footer links to view documentation dialogs
- Use Quick Actions in the Client Dashboard
- Navigate with breadcrumbs on detail pages

## Data Persistence

This prototype uses **localStorage** to persist data between sessions:

All integrations are stored locally in your browser
- Create, edit, and delete operations are saved automatically
- Data survives page refreshes and browser restarts
- Clear browser data to reset the prototype

**Note**: This is a prototype with no backend. All data is client-side only.

## Deployment

### GitHub Pages

This project is configured to deploy to GitHub Pages:

```sh
# Build and deploy (if you have write access)
npm run build
# Manually deploy the dist/ folder to gh-pages branch
```

The production build includes the proper base path for GitHub Pages (`/iis-portal-prototype/`).

### Other Platforms

You can deploy to any static hosting service:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps

Just run `npm run build` and deploy the `dist/` folder.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

Requires localStorage support.

## Limitations (By Design)

This is a clickable prototype, not a production application:

- ❌ No backend API or database
- ❌ No real authentication (login page is cosmetic)
- ❌ No actual identity provider integrations
- ❌ Limited form validation
- ❌ Mock metrics and statistics
- ✅ All data stored in browser localStorage
- ✅ Perfect for stakeholder demonstrations

## Contributing

This is a prototype for demonstration purposes. For contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## Resources

- [BC Design System](https://developer.gov.bc.ca/Design-System/About-the-Design-System)
- [shadcn-ui Documentation](https://ui.shadcn.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

---

**Status**: Active Prototype
**Last Updated**: October 2025
**Maintained By**: Cybersecurity and Digital Trust, CITZ
