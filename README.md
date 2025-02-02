# 🤖 Chatbot Integration Platform  

A **React-based** web application designed to help users seamlessly integrate a chatbot into their website. 🌐  
This platform enables **authentication**, **company setup**, **chatbot testing & training**, and **successful integration confirmation** with a **scraping status dashboard** and **confetti celebrations**! 🎉  

---

## 🚀 Features  

- **🔐 User Authentication**: Sign up and log in using **email/password** or **Google authentication**.  
- **🏢 Company Setup**: Input company details, including name, website URL, and description.  
- **📊 Scraping Status Dashboard**: Monitor the **scraping process** of website pages used for chatbot training.  
- **🧠 Test & Train**: Users can test and train the chatbot with their website data for accuracy.  
- **🎉 Integration Success Page**: Confirms successful chatbot integration with **confetti animations**.  
- **💬 Chatbot Interface**: A toggleable chatbot UI for real-time interaction with website visitors.  
- **📖 Integration Guide**: Step-by-step instructions for embedding the chatbot into a website, including **code snippets** and **developer email options**.  
- **📱 Responsive Design**: Optimized for **mobile, tablet, and desktop**.  

---

## 📁 Files Overview  

### `App.css`  
- Global styles for the app, including **box-sizing** and **margin resets**.  

### `App.js`  
- The main entry point of the application.  
- **Handles routing** using `react-router-dom` for authentication, dashboard, testing, and integration pages.  

### `Confetti.js`  
- Contains the logic for **confetti animations** 🎊 to celebrate successful chatbot integration.  

### `FirebaseConfig.js`  
- Initializes **Firebase** using environment variables for security. 🔥  

### `Dashboard.js`  
- The main **dashboard** where users can:  
  - Set up company details 🏢  
  - View scraping status 📊  

### `Integrate.js`  
- The final confirmation page for **successful chatbot integration**.  
- Displays a celebratory message 🎉 with buttons for further actions.  

### `Button.js`  
- Reusable **button component** for navigation (e.g., proceeding to the next step).  

### `Card.js`  
- Displays **reusable UI cards** with:  
  - Titles 🏷️  
  - Descriptions 📄  
  - Icons 🔹  
  - Action buttons 🔘  

### `ChatBot.js`  
- Provides a **toggleable chatbot interface** for real-time interactions. 💬  
- Includes a **feedback link** for user experience sharing.  

### `Guide.js`  
- **Step-by-step chatbot integration guide**, including:  
  - **Code snippets** for embedding the chatbot. 📝  
  - **Option to email** the integration details to a developer. 📧  

### `Authenticate.js`  
- Handles **user authentication**, including:  
  - **Registration/Login** 🆔  
  - **Google sign-in** 🔑  
  - **Email verification** ✅  

### `Testing.js`  
- Enables users to:  
  - **Test** the chatbot. 🛠️  
  - View **integration instructions**. 📜  
  - Verify chatbot integration. ✅  

### `ScrappingStatus.js`  
- Displays **scraping progress** for website pages. 🔄  
- Allows users to **view extracted data** for each page.  

### `SetUp.js`  
- **Company setup module** where users can:  
  - Input business details. 🏢  
  - Fetch website descriptions automatically. 📝  

### `Test.js`  
- **Opens the user’s website** in a new tab and renders the **chatbot UI for testing**. 🌍  

---

## 🔧 Getting Started  

### ⚙️ Prerequisites  
- **Node.js** and **npm** installed on your machine. 🔗  
- **Firebase project setup** with credentials (API key, auth domain, project ID, etc.). 🔥  

### 🛠️ Installation  

1️⃣ **Clone the repository**:  

   ```bash
   git clone <repository-url>

2️⃣ **Navigate to the project directory**:

    ```bash
    cd chatbot-integration-platform

3️⃣ **Install dependencies**:

    ```bash
    npm install

4️⃣ **Create a .env file and add your Firebase credentials**:

    ```env
    REACT_APP_API_KEY=your_api_key
    REACT_APP_AUTH_DOMAIN=your_auth_domain
    REACT_APP_PROJECT_ID=your_project_id
    REACT_APP_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_APP_ID=your_app_id
    REACT_APP_MEASUREMENT_ID=your_measurement_id

5️⃣ **Start the development server**:

    ```bash
    npm start

## 📌 Usage
- Open the app in your browser. 🌍
- Authenticate to access the platform. 🔐
- Set up your company details and monitor website scraping status. 🏢
- Test & Train the chatbot with your website data. 🧠
- Confirm successful integration and celebrate with confetti! 🎉
- Use the chatbot interface for real-time conversations. 💬
- Follow the integration guide to embed the chatbot into your website. 📝
