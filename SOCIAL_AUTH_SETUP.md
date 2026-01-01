# Social Authentication Setup Guide

This guide will help you configure Google, Facebook, and Apple Sign-In for your RX Gym application.

## Overview
The application now supports real-time authentication with:
- ✅ Google OAuth
- ✅ Facebook Login
- ✅ Apple Sign In

## Prerequisites
1. Node.js and npm installed
2. Access to Google, Facebook, and Apple developer consoles
3. Your application domain/localhost setup

---

## 1. Google OAuth Setup

### Step 1: Create Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Select "Web application"
6. Add authorized redirect URIs:
   - `http://localhost:5173` (development)
   - `https://yourdomain.com` (production)
7. Copy your **Client ID**

### Step 2: Add to Environment
```bash
# .env file (create if doesn't exist)
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
```

---

## 2. Facebook Login Setup

### Step 1: Create Facebook App
1. Go to [Facebook Developers](https://developers.facebook.com)
2. Create a new app (or use existing)
3. Select "Consumer" app type
4. Add "Facebook Login" product
5. Configure Settings → Basic to get your **App ID**
6. Add App Domains:
   - `localhost` (development)
   - `yourdomain.com` (production)
7. Configure OAuth Redirect URIs in Facebook Login settings

### Step 2: Add to Environment
```bash
# .env file
REACT_APP_FACEBOOK_APP_ID=your_facebook_app_id_here
```

---

## 3. Apple Sign In Setup

### Step 1: Register with Apple
1. Go to [Apple Developer](https://developer.apple.com)
2. Create an App ID for your application
3. Enable "Sign in with Apple" capability
4. Create a Service ID for your web domain
5. Register Redirect URIs:
   - `https://yourdomain.com/` (production)
   - For development, use ngrok or similar to create HTTPS tunnel

### Step 2: Generate Keys
1. Create a Private Key for Apple Sign In
2. Download the key file (save securely)
3. Note your **Team ID** and **Key ID**

### Step 3: Add to Environment
```bash
# .env file
REACT_APP_APPLE_TEAM_ID=your_apple_team_id
REACT_APP_APPLE_KEY_ID=your_apple_key_id
```

---

## 4. Install Dependencies

```bash
npm install
```

This will install:
- `@react-oauth/google` - Google OAuth integration
- `react-facebook-login` - Facebook login integration

---

## 5. Configuration Files

### Environment File (.env)
Create a `.env` file in the root directory:

```bash
# Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your_client_id

# Facebook
REACT_APP_FACEBOOK_APP_ID=your_app_id

# Apple (optional for production)
REACT_APP_APPLE_TEAM_ID=your_team_id
REACT_APP_APPLE_KEY_ID=your_key_id
```

---

## 6. How It Works

### Login Flow:
1. User clicks social auth button (Google, Facebook, or Apple)
2. User is redirected to provider's authentication page
3. User authorizes the application
4. Provider returns user data and access token
5. Application validates token and stores user data
6. User is redirected to dashboard

### Data Stored Locally:
```javascript
{
  authToken: "provider_token",
  authProvider: "google|facebook|apple",
  userData: {
    email: "user@example.com",
    name: "User Name",
    picture: "profile_picture_url",
    provider: "google|facebook|apple",
    id: "provider_user_id"
  }
}
```

---

## 7. Testing Locally

### For Google:
- Use `localhost:5173` in your dev environment
- Google's OAuth will work with localhost

### For Facebook:
- Use `localhost` as an app domain
- Facebook's OAuth will work with localhost

### For Apple:
- Apple requires HTTPS even for localhost
- Use `ngrok` to create HTTPS tunnel:
  ```bash
  ngrok http 5173
  https://abc123.ngrok.io
  ```
- Register the ngrok URL in Apple Developer settings

---

## 8. Production Checklist

- [ ] Update `.env` with production credentials
- [ ] Enable HTTPS on production domain
- [ ] Register production domain with all three providers
- [ ] Test authentication flows
- [ ] Configure CORS settings if backend is separate
- [ ] Set up secure token storage (avoid localStorage for sensitive data)
- [ ] Implement backend token verification
- [ ] Add logout functionality
- [ ] Test with different user accounts

---

## 9. Security Recommendations

1. **Never commit `.env` file** - Add to `.gitignore`
2. **Validate tokens on backend** - Don't rely only on client-side validation
3. **Use HTTPS in production** - Required by all providers
4. **Implement refresh token logic** - Handle token expiration
5. **Store tokens securely** - Consider using HttpOnly cookies instead of localStorage
6. **Implement logout** - Clear stored tokens properly
7. **Rate limit auth attempts** - Prevent brute force attacks

---

## 10. Troubleshooting

### Google OAuth not working:
- Check if Client ID matches `.env`
- Verify `http://localhost:5173` is in authorized URIs
- Clear browser cache and cookies
- Check browser console for CORS errors

### Facebook Login failing:
- Verify App ID in `.env`
- Check if `localhost` is in App Domains
- Ensure Valid OAuth Redirect URIs are configured
- Check if app is in development mode

### Apple Sign In issues:
- Apple requires HTTPS (use ngrok for localhost)
- Verify domain is registered in Apple Developer
- Check Team ID and Key ID are correct
- Service ID must match your web domain

---

## 11. API Reference

### Social Auth Utilities
Located in `src/utils/socialAuth.ts`:

```typescript
// Check if user is authenticated
isUserAuthenticated(): boolean

// Get authenticated user data
getAuthenticatedUser(): UserData | null

// Logout
handleLogout(): void

// Individual handlers
handleGoogleSuccess(response): UserData
handleFacebookSuccess(response): UserData
handleAppleSignIn(response): UserData
```

---

## Support

For issues with:
- **Google**: [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- **Facebook**: [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login)
- **Apple**: [Apple Sign in with Apple Documentation](https://developer.apple.com/sign-in-with-apple)

