// app/not-found.js
import NotFoundComponent from '@/app/notfound/page';

export default function NotFound() {
  return <NotFoundComponent />;
}

// Optional: Add metadata
export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};