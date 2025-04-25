# Frontend Changes Documentation

## Footer Component Changes
**File Path:** `apps/web/components/Footer.tsx`

### Description Text Update
We updated the description text in the footer to remove references to Loom. Here's the specific change:

```tsx
// Old text
<p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
  OPAVC is the open source alternative to Loom. Lightweight,
  powerful, and cross-platform. Record and share in seconds.
</p>

// New text
<p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
  OPAVC is a lightweight, powerful, and cross-platform screen recorder.
  Record and share in seconds.
</p>
```

### Footer Component Features
The current footer includes:
- Modern, responsive grid layout
- Social media integration (Twitter, GitHub, Discord)
- Product, Help, and Use Cases sections
- Copyright information and legal links
- Proper accessibility attributes
- Responsive design for all screen sizes

### Component Location
The footer component is rendered on all pages except:
- `/login`
- `/s`
- `/dashboard/*`
- `/invite/*`
- `/s/*`
- `/onboarding/*`
- `/record/*`
- Any page on `opavc.com` domain

### Styling
The footer uses Tailwind CSS for styling with:
- Gray background (`bg-gray-50`)
- Responsive padding and margins
- Grid-based layout
- Hover effects on links
- Proper spacing between sections

### Note for Implementation
When implementing these changes:
1. Make sure to preserve all the existing imports and type definitions
2. Keep the conditional rendering logic intact
3. Maintain all the existing link structures and social media icons
4. Preserve all accessibility features (sr-only text, ARIA labels)
5. Keep all the external link security attributes (`rel="noopener noreferrer"`) 