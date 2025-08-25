# Beauty Salon 🌿💆‍♀️

A professional and elegant landing page website for Beauty Salon. Designed for single page next.js, highlight luxury spa treatments, holistic beauty services, and anti-aging skincare. Built with user experience in mind, this site provides a soothing interface to attract and engage customers looking for premium beauty solutions.

---

## ✨ Features

- 🌸 **Modern Landing Page** 
- 🧖‍♀️ **About Us** 
- 💼 **Service Showcase** 
- 👩‍⚕️ **Expert Team** 
- 🛍 **Product Section** 
- 🖼 **Gallery**
- 📍 **Salon Location & Contact Information**
- 📱 Fully responsive design for mobile and desktop

---

## 📌 Tech Stack

- **HTML5**
- **CSS3 / SCSS**
- **JavaScript (Vanilla)**
- **Responsive Layouts**
- **Google Maps Embed**
- **Google Fonts Integration**

---

## 🛠 Setup & Usage

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/issime-beauty-salon.git
   cd issime-beauty-salon
   ```

2. **Install the NPM**
Install the Required Package:
    ```bash
    npm install
    ```

3. **Run Development Server:**
   ```bash
   npm run dev
   ```

### Docker Deployment

#### Production (Recommended)
```bash
# Build and run with Docker Compose
npm run docker:prod

# Or manually
docker build -t issime-beauty-salon .
docker run -p 3000:80 issime-beauty-salon
```

#### Development with Docker
```bash
# Run development environment in Docker
npm run docker:dev
```

#### Docker Commands
```bash
# Build production image
npm run docker:build

# Run production container
npm run docker:run

# Stop all containers
npm run docker:stop

# Clean up Docker resources
npm run docker:clean
```

### Manual Setup (Alternative)

3. **Customize for Your Salon**
- Edit Hero.tsx, About.tsx, etc., with your real content
- Replace images in the assets/ folder
- Update Google Maps iframe with your real location
- Replace contact info in the footer and contact section
- For your SEO edit the title, description, and keyword at the pages/index.tsx

4. **Change the Web Colours**
Website support 2 mode of colours which is light and dark mode. To change it:
- Go to index.css
- Class name .root CSS colors for the light mode.
- Class name .dark CSS colors for the dark mode.

5. **Deployment Options**
- **Docker** (Recommended): Use the Docker setup above
- **Firebase/Vercel**: Traditional hosting platforms
- **Cloud Platforms**: AWS, Google Cloud, Azure with Docker support

## 🐳 Docker Information

### Production Setup
- **Multi-stage build** for optimized image size
- **Nginx** web server for production
- **Gzip compression** enabled
- **Security headers** configured
- **Health checks** included

### Development Setup
- **Hot reload** support
- **Volume mounting** for live code changes
- **Development dependencies** included

### Ports
- **Production**: `http://localhost:3000`
- **Development**: `http://localhost:8080`
