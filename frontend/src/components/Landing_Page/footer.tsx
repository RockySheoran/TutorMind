import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="w-full bg-white/50 dark:bg-gray-900/60 backdrop-blur-lg border-t border-blue-200 dark:border-green-700 py-16 px-4 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-600 mb-4">
              TutorMind
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The AI-powered study assistant that helps you learn more
              effectively.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
              <FaEnvelope className="mr-2" />
              <span>support@TutorMind.com</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              Subscribe to get updates on new features.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/60 dark:bg-gray-800/60 border border-blue-200 dark:border-green-700 rounded-l-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur"
              />
              <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-r-xl hover:shadow-lg transition-all font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 dark:border-green-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} TutorMind. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-green-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
