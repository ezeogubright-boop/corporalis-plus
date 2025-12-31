# Additional Pages for Conversion

## Pages Still Available in Frontend Folder

The following 11 HTML pages from your `Frontend/` folder are ready to be converted to React components following the same pattern as the completed pages.

---

## 1. **book-session.html** → BookSession Component

**Purpose**: Schedule coaching sessions with coaches  
**Features**:
- Coach selection with images and ratings
- Session type selection (One-on-One, Group, Consultation)
- Date & time picker
- Training focus checkboxes
- Booking summary sidebar
- Success confirmation modal

**Routes**: `/book-session`

---

## 2. **bookings.html** → Bookings Component

**Purpose**: View and manage scheduled sessions  
**Features**:
- Filter tabs (All, Upcoming, Completed)
- Booking cards with session details
- Status badges
- Action buttons (Start/Join, Edit, Cancel)
- Time and location information
- Difficulty indicators

**Routes**: `/bookings`

---

## 3. **checkout.html** → Checkout Component

**Purpose**: Process subscription payments  
**Features**:
- Plan selection
- Billing information form
- Payment method selection (Card, PayPal, Crypto)
- Dynamic form fields based on payment type
- Order summary with pricing breakdown
- Terms acceptance checkbox
- Success modal after payment

**Routes**: `/checkout`

---

## 4. **consultation.html** → Consultation Component

**Purpose**: Schedule free consultation sessions  
**Features**:
- Consultation form (name, email, phone, type, date, time, message)
- Benefits sidebar
- Why book section
- 3 testimonial cards with 5-star ratings
- FAQ section with accordion
- Form validation

**Routes**: `/consultation`

---

## 5. **dashboard.html** → Dashboard Component

**Purpose**: Main user dashboard after login  
**Features**:
- Personalized welcome message
- 4 stat cards (This Week workouts, Calories, Streak, Weight)
- Current program progress card
- Upcoming events sidebar
- Sidebar navigation (7 menu items)
- Mobile hamburger menu

**Routes**: `/dashboard`

---

## 6. **enroll.html** → Enroll Component

**Purpose**: Enroll in fitness programs  
**Features**:
- 3-step enrollment form
- Program selection (6 radio options)
- Personal info form (name, email, phone, age, gender)
- Fitness assessment (level, goals)
- Health & preferences (notes, training days)
- Enrollment summary sidebar
- Terms agreement checkbox
- Success modal

**Routes**: `/enroll`

---

## 7. **goals.html** → Goals Component

**Purpose**: Set and track fitness goals  
**Features**:
- "Set New Goal" button
- Filter tabs (All, Active, Achieved)
- Goal cards with progress bars
- Percentage indicators
- Current/Progress/Remaining display
- Edit/Delete action buttons
- Goal creation modal
- Achieved goals section

**Routes**: `/goals`

---

## 8. **messages.html** → Messages Component

**Purpose**: Chat/messaging interface  
**Features**:
- 2-column layout (conversations + chat)
- Conversation list with search
- Avatar, name, last message preview, timestamp
- Chat view with message history
- Message bubbles (sent/received styling)
- Message input field
- Attachment button
- Responsive mobile layout

**Routes**: `/messages`

---

## 9. **my-programs.html** → MyPrograms Component

**Purpose**: View enrolled programs  
**Features**:
- "Add Program" button
- Filter tabs (All, Active, Completed)
- Active programs grid
- Program cards with:
  - Duration
  - Progress bar
  - Workout counts
  - "Continue" button
- Completed programs section
- "Restart" option for completed programs

**Routes**: `/my-programs`

---

## 10. **progress.html** → Progress Component

**Purpose**: Track fitness progress with charts  
**Features**:
- 4 key metric cards (Total workouts, hours, calories, weight lost)
- Chart.js integration for data visualization
- Weekly workouts chart
- Weekly calories chart
- Weight tracking section
- Weight stats grid (Starting, Current, Goal)
- Personal records section (4 cards)
- Sidebar navigation

**Routes**: `/progress`

---

## 11. **settings.html** → Settings Component

**Purpose**: User account and preference settings  
**Features**:
- 4 setting tabs:
  1. Profile (Photo upload, personal info, fitness profile)
  2. Privacy (Profile visibility, show progress, allow messages, data collection)
  3. Notifications (Workout reminders, coach messages, promotions, weekly summary)
  4. Billing (Current plan, payment method, billing history)
- Toggle switches for boolean settings
- Form inputs
- Save changes button
- Sidebar navigation

**Routes**: `/settings`

---

## 🛠️ How to Convert Each Page

### Template to Follow:

```tsx
// src/pages/NewPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const NewPage: React.FC = () => {
  // Your state management here
  
  return (
    <div>
      <Header />
      
      {/* Hero Section (if needed) */}
      <section className="bg-gradient-to-r from-primary/20 to-blue-200 py-20">
        {/* Content */}
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-white">
        {/* Content */}
      </section>
      
      <Footer />
    </div>
  );
};

export default NewPage;
```

### Then add to App.tsx:
```tsx
import NewPage from './pages/NewPage';

// Add to Routes:
<Route path="/new-page" element={<NewPage />} />
```

---

## 📊 Conversion Priority (Recommended)

**High Priority** (Most Important):
1. Dashboard
2. MyPrograms
3. BookSession
4. Bookings
5. Enroll

**Medium Priority** (User Features):
6. Goals
7. Progress
8. Checkout
9. Consultation

**Lower Priority** (Supporting):
10. Messages
11. Settings

---

## 🎯 Each Page Includes:

- ✅ Responsive mobile-first design
- ✅ Tailwind CSS styling
- ✅ TypeScript type safety
- ✅ Form validation
- ✅ State management with hooks
- ✅ Smooth animations
- ✅ Dark mode support (via Header)
- ✅ Reusable components where applicable

---

## 💡 Pro Tips

1. **Use the same component structure** for consistency
2. **Reuse the Header and Footer** components
3. **Extract form inputs** into helper functions to avoid repetition
4. **Create sub-components** for complex layouts (e.g., Cards, Modals)
5. **Use TypeScript interfaces** for props to maintain type safety
6. **Follow the naming convention**: `ComponentName.tsx`

---

## 📋 Checklist for Each New Page

- [ ] Create file in `src/pages/`
- [ ] Import Header and Footer
- [ ] Create component with TypeScript interface
- [ ] Add styling with Tailwind CSS
- [ ] Implement state management if needed
- [ ] Add form validation
- [ ] Test responsiveness
- [ ] Add route to `App.tsx`
- [ ] Add navigation link to Header
- [ ] Test all functionality

---

## 🚀 Ready to Convert?

Pick any page from the list and follow the template above. You can convert them one by one as needed. Each page will integrate seamlessly with your existing React application.

**Need help?** You can follow the patterns from the already-converted pages:
- [Home.tsx](../src/pages/Home.tsx)
- [Programs.tsx](../src/pages/Programs.tsx)
- [Login.tsx](../src/pages/Login.tsx)

Happy converting! 🎉
