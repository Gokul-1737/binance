// Mock cryptocurrency data for the exchange

export const cryptoAssets = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 67842.50, change24h: 2.34, high24h: 68500.00, low24h: 66100.00, volume24h: 28500000000, marketCap: 1330000000000, supply: 19600000, icon: '₿' },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 3521.80, change24h: 1.87, high24h: 3580.00, low24h: 3450.00, volume24h: 15200000000, marketCap: 423000000000, supply: 120000000, icon: 'Ξ' },
  { id: 'binancecoin', symbol: 'BNB', name: 'BNB', price: 578.40, change24h: -0.92, high24h: 590.00, low24h: 570.00, volume24h: 1850000000, marketCap: 85000000000, supply: 147000000, icon: 'B' },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: 182.35, change24h: 4.21, high24h: 185.00, low24h: 175.00, volume24h: 3200000000, marketCap: 81000000000, supply: 444000000, icon: 'S' },
  { id: 'ripple', symbol: 'XRP', name: 'XRP', price: 0.6234, change24h: -1.45, high24h: 0.640, low24h: 0.610, volume24h: 2100000000, marketCap: 34000000000, supply: 54500000000, icon: 'X' },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.4821, change24h: 0.67, high24h: 0.495, low24h: 0.475, volume24h: 450000000, marketCap: 17000000000, supply: 35000000000, icon: 'A' },
  { id: 'dogecoin', symbol: 'DOGE', name: 'Dogecoin', price: 0.1623, change24h: 3.45, high24h: 0.168, low24h: 0.156, volume24h: 1200000000, marketCap: 23000000000, supply: 142000000000, icon: 'D' },
  { id: 'avalanche', symbol: 'AVAX', name: 'Avalanche', price: 38.72, change24h: -2.11, high24h: 40.50, low24h: 37.80, volume24h: 580000000, marketCap: 16000000000, supply: 413000000, icon: 'A' },
  { id: 'polkadot', symbol: 'DOT', name: 'Polkadot', price: 7.84, change24h: 1.23, high24h: 8.10, low24h: 7.70, volume24h: 320000000, marketCap: 11000000000, supply: 1400000000, icon: 'D' },
  { id: 'chainlink', symbol: 'LINK', name: 'Chainlink', price: 14.67, change24h: 2.89, high24h: 15.10, low24h: 14.20, volume24h: 680000000, marketCap: 8600000000, supply: 587000000, icon: 'L' },
  { id: 'polygon', symbol: 'MATIC', name: 'Polygon', price: 0.8932, change24h: 1.54, high24h: 0.915, low24h: 0.875, volume24h: 420000000, marketCap: 8900000000, supply: 10000000000, icon: 'M' },
  { id: 'uniswap', symbol: 'UNI', name: 'Uniswap', price: 9.45, change24h: -0.78, high24h: 9.80, low24h: 9.30, volume24h: 210000000, marketCap: 5700000000, supply: 600000000, icon: 'U' },
  { id: 'litecoin', symbol: 'LTC', name: 'Litecoin', price: 82.34, change24h: 0.45, high24h: 84.00, low24h: 81.00, volume24h: 560000000, marketCap: 6100000000, supply: 74000000, icon: 'L' },
  { id: 'stellar', symbol: 'XLM', name: 'Stellar', price: 0.1245, change24h: -0.33, high24h: 0.130, low24h: 0.121, volume24h: 150000000, marketCap: 3500000000, supply: 28000000000, icon: 'S' },
  { id: 'tron', symbol: 'TRX', name: 'TRON', price: 0.1089, change24h: 1.12, high24h: 0.112, low24h: 0.106, volume24h: 480000000, marketCap: 9500000000, supply: 87000000000, icon: 'T' },
];

