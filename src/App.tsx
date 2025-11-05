import LandingPage from "./pages/LandingPage"; // Import the component
import VotingPage from "./pages/VotingPage";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
// import { useEffect, useState } from "react";

function App() {
  // const [loading, setLoading] = useState<boolean>(true);
  // const [progress, setProgress] = useState<number>(0);

  // // Array of image sources to preload
  // const imagesToLoad: string[] = [
  //   "/aea-frontend/homepage/aea_logo.png",
  //   "/aea-frontend/homepage/engine.png",
  //   "/aea-frontend/homepage/plane.png",
  //   "/aea-frontend/aea_logo.png",
  //   "/aea-frontend/events/aea_spactra.JPG",
  //   "/aea-frontend/events/aero_nite.jpg",
  // ];

  // useEffect(() => {
  //   let loadedCount = 0;
  //   const totalImages = imagesToLoad.length;

  //   const imagePromises = imagesToLoad.map((src: string) => {
  //     return new Promise<void>((resolve) => {
  //       const img = new Image();

  //       img.onload = () => {
  //         loadedCount++;
  //         setProgress(Math.round((loadedCount / totalImages) * 100));
  //         resolve();
  //       };

  //       img.onerror = () => {
  //         loadedCount++;
  //         setProgress(Math.round((loadedCount / totalImages) * 100));
  //         resolve(); // Resolve even on error to not block the app
  //       };

  //       img.src = src;
  //     });
  //   });

  //   Promise.all(imagePromises).then(() => {
  //     // Optional: small delay so user sees 100%
  //     setTimeout(() => setLoading(false), 300);
  //   });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-screen bg-black">
  //       <div className="text-center">
  //         <div className="mb-8">
  //           <div className="w-16 h-16 border-4 border-gray-800 border-t-transparent rounded-full animate-spin mx-auto"></div>
  //         </div>

  //         <h2 className="text-2xl font-semibold text-white mb-2">Loading...</h2>

  //         <div className="w-64 bg-gray-200 rounded-full h-2 overflow-hidden">
  //           <div
  //             className="bg-gray-800 h-full transition-all duration-300 ease-out"
  //             style={{ width: `${progress}%` }}
  //           ></div>
  //         </div>

  //         <p className="text-sm text-gray-500 mt-2">{progress}%</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <AuthProvider>
      {/* This div provides a consistent background */}
      <div className="min-h-screen bg-gray-900 text-white">
        {/* 3. Define all your application's routes */}
        <Routes>
          {/* Route 1: The main page */}
          <Route path="/" element={<LandingPage />} />

          {/* Route 2: The voting page */}
          <Route path="/vote" element={<VotingPage />} />

          {/* You could add more routes here, e.g., <Route path="/results" element={<ResultsPage />} /> */}
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
