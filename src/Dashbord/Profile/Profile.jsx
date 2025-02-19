import React from 'react';
import { User, Calendar, Phone, Award, Coins, Clock, Shield, LogOut, Loader } from 'lucide-react';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';
import UseAuth from './../../Hooks/useAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Loading/Loading';

const Profile = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, logOut,loading } = UseAuth();

  const { data, isLoading } = useQuery({
    queryKey: ['userData', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  if (loading) {
      <Loading></Loading>;
    }

  const colors = {
    primary: "#EEF5FF",
    secondary: "#86B6F6",
    borderColor: "#B4D4FF",
    buttonHover: "#045b78",
    buttonColor: "#176B87",
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen p-6 rounded-lg" style={{ backgroundColor: colors.primary, color: colors.secondary }}>
        <p>Please sign in to view your profile</p>
      </div>
    );
  }

  const handleSignOut = async () => {
    toast.info("Logging out...");
    try {
      await logOut();
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="rounded-lg shadow-lg max-w-4xl mx-auto mt-10 p-8" style={{ backgroundColor: colors.primary }}>
      {/* Profile Header */}
      <div className="p-8 rounded-t-lg" style={{ background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.buttonColor} 100%)` }}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', border: `3px solid ${colors.borderColor}` }}>
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <User size={40} color="white" />
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-1">{user.displayName || 'Welcome Back!'}</h2>
            <p className="text-white opacity-90 ">{user.email}</p>
            <p className="text-white opacity-90 mb-4">Address : N/A</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white bg-opacity-20">
              <Award size={14} color="white" />
              <span className="text-white text-sm font-medium capitalize">{data?.role || 'User'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex justify-center">
            <Loader size={30} className="animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Info */}
            <div className="rounded-lg p-5" style={{ backgroundColor: 'white', borderLeft: `4px solid ${colors.borderColor}` }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.buttonColor }}>
                <User size={18} /> Account Information
              </h3>
              <p className="flex items-center gap-2"><Clock size={16} /> Last Login: {formatDate(user.metadata?.lastSignInTime)}</p>
              <p className="flex items-center gap-2"><Calendar size={16} /> Account Created: {formatDate(user.metadata?.creationTime)}</p>
              <p className="flex items-center gap-2"><Phone size={16} /> Phone: {user.phoneNumber || 'N/A'}</p>
            </div>

            {/* Account Status */}
            <div className="rounded-lg p-5" style={{ backgroundColor: 'white', borderLeft: `4px solid ${colors.borderColor}` }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: colors.buttonColor }}>
                <Award size={18} /> Account Status
              </h3>
              <p className="flex items-center gap-2"><Award size={16} /> Role: {data?.role || 'User'}</p>
              <p className="flex items-center gap-2"><Coins size={16} /> Coins: {data?.Coins || 0}</p>
              <p className="flex items-center gap-2"><Shield size={16} /> Membership: {data?.Coins > 500 ? 'Premium' : data?.Coins > 100 ? 'Silver' : 'Basic'}</p>
            </div>
          </div>
        )}
      </div>

      {/* Logout Button */}
      <div className="p-6 border-t flex justify-end" style={{ borderColor: colors.borderColor }}>
        <button 
          className="px-4 py-2 rounded-md flex items-center gap-2"
          style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)' }}
          onClick={handleSignOut}
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
