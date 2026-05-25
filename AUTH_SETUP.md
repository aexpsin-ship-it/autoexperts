# AutoExperts Authentication Setup Guide

## Overview
This guide explains how to set up and use the improved AutoExperts login and signup system.

## Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account or local MongoDB instance
- npm or yarn package manager

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- `axios` - HTTP client for API calls
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT token generation
- `mongoose` - MongoDB ODM

### 2. Configure Environment Variables

Update `.env.local` with your MongoDB connection string:

```env
# Database Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/autoexperts?retryWrites=true&w=majority

# JWT Secret (use a secure random string in production)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Run Development Server
```bash
npm run dev
```

The application will start at `http://localhost:3000`

## Features

### Authentication System
✅ **Login Page**
- Email and password authentication
- Form validation with real-time error messages
- Password visibility toggle
- Loading states and success notifications
- Persistent session via JWT cookies

✅ **Signup Page**
- User registration with name, email, and password
- Password confirmation field
- Form field validation
- Duplicate email detection
- Automatic redirect to login after signup

✅ **Improvements Made**
- Comprehensive form validation
- Field-level error messages with icons
- Success notifications with visual feedback
- Better UI/UX with gradient design
- Improved accessibility with labels and placeholders
- Password strength requirements (minimum 6 characters)
- Email format validation
- Loading states and disabled buttons
- Automatic error clearing on input change
- Responsive design for mobile and desktop

### API Routes
- `/api/auth/login` - User login
- `/api/auth/register` - User registration
- `/api/bookings` - Booking management
- `/api/contact` - Contact form submissions
- `/api/ride` - Ride bookings

### Security Features
- Password hashing with bcryptjs
- JWT token-based authentication
- Middleware protection for admin routes
- Token expiration (24 hours)
- Secure cookie storage
- Input validation on both client and server

## File Structure

```
src/app/
├── api/                          # API routes (Fixed: moved from "api copy")
│   ├── auth/
│   │   ├── login/route.js
│   │   └── register/route.js
│   ├── bookings/route.js
│   ├── contact/route.js
│   ├── ride/route.js
│   ├── lib/
│   │   ├── db.js               # MongoDB connection
│   │   └── axiosInstance.js    # Axios configuration
│   └── models/
│       ├── User.js
│       ├── BookingChauffeur.js
│       ├── BookingRide.js
│       └── Contact.js
├── admin/
│   ├── (auth)/
│   │   └── login/
│   │       └── page.jsx         # Improved login/signup page
│   └── dashboard/
│       └── page.jsx
└── (site)/
    └── ...
```

## Testing the Authentication

### Test Login
1. Go to `http://localhost:3000/admin/login`
2. Click "Sign Up" tab
3. Fill in the form with:
   - Name: Test Admin
   - Email: admin@test.com
   - Password: Test123
   - Confirm Password: Test123
4. Click "Create Account"
5. You'll be redirected to login
6. Enter your credentials and click "Login"
7. You should be redirected to `/admin/dashboard`

### Validation Testing
- Try submitting empty fields - you'll see error messages
- Try entering invalid email - error message appears
- Try passwords shorter than 6 characters - error message appears
- Try mismatched passwords - error message appears
- Errors clear when you start typing in the field

## Troubleshooting

### Issue: "MongoDB connection failed"
**Solution:** 
- Check your MONGO_URI in .env.local
- Ensure MongoDB cluster is running
- Verify your IP address is whitelisted in MongoDB Atlas

### Issue: "Token is invalid"
**Solution:**
- Clear browser cookies
- Check JWT_SECRET matches between requests
- Ensure JWT_SECRET is set in .env.local

### Issue: "Cannot find module '@/app/api/lib/axiosInstance'"
**Solution:**
- Ensure you've renamed or moved the "api copy" folder to "api"
- Restart the development server

### Issue: Login succeeds but redirect doesn't work
**Solution:**
- Check browser console for errors
- Ensure /admin/dashboard exists and is accessible
- Check middleware configuration

## Production Considerations

1. **Change JWT_SECRET** to a secure random string
2. **Use HTTPS** for all communications
3. **Set secure cookie flags** in production
4. **Implement rate limiting** on auth endpoints
5. **Add email verification** for new accounts
6. **Implement password reset** functionality
7. **Use environment-specific settings**
8. **Enable CORS properly** if using separate frontend/backend
9. **Add logging and monitoring**
10. **Implement refresh token rotation**

## API Documentation

### POST /api/auth/login
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```
Returns: `{ success: true, token: "...", user: {...} }`

### POST /api/auth/register
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
Returns: `{ success: true, message: "Account created successfully" }`

## Next Steps

1. Create a "Forgot Password" page
2. Add email verification
3. Implement user profile management
4. Add role-based access control (RBAC)
5. Create admin dashboard for user management
6. Add 2FA (Two-Factor Authentication)
7. Implement OAuth integration (Google, GitHub)
8. Add session management and logout functionality

## Support

For issues or questions, check:
- MongoDB Atlas documentation: https://docs.atlas.mongodb.com/
- Next.js documentation: https://nextjs.org/docs
- JWT documentation: https://jwt.io/
