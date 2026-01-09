import { useSelector } from 'react-redux'
import type { RootState } from '@repo/shared-store'

export default function ProfileApp() {
  const storeUser = useSelector((s: RootState) => s?.auth?.user)

  if (!storeUser) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    )
  }

  const email = storeUser?.id || 'User'

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-blue-100">Manage your profile information and account settings</p>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                {email.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-xl font-bold text-gray-800">{email}</h2>
              <p className="text-gray-600 mt-2">Premium Member</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="md:col-span-2 space-y-6">
          {/* Account Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm font-medium">Email Address</p>
                <p className="text-gray-800 font-semibold mt-1">{email}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Status</p>
                <p className="text-green-600 font-semibold mt-1">Active</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Membership Type</p>
                <p className="text-gray-800 font-semibold mt-1">Premium</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">Role</p>
                <p className="text-gray-800 font-semibold mt-1">User</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✓</span>
                  <span className="text-gray-700 text-sm">Login</span>
                </div>
                <span className="text-gray-500 text-sm">Just now</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✎</span>
                  <span className="text-gray-700 text-sm">Profile Updated</span>
                </div>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✦</span>
                  <span className="text-gray-700 text-sm">Account Created</span>
                </div>
                <span className="text-gray-500 text-sm">1 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-6">Edit Profile</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                defaultValue="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue={email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
            <textarea
              defaultValue="Welcome to my profile. I'm using this awesome application!"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            ></textarea>
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Save Changes
            </button>
            <button
              type="reset"
              className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}