export const tradingPairs = [
  { pair: 'BTC/USDT', price: 67842.50, change: 2.34, volume: '28.5B', bid: 67840.00, ask: 67845.00 },
  { pair: 'ETH/USDT', price: 3521.80, change: 1.87, volume: '15.2B', bid: 3521.00, ask: 3522.60 },
  { pair: 'BNB/USDT', price: 578.40, change: -0.92, volume: '1.85B', bid: 578.10, ask: 578.70 },
  { pair: 'SOL/USDT', price: 182.35, change: 4.21, volume: '3.2B', bid: 182.20, ask: 182.50 },
  { pair: 'XRP/USDT', price: 0.6234, change: -1.45, volume: '2.1B', bid: 0.6230, ask: 0.6238 },
  { pair: 'ADA/USDT', price: 0.4821, change: 0.67, volume: '450M', bid: 0.4819, ask: 0.4823 },
  { pair: 'DOGE/USDT', price: 0.1623, change: 3.45, volume: '1.2B', bid: 0.1622, ask: 0.1624 },
  { pair: 'AVAX/USDT', price: 38.72, change: -2.11, volume: '580M', bid: 38.68, ask: 38.76 },
  { pair: 'DOT/USDT', price: 7.84, change: 1.23, volume: '320M', bid: 7.83, ask: 7.85 },
  { pair: 'LINK/USDT', price: 14.67, change: 2.89, volume: '680M', bid: 14.65, ask: 14.69 },
];

export const orderBookAsks = [
  { price: 67895.00, amount: 0.245, total: 16634.28 },
  { price: 67880.00, amount: 0.512, total: 34754.56 },
  { price: 67865.00, amount: 1.234, total: 83749.51 },
  { price: 67852.00, amount: 0.089, total: 6038.83 },
  { price: 67848.00, amount: 2.156, total: 146280.29 },
  { price: 67845.00, amount: 0.678, total: 46018.91 },
  { price: 67843.00, amount: 0.923, total: 62598.09 },
  { price: 67842.50, amount: 0.341, total: 23134.29 },
];

export const orderBookBids = [
  { price: 67841.00, amount: 0.567, total: 38465.85 },
  { price: 67838.00, amount: 1.234, total: 83713.29 },
  { price: 67835.00, amount: 0.891, total: 60440.39 },
  { price: 67830.00, amount: 2.345, total: 159061.35 },
  { price: 67825.00, amount: 0.456, total: 30928.20 },
  { price: 67820.00, amount: 1.789, total: 121327.98 },
  { price: 67815.00, amount: 0.234, total: 15872.71 },
  { price: 67810.00, amount: 3.456, total: 234432.96 },
];

export const recentTrades = [
  { time: '16:23:41', price: 67842.50, amount: 0.234, side: 'buy' },
  { time: '16:23:39', price: 67840.00, amount: 0.123, side: 'sell' },
  { time: '16:23:37', price: 67843.00, amount: 0.567, side: 'buy' },
  { time: '16:23:35', price: 67838.00, amount: 0.089, side: 'sell' },
  { time: '16:23:33', price: 67845.00, amount: 1.234, side: 'buy' },
  { time: '16:23:31', price: 67841.00, amount: 0.456, side: 'sell' },
  { time: '16:23:29', price: 67839.00, amount: 0.789, side: 'buy' },
  { time: '16:23:27', price: 67844.00, amount: 0.321, side: 'sell' },
  { time: '16:23:25', price: 67846.00, amount: 0.654, side: 'buy' },
  { time: '16:23:23', price: 67837.00, amount: 0.987, side: 'sell' },
];

export const walletAssets = [
  { asset: 'BTC', balance: 0.5432, available: 0.4932, inOrder: 0.05, value: 36856.27, change: 2.34 },
  { asset: 'ETH', balance: 12.456, available: 10.456, inOrder: 2.0, value: 43846.37, change: 1.87 },
  { asset: 'BNB', balance: 45.23, available: 45.23, inOrder: 0, value: 26165.03, change: -0.92 },
  { asset: 'USDT', balance: 15234.56, available: 12234.56, inOrder: 3000, value: 15234.56, change: 0.00 },
  { asset: 'SOL', balance: 78.9, available: 78.9, inOrder: 0, value: 14387.42, change: 4.21 },
  { asset: 'ADA', balance: 5000, available: 5000, inOrder: 0, value: 2410.50, change: 0.67 },
  { asset: 'DOGE', balance: 10000, available: 10000, inOrder: 0, value: 1623.00, change: 3.45 },
];

