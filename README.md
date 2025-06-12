# AnimeForFree 🎥

**AnimeForFree** is a clean, responsive, and ad-free anime streaming website built with **Next.js (App Router)** and **JavaScript**. It fetches anime videos from YouTube and metadata from MyAnimeList using the **YouTube API** and **Jikan API**, delivering a fast and user-friendly experience for anime lovers.

---

> ⚠️ **Project Status: Under Development**  
> This project is currently under active development.  
> **The streaming service is temporarily shut down due to API maintenance** and will be available again soon. Thank you for your patience!

---

## 🌟 Features

- 🎬 Stream anime episodes directly from YouTube
- 📖 View detailed anime information (titles, descriptions, episodes)
- 🚀 Fast and modern frontend with Next.js App Router
- 📱 Fully responsive design
- 🧼 Clean UI with Tailwind CSS
- ✅ DMCA-compliant (no pirated content)
- 🔧 Built with scalability and performance in mind

## 🧰 Tech Stack

| Frontend               | Backend           | APIs                      | Styling      |
|------------------------|-------------------|---------------------------|--------------|
| Next.js (App Router)   | Node.js + Express | YouTube API v3            | Tailwind CSS |
| JavaScript             | Axios             | Jikan API (MyAnimeList)   |              |

## 📁 Folder Structure

```
animeforfree/
├── app/
│   ├── components/
│   ├── [animeId]/         # Dynamic route for individual anime pages
│   └── layout.js
├── public/
├── styles/
├── backend/               # Custom Express API (if applicable)
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DEVILLROYAL/AFF-v2.git
cd AFF-v2
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Visit the site

Open [http://localhost:3000](http://localhost:3000) in your browser to view it live.

---

### 🔑 API Setup (Optional for Custom Backend)

- Get a free [YouTube API key](https://console.developers.google.com/)
- Use [Jikan API](https://jikan.moe/) (no key required)
- Set up your keys in a `.env.local` file (if needed):

```
YOUTUBE_API_KEY=your_key_here
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Deepak Yadav**  
📧 deepakyadav4014@gmail.com  
🔗 [GitHub](https://github.com/DEVILLROYAL)
