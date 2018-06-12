const address = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://test:test123@ds147974.mlab.com:47974/learn-english';

export default address;