"use client";
import Header from "./header";
import FeaturesSection from "./feature_section";
import Footer from "./footer";
import { ThemeToggle } from "../Common_Components/Theme-toggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-end pt-6">
          <ThemeToggle />
        </div>
        <Header />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
}
