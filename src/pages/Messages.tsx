import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Messages: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'Alex Johnson',
      avatar: '👨‍🏫',
      lastMessage: 'Great job on todays workout!',
      timestamp: '5 min ago',
      unread: 2,
    },
    {
      id: 2,
      name: 'Sarah Williams',
      avatar: '👩‍🏫',
      lastMessage: 'Your form is improving a lot',
      timestamp: '1 hour ago',
      unread: 0,
    },
    {
      id: 3,
      name: 'Marcus Thompson',
      avatar: '👨‍⚕️',
      lastMessage: 'Check out my nutrition tips',
      timestamp: '2 hours ago',
      unread: 0,
    },
    {
      id: 4,
      name: 'Fitness Community',
      avatar: '👥',
      lastMessage: 'Anyone up for a group session?',
      timestamp: '3 hours ago',
      unread: 5,
    },
    {
      id: 5,
      name: 'Support Team',
      avatar: '🛠️',
      lastMessage: 'We are here to help!',
      timestamp: 'Yesterday',
      unread: 0,
    },
  ];

  const currentChat = conversations.find(c => c.id === selectedChat);

  const messages = [
    { id: 1, sender: 'Coach', text: 'Hi there! How is your training going?', time: '10:00 AM' },
    { id: 2, sender: 'You', text: 'Great! Feeling much stronger now', time: '10:15 AM' },
    { id: 3, sender: 'Coach', text: 'Excellent! Keep up the great work 💪', time: '10:20 AM' },
    { id: 4, sender: 'Coach', text: 'Great job on todays workout!', time: '2:30 PM' },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold">Messages</h1>
          <p className="text-gray-700">Chat with your coaches and community</p>
        </div>
      </section>

      {/* Messages Container */}
      <section className="py-8 bg-gray-50 min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 h-[600px]">
            {/* Conversation List */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="p-4 border-b">
                <h2 className="text-xl font-display font-bold mb-4">Messages</h2>
                <input
                  type="text"
                  placeholder="Search conversations"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                />
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {conversations.map(convo => (
                  <div
                    key={convo.id}
                    onClick={() => setSelectedChat(convo.id)}
                    className={`p-4 border-b cursor-pointer transition ${
                      selectedChat === convo.id
                        ? 'bg-primary/10 border-l-4 border-primary'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{convo.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <h3 className="font-body font-semibold truncate">{convo.name}</h3>
                          {convo.unread > 0 && (
                            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full ml-2">
                              {convo.unread}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 truncate">{convo.lastMessage}</p>
                        <p className="text-xs text-gray-500 mt-1">{convo.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat View */}
            {currentChat && (
              <div className="lg:col-span-3 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
                {/* Chat Header */}
                <div className="p-6 border-b flex items-center gap-3">
                  <span className="text-3xl">{currentChat.avatar}</span>
                  <div>
                    <h2 className="text-xl font-display font-bold">{currentChat.name}</h2>
                    <p className="text-sm text-gray-600">Last active 5 minutes ago</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-4 py-3 rounded-lg ${
                          msg.sender === 'You'
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'You' ? 'text-white/70' : 'text-gray-600'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-6 border-t">
                  <div className="flex gap-3">
                    <button className="p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition">
                      📎
                    </button>
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />
                    <button className="px-6 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Messages;
