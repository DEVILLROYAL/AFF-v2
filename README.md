# AnimeForFree Documentation

## Project Overview
**AnimeForFree** is a responsive, ad-free anime streaming platform built with **Next.js (App Router)**, **JavaScript**, and **Tailwind CSS**. It fetches anime metadata from the **Jikan API** (MyAnimeList) and **Aniwatch API**, and streams videos using the **YouTube API** and third-party APIs (e.g., HiAnime). The application emphasizes a clean, user-friendly interface, performance optimization, and DMCA compliance by sourcing content legally from YouTube and other providers.

> **⚠️ Note**: The project is under active development, and the streaming service is temporarily unavailable due to API maintenance.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)
5. [API Integration](#api-integration)
6. [Components](#components)
7. [Styling](#styling)
8. [State Management](#state-management)
9. [Screenshots](#screenshots)
10. [Code Snippets](#code-snippets)
11. [Deployment](#deployment)
12. [Future Improvements](#future-improvements)
13. [Contributing](#contributing)
14. [License](#license)
15. [Author](#author)

---

## Features
- **Anime Streaming**: Stream anime episodes using `react-player` with sources from YouTube and third-party APIs.
- **Anime Metadata**: Display detailed anime information (title, synopsis, genres, episodes) via Jikan and Aniwatch APIs.
- **Search Functionality**: Search for anime by keyword with results displayed in a card format.
- **Playlist Support**: Display and play YouTube playlists for trailers and related content.
- **Responsive Design**: Fully responsive UI for mobile, tablet, and desktop devices using Tailwind CSS.
- **Dynamic Routing**: Individual anime and episode pages with dynamic routes (`/anime/[slug]`, `/episode/[slug]`, `/search/[slug]`, `/ytanime/[slug]`, `/youwatch/[slug]`, `/viewpage/[slug]`).
- **SEO Optimization**: Server-side rendering (SSR) and metadata configuration for better search engine visibility.
- **Analytics**: Integrated Vercel Analytics for tracking user interactions.
- **DMCA Compliance**: Ensures legal content sourcing with a dedicated DMCA page.

---

## Technologies Used
- **Frontend**:
  - **Next.js (15.3.3)**: React framework with App Router for SSR and dynamic routing.
  - **React (19.0.0)**: Core library for building UI components.
  - **React DOM (19.0.0)**: DOM rendering for React components.
  - **React Player (2.16.0)**: Video player for streaming anime episodes.
  - **Tailwind CSS (4.1.8)**: Utility-first CSS framework for styling.
  - **AOS (2.3.4)**: Animate On Scroll library for animations.
  - **Lucide React (0.513.0)**: Icon library for UI elements.
  - **Redux Toolkit (2.8.2)** & **React Redux (9.2.0)**: State management.
  - **Vercel Analytics (1.5.0)**: Analytics tracking.
  - **HLS.js (1.6.5)**: HTTP Live Streaming for video playback.
  - **TailwindCSS Textshadow (2.1.3)**: Text shadow utilities for Tailwind CSS.
- **APIs**:
  - **YouTube API v3**: Fetches trailers and video content.
  - **Jikan API**: Provides anime metadata from MyAnimeList.
  - **HiAnime API**: Fetches episode sources.
  - **Aniwatch API**: Supports search and anime data retrieval.
  - **Custom YouTube API**: Fetches Hindi-dubbed anime data.
- **Fonts**:
  - **Geist** & **Geist Mono**: Modern fonts from Next.js for typography.
- **Build Tools**:
  - **Node.js**: Runtime environment.
  - **PostCSS**: Configured with Tailwind CSS for CSS processing.

---

## Project Structure
```
animeforfree/
├── app/
│   ├── anime/[slug]/              # Dynamic route for anime details
│   │   └── page.jsx               # Anime detail page
│   ├── episode/[slug]/            # Dynamic route for episode streaming
│   │   └── page.jsx               # Episode streaming page
│   ├── search/[slug]/             # Dynamic route for search results
│   │   └── page.jsx               # Search results page
│   ├── dmca/                      # DMCA page
│   │   └── page.jsx               # DMCA information page
│   ├── ytanime/[slug]/            # Dynamic route for YouTube anime details
│   ├── youwatch/[slug]/           # Dynamic route for YouTube episode streaming
│   ├── viewpage/[slug]/           # Dynamic route for view all pages
│   ├── components/
│   │   ├── Buttons/               # Button components
│   │   │   ├── NavButton.jsx      # Navigation button to home
│   │   │   ├── Slidebtn.jsx       # Slide button for "View all"
│   │   │   ├── Sociallinks.jsx    # Social media links
│   │   │   ├── StreamButton.jsx   # Button to watch episodes
│   │   │   └── WatchButton.jsx    # Button to watch content
│   │   ├── Cards/                 # Card components for UI
│   │   │   ├── AnimeDetail.jsx    # Anime details card
│   │   │   ├── Card.jsx           # Generic card component
│   │   │   ├── Dmca.jsx           # DMCA information card
│   │   │   ├── Episodes.jsx       # Episode list card
│   │   │   ├── SearchCard.jsx     # Search result card
│   │   │   ├── Showcase.jsx       # Anime showcase card
│   │   │   ├── YtAnimeCard.jsx    # YouTube-specific anime card
│   │   │   ├── YouAnimeDetail.jsx # YouTube anime details card
│   │   │   └── YtEpisodes.jsx     # YouTube episode list card
│   │   ├── Home/                  # Home page components
│   │   │   ├── Footer.jsx         # Footer component
│   │   │   ├── HindiAnime.jsx     # Hindi anime section
│   │   │   ├── LatestCompleted.jsx # Latest completed anime section
│   │   │   ├── LatestEpisodes.jsx  # Latest episodes section
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── Slider.jsx         # Home page slider
│   │   │   ├── TopAnimes.jsx      # Top anime section
│   │   │   ├── Trend.jsx          # Trending anime section
│   │   │   └── UpcomingAnime.jsx  # Upcoming anime section
│   │   ├── Video/                 # Video player components
│   │   │   ├── Playlist.jsx       # Playlist component
│   │   │   ├── StreamPlayer.jsx   # Video streaming player
│   │   │   ├── TrailerPlayer.jsx  # Trailer player
│   │   │   └── YoutubePlayer.jsx  # YouTube video player
│   │   └── SearchScript.jsx       # Search input and logic
│   ├── layout.js                  # Root layout with global styles and providers
│   ├── page.js                    # Home page
│   ├── loading.jsx                # Loading component for Suspense
│   └── globals.css                # Global CSS with Tailwind imports
├── public/                        # Static assets (e.g., favicon.ico)
├── store/                         # Redux store configuration
│   └── Providers.jsx              # Redux Provider component
├── .env.local                     # Environment variables (YouTube API key)
├── .gitignore                     # Git ignore rules
├── jsconfig.json                  # Path alias configuration
├── LICENSE.txt                    # MIT License
├── next.config.mjs                # Next.js configuration
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Dependency lock file
├── postcss.config.mjs             # PostCSS configuration
├── README.md                      # Project overview and setup
└── tailwind.config.js             # Tailwind CSS configuration
```

---

## Setup Instructions

### Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Version 8.x or higher
- **Git**: For version control
- **YouTube API Key**: Obtain from [Google Cloud Console](https://console.developers.google.com/)

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DEVILLROYAL/AFF-v2.git
   cd AFF-v2
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create or update a `.env.local` file in the root directory:
   ```env
   YT_API_KEY=your-youtube-api-key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

5. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

---

## API Integration
The application integrates with multiple APIs for anime data and streaming.

### APIs Used
- **YouTube API v3**: Fetches trailers and video content.
  - Endpoint: `https://www.googleapis.com/youtube/v3`
  - Key: Stored in `.env.local` as `YT_API_KEY`
- **Jikan API**: Provides anime metadata.
  - Endpoint: `https://api.jikan.moe/v4/anime`
  - Example: `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`
- **HiAnime API**: Fetches episode sources.
  - Endpoint: `https://test-delta-eight-77.vercel.app/api/v2/hianime`
  - Example: `https://test-delta-eight-77.vercel.app/api/v2/hianime/anime/${slug}/episodes`
- **Aniwatch API**: Supports search and anime data retrieval.
  - Endpoint: `https://myanime-dun.vercel.app/aniwatch`
  - Example: `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`
- **Custom YouTube API**: Fetches Hindi-dubbed anime data.
  - Endpoint: `https://youtubeapi-tmc9.onrender.com/api/home`

### Example API Fetch (HindiAnime.jsx)
```javascript
const ul = 'https://youtubeapi-tmc9.onrender.com/api/home';
const data = await fetch(ul);
let res = await data.json();
let hindi = res;
```

> **Note**: Some API endpoints (e.g., HiAnime) are commented out in files like `episode/[slug]/page.jsx`. Ensure these are updated or re-enabled after maintenance.

---

## Components
### Home Page Components (`app/components/Home/`)
- **Navbar.jsx**: Navigation bar with a home button and search input.
- **Footer.jsx**: Footer with DMCA link, social media links, and contact information.
- **Slider.jsx**: Carousel for spotlight anime with images and descriptions.
- **Trend.jsx**: Displays trending anime with cards.
- **LatestEpisodes.jsx**: Shows recently released episodes.
- **HindiAnime.jsx**: Lists Hindi-dubbed anime using YouTube API data.
- **LatestCompleted.jsx**: Highlights recently completed anime series.
- **TopAnimes.jsx**: Showcases top anime by day, week, and month.
- **UpcomingAnime.jsx**: Lists upcoming anime releases.

### Card Components (`app/components/Cards/`)
- **AnimeDetail.jsx**: Displays anime details (name, rating, episodes, type).
- **Card.jsx**: Generic card for anime with image, name, and dub/sub indicators.
- **Dmca.jsx**: Renders DMCA compliance information.
- **Episodes.jsx**: Lists episodes for an anime with clickable cards.
- **SearchCard.jsx**: Displays search results in a card format.
- **Showcase.jsx**: Highlights anime with a trailer or image and details.
- **YouAnimeDetail.jsx**: YouTube-specific anime details with trailer playback.
- **YtAnimeCard.jsx**: YouTube-specific anime card with dub/sub indicators.
- **YtEpisodes.jsx**: Lists YouTube episode cards with navigation to streaming.

### Button Components (`app/components/Buttons/`)
- **NavButton.jsx**: Button to navigate to the homepage.
- **Slidebtn.jsx**: "View all" button for navigating to specific sections.
- **Sociallinks.jsx**: Social media links (Instagram, LinkedIn, GitHub, Email).
- **StreamButton.jsx**: "Watch Now" button for episode streaming.
- **WatchButton.jsx**: Generic "Watch Now" button for content navigation.

### Video Components (`app/components/Video/`)
- **Playlist.jsx**: Displays YouTube playlists.
- **StreamPlayer.jsx**: Renders the video player for episode streaming.
- **TrailerPlayer.jsx**: Plays anime trailers from YouTube.
- **YoutubePlayer.jsx**: YouTube-specific video player.

### Search Components
- **SearchScript.jsx**: Handles search input and logic.
- **Search.jsx**: Search component (not fully provided but referenced).
- **SearchComponent.jsx**: Likely a wrapper for search results (not fully provided).
- **PreviousList.jsx**: Displays previous search history (not fully provided).

### Other Components
- **Server.jsx**: Placeholder component (currently empty).

---

## Styling
The project uses **Tailwind CSS** with global styles in `globals.css` and **Geist** fonts.

### Global Styles (`app/globals.css`)
```css
@import "tailwindcss";
* {
    box-sizing: border-box;
    scrollbar-width: none;
    scroll-behavior: smooth;
}
body {
    background: black;
}
#scrollbar-image {
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    background-size: contain;
}
```

### Font Configuration (`app/layout.js`)
```javascript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
```

### Tailwind Configuration
The `tailwind.config.js` file (not provided but assumed) likely includes customizations for colors, fonts, and plugins like `tailwindcss-textshadow`.

---

## State Management
The project uses **Redux Toolkit** and **React Redux** for state management, with a `Providers.jsx` component wrapping the app to provide the Redux store.

### Providers (`store/Providers.jsx`)
```javascript
import { Provider } from 'react-redux';
import store from './store';

export default function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
```

---

## Screenshots
> **Note**: Screenshots are not generated here. Please capture and insert the following images into the documentation manually.

1. **Home Page**:
   - **Description**: Displays the homepage with the slider, trending anime, latest episodes, and other sections.
   - **File**: `screenshot-homepage.png`
   - **Instructions**: Capture the homepage at `http://localhost:3000` and save as `public/screenshots/screenshot-homepage.png`.

2. **Anime Detail Page**:
   - **Description**: Shows an anime's details, including the showcase, synopsis, and episode list.
   - **File**: `screenshot-anime-detail.png`
   - **Instructions**: Navigate to `/anime/[slug]` (e.g., `/anime/naruto`) and save as `public/screenshots/screenshot-anime-detail.png`.

3. **Search Results Page**:
   - **Description**: Displays search results for a keyword with cards or a "no results" message.
   - **File**: `screenshot-search.png`
   - **Instructions**: Search for an anime (e.g., `/search/attack-on-titan`) and save as `public/screenshots/screenshot-search.png`.

4. **Episode Streaming Page**:
   - **Description**: Shows the video player streaming an episode.
   - **File**: `screenshot-stream.png`
   - **Instructions**: Navigate to `/episode/[slug]` and save as `public/screenshots/screenshot-stream.png`.

5. **YouTube Anime Page**:
   - **Description**: Displays YouTube-specific anime details with a trailer.
   - **File**: `screenshot-ytanime.png`
   - **Instructions**: Navigate to `/ytanime/[slug]` and save as `public/screenshots/screenshot-ytanime.png`.

To include screenshots, add them to the `public/screenshots/` directory and reference them in the Markdown:
```markdown
![Homepage Screenshot](/screenshots/screenshot-homepage.png)
```

---

## Code Snippets

### Root Layout (`app/layout.js`)
Configures the app's global structure, fonts, and metadata.
```javascript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import Providers from "@/store/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime for free",
  description: "Welcome to AnimeForFree, the ultimate free anime streaming platform built for true anime lovers!",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
```

### Home Page (`app/page.js`)
Renders the homepage with various sections, using Suspense for loading states.
```javascript
import LatestCompleted from "@/components/Home/LatestCompleted";
import LatestEpisodes from "@/components/Home/LatestEpisodes";
import { Suspense } from 'react';
import Slider from "@/components/Home/Slider";
import TopAnimes from "@/components/Home/TopAnimes";
import Trend from "@/components/Home/Trend";
import HindiAnimes from "@/components/Home/HindiAnime";
import UpcomingAnime from "@/components/Home/UpcomingAnime";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Slider />
        <Trend />
        <LatestEpisodes />
        <HindiAnimes />
        <LatestCompleted />
        <UpcomingAnime />
        <TopAnimes />
      </Suspense>
    </>
  );
}
```

### Anime Detail Page (`app/anime/[slug]/page.jsx`)
Fetches and displays anime details and episodes.
```javascript
import TrailerPlayer from '@/components/Video/TrailerPlayer';
import AnimeDetail from '@/components/Cards/AnimeDetail';
import Episodes from '@/components/Cards/Episodes';
import Slidebtn from '@/components/Buttons/Slidebtn';
import { Construction, ListVideo } from 'lucide-react';
import Showcase from '@/components/Cards/Showcase';

export default async function AnimePage({ params }) {
  const { slug } = await params;
  const lnk = `https://api.jikan.moe/v4/anime?q=${slug}&limit=1`;
  const info = await fetch(lnk);
  const cmData = await info.json();
  const tlr = await cmData.data[0].trailer;
  const titles = await cmData.data;
  const tlrImage = await cmData.data[0].images.webp;
  
  const ul = `https://test-delta-eight-77.vercel.app/api/v2/hianime/anime/${slug}/episodes`;
  const data = await fetch(ul);
  let res = await data.json();
  const epData = await res.data;

  return (
    <div className="bg-black text-white">
      <Showcase
        data={titles}
        tlr={tlr}
        slug={slug}
        epData={epData?.episodes[0]?.episodeId}
        alt={titles[0].title_english ?? titles[0].title}
        image={tlrImage.large_image_url}
      />
      <div className='text-wrap w-auto max-h-36 overflow-auto text-center m-5'>
        <p>{titles[0]?.synopsis}</p>
      </div>
      <div>
        {epData?.episodes.length > 0 && (
          <div className='flex justify-between p-2 items-center w-full'>
            <div className='flex justify-center items-center gap-2'>
              <ListVideo />
              <h4>Episodes</h4>
            </div>
            <Slidebtn view='trendingAnimes' />
          </div>
        )}
        <div className='overflow-auto bg-gray-900 rounded-2xl p-2 xl:p-5 w-full max-h-screen'>
          <div className='grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-7 m-5'>
            {epData?.episodes.map((item, index) => (
              <Episodes
                epId={item.episodeId}
                key={index}
                name={item.title}
                url={tlrImage.large_image_url}
                rank={item.number}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Search Page (`app/search/[slug]/page.jsx`)
Handles search functionality with dynamic results.
```javascript
import { Construction, CircleArrowLeft, CircleArrowRight, Search } from "lucide-react";
import SearchCard from "@/components/Cards/SearchCard";

export default async function SearchPage({ params }) {
  const { slug } = await params;
  const ul = `https://myanime-dun.vercel.app/aniwatch/search?keyword=${slug}&page=1`;
  const data = await fetch(ul);
  let res = await data.json();
  const searchData = await res.animes;

  return (
    <div className="p-5 text-white flex flex-col gap-5">
      <div className="justify-center items-center p-5 gap-5 flex">
        {searchData.length === 0 ? (
          <Construction size={20} />
        ) : (
          <Search size={20} />
        )}
        {searchData.length === 0 ? (
          <p>Sorry could not find result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span></p>
        ) : (
          <p>Search result for <span className="text-blue-600 text-wrap font-bold">"{slug}"</span></p>
        )}
      </div>
      <SearchCard res={searchData} />
    </div>
  );
}
```

### Navbar Component (`app/components/Home/Navbar.jsx`)
Renders the navigation bar with a home button and search input.
```javascript
import NavButton from "../Buttons/NavButton";
import SearchScript from "../SearchScript";

export default function Navbar() {
  return (
    <>
      <div className='h-16 flex gap-5 justify-between p-3 bg-black text-white'>
        <div className='h-[100%] w-16 flex justify-center items-center'>
          <NavButton/>
        </div>
        <SearchScript/>
      </div>
    </>
  )
}
```

### Footer Component (`app/components/Home/Footer.jsx`)
Renders the footer with DMCA link, social media links, and contact information.
```javascript
import React from 'react';
import Sociallinks from '../Buttons/Sociallinks';
import { Info, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-white rounded-t-3xl mt-5 p-6 md:px-10 md:py-6 text-xs md:text-sm'>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'>
        <div>
          <p>© 2025 AnimeForFree. All rights reserved.</p>
        </div>
        <div className='flex flex-col gap-4 items-center md:items-start'>
          <div className='flex flex-col w-full items-center md:items-end gap-2'>
            <a href="/dmca" className='flex items-center gap-1 hover:text-blue-400'>
              <Info size={16} /> DMCA
            </a>
            <Sociallinks />
          </div>
          <div className='flex items-center gap-2'>
            <div className='rounded-full border p-1'>
              <User size={16} />
            </div>
            <p>
              Contact: <a href="mailto:deepakyadav4014@gmail.com" className='text-blue-400 hover:underline'>deepakyadav4014@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

### Showcase Component (`app/components/Cards/Showcase.jsx`)
Displays an anime with a trailer or image and details.
```javascript
'use client'

import AnimeDetail from "./AnimeDetail";
import dynamic from 'next/dynamic'
import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
const ReactPlayer = dynamic(() => import("react-player/youtube"),{ssr: false});

export default function Showcase(props) {
  const [isMute, setIsMute] = useState(true);

  const handleMute = () => {
    setIsMute(prev => !prev);
  };
  return (
    <>
      <div className='relative w-full'>
        {props.data.map((item, index) => (
          <AnimeDetail
            key={index}
            name={props.alt}
            duration={item.duration}
            url={props.slug}
            epId={props.epData}
            episodes={item.episodes}
            type={item.type}
            rating={item.rating}
          />
        ))}
        {props.tlr.embed_url === null ? (
          <>
            <div className="relative flex justify-end">
              <img className='w-full xl:h-screen md:h-screen xl:rounded-tl-4xl md:rounded-tl-4xl xl:w-auto' src={props.image} alt={props.alt}/>
              {props.tlr.embed_url !== null && (
                <span className="absolute w-full bg-radial mask-radial-at-center to-black top-0 h-full"/>
              )}
            </div>
          </>
        ) : (
          <div className='overflow-hidden'>
            <div className='h-[600px] relative xl:h-[850] pointer-events-none m-[-120]'>
              <span className="absolute w-full bg-radial mask-radial-at-center to-65% to-black top-0 h-full"></span>
              <ReactPlayer
                url={props.tlr.embed_url}
                playing
                muted={isMute}
                loop
                height='100%'
                width='100%'
                config={{
                  youtube: {
                    playerVars: {
                      autoplay: 1,
                      encrypted_media: 1,
                      rel: 0,
                      picture_in_picture: 1,
                      modestbranding: 1,
                      controls: 0,
                      showinfo: 0,
                      frameborder: 0,
                      showsearch: 0,
                      rel: 0,
                      cc_load_policy: 0,
                      fs: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
        )}
        {props.tlr.embed_url !== null && (
          <button className='border opacity-50 z-5 p-2 m-2 absolute top-0 right-0 w-max flex justify-center items-center rounded-full cursor-pointer' onClick={handleMute}>
            {isMute ? <Volume2 size={15}/> : <VolumeX size={15}/> }
          </button>
        )}
      </div>
    </>
  )
}
```

---

## Deployment
The application is optimized for **Vercel** deployment.

### Steps to Deploy
1. Push code to GitHub (`https://github.com/DEVILLROYAL/AFF-v2`).
2. Connect the repository to Vercel via the dashboard.
3. Configure environment variables in Vercel (`YT_API_KEY`).
4. Deploy the application.

---

## Future Improvements
- **Enable Commented APIs**: Re-enable commented-out API endpoints (e.g., HiAnime) after maintenance.
- **User Authentication**: Add login/register for watchlists and user preferences.
- **Episode Tracking**: Implement watch history and progress tracking.
- **Advanced Search Filters**: Filter by genre, year, or studio.
- **Performance Optimization**: Use Next.js `Image` for optimized image loading.
- **Error Handling**: Improve handling for failed API requests.
- **Accessibility**: Enhance ARIA attributes and keyboard navigation.
- **Complete Server.jsx**: Implement functionality for the `Server.jsx` component.

---

## Contributing
1. Fork the repository (`https://github.com/DEVILLROYAL/AFF-v2`).
2. Create a branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License
[MIT License](LICENSE.txt)

---

## Author
**Deepak Yadav**  
📧 [deepakyadav4014@gmail.com](mailto:deepakyadav4014@gmail.com)  
🔗 [GitHub](https://github.com/DEVILLROYAL)