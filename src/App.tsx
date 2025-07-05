import React from 'react';
import GoogleReviewsBanner from './components/GoogleReviewsBanner';
import Header from './components/Header';
import FleursCBDCategoryPage from './components/FleursCBDCategoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <GoogleReviewsBanner />
      <Header />
      <FleursCBDCategoryPage />
      <Footer />
    </div>
  );
}

export default App;