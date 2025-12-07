# Plan-P Frontend

A modern Next.js application with Redux Toolkit, RTK Query, Ant Design, and SCSS architecture.

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or 3001 if port 3000 is in use) with your browser to see the result.

### Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## 🏗️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **State Management:** Redux Toolkit + RTK Query
- **UI Library:** Ant Design v6
- **Styling:** SCSS/Sass + Tailwind CSS
- **Code Quality:** ESLint + TypeScript

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   └── [locale]/
│       └── layout.tsx       # Root layout with providers
├── assets/
│   └── styles/              # SCSS modular architecture
│       ├── style.scss       # Main entry point
│       └── _*.scss          # Partial files
├── components/              # React components
│   └── lib/
│       └── Providers.tsx    # Redux + Ant Design providers
├── hooks/
│   └── redux.ts             # Typed Redux hooks
├── store/
│   ├── index.ts             # Store configuration
│   ├── reducers/            # Redux slices
│   └── RTKQuery/            # API endpoints
└── models/                  # TypeScript interfaces
```

## 🎯 Features

### Internationalization (i18n)
- ✅ Multi-language support (English, Arabic)
- ✅ RTL (Right-to-Left) layout for Arabic
- ✅ next-intl integration
- ✅ Language switcher component
- ✅ Ant Design locale support
- ✅ URL-based locale routing

### State Management
- ✅ Redux Toolkit store configured
- ✅ RTK Query for API calls with caching
- ✅ Type-safe hooks (`useAppDispatch`, `useAppSelector`)
- ✅ Authentication state management
- ✅ Utilities state (language, etc.)

### Styling
- ✅ Modular SCSS architecture
- ✅ Tailwind CSS integration
- ✅ Ant Design theming
- ✅ Responsive design ready

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint configured
- ✅ Zero errors/warnings
- ✅ Production-ready

## 📚 Documentation

Comprehensive documentation is available in the project root:

- **[LOCALIZATION.md](./LOCALIZATION.md)** - Complete i18n guide with examples
- **[SETUP.md](./SETUP.md)** - Complete setup guide with examples
- **[STYLING_UPDATE.md](./STYLING_UPDATE.md)** - SCSS architecture details
- **[QUICK_REFERENCE.md](./QUICK_REFERENCE.md)** - Code snippets and patterns
- **[CHECKLIST.md](./CHECKLIST.md)** - Setup checklist
- **[CODE_QUALITY_FIXES.md](./CODE_QUALITY_FIXES.md)** - Recent fixes

## 🔧 Usage Examples

### Internationalization (i18n)
```typescript
"use client";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function MyComponent() {
  const t = useTranslations('common');
  
  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
    </div>
  );
}
```

### Redux State Management
```typescript
"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setLang } from "@/store/reducers/utilitiesSlice";

export default function MyComponent() {
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector(state => state.utilitiesSlice);
  
  return (
    <button onClick={() => dispatch(setLang("en"))}>
      Switch Language
    </button>
  );
}
```

### API Calls with RTK Query
```typescript
import { authApi } from "@/store/RTKQuery/auth/authApi";

function UserProfile() {
  const { data, isLoading } = authApi.useGetUserDetailsQuery({ token });
  
  if (isLoading) return <div>Loading...</div>;
  return <div>Welcome {data?.data.firstName}</div>;
}
```

### Styling
```tsx
// Mix SCSS classes with Tailwind
<div className="flex items-center my-custom-class">
  Content
</div>

// Use Ant Design components
import { Button } from "antd";
<Button type="primary">Click Me</Button>
```

## 🌍 Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 📦 Dependencies

### Core
- `next` - Next.js framework
- `react` - React library
- `typescript` - TypeScript

### State Management
- `@reduxjs/toolkit` - Redux Toolkit
- `react-redux` - React bindings

### UI/Styling
- `antd` - Ant Design v6
- `sass` - SCSS support
- `tailwindcss` - Tailwind CSS

## 🤝 Contributing

1. Follow the existing code structure
2. Use typed Redux hooks
3. Add styles to appropriate SCSS partials
4. Run `npm run lint` before committing
5. Keep documentation updated

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎉 Status

✅ All providers configured
✅ SCSS architecture active
✅ Redux store working
✅ Type-safe throughout
✅ Clean codebase (no errors)
✅ Production-ready

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
