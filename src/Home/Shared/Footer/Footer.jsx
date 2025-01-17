import React from "react";
import { Facebook, Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-default border-t  border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Main footer content - stacks on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo section - centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/LkNYRKf/Black-and-White-Minimalist-Professional-Initial-Logo-removebg-preview.png"
                alt="micro web Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-gray-800">
                Task Hive
              </span>
            </div>
            {/* Description - full width on mobile, max-width on desktop */}
            <p className="text-gray-600 text-center md:text-left max-w-xs w-full">
              Bringing people together through the small tasks and giving a side
              hasle work experiences.
            </p>
          </div>

          {/* Contact info - centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <h3 className="font-semibold text-gray-800 text-lg">Contact Us</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">(+91)8583881364</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  radhanath1542@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">WB Kolkata, India</span>
              </div>
            </div>
          </div>

          {/* Social links - centered on all screens */}
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <h3 className="font-semibold text-gray-800 text-lg">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="https://github.com/Rajib1504"
                target="_blank"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076870941377"
                target="_blank"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/rajib-sardar-984131247/"
                target="_blank"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - centered on all screens */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Task Hive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
