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
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. Install frontend dependencies:

    ```bash
    cd assets
    npm install
    ```

### Setup

1. Create a `.env` file in the `app` directory with the following content:

    ```env
    SPOTIFY_CLIENT_ID=your_spotify_client_id
    SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    SPOTIFY_REDIRECT_URI=your_spotify_redirect_uri
    SECRET_KEY=your_flask_secret_key
    ```

2. Run the backend server:

    ```bash
    cd app
    flask run
    ```

3. Run the frontend build:

    ```bash
    cd assets
    npm run build
    ```

### Usage

- deployed at (nostalgiwrap-cce5d36cb37f.herokuapp.com)
- Open your browser and navigate to `http://localhost:5000`.
- Login with your Spotify account.
- Select the time range (4 weeks, 6 months, all time) to view your top tracks, artists, and genres.
- Click on "Save as Playlist" to create a playlist of your top tracks.

## Project Structure

```plaintext
nostalgiwrap/
├── AUTHORS
├── Procfile
├── README.md
├── app/
│   ├── __pycache__/
│   ├── asset.py
│   ├── run.py
│   ├── static/
│   │   ├── dist/
│   │   ├── images/
│   │   ├── scripts/
│   │   └── videos/
│   └── templates/
├── assets/
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   ├── src/
│   │   ├── fonts/
│   │   ├── images/
│   │   ├── index.js
│   │   ├── styles/
│   │   └── video.js
│   └── webpack.config.js
├── filestructure.txt
├── requirements.txt
└── venv/