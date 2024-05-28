import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Blog/Header';
import Footer from './Blog/Footer';
import BlogComponent from './Blog/BlogComponent';
import BlogPostPage from './Blog/BlogPostPage';
import "./App.css"

const App = () => {
  const data = [
    {
      id: 1,
       title: 'AI in Education: Making Information More Accessible or Less Reliable?',
      image: 'https://blog.hubspot.com/hs-fs/hubfs/ai%20in%20education%20%281%29.png?width=893&height=600&name=ai%20in%20education%20%281%29.png',
      content: 'Acknowledging her industry’s preference for traditional, tried-and-true techniques, she adds, Don’t be afraid to try out AI tools at your disposal because it’s a good first step to reducing the gap in the healthcare industry.',
      author: 'Justina Thompson'
     },
    { 
      id: 2,
      title: 'Spot The Fake: Google Launches New Watermarking Tech',
      image: 'https://blog.hubspot.com/hs-fs/hubfs/google%20releases%20new%20watermarking%20technology.png?width=893&height=600&name=google%20releases%20new%20watermarking%20technology.png',
      content: 'Deep Mind, an AI research lab Google acquired years back, recently announced the launch of SynthID, a watermarking tool designed specifically to spot AI-generated images.',
      author: 'Martina Bretous'
    },
    { 
      id: 3,
      title: 'Health Care Advances with AI: Is the promise of that true yet?',
      image: 'https://blog.hubspot.com/hs-fs/hubfs/ai%20in%20healthcare-1.png?width=893&height=600&name=ai%20in%20healthcare-1.png',  
      content: 'Without doubt, AI has become synonymous with automation, seamlessly performing time-heavy tasks in record time and with little to no human intervention. This has proved to be a useful function for many healthcare businesses.',
      author: 'Kolawole Samuel Adebayo'
    },
  ];

  const [blog, setBlog] = useState(data);

  return (
    <Router>
      <div className="App">
        <Header  />
        <main>
          <Routes>
            <Route path="/" element={<BlogComponent blog1={blog} />} />
            <Route path="/:id" element={<BlogPostPage blog2={blog} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;