# GitHub Explorer

A modern React application for exploring GitHub users and repositories. Built with TypeScript, Vite, and TanStack Query for optimal performance and developer experience.

## ✨ Features

- **User Search**: Search for GitHub users with real-time suggestions
- **User Profiles**: View detailed user information including bio, stats, and location
- **Repository Explorer**: Browse user repositories with sorting and filtering
- **Favorites**: Save and manage favorite users for quick access
- **Responsive Design**: Fully responsive UI that works on all devices
- **Dark/Light Theme**: Theme switching support
- **Internationalization**: Multi-language support with next-intl
- **Error Handling**: Comprehensive error states and loading indicators

## 🚀 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **UI Components**: Custom component library with Radix UI primitives
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Testing**: Vitest + React Testing Library
- **E2E Testing**: Cypress
- **Code Quality**: ESLint + TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd github-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Run tests with Vitest UI
- `npm run cypress:open` - Open Cypress for e2e testing
- `npm run cypress:run` - Run Cypress tests headlessly

## 🧪 Testing

This project maintains high code quality with comprehensive testing:

### Unit Tests
- **Framework**: Vitest + React Testing Library
- **Coverage Target**: 80%
- **Test Types**: Component tests, hook tests, utility tests, service tests

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

### E2E Tests
- **Framework**: Cypress
- **Coverage**: Critical user journeys

```bash
# Open Cypress Test Runner
npm run cypress:open

# Run tests headlessly
npm run cypress:run
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, Card, etc.)
│   └── feature/        # Feature-specific components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API services
├── contexts/           # React contexts
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global styles and Tailwind config
└── test/               # Test utilities and setup
```

## 🎨 Design System

The application features a custom design system built with Tailwind CSS:

- **Typography**: Consistent text scales and weights
- **Colors**: Carefully crafted color palette with dark/light theme support
- **Components**: Reusable UI components with consistent styling
- **Spacing**: Systematic spacing scale
- **Responsive**: Mobile-first responsive design

## 🌍 Internationalization

The app supports multiple languages using next-intl:

- English (default)
- Easy to add more languages by extending the messages files

## 🔧 Configuration

### Vite Configuration
- TypeScript support
- Path aliases for clean imports
- Optimized build configuration

### ESLint Configuration
- TypeScript-aware rules
- React-specific linting
- Import organization rules

### Tailwind Configuration
- Custom color palette
- Typography plugin
- Component utilities

## 📈 Performance

- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Components and routes loaded on demand
- **Caching**: Intelligent caching with TanStack Query
- **Bundle Optimization**: Tree-shaking and minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Write tests for new features
- Follow the existing code style
- Update documentation as needed
- Ensure all tests pass before submitting PR

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub API for providing the data
- React and Vite communities for excellent tooling
- All open-source contributors who made this project possible
