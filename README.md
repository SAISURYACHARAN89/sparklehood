# AI Safety Incident Log Service

Github : "https://github.com/SAISURYACHARAN89/sparklehood"
A RESTful API service to log and manage hypothetical AI safety incidents.

## Features

- Log new AI safety incidents
- Retrieve all incidents or a specific incident by ID
- Delete incidents
- Basic validation for incident creation

## API Endpoints

- `GET /incidents` - Retrieve all incidents
- `POST /incidents` - Create a new incident
- `GET /incidents/:id` - Retrieve a specific incident
- `DELETE /incidents/:id` - Delete an incident

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm run dev` (development) or `npm run build && npm start` (production)

The database will be automatically initialized with sample data if empty.

## Environment Variables

- `PORT` - Port to run the server on (default: 3000)