export const openOrders = [
  { id: 'ORD-001', pair: 'BTC/USDT', type: 'Limit', side: 'Buy', price: 65000.00, amount: 0.1, filled: 0, total: 6500.00, date: '2026-10-02 14:23', status: 'Open' },
  { id: 'ORD-002', pair: 'ETH/USDT', type: 'Limit', side: 'Sell', price: 3800.00, amount: 2.5, filled: 1.2, total: 9500.00, date: '2026-10-02 13:45', status: 'Partial' },
  { id: 'ORD-003', pair: 'SOL/USDT', type: 'Stop Limit', side: 'Buy', price: 175.00, amount: 10, filled: 0, total: 1750.00, date: '2026-10-02 12:10', status: 'Open' },
];

export const orderHistory = [
  { id: 'ORD-004', pair: 'BTC/USDT', type: 'Market', side: 'Buy', price: 67200.00, amount: 0.05, filled: 0.05, total: 3360.00, date: '2026-10-01 18:30', status: 'Filled' },
  { id: 'ORD-005', pair: 'ETH/USDT', type: 'Limit', side: 'Sell', price: 3500.00, amount: 5, filled: 5, total: 17500.00, date: '2026-10-01 15:22', status: 'Filled' },
  { id: 'ORD-006', pair: 'BNB/USDT', type: 'Limit', side: 'Buy', price: 560.00, amount: 20, filled: 0, total: 11200.00, date: '2026-09-30 09:15', status: 'Cancelled' },
  { id: 'ORD-007', pair: 'SOL/USDT', type: 'Market', side: 'Buy', price: 178.50, amount: 25, filled: 25, total: 4462.50, date: '2026-09-29 11:05', status: 'Filled' },
  { id: 'ORD-008', pair: 'ADA/USDT', type: 'Limit', side: 'Sell', price: 0.50, amount: 5000, filled: 5000, total: 2500.00, date: '2026-09-28 20:30', status: 'Filled' },
];

export const transactions = [
  { date: '2026-10-02 10:15', asset: 'USDT', type: 'Deposit', amount: 5000, status: 'Completed', txId: '0x7f8a9b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a' },
  { date: '2026-10-01 15:30', asset: 'BTC', type: 'Withdrawal', amount: 0.1, status: 'Completed', txId: '0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b' },
  { date: '2026-09-30 09:45', asset: 'ETH', type: 'Deposit', amount: 5, status: 'Pending', txId: '0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c' },
  { date: '2026-09-28 16:20', asset: 'USDT', type: 'Withdrawal', amount: 2000, status: 'Failed', txId: '0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d' },
  { date: '2026-09-25 11:00', asset: 'SOL', type: 'Deposit', amount: 50, status: 'Completed', txId: '0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e' },
];

export const earnProducts = [
  { asset: 'BTC', name: 'Bitcoin', apr: '1.5 - 3.2%', duration: 'Flexible', minimum: '0.001 BTC', risk: 'Low', type: 'Simple Earn' },
  { asset: 'ETH', name: 'Ethereum', apr: '3.5 - 5.8%', duration: '30 Days', minimum: '0.01 ETH', risk: 'Low', type: 'Simple Earn' },
  { asset: 'BNB', name: 'BNB', apr: '4.2 - 8.5%', duration: '60 Days', minimum: '0.1 BNB', risk: 'Medium', type: 'Staking' },
  { asset: 'USDT', name: 'Tether', apr: '5.0 - 12.5%', duration: 'Flexible', minimum: '10 USDT', risk: 'Low', type: 'Simple Earn' },
  { asset: 'SOL', name: 'Solana', apr: '6.5 - 14.2%', duration: '90 Days', minimum: '1 SOL', risk: 'Medium', type: 'Staking' },
  { asset: 'ADA', name: 'Cardano', apr: '3.8 - 7.2%', duration: '30 Days', minimum: '100 ADA', risk: 'Low', type: 'Staking' },
  { asset: 'LINK', name: 'Chainlink', apr: '8.2 - 18.5%', duration: '120 Days', minimum: '5 LINK', risk: 'Medium', type: 'DeFi Staking' },
  { asset: 'DOT', name: 'Polkadot', apr: '10.5 - 22.0%', duration: '90 Days', minimum: '1 DOT', risk: 'High', type: 'DeFi Staking' },
];

