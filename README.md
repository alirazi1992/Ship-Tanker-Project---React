# 🚢 Ship Fuel Pro 

**Ship Fuel Pro** is a futuristic fuel monitoring and trasnfer managment interface designed for maritime operations. Built with **React.js** and **Tailwind.CSS**, this intreactive dashboard allows ship operators to monitor tanker fuel levels, switch power modes, and perform fuel transfers with a sleek, interactive UI, and visualize fuel with pie charts.

----

## ✨ Features

  - **Real-Time Fuel Monitoring**
    Circular fuel gauges to visualzie tanker levels at a glance.
  -  **Fuel Trasfer Functionality**
    Transfer fuel between tankers using a secure and intutive form.
  - **Engine Mode Switching**
    Support for multiple engine modes: Diesel, Hybride, Electrical, and Gas Turbine.
  - **Animated UI**
      Responsive design with glowing neon-styled fuel meters and cards.

  ----
  ## ⚙️ Tech Stack 
  
  - **Frontend**: React.js, Tailwind CSS
  - **Visualization**: react-circular-progressbar
  - **Tooling**: Vite, ESLint, Prettier

----

## 🚀 Getting Started 
### Prerequisites

Ensure you have the following installed:

```bash
node >= 18
npm >= 9

```

## 📌 Project Summary (Progress So Far)

As of today, the following features have been implemented:

  - Craeted a clean dashboard layout using **Tailwind CSS**
  - Developed **TankerCard** components with animated circular fuel meters
  - Integrated **TransferFuelForm** for handling fuel transfer between tankers
  - Added support for diffrent **engine modes** (Diesel. Hybride, Electrical, Gas Turbine)
  - Connected state updates for tanker fuel levels using React's `useSatete`
  - Designed with a **darkk-glow futuristic UI**, inspired by marine control systems
    This is a MVP (Minimum Viable Product) protype that will continue to grow with real-time data sources and backend integration.
----

## 📅 Progress Summary

Here’s a timeline of the key development milestones we've completed together:

| ✅ Date         | Feature/Update                                                                 |
|----------------|---------------------------------------------------------------------------------|
| **June 9**     | ✅ Project created with `npm create vite@latest`, initial setup done in VSCode  |
| **June 9**     | ✅ Tailwind CSS configured and working (fixed at-rule and typo issues)          |
| **June 10**    | ✅ Developed `TankerCard` component with **circular fuel meters**               |
| **June 10**    | ✅ Designed `TransferFuelForm` for **fuel transfer between tankers**            |
| **June 10**    | ✅ Set up app layout with a functional **Dashboard** and working `App.jsx`      |
| **June 10**    | ✅ Added engine modes (Diesel, Hybrid, Electric, Gas Turbine)                   |
| **June 10**    | ✅ Fixed UI glitches (e.g., meter size, spacing, and select box design)         |
| **June 10**    | ✅ Solved broken imports and build issues with `react-circular-progressbar`     |
| **June 11**    | ✅ Final styling improvements: dark theme, glowing components, and layout fix   |


## 🧭 Key Components

### 💡 `TankerCard.jsx`
- Visual card with:
  - Animated fuel meter
  - Engine mode label
  - Transfer form toggle
- Responsive and styled using Tailwind + circular progress

### 🔁 `TransferFuelForm.jsx`
- Allows selecting a target tanker and inputting transfer amount
- Validates that amount is > 0 and destination ≠ source
- Resets after submission

### 📊 `Dashboard.jsx`
- Central logic for managing all tankers (`useState`)
- Distributes tanker props to cards
- Handles the fuel transfer logic

---

##  🗂️ Porject Structure

Here is a bearkdown of the current file structure and what each part does:

ship-fuel-pro


├── public/ # Static assets (e.g., favicon, index.html)

├── src/

│ ├── components/
 
│ ├── TankerCard.jsx # UI card for individual tankers with circular progress fuel meter

│ ├── TransferFuelForm.jsx # Form to transfer fuel between tankers with validation
 
│ └── ... # Additional components in progress

│ ├── App.jsx # Main application entry (state management, renders dashboard)

│ ├── main.jsx # Vite root rendering point

│ ├── index.css # Tailwind base styles, theme extensions

│ └── tailwind.config.js # Tailwind custom configuration (colors, fonts, etc.)

├── package.json # Project dependencies and scripts

├── vite.config.js # Vite configuration

└── README.md # You're reading it!

## Tech Stack 

  - **Frontend**: React.js
  - **Styling**: Tailwind CSS
  - **Visualization**: `react-circular-progressbar`
  - **Bundler** : Vite.js
  - **Design Style**: Futuristic UI with glowing effects
---

## Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/ship-fuel-pro.git
cd ship-fuel-pro
```
2. **Installation dependencies:**
   ```bash
   npm install
   ```
3. **Run the App:**
   ```bash
   npm run dev
   ```
4. **View in Browser:**
   ```bash
   Visit http://localhost:5173
   ```


## ✨ Features (MVP Done)

  - 🔋 Live Fuel Levels with Animated Meters

  - 🔄 Fuel Transfer Between Tankers

  - 🛠️ Engine Mode Switching Display (Diesel, Hybrid, Electric, Gas Turbine)

  - 🧭 Fixed navigation bar (Navbar.jsx)

  - 🌌 Glowing Dark UI for Marine Applications

  - ✅ Custom Themed Select Boxes & Buttons

  - 💬 Fully Component-Based Architecture
    
  - 🧪 Live Vite dev server with hot reload

  - ✅ Tailwind-based styling and theme configuration

----


   ## 🚧 Planned Features
   
  - Real-time data sync from a backend

  - Responsive layout for mobile control panels

  - Historical fuel usage analytics

  - Alerts and notifications for low fuel levels

  - Map-based visualization of tanker positions

  - Integration with engine sensors and external APIs


## 🖼️ Screenshots** (To Be Added Soon)
You can capture the following:

Dashboard view with all tankers

Fuel transfer in action

Night-mode fuel meter glowing

![Dashboard Screenshot](/Users/alirazi/Desktop/Screenshot 2025-06-29 at 12.34.49 PM)


## 🧠 Developer Notes

- Use `components/` folder for all modular UI elements
- Tailwind utility-first classes power all designs
- Recharts PieChart is used for fuel visuals
- To modify initial values, see `Dashboard.jsx`


## 🤝 Contributing 

Feel free to fork the repo and submit PRs or raise issues for any suggastions.


## 📬  Contact
For questions or collaboration opportunities:

**📧 Email:** ali.razi9292@gmail.com

**🔗 LinkedIn:** linkedin.com/in/alirazi1992





