'use client'
import create from 'zustand';
import { FaUsers, FaClipboardList, FaCreditCard, FaHandPeace } from 'react-icons/fa';

const useStatsStore = create((set) => ({
  stats: {
    members: 2245341,
    clubs: 46328,
    bookings: 828867,
    payments: 1926436,
  },
}));

const StatsCard = () => {
  const { stats } = useStatsStore();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl bg-white p-10 rounded shadow-md flex items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-2">
            Helping a local <span className="text-green-500">business reinvent itself</span>
          </h1>
          <p className="text-gray-600 mb-8">We reached here with our hard work and dedication</p>
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-8 text-center">
          <div>
            <div className="flex items-center justify-center space-x-2">
              <FaUsers className="text-green-500 text-2xl"/>
              <p className="text-3xl font-bold text-gray-700">{stats.members.toLocaleString()}</p>
            </div>
            <p className="text-gray-600">Members</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <FaHandPeace className="text-green-500 text-2xl"/>
              <p className="text-3xl font-bold text-gray-700">{stats.clubs.toLocaleString()}</p>
            </div>
            <p className="text-gray-600">Clubs</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <FaClipboardList className="text-green-500 text-2xl"/>
              <p className="text-3xl font-bold text-gray-700">{stats.bookings.toLocaleString()}</p>
            </div>
            <p className="text-gray-600">Event Bookings</p>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-2">
              <FaCreditCard className="text-green-500 text-2xl"/>
              <p className="text-3xl font-bold text-gray-700">{stats.payments.toLocaleString()}</p>
            </div>
            <p className="text-gray-600">Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
