'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, MapPin, Calendar, Package, AlertCircle, Loader } from 'lucide-react';

export default function BrowseItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { value: 'electronics', label: 'Electronics', icon: '📱' },
    { value: 'documents', label: 'Documents', icon: '📄' },
    { value: 'keys', label: 'Keys', icon: '🔑' },
    { value: 'bags', label: 'Bags & Luggage', icon: '🎒' },
    { value: 'clothing', label: 'Clothing', icon: '👕' },
    { value: 'accessories', label: 'Accessories', icon: '⌚' },
    { value: 'books', label: 'Books', icon: '📚' },
    { value: 'jewelry', label: 'Jewelry', icon: '💍' },
    { value: 'sports', label: 'Sports Equipment', icon: '⚽' },
    { value: 'other', label: 'Other', icon: '📦' }
  ];

  useEffect(() => {
    fetchItems();
  }, [selectedStatus, selectedCategory]);

  const fetchItems = async () => {
    setLoading(true);
    setError('');

    try {
      let url = '/api/items';
      const params = new URLSearchParams();

      if (selectedStatus) {
        params.append('status', selectedStatus);
      }
      if (selectedCategory) {
        params.append('category', selectedCategory);
      }

      if (params.toString()) {
        url += '?' + params.toString();
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }

      const data = await response.json();
      setItems(data.items || []);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load items. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">Lost & Found</h1>
            </Link>
            <div className="flex gap-3">
              <Link
                href="/items/lost"
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Report Lost
              </Link>
              <Link
                href="/items/found"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Report Found
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Browse All Items</h1>
          <p className="text-gray-600 text-lg">
            Search for lost and found items in your community
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-slate-600 focus:ring-4 focus:ring-slate-100 focus:outline-none transition-all text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Status Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 mb-3">Status</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedStatus(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedStatus === null
                    ? 'bg-slate-600 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                All Items
              </button>
              <button
                onClick={() => setSelectedStatus('lost')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedStatus === 'lost'
                    ? 'bg-red-600 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Lost Items
              </button>
              <button
                onClick={() => setSelectedStatus('found')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedStatus === 'found'
                    ? 'bg-green-600 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                Found Items
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-slate-600 text-white'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === cat.value
                      ? 'bg-slate-600 text-white'
                      : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-8 flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border-2 border-red-200">
            <AlertCircle className="w-6 h-6 flex-shrink-0" />
            <span className="font-medium">{error}</span>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader className="w-8 h-8 text-slate-600 animate-spin" />
            <span className="ml-3 text-lg text-gray-600">Loading items...</span>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600">
              Try adjusting your filters or search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={`/items/${item.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden group-hover:scale-105 transition-transform">
                  {item.imageUrls && item.imageUrls.length > 0 ? (
                    <img
                      src={item.imageUrls[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <Package className="w-12 h-12 text-gray-300" />
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        item.status === 'lost'
                          ? 'bg-red-600'
                          : 'bg-green-600'
                      }`}
                    >
                      {item.status === 'lost' ? 'Lost' : 'Found'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-slate-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  <div className="space-y-2 text-sm text-gray-600">
                    {item.status === 'lost' && item.locationLost && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="truncate">{item.locationLost}</span>
                      </div>
                    )}
                    {item.status === 'found' && item.locationFound && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="truncate">{item.locationFound}</span>
                      </div>
                    )}
                    {(item.dateLost || item.dateFound) && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <span>
                          {new Date(
                            item.dateLost || item.dateFound
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
