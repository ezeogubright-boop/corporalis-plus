import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-display font-bold mb-12">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-display font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              At Corporalis, we are committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Account information (name, email, password)</li>
              <li>Profile information (age, fitness level, goals)</li>
              <li>Payment information (processed securely)</li>
              <li>Communications you send us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide and improve our services</li>
              <li>Personalize your experience</li>
              <li>Process payments and send related information</li>
              <li>Send you updates and promotional materials</li>
              <li>Respond to your inquiries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">5. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share 
              information with trusted partners who assist us in operating our website and conducting 
              our business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong> privacy@corporalis.com<br />
              <strong>Address:</strong> 123 Fitness St, NY 10001
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-4">8. Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page.
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-primary p-6 mt-12">
            <p className="text-gray-700">
              <strong>Last Updated:</strong> December 29, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
