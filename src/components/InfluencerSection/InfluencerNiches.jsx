import React, { useState } from 'react';
import { 
  FaDumbbell, 
  FaPlane, 
  FaUtensils, 
  FaCamera, 
  FaHeart, 
  FaGamepad, 
  FaBrain, 
  FaLaptop, 
  FaMusic, 
  FaHome 
} from 'react-icons/fa'; 


function InfluencerCard({ icon, title, description }) {
  const IconComponent = 
    icon === 'fas fa-dumbbell' ? <FaDumbbell /> :
    icon === 'fas fa-plane' ? <FaPlane /> :
    icon === 'fas fa-utensils' ? <FaUtensils /> :
    icon === 'fas fa-camera' ? <FaCamera /> :
    icon === 'fas fa-heart' ? <FaHeart /> :
    icon === 'fas fa-gamepad' ? <FaGamepad /> :
    icon === 'fas fa-brain' ? <FaBrain /> :
    icon === 'fas fa-laptop' ? <FaLaptop /> :
    icon === 'fas fa-music' ? <FaMusic /> :
    icon === 'fas fa-home' ? <FaHome /> :
    null; // Handle unknown icons

  return (
    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer border border-gray-100">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto bg-custom bg-opacity-10 rounded-full flex items-center justify-center mb-4">
          {IconComponent && <span className="text-2xl text-custom text-[#2269a1]">{IconComponent}</span>} 
        </div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
}

function InfluencerNiches() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const influencerNiches = [
    { icon: 'fas fa-dumbbell', title: 'Fitness', description: '1.2K Influencers' },
    { icon: 'fas fa-plane', title: 'Travel', description: '2.5K Influencers' },
    { icon: 'fas fa-utensils', title: 'Food', description: '1.8K Influencers' },
    { icon: 'fas fa-camera', title: 'Photography', description: '3.1K Influencers' },
    { icon: 'fas fa-heart', title: 'Beauty & Fashion', description: '4.2K Influencers' },
    { icon: 'fas fa-gamepad', title: 'Gaming', description: '2.8K Influencers' },
    { icon: 'fas fa-brain', title: 'Mental Health', description: '950 Influencers' },
    { icon: 'fas fa-laptop', title: 'Technology', description: '1.5K Influencers' },
    { icon: 'fas fa-music', title: 'Music', description: '2.3K Influencers' },
    { icon: 'fas fa-home', title: 'Lifestyle', description: '3.7K Influencers' }
  ];

  const filteredNiches = influencerNiches.filter(niche =>
    niche.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50">
      <nav className="bg-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo or other content */}
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search niches..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
              </div>
              <button className="ml-4 px-4 py-2 bg-custom text-white !rounded-button hover:bg-opacity-90">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {/* Discover Influencer Niches */}
            𝑫𝒊𝒔𝒄𝒐𝒗𝒆𝒓 𝑰𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓 𝑵𝒊𝒄𝒉𝒆𝒔
          </h1>
          <p className="text-xl text-gray-600">
            {/* Connect with the perfect influencers across various categories */}
            𝑪𝒐𝒏𝒏𝒆𝒄𝒕 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒊𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓𝒔 𝒂𝒄𝒓𝒐𝒔𝒔 𝒗𝒂𝒓𝒊𝒐𝒖𝒔 𝒄𝒂𝒕𝒆𝒈𝒐𝒓𝒊𝒆𝒔
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {filteredNiches.length > 0 ? (
            filteredNiches.map((niche, index) => (
              <InfluencerCard
                key={index}
                icon={niche.icon}
                title={niche.title}
                description={niche.description}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">No niches found.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default InfluencerNiches;