export const p2pOrders = [
  { merchant: 'CryptoKing99', price: 86.45, available: '50,000 USDT', minOrder: '₹5,000', maxOrder: '₹500,000', payment: ['UPI', 'IMPS', 'Bank Transfer'], rating: 98.2, trades: 4521, completionRate: 99.1, verified: true },
  { merchant: 'TradeMaster', price: 86.52, available: '25,000 USDT', minOrder: '₹10,000', maxOrder: '₹250,000', payment: ['UPI', 'PhonePe'], rating: 96.8, trades: 2134, completionRate: 98.5, verified: true },
  { merchant: 'FastTrader', price: 86.38, available: '100,000 USDT', minOrder: '₹1,000', maxOrder: '₹1,000,000', payment: ['UPI', 'NEFT', 'RTGS'], rating: 99.5, trades: 8932, completionRate: 99.8, verified: true },
  { merchant: 'SecureEx', price: 86.60, available: '15,000 USDT', minOrder: '₹5,000', maxOrder: '₹150,000', payment: ['Bank Transfer', 'IMPS'], rating: 95.2, trades: 1245, completionRate: 97.3, verified: false },
  { merchant: 'GlobalCrypto', price: 86.42, available: '75,000 USDT', minOrder: '₹2,000', maxOrder: '₹750,000', payment: ['UPI', 'PayTM', 'GPay'], rating: 97.9, trades: 6781, completionRate: 99.2, verified: true },
];

export const newsArticles = [
  { id: 1, title: 'Bitcoin Surges Past $67,000 as Institutional Demand Increases', category: 'Bitcoin', date: '2026-10-02', readTime: '4 min', excerpt: 'Bitcoin has broken through the $67,000 resistance level as major institutional players continue to accumulate the digital asset...', author: 'Sarah Chen', image: null, featured: true },
  { id: 2, title: 'Ethereum Upgrade Boosts Network Performance by 40%', category: 'Ethereum', date: '2026-10-02', readTime: '5 min', excerpt: 'The latest Ethereum network upgrade has significantly improved transaction throughput and reduced gas fees...', author: 'Michael Park', image: null, featured: false },
  { id: 3, title: 'SEC Approves New Crypto ETF Products for Major Exchanges', category: 'Regulation', date: '2026-10-01', readTime: '6 min', excerpt: 'The Securities and Exchange Commission has approved a new batch of cryptocurrency ETF products...', author: 'James Wilson', image: null, featured: false },
  { id: 4, title: 'DeFi Total Value Locked Reaches New All-Time High of $150 Billion', category: 'DeFi', date: '2026-10-01', readTime: '3 min', excerpt: 'Decentralized Finance protocols have collectively achieved a new record in total value locked...', author: 'Emma Rodriguez', image: null, featured: false },
  { id: 5, title: 'Solana Network Processes 100,000 Transactions Per Second', category: 'Technology', date: '2026-09-30', readTime: '4 min', excerpt: 'Solana blockchain has achieved a new milestone by processing over 100,000 transactions per second...', author: 'Alex Kumar', image: null, featured: false },
  { id: 6, title: 'Global Crypto Market Cap Surpasses $2.5 Trillion', category: 'Markets', date: '2026-09-30', readTime: '5 min', excerpt: 'The global cryptocurrency market has reached a new milestone with total market capitalization exceeding $2.5 trillion...', author: 'Lisa Zhang', image: null, featured: false },
];

