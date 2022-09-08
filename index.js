require('dotenv').config();

// imports
const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const pkg = require('./package.json');
const enforce = require('express-sslify');

// const
const initialiseData = require('./server/initial-data');
const isProd = process.env.NODE_ENV === 'production';
const PROJECT_NAME = pkg.app.title || 'Brainformance';
const adapterConfig = {
	mongoUri: process.env.MONGODB_URI,
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
};

const sessionStore = new MongoStore({
	url: process.env.MONGODB_URI,
	autoReconnect: true,
	secret: process.env.SECRET,
	mongooseConnection: adapterConfig,
	autoRemove: 'disabled',
});

const keystone = new Keystone({
	name: PROJECT_NAME,
	adapter: new Adapter(adapterConfig),
	onConnect: initialiseData,
	sessionStore: sessionStore,
	cookieSecret: process.env.COOKIE_SECRET,
	secureCookies: isProd,
});

//Schemas
require('./server/models')(keystone);

const authStrategy = keystone.createAuthStrategy({
	type: PasswordAuthStrategy,
	list: 'User',
});

module.exports = {
	keystone,
	apps: [
		new GraphQLApp(),
		new AdminUIApp({
			name: PROJECT_NAME,
			enableDefaultRoute: false,
			authStrategy,
			hooks: require.resolve('./server/admin/'),
		}),
		new NextApp({ dir: 'app' }),
	],
	configureExpress: (app) => {
		if (isProd) {
			app.use(
				enforce.HTTPS({
					trustProtoHeader: true,
				}),
			);
			app.set('trust proxy', 1);
		}
	},
	distDir: 'dist',
};
