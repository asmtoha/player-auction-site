# Player Auction Site

A React-based web application for managing player auctions and team information. This application allows users to view player details, manage team information, and participate in player auctions.

## Features

- Player cards with detailed information
- Team information management
- Responsive design with Bootstrap
- Modern UI with Font Awesome icons
- Player auction functionality

## Tech Stack

- React 17.0.1
- Bootstrap 4.6.0
- Font Awesome Icons
- React Testing Library
- Jest

## Project Structure

```
src/
├── components/
│   ├── Header/         # Navigation and header components
│   ├── PlayerCard/     # Individual player card components
│   ├── PlayersContainer/ # Container for player cards
│   └── TeamInfo/       # Team information components
├── fakeData/           # Mock data for development
├── images/             # Image assets
└── public/             # Static files
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Testing

The project uses Jest and React Testing Library for testing. Run tests with:
```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