export const academyArticles = [
  { id: 1, title: 'What is Bitcoin? A Comprehensive Beginner\'s Guide', category: 'Beginner', readTime: '8 min', difficulty: 'Beginner', excerpt: 'Learn everything you need to know about Bitcoin, the world\'s first and most popular cryptocurrency...' },
  { id: 2, title: 'Understanding Blockchain Technology', category: 'Blockchain', readTime: '10 min', difficulty: 'Beginner', excerpt: 'Discover how blockchain technology works and why it\'s revolutionizing industries...' },
  { id: 3, title: 'Technical Analysis: Reading Candlestick Charts', category: 'Trading', readTime: '12 min', difficulty: 'Intermediate', excerpt: 'Master the art of reading candlestick charts and identifying key price patterns...' },
  { id: 4, title: 'Introduction to DeFi: Decentralized Finance Explained', category: 'DeFi', readTime: '9 min', difficulty: 'Intermediate', excerpt: 'Explore the world of decentralized finance and how it\'s changing traditional banking...' },
  { id: 5, title: 'How to Stake Cryptocurrency and Earn Passive Income', category: 'Trading', readTime: '7 min', difficulty: 'Beginner', excerpt: 'Learn about cryptocurrency staking and how to earn rewards by participating in blockchain networks...' },
  { id: 6, title: 'Understanding Smart Contracts and Their Applications', category: 'Blockchain', readTime: '11 min', difficulty: 'Intermediate', excerpt: 'Dive deep into smart contracts and discover how they automate trustless transactions...' },
  { id: 7, title: 'Web3: The Future of the Internet', category: 'Web3', readTime: '8 min', difficulty: 'Intermediate', excerpt: 'Explore Web3 and how blockchain technology is creating a new decentralized internet...' },
  { id: 8, title: 'Crypto Security Best Practices', category: 'Security', readTime: '6 min', difficulty: 'Beginner', excerpt: 'Protect your digital assets with these essential cryptocurrency security practices...' },
  { id: 9, title: 'Introduction to Futures Trading', category: 'Trading', readTime: '13 min', difficulty: 'Advanced', excerpt: 'Master cryptocurrency futures trading with leverage and advanced order types...' },
];

// Structured fee data for fees page
export const feeStructure = {
  spot: [
    { level: 'VIP 0', volume: '< 50 BTC', bnb: '< 50 BNB', maker: '0.1000%', taker: '0.1000%', makerBnb: '0.0750%', takerBnb: '0.0750%' },
    { level: 'VIP 1', volume: '≥ 50 BTC', bnb: '≥ 50 BNB', maker: '0.0900%', taker: '0.1000%', makerBnb: '0.0675%', takerBnb: '0.0750%' },
    { level: 'VIP 2', volume: '≥ 500 BTC', bnb: '≥ 200 BNB', maker: '0.0800%', taker: '0.1000%', makerBnb: '0.0600%', takerBnb: '0.0750%' },
    { level: 'VIP 3', volume: '≥ 1500 BTC', bnb: '≥ 500 BNB', maker: '0.0700%', taker: '0.0900%', makerBnb: '0.0525%', takerBnb: '0.0675%' },
    { level: 'VIP 4', volume: '≥ 4500 BTC', bnb: '≥ 1000 BNB', maker: '0.0500%', taker: '0.0800%', makerBnb: '0.0375%', takerBnb: '0.0600%' },
    { level: 'VIP 5', volume: '≥ 10000 BTC', bnb: '≥ 1500 BNB', maker: '0.0200%', taker: '0.0600%', makerBnb: '0.0150%', takerBnb: '0.0450%' },
  ],
  futures: [
    { level: 'Regular', volume: '< $10M', maker: '0.0200%', taker: '0.0500%' },
    { level: 'VIP 1', volume: '≥ $10M', maker: '0.0160%', taker: '0.0400%' },
    { level: 'VIP 2', volume: '≥ $50M', maker: '0.0140%', taker: '0.0350%' },
    { level: 'VIP 3', volume: '≥ $250M', maker: '0.0120%', taker: '0.0320%' },
    { level: 'VIP 4', volume: '≥ $1B', maker: '0.0100%', taker: '0.0300%' },
    { level: 'VIP 5', volume: '≥ $5B', maker: '0.0080%', taker: '0.0270%' },
  ],
};

