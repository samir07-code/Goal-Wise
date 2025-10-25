import React, { useState } from 'react';
import { Home, CreditCard, Target, Bell, TrendingUp, DollarSign, Zap, Award, ChevronRight, Plus, CheckCircle, AlertCircle, Calendar, PieChart, ArrowUpRight, ArrowDownRight, Wallet, Building, Smartphone } from 'lucide-react';

const GoalWise = () => {
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedGoal, setSelectedGoal] = useState(null);

  const accounts = [
    { name: 'Chase Checking', type: 'bank', balance: 3240.50, icon: 'Building', color: 'bg-blue-500' },
    { name: 'Discover Card', type: 'credit', balance: -850.20, icon: 'CreditCard', color: 'bg-orange-500' },
    { name: 'PayPal', type: 'digital', balance: 456.80, icon: 'Wallet', color: 'bg-indigo-500' },
    { name: 'Cash App', type: 'digital', balance: 180.00, icon: 'Smartphone', color: 'bg-green-500' }
  ];

  const goals = [
    { id: 1, name: 'Emergency Fund', target: 10000, current: 6420, monthly: 450, icon: '🛡️', color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Vacation to Japan', target: 5000, current: 2100, monthly: 300, icon: '✈️', color: 'from-purple-500 to-pink-500' },
    { id: 3, name: 'New Laptop', target: 2000, current: 1650, monthly: 200, icon: '💻', color: 'from-green-500 to-emerald-500' }
  ];

  const transactions = [
    { name: 'Whole Foods', amount: -67.43, category: 'Groceries', type: 'spending', date: 'Today' },
    { name: 'Netflix', amount: -15.99, category: 'Subscription', type: 'subscription', date: 'Today' },
    { name: 'Paycheck', amount: 3200.00, category: 'Income', type: 'income', date: 'Yesterday' },
    { name: 'Rent Payment', amount: -1500.00, category: 'Housing', type: 'transfer', date: '2 days ago' },
    { name: 'Discover Payment', amount: -250.00, category: 'Credit Card', type: 'loan', date: '3 days ago' }
  ];

  const subscriptions = [
    { name: 'Netflix', amount: 15.99, nextBill: 'Oct 24', category: 'Entertainment' },
    { name: 'Spotify', amount: 10.99, nextBill: 'Oct 18', category: 'Entertainment' },
    { name: 'Apple iCloud', amount: 2.99, nextBill: 'Oct 20', category: 'Storage' },
    { name: 'Adobe Creative', amount: 54.99, nextBill: 'Oct 25', category: 'Productivity' },
    { name: 'Planet Fitness', amount: 24.99, nextBill: 'Nov 1', category: 'Health' }
  ];

  const upcomingBills = [
    { name: 'Discover Card', amount: 850.20, dueDate: 'Oct 22', streak: 12, status: 'upcoming' },
    { name: 'Electric Bill', amount: 145.00, dueDate: 'Oct 25', streak: 8, status: 'upcoming' },
    { name: 'Internet', amount: 79.99, dueDate: 'Oct 28', streak: 15, status: 'paid' }
  ];

  const getIcon = (iconName) => {
    const icons = {
      Building: Building,
      CreditCard: CreditCard,
      Wallet: Wallet,
      Smartphone: Smartphone
    };
    return icons[iconName] || Wallet;
  };

  const HomeScreen = () => (
    <div className="space-y-6 pb-24">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-blue-200 text-sm mb-1">Total Balance</p>
            <h1 className="text-4xl font-bold">$3,027.10</h1>
            <p className="text-blue-200 text-sm mt-2 flex items-center gap-1">
              <ArrowUpRight className="w-4 h-4" />
              +$420 this month
            </p>
          </div>
          <button className="bg-white/20 backdrop-blur p-3 rounded-xl hover:bg-white/30 transition-all">
            <Bell className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <p className="text-xs text-blue-200">Income</p>
            <p className="text-lg font-bold">$3.2k</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <p className="text-xs text-blue-200">Spending</p>
            <p className="text-lg font-bold">$2.1k</p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-xl p-3">
            <p className="text-xs text-blue-200">Saved</p>
            <p className="text-lg font-bold">$950</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Active Goals</h2>
          <button onClick={() => setActiveScreen('goals')} className="text-blue-600 text-sm font-semibold flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="space-y-3">
          {goals.slice(0, 2).map(goal => (
            <div key={goal.id} onClick={() => { setSelectedGoal(goal); setActiveScreen('goalDetail'); }} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{goal.name}</h3>
                    <p className="text-sm text-gray-500">${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                  {Math.round((goal.current / goal.target) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`bg-gradient-to-r ${goal.color} h-2.5 rounded-full transition-all duration-500`} style={{ width: `${(goal.current / goal.target) * 100}%` }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">Save ${goal.monthly}/month • {Math.ceil((goal.target - goal.current) / goal.monthly)} months remaining</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => setActiveScreen('goals')} className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
            <Plus className="w-6 h-6 mb-2" />
            <p className="font-semibold">Add Goal</p>
          </button>
          <button onClick={() => setActiveScreen('bills')} className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all">
            <Calendar className="w-6 h-6 mb-2" />
            <p className="font-semibold">View Bills</p>
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          <button onClick={() => setActiveScreen('accounts')} className="text-blue-600 text-sm font-semibold">View All</button>
        </div>
        <div className="bg-white rounded-2xl shadow-md divide-y">
          {transactions.slice(0, 3).map((tx, i) => (
            <div key={i} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === 'income' ? 'bg-green-100' : 
                  tx.type === 'subscription' ? 'bg-purple-100' : 
                  tx.type === 'transfer' ? 'bg-blue-100' : 
                  tx.type === 'loan' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  <DollarSign className={`w-5 h-5 ${
                    tx.type === 'income' ? 'text-green-600' : 
                    tx.type === 'subscription' ? 'text-purple-600' : 
                    tx.type === 'transfer' ? 'text-blue-600' : 
                    tx.type === 'loan' ? 'text-orange-600' : 'text-gray-600'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{tx.name}</p>
                  <p className="text-xs text-gray-500">{tx.category} • {tx.date}</p>
                </div>
              </div>
              <p className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AccountsScreen = () => (
    <div className="space-y-6 pb-24">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Accounts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" /> Link Account
        </button>
      </div>

      <div className="space-y-3">
        {accounts.map((account, i) => {
          const IconComponent = getIcon(account.icon);
          return (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className={`${account.color} w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{account.name}</h3>
                    <p className="text-xs text-gray-500 capitalize">{account.type} Account</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${account.balance < 0 ? 'text-red-600' : 'text-gray-800'}`}>
                    {account.balance < 0 ? '-' : ''}${Math.abs(account.balance).toLocaleString('en-US', {minimumFractionDigits: 2})}
                  </p>
                  <p className="text-xs text-gray-500">Available</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">All Transactions</h2>
        <div className="bg-white rounded-2xl shadow-md divide-y">
          {transactions.map((tx, i) => (
            <div key={i} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  tx.type === 'income' ? 'bg-green-100' : 
                  tx.type === 'subscription' ? 'bg-purple-100' : 
                  tx.type === 'transfer' ? 'bg-blue-100' : 
                  tx.type === 'loan' ? 'bg-orange-100' : 'bg-gray-100'
                }`}>
                  {tx.type === 'income' ? <ArrowDownRight className="w-5 h-5 text-green-600" /> :
                   tx.type === 'subscription' ? <Zap className="w-5 h-5 text-purple-600" /> :
                   tx.type === 'transfer' ? <ArrowUpRight className="w-5 h-5 text-blue-600" /> :
                   tx.type === 'loan' ? <CreditCard className="w-5 h-5 text-orange-600" /> :
                   <DollarSign className="w-5 h-5 text-gray-600" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{tx.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{tx.category}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{tx.date}</span>
                  </div>
                </div>
              </div>
              <p className={`font-bold ${tx.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                {tx.amount > 0 ? '+' : ''}{tx.amount < 0 ? '-' : ''}${Math.abs(tx.amount).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GoalsScreen = () => (
    <div className="space-y-6 pb-24">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Financial Goals</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition-all">
          <Plus className="w-4 h-4" /> New Goal
        </button>
      </div>

      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-5 text-white shadow-xl">
        <div className="flex items-start gap-3 mb-3">
          <div className="bg-white/20 backdrop-blur p-2 rounded-lg">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold mb-1">AI Insight</h3>
            <p className="text-sm text-purple-100">Based on your spending patterns, you can save an extra $150/month by reducing dining out expenses. This could help you reach your Japan vacation goal 2 months earlier!</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {goals.map(goal => (
          <div key={goal.id} onClick={() => { setSelectedGoal(goal); setActiveScreen('goalDetail'); }} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 bg-gradient-to-br ${goal.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                  {goal.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{goal.name}</h3>
                  <p className="text-sm text-gray-500">${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}</p>
                </div>
              </div>
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1.5 rounded-full font-bold">
                {Math.round((goal.current / goal.target) * 100)}%
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className={`bg-gradient-to-r ${goal.color} h-3 rounded-full transition-all duration-500 shadow-sm`} style={{ width: `${(goal.current / goal.target) * 100}%` }}></div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-gray-500">Monthly</p>
                <p className="font-bold text-gray-800">${goal.monthly}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-gray-500">Remaining</p>
                <p className="font-bold text-gray-800">${(goal.target - goal.current).toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-2">
                <p className="text-xs text-gray-500">ETA</p>
                <p className="font-bold text-gray-800">{Math.ceil((goal.target - goal.current) / goal.monthly)}mo</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const GoalDetailScreen = () => {
    if (!selectedGoal) return null;
    const progress = (selectedGoal.current / selectedGoal.target) * 100;
    const remaining = selectedGoal.target - selectedGoal.current;
    const monthsRemaining = Math.ceil(remaining / selectedGoal.monthly);
    
    return (
      <div className="space-y-6 pb-24">
        <button onClick={() => setActiveScreen('goals')} className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to Goals
        </button>

        <div className={`bg-gradient-to-br ${selectedGoal.color} rounded-3xl p-6 text-white shadow-xl`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-4xl">
              {selectedGoal.icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{selectedGoal.name}</h1>
              <p className="text-white/80">Target: ${selectedGoal.target.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Progress</span>
              <span className="font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div className="bg-white h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span>${selectedGoal.current.toLocaleString()}</span>
              <span>${selectedGoal.target.toLocaleString()}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <p className="text-xs text-white/70">Monthly Savings</p>
              <p className="text-2xl font-bold">${selectedGoal.monthly}</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-3">
              <p className="text-xs text-white/70">Months Left</p>
              <p className="text-2xl font-bold">{monthsRemaining}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Smart Suggestions</h2>
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Boost Your Savings</h3>
                  <p className="text-sm text-gray-600">Save an extra $100/month to reach your goal 1 month earlier</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">On Track</h3>
                  <p className="text-sm text-gray-600">You're saving consistently! Keep it up to reach your goal by Jun 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Contributions</h2>
          <div className="bg-white rounded-2xl shadow-md divide-y">
            {[
              { date: 'Oct 15, 2025', amount: 300 },
              { date: 'Oct 1, 2025', amount: 300 },
              { date: 'Sep 15, 2025', amount: 300 }
            ].map((contribution, i) => (
              <div key={i} className="p-4 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-800">Manual Contribution</p>
                  <p className="text-xs text-gray-500">{contribution.date}</p>
                </div>
                <p className="font-bold text-green-600">+${contribution.amount}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="bg-blue-600 text-white rounded-xl p-4 font-semibold hover:bg-blue-700 transition-all">
            Add Funds
          </button>
          <button className="bg-gray-100 text-gray-700 rounded-xl p-4 font-semibold hover:bg-gray-200 transition-all">
            Edit Goal
          </button>
        </div>
      </div>
    );
  };

  const BillsScreen = () => (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-gray-800">Bills & Credit</h1>

      <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl p-6 text-white shadow-xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-6 h-6" />
              <h2 className="text-xl font-bold">Payment Streak</h2>
            </div>
            <p className="text-white/90 text-sm">Keep your streak alive!</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-1">12</div>
            <p className="text-xs text-white/80">Months</p>
          </div>
        </div>
        <div className="bg-white/20 backdrop-blur rounded-xl p-3">
          <p className="text-sm">🔥 All bills paid on time for 12 months straight</p>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Bills</h2>
        <div className="space-y-3">
          {upcomingBills.map((bill, i) => (
            <div key={i} className={`bg-white rounded-2xl p-4 shadow-md border-2 ${bill.status === 'paid' ? 'border-green-200 bg-green-50' : 'border-orange-200'}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-800">{bill.name}</h3>
                  <p className="text-sm text-gray-500">Due {bill.dueDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-800">${bill.amount.toFixed(2)}</p>
                  {bill.status === 'paid' ? (
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-medium inline-flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Paid
                    </span>
                  ) : (
                    <span className="text-xs bg-orange-600 text-white px-2 py-1 rounded-full font-medium">
                      5 days
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg p-2">
                <Award className="w-4 h-4 text-amber-600" />
                <p className="text-xs text-amber-800 font-medium">{bill.streak} month payment streak</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-5 text-white shadow-xl">
        <h3 className="font-bold text-lg mb-3">Credit Score</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold">742</p>
            <p className="text-indigo-200 text-sm mt-1">Good • +8 this month</p>
          </div>
          <div className="w-24 h-24 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
            <TrendingUp className="w-12 h-12" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Active Subscriptions</h2>
          <button onClick={() => setActiveScreen('subscriptions')} className="text-blue-600 text-sm font-semibold">View All</button>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-gray-600">Total Monthly Cost</p>
            <p className="text-2xl font-bold text-gray-800">${subscriptions.reduce((sum, sub) => sum + sub.amount, 0).toFixed(2)}</p>
          </div>
          <div className="space-y-2">
            {subscriptions.slice(0, 3).map((sub, i) => (
              <div key={i} className="flex justify-between items-center text-sm">
                <span className="text-gray-600">{sub.name}</span>
                <span className="font-semibold text-gray-800">${sub.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SubscriptionsScreen = () => (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-gray-800">Subscriptions</h1>

      <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-5 text-white shadow-xl">
        <h3 className="font-semibold mb-2">Total Monthly Spend</h3>
        <p className="text-4xl font-bold mb-1">${subscriptions.reduce((sum, sub) => sum + sub.amount, 0).toFixed(2)}</p>
        <p className="text-purple-100 text-sm">{subscriptions.length} active subscriptions</p>
      </div>

      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="bg-amber-500 p-2 rounded-lg">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Optimization Tip</h3>
            <p className="text-sm text-gray-600">You could save $20/month by switching to an annual plan for Netflix and Spotify</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Active Subscriptions</h2>
        <div className="space-y-3">
          {subscriptions.map((sub, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-800">{sub.name}</h3>
                  <p className="text-xs text-gray-500">{sub.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-lg text-gray-800">${sub.amount}</p>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500">Next billing: {sub.nextBill}</p>
                <button className="text-xs text-red-600 font-semibold hover:text-red-700">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const InsightsScreen = () => (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-gray-800">Insights & Analytics</h1>

      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="font-bold text-gray-800 mb-4">Spending by Category</h3>
        <div className="space-y-3">
          {[
            { category: 'Housing', amount: 1500, percent: 45, color: 'bg-blue-500' },
            { category: 'Food & Dining', amount: 450, percent: 14, color: 'bg-green-500' },
            { category: 'Transportation', amount: 280, percent: 8, color: 'bg-yellow-500' },
            { category: 'Entertainment', amount: 200, percent: 6, color: 'bg-purple-500' },
            { category: 'Other', amount: 870, percent: 27, color: 'bg-gray-400' }
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{item.category}</span>
                <span className="text-sm font-bold text-gray-800">${item.amount} ({item.percent}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-5 text-white shadow-xl">
        <div className="flex items-start gap-3">
          <div className="bg-white/20 backdrop-blur p-2 rounded-lg">
            <PieChart className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold mb-1">What-If Scenario</h3>
            <p className="text-sm text-cyan-100 mb-3">If you reduce dining out by 30%, you could save an additional $135/month</p>
            <button className="bg-white/20 backdrop-blur px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all">
              Explore Scenarios
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-md">
        <h3 className="font-bold text-gray-800 mb-4">Monthly Trends</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Average Monthly Income</span>
              <span className="font-bold text-green-600">$3,200</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Average Monthly Spending</span>
              <span className="font-bold text-gray-800">$2,150</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Average Monthly Savings</span>
              <span className="font-bold text-blue-600">$1,050</span>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-gray-700">Savings Rate</span>
              <span className="text-2xl font-bold text-blue-600">32.8%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Above average! Keep it up 🎉</p>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationsScreen = () => (
    <div className="space-y-6 pb-24">
      <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>

      <div className="space-y-3">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800">Goal Milestone</h3>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <p className="text-sm text-gray-600">Congratulations! You've reached 80% of your Emergency Fund goal</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-orange-500 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800">Bill Reminder</h3>
                <span className="text-xs text-gray-500">5h ago</span>
              </div>
              <p className="text-sm text-gray-600">Discover Card payment of $850.20 is due in 5 days</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-purple-500 p-2 rounded-lg">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800">Achievement Unlocked</h3>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>
              <p className="text-sm text-gray-600">12-month payment streak! You're a financial rockstar 🌟</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-800">AI Insight</h3>
                <span className="text-xs text-gray-500">2d ago</span>
              </div>
              <p className="text-sm text-gray-600">Your spending on entertainment is 20% lower this month. Great job!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home': return <HomeScreen />;
      case 'accounts': return <AccountsScreen />;
      case 'goals': return <GoalsScreen />;
      case 'goalDetail': return <GoalDetailScreen />;
      case 'bills': return <BillsScreen />;
      case 'subscriptions': return <SubscriptionsScreen />;
      case 'insights': return <InsightsScreen />;
      case 'notifications': return <NotificationsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen relative">
        <div className="p-6">
          {renderScreen()}
        </div>

        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 px-6 py-3 shadow-lg">
          <div className="flex justify-around items-center">
            <button onClick={() => setActiveScreen('home')} className={`flex flex-col items-center gap-1 transition-all ${activeScreen === 'home' ? 'text-blue-600' : 'text-gray-400'}`}>
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Home</span>
            </button>
            <button onClick={() => setActiveScreen('accounts')} className={`flex flex-col items-center gap-1 transition-all ${activeScreen === 'accounts' ? 'text-blue-600' : 'text-gray-400'}`}>
              <Wallet className="w-6 h-6" />
              <span className="text-xs font-medium">Accounts</span>
            </button>
            <button onClick={() => setActiveScreen('goals')} className={`flex flex-col items-center gap-1 transition-all ${activeScreen === 'goals' || activeScreen === 'goalDetail' ? 'text-blue-600' : 'text-gray-400'}`}>
              <Target className="w-6 h-6" />
              <span className="text-xs font-medium">Goals</span>
            </button>
            <button onClick={() => setActiveScreen('insights')} className={`flex flex-col items-center gap-1 transition-all ${activeScreen === 'insights' ? 'text-blue-600' : 'text-gray-400'}`}>
              <TrendingUp className="w-6 h-6" />
              <span className="text-xs font-medium">Insights</span>
            </button>
            <button onClick={() => setActiveScreen('notifications')} className={`flex flex-col items-center gap-1 transition-all ${activeScreen === 'notifications' ? 'text-blue-600' : 'text-gray-400'}`}>
              <Bell className="w-6 h-6" />
              <span className="text-xs font-medium">Alerts</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default GoalWise;
