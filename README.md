# NostalgiWrap

NostalgiWrap is a web application that recaps your top tracks, artists, and genres from Spotify over different time ranges (short-term, medium-term, and long-term). It provides a nostalgic and engaging way to revisit your favorite music and save them as playlists.

## Features

- Display top tracks, artists, and genres with visual effects.
- Create a playlist from your top tracks.
- Different display effects based on the selected time range.
- Integration with Spotify API for fetching user data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React
- **Backend**: Flask (Python)
- **Styling**: Bootstrap

## Getting Started

### Prerequisites

- Node.js and npm
- Python 3.x
- Spotify Developer Account

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nostalgiwrap.git
    cd nostalgiwrap
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. Install frontend dependencies:

    ```bash
    cd frontend
    npm install
    ```

### Setup

1. Create a `.env` file in the `backend` directory with the following content:

    ```env
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    SPOTIFY_REDIRECT_URI=your_spotify_redirect_uri
    SECRET_KEY=your_flask_secret_key
    ```

2. Run the backend server:

    ```bash
    cd backend
    flask run
    ```

3. Run the frontend development server:

    ```bash
    cd frontend
    npm start
    ```

### Usage

- Open your browser and navigate to `http://localhost:3000`.
- Login with your Spotify account.
- Select the time range (4 weeks, 6 months, all time) to view your top tracks, artists, and genres.
- Click on "Save as Playlist" to create a playlist of your top tracks.

## Project Structure

```plaintext
nostalgiwrap/
│
├── backend/                 # Flask backend
│   ├── app.py               # Main application file
│   ├── requirements.txt     # Backend dependencies
│   └── .env                 # Environment variables
│
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js           # Main app component
│   │   ├── index.js         # Entry point
│   │   └── ...              # Other files
│   ├── public/
│   ├── package.json         # Frontend dependencies
│   └── ...                  # Other configuration files
│
└── README.md                # This file
