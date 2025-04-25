# CloudDigify

CloudDigify is a comprehensive cloud consulting website built with React and Vite. The site showcases cloud services including DevOps, Cloud Migration, Infrastructure as Code, Managed Services, Architecture Design, and Security & Compliance.

## Live Site

The site is deployed at [https://clouddigify.com](https://clouddigify.com)

## Features

- Responsive design using TailwindCSS
- Animated page transitions with Framer Motion
- Client-side routing with React Router
- Comprehensive service pages for all cloud offerings
- Contact form with input validation
- About page with team information
- Secure deployment with proper headers and CSP

## Local Development

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/clouddigify.git
cd clouddigify
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Project Structure

```
CloudDigify/
├── public/               # Static files
├── src/
│   ├── components/       # React components
│   │   ├── pages/        # Page components
│   │   │   ├── services/ # Service page components
│   │   │   └── legal/    # Legal page components
│   │   └── sections/     # Reusable section components
│   ├── App.jsx           # Main app component with routing
│   └── main.jsx          # Entry point
├── .env.production       # Production environment variables
├── vercel.json           # Vercel deployment configuration
├── vite.config.js        # Vite configuration
├── DEPLOYMENT.md         # Detailed deployment guide
└── README.md             # This file
```

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `dist/` directory.

## Deployment

This site is configured for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions including:

- GitHub repository setup
- Vercel deployment process
- Custom domain configuration with Hostinger
- Troubleshooting URL restriction issues

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components

## Browser Support

The site is optimized for modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](LICENSE)

## Contact

For questions about the codebase, please contact [your-email@example.com](mailto:your-email@example.com). 
