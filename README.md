# ⏱️ Modern Stopwatch Application

A sleek, responsive stopwatch web application built with **HTML**, **CSS**, and **JavaScript**. Designed with attention to both **functionality** and **user experience**, it features a beautiful UI, lap tracking, and theme switching support.

---

## 🚀 Key Features

- ⏳ **Precise Time Tracking**: Hours, minutes, seconds, and centiseconds (`00:00:00.00`)
- 🎮 **Core Controls**: Start, Stop, Reset
- 🏁 **Lap Recording**: Record multiple laps with timestamp display
- 🌗 **Theme Switching**: Toggle between Light & Dark modes with saved preferences
- 📱 **Responsive Design**: Mobile-friendly and adaptive layout

---

## 🛠️ Tech Stack

- **HTML5** – semantic structure & accessibility
- **CSS3** – modern styling with animations, themes, and responsiveness
- **JavaScript (Vanilla)** – precise timer logic and DOM manipulation

---

## 🧩 Technical Highlights

### 📄 HTML
- Semantic elements for structure and accessibility
- Theme toggle and lap list placed outside main timer block
- Integration of Google Fonts (Inter)

### 🎨 CSS
- CSS variables for dynamic theming
- Soft gradients and button ripple effects
- Responsive with fluid typography and spacing
- Dark/light mode support with custom scrollbar styles
- Animations: shimmer on timer, button transitions

### 🧠 JavaScript
- `setInterval`-based timer updating every 10ms
- Accurate time calculation and formatting
- Event listeners for Start, Stop, Reset, Lap, Theme toggle
- Lap list dynamically rendered with most recent on top
- Theme preference stored in `localStorage` for persistence

---

## 🎯 User Experience

- 💬 Visual feedback on every action
- 🎨 Smooth theme transitions
- 🆕 Newest laps shown first
- 🔲 Monospaced digits for consistent display
- 🧩 Intuitive button coloring: Blue (Start), Red (Stop), Gray (Reset)
- ♿ Accessibility in color contrast and touch size

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/stopwatch-app.git
