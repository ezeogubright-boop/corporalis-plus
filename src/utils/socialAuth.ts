// Social Authentication Configuration and Utilities

// Note: Environment variables should be accessed directly or via build-time configuration
// For development/testing, use .env file with VITE_ prefix
export const OAUTH_CONFIG = {
  GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID',
  FACEBOOK_APP_ID: 'YOUR_FACEBOOK_APP_ID',
  // Apple Sign In is configured at the application level
};

// Google OAuth Response Handler
export const handleGoogleSuccess = (credentialResponse: any) => {
  try {
    // credentialResponse.credential contains the JWT token
    const token = credentialResponse.credential;
    
    // Store the token (in production, send to backend for verification)
    localStorage.setItem('authToken', token);
    localStorage.setItem('authProvider', 'google');
    
    // Decode JWT to get user info (for demo purposes)
    const decoded = parseJwt(token);
    const userData = {
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
      provider: 'google',
      id: decoded.sub,
    };
    
    // Store user data
    localStorage.setItem('userData', JSON.stringify(userData));
    
    return userData;
  } catch (error) {
    console.error('Google auth error:', error);
    throw error;
  }
};

export const handleGoogleError = () => {
  console.error('Google Sign-In failed');
};

// Facebook OAuth Response Handler
export const handleFacebookSuccess = (response: any) => {
  try {
    const userData = {
      email: response.email,
      name: response.name,
      picture: response.picture?.data?.url,
      provider: 'facebook',
      id: response.userID,
      accessToken: response.accessToken,
    };
    
    // Store token and user data
    localStorage.setItem('authToken', response.accessToken);
    localStorage.setItem('authProvider', 'facebook');
    localStorage.setItem('userData', JSON.stringify(userData));
    
    return userData;
  } catch (error) {
    console.error('Facebook auth error:', error);
    throw error;
  }
};

export const handleFacebookError = (error: any) => {
  console.error('Facebook Sign-In failed:', error);
};

// Apple Sign In Handler
export const handleAppleSignIn = (response: any) => {
  try {
    const userData = {
      email: response.user?.email || response.email,
      name: response.user?.name?.firstName + ' ' + response.user?.name?.lastName || '',
      provider: 'apple',
      id: response.user?.email,
      identityToken: response.authorization.id_token,
    };
    
    localStorage.setItem('authToken', response.authorization.id_token);
    localStorage.setItem('authProvider', 'apple');
    localStorage.setItem('userData', JSON.stringify(userData));
    
    return userData;
  } catch (error) {
    console.error('Apple auth error:', error);
    throw error;
  }
};

export const handleAppleError = (error: any) => {
  console.error('Apple Sign-In failed:', error);
};

// JWT Parser (for Google token decoding)
function parseJwt(token: string) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing JWT:', error);
    return {};
  }
}

// Check if user is authenticated via social provider
export const isUserAuthenticated = () => {
  return (
    localStorage.getItem('authToken') && localStorage.getItem('authProvider')
  );
};

// Get authenticated user data
export const getAuthenticatedUser = () => {
  const userData = localStorage.getItem('userData');
  return userData ? JSON.parse(userData) : null;
};

// Logout function
export const handleLogout = () => {
  localStorage.removeItem('authToken');
  localStorage.removeItem('authProvider');
  localStorage.removeItem('userData');
  localStorage.removeItem('userLoggedIn');
  
  // Optionally revoke tokens with providers
  // This would require additional SDK calls for each provider
};
