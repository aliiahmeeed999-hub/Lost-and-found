import Link from 'next/link';
import { Search, Package, Users, Shield, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Navigation */}
      <nav className="bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-xl">
                <Package className="w-6 h-6 text-indigo-600" />
              </div>
              <h1 className="text-2xl font-bold text-white">Lost & Found</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/login"
                className="text-white hover:text-gray-200 font-medium transition-colors"
              >
                Sign In
              </Link>
              <Link 
                href="/signup"
                className="px-6 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Lost Something?<br />We'll Help You Find It
        </h1>
        <p className="text-xl text-white text-opacity-90 mb-12 max-w-2xl mx-auto">
          Connect with people who found your belongings. Report lost or found items 
          and help reunite owners with their possessions.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link 
            href="/signup"
            className="px-8 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-lg shadow-xl flex items-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/login"
            className="px-8 py-4 bg-white bg-opacity-20 text-white rounded-xl hover:bg-opacity-30 transition-all backdrop-blur-sm font-bold text-lg border-2 border-white"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
            <div className="bg-white p-4 rounded-xl w-fit mb-4">
              <Search className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Report Lost Items</h3>
            <p className="text-white text-opacity-80">
              Quickly report lost belongings with detailed descriptions and photos. 
              Our system will help match your items with found reports.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
            <div className="bg-white p-4 rounded-xl w-fit mb-4">
              <Package className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Report Found Items</h3>
            <p className="text-white text-opacity-80">
              Found something? Help return it to its owner. Post found items and 
              connect with people looking for them.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl border border-white border-opacity-20">
            <div className="bg-white p-4 rounded-xl w-fit mb-4">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Secure & Private</h3>
            <p className="text-white text-opacity-80">
              Your privacy matters. Connect securely with verified users and 
              control who can see your contact information.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-12 rounded-2xl border border-white border-opacity-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-white mb-2">1,000+</p>
              <p className="text-white text-opacity-80">Items Reunited</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">5,000+</p>
              <p className="text-white text-opacity-80">Active Users</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-white mb-2">24/7</p>
              <p className="text-white text-opacity-80">Community Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white text-opacity-90 mb-8">
          Join our community today and help reunite people with their belongings
        </p>
        <Link 
          href="/signup"
          className="inline-block px-12 py-4 bg-white text-indigo-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-xl shadow-xl"
        >
          Create Free Account
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-white bg-opacity-10 backdrop-blur-md border-t border-white border-opacity-20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white text-opacity-80">
          <p>© 2024 Lost & Found. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}