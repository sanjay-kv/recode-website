import React from 'react';
import { Analytics } from '@vercel/analytics/react';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <>
      {/* Script to prevent flash of light theme on initial load */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                // Check for stored theme preference, default to dark
                const storedTheme = localStorage.getItem('theme');
                const theme = storedTheme || 'dark';
                
                // Apply theme immediately to prevent flash
                if (theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                  document.body.classList.add('dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.classList.remove('dark');
                  document.body.classList.remove('dark');
                }
                
                // Store theme if not already stored
                if (!storedTheme) {
                  localStorage.setItem('theme', 'dark');
                }
              } catch (e) {
                // If localStorage fails, default to dark theme
                document.documentElement.setAttribute('data-theme', 'dark');
                document.documentElement.classList.add('dark');
                document.body.classList.add('dark');
              }
            })();
          `,
        }}
      />
      {children}
      <Analytics />
    </>
  );
}
