import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-10">
        <div className="container mx-auto grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg">About FlickFetch</h3>
            <p className="text-sm">
              FlickFetch is your one-stop destination to explore top-rated movies, trending TV series, and popular genres. Discover and enjoy the best in entertainment.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm hover:underline">Home</a></li>
              <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact Us</a></li>
              <li><a href="/privacy" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm hover:underline">Terms of Service</a></li>
            </ul>
          </div>
  
          {/* Popular Genres */}
          <div>
            <h3 className="font-bold text-lg">Popular Genres</h3>
            <ul className="space-y-2 flex flex-col">
              <Link to={"/genre/action"} className="text-sm hover:underline"> Action</Link>
              <Link to={"/genre/comedy"} className="text-sm hover:underline"> Comedy</Link>
              <Link to={"/genre/horror"} className="text-sm hover:underline"> Horror</Link>
              <Link to={"/genre/romance"} className="text-sm hover:underline"> Romance</Link>
             
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="text-sm">Email: <a href="mailto:hamzatrukayatabiodun02@gmail.com" className="hover:underline">support@flickfetch.com</a></p>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" target="_blank" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-sm mt-4">
          <p>&copy; {new Date().getFullYear()} FlickFetch. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  