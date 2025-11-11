import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifyToken, getUserFromCookies } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Package, Search, MessageSquare, TrendingUp, Clock, MapPin } from 'lucide-react';

// Fetch dashboard data from database
async function getDashboardData(userId) {
  const [user, lostItems, foundItems, totalMessages, recentItems] = await Promise.all([
    prisma.user.findUnique({ 
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        profileImage: true,
        reputation: true,
        createdAt: true
      }
    }),
    prisma.item.count({
      where: { userId, status: 'lost', itemStatus: 'active' }
    }),
    prisma.item.count({
      where: { userId, status: 'found', itemStatus: 'active' }
    }),
    prisma.message.count({
      where: { receiverId: userId, isRead: false }
    }),
    prisma.item.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        itemStatus: true,
        category: true,
        imageUrls: true,
        createdAt: true,
        views: true
      }
    })
  ]);

  return { user, lostItems, foundItems, totalMessages, recentItems };
}

export default async function DashboardPage() {
  // ------------------------
  // 1️⃣ Get token from cookies (server-side)
  // ------------------------
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get('token');
  const token = tokenCookie?.value;

  if (!token) {
    redirect('/login');
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    redirect('/login');
  }

  // ------------------------
  // 2️⃣ Fetch user and dashboard data
  // ------------------------
  const { user, lostItems, foundItems, totalMessages, recentItems } = await getDashboardData(decoded.userId);

  if (!user) {
    redirect('/login');
  }

  // ------------------------
  // 3️⃣ Render dashboard
  // ------------------------
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Lost & Found</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="/items/lost" 
              className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-medium"
            >
              Report Lost
            </Link>
            <Link 
              href="/items/found" 
              className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium"
            >
              Report Found
            </Link>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {user.name}! 👋
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your lost and found items
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <Search className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-xs text-gray-500 font-medium">ACTIVE</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Lost Items</h3>
            <p className="text-3xl font-bold text-gray-800">{lostItems}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-xs text-gray-500 font-medium">ACTIVE</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Found Items</h3>
            <p className="text-3xl font-bold text-gray-800">{foundItems}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xs text-gray-500 font-medium">UNREAD</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Messages</h3>
            <p className="text-3xl font-bold text-gray-800">{totalMessages}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-xs text-gray-500 font-medium">SCORE</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Reputation</h3>
            <p className="text-3xl font-bold text-gray-800">{user.reputation}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link 
            href="/items/lost"
            className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl text-white hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Search className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Report Lost Item</h3>
            <p className="text-red-100 text-sm">Can't find something? Report it here</p>
          </Link>

          <Link 
            href="/items/found"
            className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <Package className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Report Found Item</h3>
            <p className="text-green-100 text-sm">Found something? Help return it</p>
          </Link>

          <Link 
            href="/items"
            className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-xl text-white hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <MapPin className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">Browse All Items</h3>
            <p className="text-indigo-100 text-sm">Search through reported items</p>
          </Link>
        </div>

        {/* Recent Items */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Recent Items</h2>
            <Link href="/profile" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
              View All →
            </Link>
          </div>

          {recentItems.length === 0 ? (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">No items reported yet</p>
              <Link 
                href="/items/lost"
                className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Report Your First Item
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentItems.map((item) => (
                <Link 
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="block border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 p-4 rounded-lg transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {item.imageUrls.length > 0 ? (
                      <img 
                        src={item.imageUrls[0]} 
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <Package className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          item.status === 'lost' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {item.status.toUpperCase()}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span>{item.views} views</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
