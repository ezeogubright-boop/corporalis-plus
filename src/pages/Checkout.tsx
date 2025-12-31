import React, { useState, useEffect } from 'react';

export const Checkout: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Load theme preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cryptoType: 'bitcoin',
    walletAddress: '',
    paypalEmail: '',
    terms: false,
  });

  const planPrices: { [key: string]: number } = {
    basic: 29,
    professional: 59,
    premium: 99,
    elite: 199
  };

  const planNames: { [key: string]: string } = {
    basic: 'Basic Plan',
    professional: 'Professional Plan',
    premium: 'Premium Plan',
    elite: 'Elite Plan'
  };

  const cryptoRates: { [key: string]: number } = {
    bitcoin: 45000,
    ethereum: 2500,
    usdc: 1,
    usdt: 1,
    solana: 200
  };

  const cryptoSymbols: { [key: string]: string } = {
    bitcoin: 'BTC',
    ethereum: 'ETH',
    usdc: 'USDC',
    usdt: 'USDT',
    solana: 'SOL'
  };

  const price = planPrices[selectedPlan];
  const tax = (price * 0.08).toFixed(2);
  const total = (price + parseFloat(tax)).toFixed(2);
  const cryptoAmount = (parseFloat(total) / cryptoRates[formData.cryptoType]).toFixed(8);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as any;
    
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else if (name === 'cardNumber') {
      const cleaned = value.replace(/\s/g, '');
      const formatted = cleaned.replace(/(\d{4})/g, '$1 ').trim();
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length >= 2) {
        formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'cvv') {
      const cleaned = value.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, [name]: cleaned }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.terms) {
      alert('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    console.log('Payment processed:', { selectedPlan, paymentMethod, formData });
    setShowSuccessModal(true);
    
    setTimeout(() => {
      setShowSuccessModal(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        cryptoType: 'bitcoin',
        walletAddress: '',
        paypalEmail: '',
        terms: false,
      });
      setSelectedPlan('basic');
      setPaymentMethod('card');
    }, 3000);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-body antialiased transition-colors duration-300 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(200, 200, 200, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 200, 200, 0.3) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>
      
      {/* Navigation */}
      <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <i className="bx bxs-globe text-text-main-light dark:text-text-main-dark text-2xl sm:text-3xl"></i>
          <span className="font-display font-bold text-lg sm:text-xl text-text-main-light dark:text-text-main-dark">Corporalis</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            type="button"
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary/10 transition-colors text-text-main-light dark:text-text-main-dark" 
            title="Toggle dark mode"
          >
            <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'} text-2xl`}></i>
          </button>
          <a href="/login" className="bg-primary hover:bg-opacity-90 text-white dark:text-black font-semibold px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base rounded-full transition-transform active:scale-95 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40">
            Log in
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-text-main-light dark:text-text-main-dark mb-4 animate-fade-in-up">
            Complete Your <span className="text-primary">Purchase</span>
          </h1>
          <p className="text-text-muted-light dark:text-text-muted-dark text-sm sm:text-base max-w-2xl mx-auto animate-fade-in-up delay-100">
            Secure checkout - your payment information is encrypted and safe
          </p>
        </section>

        {/* Checkout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 auto-rows-max lg:auto-rows-auto">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Plan Selection */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-6 flex items-center gap-3">
                  <i className="bx bx-package text-primary text-3xl"></i>
                  Select Plan
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(planPrices).map(([key, price]) => (
                    <label
                      key={key}
                      className={`cursor-pointer border-2 rounded-lg p-4 flex items-start gap-4 transition-all ${
                        selectedPlan === key
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-300 dark:border-gray-700 hover:border-primary'
                      }`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={key}
                        checked={selectedPlan === key}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                        className="mt-1 w-4 h-4 text-primary cursor-pointer"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-text-main-light dark:text-text-main-dark capitalize">{key} Plan</p>
                        <p className="text-primary font-bold text-lg">${price}<span className="text-sm text-text-muted-light dark:text-text-muted-dark">/month</span></p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Billing Information */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-100">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-6 flex items-center gap-3">
                  <i className="bx bx-user text-primary text-3xl"></i>
                  Billing Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">State/Province</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Zip/Postal Code</label>
                      <input
                        type="text"
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg animate-fade-in-up delay-200">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-6 flex items-center gap-3">
                  <i className="bx bx-credit-card text-primary text-3xl"></i>
                  Payment Method
                </h2>
                
                {/* Payment Method Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {(['card', 'paypal', 'crypto'] as const).map((method) => (
                    <label
                      key={method}
                      className={`cursor-pointer border-2 rounded-lg p-4 flex items-center gap-3 transition-all ${
                        paymentMethod === method
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-300 dark:border-gray-700 hover:border-primary'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-primary cursor-pointer"
                      />
                      <i className={`${method === 'card' ? 'bx bx-credit-card' : method === 'paypal' ? 'fab fa-paypal' : 'bx bx-bitcoin'} text-primary text-2xl`}></i>
                      <span className="font-semibold text-text-main-light dark:text-text-main-dark">{method === 'card' ? 'Credit/Debit Card' : method === 'paypal' ? 'PayPal' : 'Crypto'}</span>
                    </label>
                  ))}
                </div>

                {/* Card Information */}
                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required={paymentMethod === 'card'}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required={paymentMethod === 'card'}
                        maxLength={19}
                        placeholder="4532 1234 5678 9010"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required={paymentMethod === 'card'}
                          maxLength={5}
                          placeholder="MM/YY"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required={paymentMethod === 'card'}
                          maxLength={4}
                          placeholder="123"
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* PayPal Info */}
                {paymentMethod === 'paypal' && (
                  <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
                    <i className="fab fa-paypal text-primary text-4xl mb-3 block"></i>
                    <p className="text-text-main-light dark:text-text-main-dark font-semibold">You will be redirected to PayPal to complete your payment securely.</p>
                  </div>
                )}

                {/* Crypto Info */}
                {paymentMethod === 'crypto' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Select Cryptocurrency</label>
                      <select
                        name="cryptoType"
                        value={formData.cryptoType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="bitcoin">Bitcoin (BTC)</option>
                        <option value="ethereum">Ethereum (ETH)</option>
                        <option value="usdc">USD Coin (USDC)</option>
                        <option value="usdt">Tether (USDT)</option>
                        <option value="solana">Solana (SOL)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-text-main-light dark:text-text-main-dark font-semibold mb-2">Your Wallet Address</label>
                      <input
                        type="text"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleInputChange}
                        placeholder="0x742d35Cc6634C0532925a3b844Bc9e7595f..."
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-6">
                      <div className="flex gap-3">
                        <i className="bx bx-bitcoin text-primary text-4xl flex-shrink-0 mt-1"></i>
                        <div>
                          <p className="text-text-main-light dark:text-text-main-dark font-bold mb-2">Crypto Payment Instructions</p>
                          <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-3">Send exactly <span className="font-bold text-primary">{cryptoAmount}</span> <span className="font-bold text-primary">{cryptoSymbols[formData.cryptoType]}</span> to the address below:</p>
                          <div className="bg-background-light dark:bg-background-dark p-3 rounded font-mono text-xs text-text-main-light dark:text-text-main-dark break-all">
                            3J98t1WpEZ73CNmYviecrnyiWrnqRhWNLy
                          </div>
                          <p className="text-text-muted-light dark:text-text-muted-dark text-xs mt-3">Your subscription will be activated once the transaction is confirmed on the blockchain (typically within 10-30 minutes).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 animate-fade-in-up delay-300">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-5 h-5 text-primary cursor-pointer"
                />
                <label htmlFor="terms" className="text-text-main-light dark:text-text-main-dark text-sm cursor-pointer">
                  I agree to the <a href="/terms" className="text-primary font-semibold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary font-semibold hover:underline">Privacy Policy</a>
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 sm:p-8 shadow-lg sticky top-6 z-10 h-fit animate-fade-in-up delay-200">
              <h2 className="font-display text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-6 flex items-center gap-3">
                <i className="bx bx-receipt text-primary text-3xl"></i>
                Order Summary
              </h2>

              {/* Plan Details */}
              <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-text-main-light dark:text-text-main-dark font-semibold capitalize">{planNames[selectedPlan]}</span>
                  <span className="text-primary font-bold text-xl">${price}</span>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark text-sm mb-4">Billed monthly. Cancel anytime.</p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-text-main-light dark:text-text-main-dark text-sm">
                    <i className="bx bx-check-circle text-primary mr-2"></i>
                    7-day free trial included
                  </p>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <div className="flex justify-between text-text-main-light dark:text-text-main-dark">
                  <span>Subtotal</span>
                  <span>${price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-text-main-light dark:text-text-main-dark">
                  <span>Tax (estimated)</span>
                  <span>${tax}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
                <span className="font-display text-xl font-bold text-text-main-light dark:text-text-main-dark">Total</span>
                <span className="font-display text-3xl font-bold text-primary">${total}</span>
              </div>

              {/* Security Badge */}
              <div className="bg-primary/10 rounded-lg p-4 mb-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <i className="bx bx-lock text-primary text-xl"></i>
                  <span className="font-semibold text-text-main-light dark:text-text-main-dark text-sm">Secure Payment</span>
                </div>
                <p className="text-text-muted-light dark:text-text-muted-dark text-xs">Your payment is encrypted and secure</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-4 rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mb-4"
              >
                <i className="bx bx-lock text-xl"></i>
                Complete Purchase
              </button>

              {/* Back Link */}
              <a href="/pricing" className="w-full text-center text-primary hover:text-opacity-80 transition-colors font-semibold block">
                ← Back to Pricing
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 sm:p-12 text-center max-w-md animate-scale-in">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bx bx-check text-primary text-5xl"></i>
            </div>
            <h2 className="font-display text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-3">
              Order Confirmed!
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
              Your subscription has been activated successfully. Check your email for confirmation and login details.
            </p>
            <div className="bg-primary/10 rounded-lg p-4 mb-8">
              <p className="text-text-main-light dark:text-text-main-dark font-semibold text-sm">
                Your 7-day free trial starts now!
              </p>
            </div>
            <a href="/dashboard" className="w-full bg-primary hover:bg-opacity-90 text-white dark:text-black font-bold py-3 rounded-lg transition-transform active:scale-95 block mb-3">
              Go to Dashboard
            </a>
            <a href="/" className="w-full text-primary hover:text-opacity-80 font-semibold transition-colors">
              Return to Home
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-200 dark:border-gray-800 mt-20 sm:mt-32 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
              © 2025 Corporalis. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Facebook">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Twitter">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors" title="LinkedIn">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left">
            <a href="/privacy" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
            <a href="/contact" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
        input, select {
          transition: border-color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Checkout;
