# ZappShop - E-Commerce Platform

**Your ultimate online shopping destination with seamless purchasing, order tracking, and customer support.**

---

## 🎯 Overview

ZappShop is a modern, full-featured e-commerce platform built with React and Vite. It provides users with a complete shopping experience including product browsing, cart management, secure checkout, order tracking, and customer support. The platform is designed with a sleek, dark-themed UI and optimized for both desktop and mobile devices.

**Key Features:**
- User authentication with Firebase and custom auth
- Complete CRUD operations for shopping
- Real-time order management and tracking
- Responsive design with Tailwind CSS
- Customer support and help center
- Newsletter subscription

---

## ✨ Features

- 🔐 **User Authentication** - Secure login/registration with Google OAuth and email-based authentication
- 🛒 **Shopping Cart** - Add, remove, and manage products in cart with real-time updates
- 📦 **Product Catalog** - Browse collections with latest products and best sellers
- 🏷️ **Product Details** - Detailed product information with reviews and ratings
- 💳 **Order Management** - Place orders, track status, and manage order history
- 📍 **Order Tracking** - Real-time order tracking with status updates
- 👥 **Customer Support** - Dedicated customer support and help center pages
- 🔔 **Notifications** - Toast notifications for user actions (success, error, info)
- 📱 **Responsive Design** - Mobile-first approach, works seamlessly across all devices
- 🎨 **Modern UI** - Dark theme with gradient backgrounds and smooth animations
- 📧 **Newsletter** - Subscribe to updates and promotions
- ℹ️ **About & Contact** - Company information and contact forms

---

## 🛠️ Tech Stack

### **Frontend**
- **React 19.2** - UI library
- **React Router DOM 7.13** - Client-side routing
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Axios 1.13** - HTTP client for API requests
- **React Icons 5.5** - Icon library
- **React Toastify 11.0** - Toast notifications
- **Motion 12.34** - Animation library

### **Backend Services**
- **Firebase 12.8** - Authentication and real-time services
- **Firebase Auth** - User authentication
- **Google OAuth** - Social login provider

### **Development Tools**
- **ESLint 9.39** - Code linting
- **Vite React Plugin 5.1** - React integration with Vite

### **Deployment**
- **Vercel** - Production deployment

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

---

## 🚀 Installation & Setup

### 1. **Clone the Repository**
```bash
git clone https://github.com/gauravkoshti88/zappshop-ecommerce.git
cd zappshop-ecommerce
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Environment Configuration**

Create a `.env.local` file in the root directory and add the following variables:

```env
# Backend API URL
VITE_API_URL=http://localhost:5000

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=zappshop-e-commerce.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=zappshop-e-commerce
VITE_FIREBASE_STORAGE_BUCKET=zappshop-e-commerce.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=324397555123
VITE_FIREBASE_APP_ID=1:324397555123:web:f7391287a5e90597517fc6
```

> **Note:** Get your Firebase credentials from [Firebase Console](https://console.firebase.google.com)

### 4. **Run Development Server**
```bash
npm run dev
```

The application will start at `http://localhost:5173`

### 5. **Build for Production**
```bash
npm run build
```

### 6. **Preview Production Build**
```bash
npm run preview
```

---

## 💻 Usage

### **Running Locally**

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

3. Register a new account or login with Google

4. Browse products and start shopping!

### **Available Routes**

| Route | Description |
|-------|-------------|
| `/` | Home page with featured products |
| `/register` | User registration |
| `/login` | User login |
| `/collections` | Browse all collections |
| `/product` | Product listing |
| `/productdetail/:productId` | Detailed product view |
| `/cart` | Shopping cart |
| `/placeorder` | Checkout and order placement |
| `/order` | Order history |
| `/track-order/:orderId` | Track specific order |
| `/about` | About page |
| `/contact` | Contact page |
| `/customerSupport` | Customer support |
| `/help-center` | Help and FAQ |

### **Key Components**

- **Navbar** - Main navigation bar
- **Hero Slider** - Rotating image banner on home page
- **Product Card** - Displays individual product with price and ratings
- **Cart Component** - Shopping cart management
- **Order Tracker** - Real-time order tracking interface

---

## 🌐 Live Demo & Deployment

