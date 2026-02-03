# Travel Itinerary AI

Smart, personalized travel itineraries generated with AI.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](#license)
[![Status](https://img.shields.io/badge/status-beta-yellow.svg)](#features)
[![Tech stack](https://img.shields.io/badge/tech-AI%20%7C%20Node%2FNext%2FPython-lightgrey.svg)](#built-with)

Screenshot:(<<img width="1870" height="816" alt="Screenshot 2026-02-03 194645" src="https://github.com/user-attachments/assets/d49f3649-e35e-43fb-b80a-3c7565786199" />
>)

---

Table of contents
- [About](#about)
- [Features](#features)
- [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Environment Variables](#environment-variables)
  - [Run Locally](#run-locally)
- [Usage](#usage)
  - [Web UI](#web-ui)
  - [API Examples](#api-examples)
- [Configuration & Customization](#configuration--customization)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

---

## About

Travel Itinerary AI helps travelers create optimized, day-by-day travel plans based on preferences (budget, pace, interests, accessibility), time, and destination. The app uses an AI service to generate itineraries and enrich them with points of interest, transportation suggestions, and estimated budgets.

Use cases:
- Quick trip planning
- Custom itineraries for different traveler types (families, solo, business)
- Exportable plans (PDF/CSV) for travelers or travel agents

---

## Features

- Generate multi-day itineraries from a destination and trip parameters
- Personalization options: travel pace, interests, budget, accessibility
- Suggestions for activities, restaurants, transport, and lodging
- Save, edit, and export itineraries
- Optional integration with map services and booking links
- Rate-limited, auditable AI calls with caching for repeated requests

---

## Built with

- AI provider: OpenAI / (replace with your provider)
- Backend: Node.js / Express or Python / FastAPI (replace as appropriate)
- Frontend: React / Next.js / Vue (replace as appropriate)
- Database: PostgreSQL / MongoDB / SQLite (replace as appropriate)
- Deployment: Vercel / Netlify / Docker / Heroku (replace as appropriate)

---

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js >= 16 (if using Node stack)
- npm or yarn
- Python 3.8+ (if parts are Python)
- Docker (optional, for containerized development)
- An API key for your AI provider (e.g., OpenAI)

### Install

Clone the repo:
```bash
git clone https://github.com/aswinr05/travel-itinerary-ai.git
cd travel-itinerary-ai
```

Install dependencies (example for Node):
```bash
# using npm
npm install

# or using yarn
yarn install
```

### Environment Variables

Create a `.env` in the project root and set the required variables. Example:
```bash
# Server / backend
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/travelit

# AI provider
OPENAI_API_KEY=sk-xxxxx

# Optional mapping / third-party APIs
MAPS_API_KEY=xxxx
SENTRY_DSN=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Keep secrets out of version control. Use `.env.local` / secret management for production.

### Run Locally

Start the backend:
```bash
# Example Node.js
npm run dev
# or
yarn dev
```

Start the frontend (if separate):
```bash
cd frontend
npm run dev
```

Open http://localhost:3000 in your browser (adjust port if needed).

---

## Usage

### Web UI

- Open the app
- Enter destination, dates, and preferences
- Click "Generate itinerary"
- Review, edit, and save or export

### API Examples

Generate itinerary (example HTTP request):
```bash
curl -X POST "http://localhost:3000/api/itineraries" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $SERVER_API_KEY" \
  -d '{
    "destination": "Barcelona, Spain",
    "start_date": "2026-05-10",
    "end_date": "2026-05-14",
    "preferences": {
      "interests": ["architecture", "food"],
      "budget": "moderate",
      "pace": "relaxed"
    },
    "traveler_count": 2
  }'
```

Response (example):
```json
{
  "id": "itinerary_123",
  "destination": "Barcelona, Spain",
  "days": [
    {
      "date": "2026-05-10",
      "plans": [
        { "time": "09:00", "activity": "Sagrada Familia - guided tour", "duration": "2h" },
        { "time": "12:00", "activity": "Lunch - tapas at [restaurant]" }
      ]
    }
  ],
  "estimated_cost": 420
}
```

Notes:
- Rate-limit the AI provider calls and cache repeated prompts
- Include user-visible explanations about AI-generated content and provide an edit workflow

---

## Configuration & Customization

- Prompt engineering: tune prompts in the backend to change itinerary style
- Add new activity sources: integrate with local tourism APIs or custom POI datasets
- Map integration: add interactive maps using Mapbox or Google Maps
- Export formats: PDF (Puppeteer), CSV/ICS calendar export

---

## Testing

Run unit and integration tests:
```bash
# Example
npm test

# or
yarn test
```

For end-to-end tests, configure test DB and credentials, then:
```bash
npm run e2e
```

---

## Deployment

Recommended options:
- Vercel / Netlify for frontend (if Next.js/React)
- Docker Compose for full stack
- Use CI/CD (GitHub Actions) to run tests and push to production

Example Docker run (replace with your compose file):
```bash
docker build -t travel-itinerary-ai .
docker run -e OPENAI_API_KEY=$OPENAI_API_KEY -p 3000:3000 travel-itinerary-ai
```

Add production secrets using your provider's secret manager or environment variables.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request describing your change

Please read [CONTRIBUTING.md](CONTRIBUTING.md) (add this file) for detailed guidelines and the code of conduct.

---

## Security

If you discover a security vulnerability, please responsibly disclose it by opening a private issue or contacting the maintainer at <aswinr22052004@gmail.com>. Do not create a public issue for security vulnerabilities.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- Built using [OpenAI](https://openai.com) (or your AI provider)
- Icons and UI inspiration from [Heroicons](https://heroicons.com) / [Tailwind UI](https://tailwindui.com)
- Thanks to contributors and early testers

---

## Contact

Repo: [aswinr05/travel-itinerary-ai](https://github.com/aswinr05/travel-itinerary-ai)

Maintainer: aswinr05 — <aswinr22052004@gmail.com>

Website: https://your-website.example

