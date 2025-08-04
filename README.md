
# Game  Manager

A simple web application for managing and playing online games. Users can add, view, edit, and delete game links, which can then be played directly within the site using an embedded iframe.

## Features

- **Add Game Links**: Submit any game URL to the collection
- **Play Games Instantly**: Embedded iframe player for immediate gameplay
- **Full CRUD Functionality**: Create, Read, Update, and Delete game entries
- **Simple Interface**: Clean, straightforward design for easy use
- **MongoDB Backend**: Persistent storage for all game entries

## Technologies Used

- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Embedding**: iframe for game playback

## Getting Started



### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/gamelink-manager.git
   cd gamelink-manager
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up your environment:
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. Start the application:
   ```sh
   npm start
   ```

5. Open your browser to:
   ```
   http://localhost:3000
   ```

## Usage

1. **Adding a Game**:
   - Click "add new game"
   - Enter the game's name and URL
   - Submit the form

2. **Playing Games**:
   - Browse the list of games(if you want there random game link)
   - Click on the game name to open the game 
  
3. **Managing Games**:
   - Use the edit limk to update game details
   - Use the delete button to remove games


## Contact


- Hassan Abbas - 


