import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+1 (555) 000-0000',
    dateOfBirth: '1990-01-15',
    gender: 'male',
  });
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    showProgress: true,
    showEmail: false,
    allowMessages: true,
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailReminders: true,
    smsReminders: false,
    workoutNotifications: true,
    promotionalEmails: false,
  });
  const [billingData] = useState({
    currentPlan: 'Professional',
    nextBillingDate: '2024-02-15',
    paymentMethod: 'Visa ending in 4242',
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handlePrivacyToggle = (key: string) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: typeof prev[key as keyof typeof prev] === 'boolean' 
        ? !prev[key as keyof typeof prev] 
        : prev[key as keyof typeof prev],
    }));
  };

  const handleNotificationToggle = (key: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev],
    }));
  };

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-display font-bold">Settings</h1>
          <p className="text-gray-700">Manage your account and preferences</p>
        </div>
      </section>

      {/* Settings Container */}
      <section className="py-20 bg-gray-50 min-h-[800px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-8">
                <nav className="flex flex-col">
                  {['profile', 'privacy', 'notifications', 'billing'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-left font-body font-semibold transition ${
                        activeTab === tab
                          ? 'bg-primary text-white border-l-4 border-primary'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {tab === 'profile' && '👤 Profile'}
                      {tab === 'privacy' && '🔒 Privacy'}
                      {tab === 'notifications' && '🔔 Notifications'}
                      {tab === 'billing' && '💳 Billing'}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold mb-8">Profile Settings</h2>

                  <div className="space-y-8">
                    {/* Profile Picture */}
                    <div>
                      <h3 className="font-body font-semibold text-lg mb-4">Profile Picture</h3>
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center text-white text-4xl">
                          👤
                        </div>
                        <div>
                          <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-green-600 transition font-body font-semibold mb-2 block">
                            Upload New Photo
                          </button>
                          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-body font-semibold">
                            Remove Photo
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div>
                      <h3 className="font-body font-semibold text-lg mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            name="dateOfBirth"
                            value={profileData.dateOfBirth}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-body font-semibold mb-2">
                            Gender
                          </label>
                          <select
                            name="gender"
                            value={profileData.gender}
                            onChange={handleProfileChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button
                      onClick={handleSaveProfile}
                      className="w-full bg-primary text-white font-body font-semibold py-3 rounded-lg hover:bg-green-600 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold mb-8">Privacy Settings</h2>

                  <div className="space-y-6">
                    {/* Profile Visibility */}
                    <div className="pb-6 border-b">
                      <h3 className="font-body font-semibold text-lg mb-4">Profile Visibility</h3>
                      <select
                        value={privacySettings.profileVisibility}
                        onChange={(e) => setPrivacySettings(prev => ({ ...prev, profileVisibility: e.target.value }))}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                      >
                        <option value="public">Public - Everyone can see my profile</option>
                        <option value="friends">Friends Only - Only friends can see</option>
                        <option value="private">Private - Only I can see it</option>
                      </select>
                    </div>

                    {/* Toggle Options */}
                    <div className="pb-6 border-b">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Show Fitness Progress</p>
                          <p className="text-sm text-gray-600 mt-1">Allow others to see your progress and achievements</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${privacySettings.showProgress ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${privacySettings.showProgress ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.showProgress}
                          onChange={() => handlePrivacyToggle('showProgress')}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="pb-6 border-b">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Show Email Address</p>
                          <p className="text-sm text-gray-600 mt-1">Make your email visible to other members</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${privacySettings.showEmail ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${privacySettings.showEmail ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.showEmail}
                          onChange={() => handlePrivacyToggle('showEmail')}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div>
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Allow Messages</p>
                          <p className="text-sm text-gray-600 mt-1">Let others send you direct messages</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${privacySettings.allowMessages ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${privacySettings.allowMessages ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={privacySettings.allowMessages}
                          onChange={() => handlePrivacyToggle('allowMessages')}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold mb-8">Notification Settings</h2>

                  <div className="space-y-6">
                    {/* Email Reminders */}
                    <div className="pb-6 border-b">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Email Reminders</p>
                          <p className="text-sm text-gray-600 mt-1">Receive email reminders for scheduled workouts</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${notificationSettings.emailReminders ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${notificationSettings.emailReminders ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.emailReminders}
                          onChange={() => handleNotificationToggle('emailReminders')}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* SMS Reminders */}
                    <div className="pb-6 border-b">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">SMS Reminders</p>
                          <p className="text-sm text-gray-600 mt-1">Receive text message reminders (may incur charges)</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${notificationSettings.smsReminders ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${notificationSettings.smsReminders ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.smsReminders}
                          onChange={() => handleNotificationToggle('smsReminders')}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Workout Notifications */}
                    <div className="pb-6 border-b">
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Workout Notifications</p>
                          <p className="text-sm text-gray-600 mt-1">Get updates on your progress and achievements</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${notificationSettings.workoutNotifications ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${notificationSettings.workoutNotifications ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.workoutNotifications}
                          onChange={() => handleNotificationToggle('workoutNotifications')}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {/* Promotional Emails */}
                    <div>
                      <label className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition">
                        <div>
                          <p className="font-body font-semibold">Promotional Emails</p>
                          <p className="text-sm text-gray-600 mt-1">Receive special offers and promotional content</p>
                        </div>
                        <div className={`w-12 h-6 rounded-full transition ${notificationSettings.promotionalEmails ? 'bg-primary' : 'bg-gray-300'}`}>
                          <div className={`w-5 h-5 bg-white rounded-full shadow transition transform ${notificationSettings.promotionalEmails ? 'translate-x-6' : 'translate-x-1'} mt-0.5`}></div>
                        </div>
                        <input
                          type="checkbox"
                          checked={notificationSettings.promotionalEmails}
                          onChange={() => handleNotificationToggle('promotionalEmails')}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Billing Tab */}
              {activeTab === 'billing' && (
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-3xl font-display font-bold mb-8">Billing & Subscription</h2>

                  <div className="space-y-8">
                    {/* Current Plan */}
                    <div className="p-6 bg-gradient-to-r from-primary/10 to-blue-200 rounded-lg border border-primary/20">
                      <h3 className="font-body font-semibold text-lg mb-4">Current Plan</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-700">Plan Name</span>
                          <span className="font-body font-semibold">{billingData.currentPlan}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Renewal Date</span>
                          <span className="font-body font-semibold">{billingData.nextBillingDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-700">Status</span>
                          <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-body font-semibold">
                            Active
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-body font-semibold text-lg mb-4">Payment Method</h3>
                      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">💳</div>
                          <div>
                            <p className="font-body font-semibold">{billingData.paymentMethod}</p>
                            <p className="text-sm text-gray-600">Default payment method</p>
                          </div>
                        </div>
                        <button className="text-primary font-body font-semibold hover:underline">
                          Edit
                        </button>
                      </div>
                    </div>

                    {/* Billing History */}
                    <div>
                      <h3 className="font-body font-semibold text-lg mb-4">Billing History</h3>
                      <div className="space-y-2">
                        {[
                          { date: '2024-01-15', amount: '$59.99', status: 'Paid' },
                          { date: '2023-12-15', amount: '$59.99', status: 'Paid' },
                          { date: '2023-11-15', amount: '$59.99', status: 'Paid' },
                        ].map((invoice, index) => (
                          <div key={index} className="p-4 bg-gray-50 rounded-lg flex justify-between items-center">
                            <div>
                              <p className="font-body font-semibold">{invoice.date}</p>
                              <p className="text-sm text-gray-600">{invoice.amount}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-body font-semibold">
                                {invoice.status}
                              </span>
                              <button className="text-primary font-body font-semibold hover:underline">
                                Download
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 pt-6 border-t">
                      <button className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-body font-semibold hover:bg-green-600 transition">
                        Upgrade Plan
                      </button>
                      <button className="flex-1 px-6 py-3 border border-red-300 text-red-600 rounded-lg font-body font-semibold hover:bg-red-50 transition">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Settings;
