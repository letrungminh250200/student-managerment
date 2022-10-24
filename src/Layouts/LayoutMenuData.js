const Navdata = [
	{
		label: 'Menu',
		isHeader: true
	},
	{
		id: 'dashboard',
		label: 'Dashboards',
		icon: 'ri-dashboard-2-line',
		link: '/dashboard',
		stateVariables: "isDashboard",
		// subItems: [
		// 	{
		// 		id: 'projects',
		// 		label: 'Projects',
		// 		link: '/dashboard',
		// 		parentId: 'dashboard'
		// 	},
		// ]
	},
	// {
	// 	id: 'apps',
	// 	label: 'Apps',
	// 	icon: 'ri-apps-2-line',
	// 	link: '/#',
	// 	stateVariables: "isApps",
	// 	subItems: [

	// 		{
	// 			id: 'appsprojects',
	// 			label: 'Projects',
	// 			link: '/#',
	// 			isChildItem: true,
	// 			stateVariables: "isProjects",
	// 			childItems: [
	// 				{ id: 'projectslist', label: 'List', link: '/projects/apps-projects-list' },
	// 				{ id: 'projectsoverview', label: 'Overview', link: '/projects/apps-projects-overview' },
	// 				{ id: 'projectscreate', label: 'Create Project', link: '/projects/apps-projects-create' }
	// 			]
	// 		}, 
	// 		// {
	// 		// 	id: "filemanager",
	// 		// 	label: "File Manager",
	// 		// 	link: "/filemanager",
	// 		// 	parentId: "apps",
	// 		// 	badgeName: "New",
	// 		// 	badgeColor: "danger"
	// 		// },

	// 	]
	// },
	{
		label: 'pages',
		isHeader: true
	},
	// {
	// 	id: 'authentication',
	// 	label: 'Authentication',
	// 	icon: 'ri-account-circle-line',
	// 	link: '/#',
	// 	stateVariables: "isAuth",
	// 	subItems: [
	// 		{
	// 			id: 'signIn',
	// 			label: 'Sign In',
	// 			link: '/#',
	// 			isChildItem: true,
	// 			stateVariables: "isSignIn",
	// 			childItems: [
	// 				{ id: 'signin', label: 'Basic', link: '/authenticationInner/login/auth-signin' },
	// 			]
	// 		},
	// 		{
	// 			id: 'signUp',
	// 			label: 'Sign Up',
	// 			link: '/#',
	// 			isChildItem: true,
	// 			stateVariables: "isSignUp",
	// 			childItems: [
	// 				{ id: 'signup', label: 'Basic', link: '/authenticationInner/register/auth-signup' },
	// 			]
	// 		},
	// 		{
	// 			id: 'passwordReset',
	// 			label: 'Password Reset',
	// 			link: '/#',
	// 			isChildItem: true,
	// 			stateVariables: "isPasswordReset",
	// 			childItems: [
	// 				{ id: 'pass-reset-basic', label: 'Basic', link: '/authenticationInner/passwordreset/auth-pass-reset-basic' },
	// 			]
	// 		},
	// 		{
	// 			id: "passwordCreate",
	// 			label: "Password Create",
	// 			link: "/#",
	// 			isChildItem: true,
	// 			parentId: "authentication",
	// 			stateVariables: 'isPasswordCreate',
	// 			childItems: [
	// 				{ id: 1, label: "Basic", link: "/authenticationInner/passwordcreate/auth-pass-change-basic" },
	// 			]
	// 		},
	// 		// {
	// 		// 	id: 'errors',
	// 		// 	label: 'Errors',
	// 		// 	link: '/#',
	// 		// 	isChildItem: true,
	// 		// 	stateVariables: "isError",
	// 		// 	childItems: [
	// 		// 		{ id: '404-basic', label: '404 Basic', link: '/authenticationInner/errors/auth-404-basic' },
	// 		// 		{ id: '404-cover', label: '404 Cover', link: '/authenticationInner/errors/auth-404-cover' },
	// 		// 		{ id: '404-alt', label: '404 Alt', link: '/authenticationInner/errors/auth-404-alt' },
	// 		// 		{ id: 'auth-500', label: '500', link: '/authenticationInner/errors/auth-500' },
	// 		// 		{ id: 'auth-offline', label: 'Offline Page', link: '/authenticationInner/errors/auth-offline' }
	// 		// 	]
	// 		// }
	// 	]
	// },
	// {
	// 	id: 'pages',
	// 	label: 'Pages',
	// 	icon: 'ri-pages-line',
	// 	link: '/#',
	// 	stateVariables: "isPages",
	// 	subItems: [
	// 		{
	// 			id: 'profile',
	// 			label: 'Profile',
	// 			link: '/#',
	// 			isChildItem: true,
	// 			stateVariables: "isProfile",
	// 			childItems: [
	// 				{ id: 'simplepage', label: 'Simple Page', link: '/pages/profile/simple/simplepage' },
	// 				{ id: 'profile-settings', label: 'Settings', link: '/pages/profile/settings/pages-profile-settings' }
	// 			]
	// 		},

	// 	]
	// },
	{
		label: 'Components',
		isHeader: true
	},
	{
		id: 'tables',
		label: 'Tables',
		icon: 'ri-layout-grid-line',
		link: '/#',
		stateVariables: "isTables",
		subItems: [
			{ id: 'customers', label: 'Customers', link: '/tables/customers', parentId: 'tables' }
		]
	},


];

const MOCK_DATA = {
	Navdata
}

export default MOCK_DATA;