export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          &copy; {currentYear} John Paul Reyes. All rights reserved.
        </p>
        <p className="text-navy-200 text-sm">
          Designed and built with ❤️
        </p>
      </div>
    </footer>
  );
}