export const supportArticles = [
  { id: 1, title: 'How to enable Google Authenticator (2FA)', category: 'Security', updated: '2026-09-15' },
  { id: 2, title: 'How to complete identity verification (KYC)', category: 'Account', updated: '2026-09-20' },
  { id: 3, title: 'How to deposit cryptocurrency', category: 'Wallet', updated: '2026-10-01' },
  { id: 4, title: 'How to withdraw funds to your bank account', category: 'Wallet', updated: '2026-09-28' },
  { id: 5, title: 'What is P2P trading and how does it work?', category: 'Trading', updated: '2026-09-10' },
  { id: 6, title: 'Understanding order types: Limit, Market, Stop', category: 'Trading', updated: '2026-09-25' },
  { id: 7, title: 'How to recover your BINANCE account', category: 'Account', updated: '2026-09-05' },
  { id: 8, title: 'How to use the Earn products', category: 'Earn', updated: '2026-10-02' },
  { id: 9, title: 'How to set price alerts', category: 'Trading', updated: '2026-09-18' },
  { id: 10, title: 'Anti-phishing code: how to set it up', category: 'Security', updated: '2026-09-12' },
];

export const generateCandleData = (count = 60) => {
  const data = [];
  let price = 67000;
  const now = Date.now();
  for (let i = count; i >= 0; i--) {
    const open = price;
    const change = (Math.random() - 0.48) * 500;
    const close = open + change;
    const high = Math.max(open, close) + Math.random() * 200;
    const low = Math.min(open, close) - Math.random() * 200;
    const volume = Math.random() * 1000 + 100;
    data.push({ time: now - i * 3600000, open, high, low, close, volume });
    price = close;
  }
  return data;
};

export const notifications = [
  { id: 1, type: 'security', title: 'New Login Detected', message: 'A new login was detected from Mumbai, India. If this was you, no action required.', time: '2 min ago', read: false },
  { id: 2, type: 'trading', title: 'Order Filled', message: 'Your BUY order for 0.05 BTC at $67,200 has been completely filled.', time: '1 hour ago', read: false },
  { id: 3, type: 'system', title: 'Deposit Confirmed', message: 'Your deposit of 5,000 USDT has been confirmed and credited to your account.', time: '3 hours ago', read: true },
  { id: 4, type: 'promotions', title: 'Referral Reward', message: 'You earned $25 from your referral program. Rewards have been credited to your account.', time: '1 day ago', read: true },
  { id: 5, type: 'trading', title: 'Price Alert: BTC', message: 'Bitcoin has reached your target price of $67,000.', time: '2 days ago', read: true },
  { id: 6, type: 'system', title: 'Withdrawal Processed', message: 'Your withdrawal of 0.1 BTC has been processed and sent to your wallet.', time: '3 days ago', read: true },
];

export const supportCategories = [
  { icon: '👤', title: 'Account', description: 'Login, Registration, KYC, Account Settings', articles: 45 },
  { icon: '🔒', title: 'Security', description: '2FA, Anti-Phishing, Device Management', articles: 32 },
  { icon: '📈', title: 'Trading', description: 'Spot, Futures, Orders, Trading Rules', articles: 67 },
  { icon: '💳', title: 'Deposit & Buy', description: 'Fiat deposits, Card purchases, Bank transfer', articles: 28 },
  { icon: '💸', title: 'Withdrawal', description: 'Crypto withdrawals, Fiat withdrawals, Limits', articles: 24 },
  { icon: '🤝', title: 'P2P Trading', description: 'P2P orders, Disputes, Payment methods', articles: 19 },
  { icon: '⚡', title: 'Futures', description: 'Perpetual contracts, Leverage, Liquidation', articles: 38 },
  { icon: '💰', title: 'Earn', description: 'Simple Earn, Staking, Launchpool, DeFi', articles: 21 },
];
