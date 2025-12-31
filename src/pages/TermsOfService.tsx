import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-12">Terms of Service</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">2. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              When you create an account, you must provide information that is accurate, complete, 
              and current. You are responsible for maintaining the confidentiality of your account 
              and password.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 ml-4">
              <p className="text-gray-700">
                <strong>⚠️ Warning:</strong> You are responsible for all activities that occur 
                under your account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">3. Service Usage</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use this website for any unlawful purposes or in any way that could 
              damage, disable, or impair the service. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Obscene or offensive comments</li>
              <li>Disrupting the normal flow of dialogue</li>
              <li>Attempting to gain unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-gray-700">
              This website is provided on an "as is" and "as available" basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties, including 
              without limitation, implied warranties or conditions of merchantability, fitness for 
              a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Corporalis or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit) arising out of the use or 
              inability to use the materials on this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">6. Pricing and Payments</h2>
            <p className="text-gray-700 mb-4">
              All prices are subject to change without notice. We reserve the right to refuse service 
              to anyone. Payment terms are due in full at the time of order.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Monthly subscriptions renew automatically</li>
              <li>You can cancel anytime before the renewal date</li>
              <li>Refunds are issued according to our refund policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">7. Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend your account immediately, without prior notice or liability, 
              for any reason whatsoever, including if you breach the Terms. Upon termination, your 
              right to use the Service will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">8. Third-Party Links and Modifications</h2>
            <p className="text-gray-700 mb-4">
              This website may contain links to third-party websites. We are not responsible for the 
              content, accuracy, or practices of these external sites.
            </p>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. Your continued use of the website 
              following any modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 mt-12">
            <p className="text-gray-700">
              <strong>⚠️ Important Notice:</strong> Before starting any fitness program, consult with 
              a healthcare provider. Fitness activities carry inherent risks of injury.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-primary p-6 mt-6">
            <p className="text-gray-700">
              <strong>Last Updated:</strong> December 29, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