🔗 **Live Application:** [https://zappshop-ecommerce.vercel.app](https://zappshop-ecommerce.vercel.app)

The application is deployed on **Vercel** and automatically updates with every push to the main branch.

---

## 📁 Folder Structure

```
zappshop-ecommerce/
├── src/
│   ├── assets/              # Images, logos, and static files
│   ├── components/          # Reusable React components
│   │   ├── Slider/          # Hero slider components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── CardProduct.jsx  # Product card component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── BestSeller.jsx   # Best seller products section
│   │   └── ...              # Other components
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Home page
│   │   ├── Product.jsx      # Product listing
│   │   ├── Cart.jsx         # Shopping cart
│   │   ├── PlaceOrder.jsx   # Order checkout
│   │   ├── TrackOrder.jsx   # Order tracking
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   └── ...              # Other pages
│   ├── context/             # React Context for state management
│   │   ├── AuthContext.jsx  # Authentication context
│   │   ├── UserContext.jsx  # User data context
│   │   └── ShopContext.jsx  # Shopping context
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── utils/
│   └── Firebase.js          # Firebase configuration
├── public/
│   └── index.html           # HTML entry point
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint configuration
├── vercel.json              # Vercel deployment config
└── README.md                # This file
```

---

## 📸 Screenshots

### Desktop-View Pages

<p>
   <img src="./screenshots/desktop-view/1.png" width="45%"/>
   <img src="./screenshots/desktop-view/2.png" width="45%"/>
   <img src="./screenshots/desktop-view/3.png" width="45%"/>
   <img src="./screenshots/desktop-view/4.png" width="45%"/>
   <img src="./screenshots/desktop-view/5.png" width="45%"/>
   <img src="./screenshots/desktop-view/6.png" width="45%"/>
   <img src="./screenshots/desktop-view/7.png" width="45%"/>
   <img src="./screenshots/desktop-view/8.png" width="45%"/>
   <img src="./screenshots/desktop-view/9.png" width="45%"/>
   <img src="./screenshots/desktop-view/10.png" width="45%"/>
   <img src="./screenshots/desktop-view/11.png" width="45%"/>
   <img src="./screenshots/desktop-view/12.png" width="45%"/>
   <img src="./screenshots/desktop-view/13.png" width="45%"/>
   <img src="./screenshots/desktop-view/14.png" width="45%"/>
</p>

### Mobile-View Pages

<p>
   <img src="./screenshots/mobile-view/1.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/2.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/3.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/4.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/5.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/6.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/7.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/8.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/9.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/10.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/11.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/12.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/13.jpeg" height="400"/>
   <img src="./screenshots/mobile-view/14.jpeg" height="400"/>
</p>
---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Steps to Contribute

1. **Fork the repository**
   ```bash
   Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/zappshop-ecommerce.git
   cd zappshop-ecommerce
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Follow the existing code style
   - Test your changes locally
   - Ensure responsive design works

5. **Commit your changes**
   ```bash
   git commit -m "Add your meaningful commit message"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Add a clear description of your changes

### Issues & Bug Reports

Found a bug? Please report it by creating an issue in the [Issues section](https://github.com/gauravkoshti88/zappshop-ecommerce/issues)

Include:
- Description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

The MIT License permits free use, modification, and distribution of this software, provided that the license notice is included in all copies or substantial portions of the software.

---

## 📞 Contact & Support

**Developer:** Gaurav Koshti

**Get in touch:**
- 🐙 **GitHub:** [@gauravkoshti88](https://github.com/gauravkoshti88)
- 💼 **LinkedIn:** [Gaurav Koshti](https://linkedin.com/in/gaurav-koshti-565b73249)
- 📧 **Email:** [gauravkoshti1@gmail.com](gauravkoshti1@gmail.com)

**Project Links:**
- 🌐 **Live Demo:** [https://zappshop-ecommerce.vercel.app](https://zappshop-ecommerce.vercel.app)
- 📂 **Repository:** [https://github.com/gauravkoshti88/zappshop-ecommerce](https://github.com/gauravkoshti88/zappshop-ecommerce)

---

## 🎓 Learning Resources

This project demonstrates:
- React hooks (useState, useContext, useEffect)
- Context API for state management
- React Router for navigation
- Firebase authentication
- Tailwind CSS for styling
- Vite as a modern build tool
- RESTful API integration with Axios

---

## 🙏 Acknowledgments

- React and Vite communities
- Firebase for authentication services
- Tailwind CSS for amazing styling framework
- The open-source community

---

## 📈 Project Status

✅ **Active Development** - Features and improvements are continuously being added.

Current Version: 1.0.0

---

**Made with ❤️ by Gaurav Koshti**
