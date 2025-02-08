# Post-Set-Timer
A simple web-based timer application that starts immediately, allows setting a duration after starting.

## Features

- **Immediate Start:** The timer begins as soon as you click **Start Timer**.
- **Set Duration After Start:** Enter a desired duration (in seconds) after the timer has started.
- **Alarm Trigger:** The alarm sounds exactly when the elapsed time reaches the user-defined duration.
- **Reset Option:** Restart the timer at any moment with a single click of the **Reset Timer** button.

## Getting Started

### Live Demo

You can access the live version of this application here:  
👉 [Post-Set Timer on GitHub Pages](https://tohu-sand.github.io/Post-Set-Timer/)

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Safari).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/tohu-sand/Post-Set-Timer.git
   cd Post-Set-Timer
   ```

2. **Using the Alarm Sound:**

   - An `alarm.mp3` file is provided in the repository.
   - If you wish to modify the alarm sound, replace `alarm.mp3` with a different file of your choice.

3. **Run the Application:**

   Open the `index.html` file directly in your browser.

## Usage

1. **Start the Timer:**  
   Click the **Start Timer** button to begin time measurement immediately.

2. **Set the Duration:**  
   Enter the desired duration (in seconds) in the provided input field and click **Set Timer**.  
   The display will update to show either the elapsed time (if no duration is set) or the remaining time until the alarm.

3. **Alarm Notification:**  
   When the set duration has elapsed, an alarm sound will play and a "Time's Up!" message will appear.

4. **Reset the Timer:**  
   Click the **Reset Timer** button to clear the current session and reset the application to its initial state.

## Project Structure

- `index.html`: Main HTML file that contains the application structure and JavaScript.
- `README.md`: This documentation file.
- `alarm.mp3`: The default alarm sound file (users can replace or modify it).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
