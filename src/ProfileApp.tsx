import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { loginSuccess } from '@repo/shared-store'
import type { RootState } from '@repo/shared-store'

export default function ProfileApp() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storeUser = useSelector((s: RootState) => s?.auth?.user)
  console.log("Profile sstore", storeUser)
  useEffect(() => {
    // if (!storeUser) {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        // const parsed = JSON.parse(storedUser)
        // map stored user to shared-store User shape (use email as id if needed)
        // dispatch(loginSuccess({ id: parsed.id ?? parsed.email, role: 'USER' }))
      } else {
        navigate('/login')
      }
    // }
  }, [navigate, dispatch])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  // if (!storeUser) {
  //   return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  // }

  const email = storeUser?.id || 'test' // using id as email mapping

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
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
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="md:col-span-2 space-y-6">
            {/* Account Info */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Account Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Email</p>
                  <p className="text-gray-800 font-semibold">{email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Status</p>
                  <p className="text-green-600 font-semibold">Active</p>
                </div>
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-gray-700">Login</span>
                  <span className="text-gray-500 text-sm">Just now</span>
                </div>
                <div className="flex items-center justify-between border-b pb-3">
                  <span className="text-gray-700">Profile Updated</span>
                  <span className="text-gray-500 text-sm">2 days ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Account Created</span>
                  <span className="text-gray-500 text-sm">1 month ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}