const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\twostepverification\\auth-twostep-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\twostepverification\\auth-twostep-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordcreate\\auth-pass-change-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\successmessage\\auth-success-msg-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\successmessage\\auth-success-msg-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\ParticlesAuth.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\passwordreset\\auth-pass-reset-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\AuthSlider.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\register\\auth-signup.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-basic.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-cover.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-404-alt.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-offline.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\errors\\auth-500.svelte"),
	() => import("..\\..\\src\\routes\\authenticationInner\\login\\auth-signin.svelte"),
	() => import("..\\..\\src\\routes\\filemanager\\index.svelte"),
	() => import("..\\..\\src\\routes\\filemanager\\FileManagerCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\index.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\ProjectsOverviewCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\PrjectsStatusCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\TeamMembersCharts.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\UpcomingSchedules.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\ProjectsOverview.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\ActiveProjects.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\ProjectsStatus.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\TeamMembers.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\MyTasks.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Widgets.svelte"),
	() => import("..\\..\\src\\routes\\dashboard\\Chat.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-overview.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-create.svelte"),
	() => import("..\\..\\src\\routes\\projects\\apps-projects-list.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\ActivitiesTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\DocumentsTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\OverviewTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\Section.svelte"),
	() => import("..\\..\\src\\routes\\projects\\ProjectOverview\\TeamTab.svelte"),
	() => import("..\\..\\src\\routes\\projects\\List.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\index.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\workProcess.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\features.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\services.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\contact.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\counter.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\reviews.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\client.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\footer.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\navbar.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\plans.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\home.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\cta.svelte"),
	() => import("..\\..\\src\\routes\\landing\\OnePage\\faq.svelte"),
	() => import("..\\..\\src\\routes\\tables\\basictables\\tables-basic.svelte"),
	() => import("..\\..\\src\\routes\\tables\\gridjs\\tables-gridjs.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-coming-soon.svelte"),
	() => import("..\\..\\src\\routes\\pages\\pages-maintenance.svelte"),
	() => import("..\\..\\src\\routes\\pages\\profile\\settings\\pages-profile-settings.svelte"),
	() => import("..\\..\\src\\routes\\pages\\profile\\simple\\simplepage.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/authenticationInner/twostepverification/auth-twostep-basic.svelte
	[/^\/authenticationInner\/twostepverification\/auth-twostep-basic\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/authenticationInner/twostepverification/auth-twostep-cover.svelte
	[/^\/authenticationInner\/twostepverification\/auth-twostep-cover\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/authenticationInner/passwordcreate/auth-pass-change-basic.svelte
	[/^\/authenticationInner\/passwordcreate\/auth-pass-change-basic\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/authenticationInner/successmessage/auth-success-msg-basic.svelte
	[/^\/authenticationInner\/successmessage\/auth-success-msg-basic\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/authenticationInner/successmessage/auth-success-msg-cover.svelte
	[/^\/authenticationInner\/successmessage\/auth-success-msg-cover\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/authenticationInner/ParticlesAuth.svelte
	[/^\/authenticationInner\/ParticlesAuth\/?$/, [c[0], c[8]], [c[1]]],

	// src/routes/authenticationInner/passwordreset/auth-pass-reset-basic.svelte
	[/^\/authenticationInner\/passwordreset\/auth-pass-reset-basic\/?$/, [c[0], c[9]], [c[1]]],

	// src/routes/authenticationInner/AuthSlider.svelte
	[/^\/authenticationInner\/AuthSlider\/?$/, [c[0], c[10]], [c[1]]],

	// src/routes/authenticationInner/register/auth-signup.svelte
	[/^\/authenticationInner\/register\/auth-signup\/?$/, [c[0], c[11]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-basic.svelte
	[/^\/authenticationInner\/errors\/auth-404-basic\/?$/, [c[0], c[12]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-cover.svelte
	[/^\/authenticationInner\/errors\/auth-404-cover\/?$/, [c[0], c[13]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-404-alt.svelte
	[/^\/authenticationInner\/errors\/auth-404-alt\/?$/, [c[0], c[14]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-offline.svelte
	[/^\/authenticationInner\/errors\/auth-offline\/?$/, [c[0], c[15]], [c[1]]],

	// src/routes/authenticationInner/errors/auth-500.svelte
	[/^\/authenticationInner\/errors\/auth-500\/?$/, [c[0], c[16]], [c[1]]],

	// src/routes/authenticationInner/login/auth-signin.svelte
	[/^\/authenticationInner\/login\/auth-signin\/?$/, [c[0], c[17]], [c[1]]],

	// src/routes/filemanager/index.svelte
	[/^\/filemanager\/?$/, [c[0], c[18]], [c[1]]],

	// src/routes/filemanager/FileManagerCharts.svelte
	[/^\/filemanager\/FileManagerCharts\/?$/, [c[0], c[19]], [c[1]]],

	// src/routes/dashboard/index.svelte
	[/^\/dashboard\/?$/, [c[0], c[20]], [c[1]]],

	// src/routes/dashboard/ProjectsOverviewCharts.svelte
	[/^\/dashboard\/ProjectsOverviewCharts\/?$/, [c[0], c[21]], [c[1]]],

	// src/routes/dashboard/PrjectsStatusCharts.svelte
	[/^\/dashboard\/PrjectsStatusCharts\/?$/, [c[0], c[22]], [c[1]]],

	// src/routes/dashboard/TeamMembersCharts.svelte
	[/^\/dashboard\/TeamMembersCharts\/?$/, [c[0], c[23]], [c[1]]],

	// src/routes/dashboard/UpcomingSchedules.svelte
	[/^\/dashboard\/UpcomingSchedules\/?$/, [c[0], c[24]], [c[1]]],

	// src/routes/dashboard/ProjectsOverview.svelte
	[/^\/dashboard\/ProjectsOverview\/?$/, [c[0], c[25]], [c[1]]],

	// src/routes/dashboard/ActiveProjects.svelte
	[/^\/dashboard\/ActiveProjects\/?$/, [c[0], c[26]], [c[1]]],

	// src/routes/dashboard/ProjectsStatus.svelte
	[/^\/dashboard\/ProjectsStatus\/?$/, [c[0], c[27]], [c[1]]],

	// src/routes/dashboard/TeamMembers.svelte
	[/^\/dashboard\/TeamMembers\/?$/, [c[0], c[28]], [c[1]]],

	// src/routes/dashboard/MyTasks.svelte
	[/^\/dashboard\/MyTasks\/?$/, [c[0], c[29]], [c[1]]],

	// src/routes/dashboard/Widgets.svelte
	[/^\/dashboard\/Widgets\/?$/, [c[0], c[30]], [c[1]]],

	// src/routes/dashboard/Chat.svelte
	[/^\/dashboard\/Chat\/?$/, [c[0], c[31]], [c[1]]],

	// src/routes/projects/apps-projects-overview.svelte
	[/^\/projects\/apps-projects-overview\/?$/, [c[0], c[32]], [c[1]]],

	// src/routes/projects/apps-projects-create.svelte
	[/^\/projects\/apps-projects-create\/?$/, [c[0], c[33]], [c[1]]],

	// src/routes/projects/apps-projects-list.svelte
	[/^\/projects\/apps-projects-list\/?$/, [c[0], c[34]], [c[1]]],

	// src/routes/projects/ProjectOverview/ActivitiesTab.svelte
	[/^\/projects\/ProjectOverview\/ActivitiesTab\/?$/, [c[0], c[35]], [c[1]]],

	// src/routes/projects/ProjectOverview/DocumentsTab.svelte
	[/^\/projects\/ProjectOverview\/DocumentsTab\/?$/, [c[0], c[36]], [c[1]]],

	// src/routes/projects/ProjectOverview/OverviewTab.svelte
	[/^\/projects\/ProjectOverview\/OverviewTab\/?$/, [c[0], c[37]], [c[1]]],

	// src/routes/projects/ProjectOverview/Section.svelte
	[/^\/projects\/ProjectOverview\/Section\/?$/, [c[0], c[38]], [c[1]]],

	// src/routes/projects/ProjectOverview/TeamTab.svelte
	[/^\/projects\/ProjectOverview\/TeamTab\/?$/, [c[0], c[39]], [c[1]]],

	// src/routes/projects/List.svelte
	[/^\/projects\/List\/?$/, [c[0], c[40]], [c[1]]],

	// src/routes/landing/OnePage/index.svelte
	[/^\/landing\/OnePage\/?$/, [c[0], c[41]], [c[1]]],

	// src/routes/landing/OnePage/workProcess.svelte
	[/^\/landing\/OnePage\/workProcess\/?$/, [c[0], c[42]], [c[1]]],

	// src/routes/landing/OnePage/features.svelte
	[/^\/landing\/OnePage\/features\/?$/, [c[0], c[43]], [c[1]]],

	// src/routes/landing/OnePage/services.svelte
	[/^\/landing\/OnePage\/services\/?$/, [c[0], c[44]], [c[1]]],

	// src/routes/landing/OnePage/contact.svelte
	[/^\/landing\/OnePage\/contact\/?$/, [c[0], c[45]], [c[1]]],

	// src/routes/landing/OnePage/counter.svelte
	[/^\/landing\/OnePage\/counter\/?$/, [c[0], c[46]], [c[1]]],

	// src/routes/landing/OnePage/reviews.svelte
	[/^\/landing\/OnePage\/reviews\/?$/, [c[0], c[47]], [c[1]]],

	// src/routes/landing/OnePage/client.svelte
	[/^\/landing\/OnePage\/client\/?$/, [c[0], c[48]], [c[1]]],

	// src/routes/landing/OnePage/footer.svelte
	[/^\/landing\/OnePage\/footer\/?$/, [c[0], c[49]], [c[1]]],

	// src/routes/landing/OnePage/navbar.svelte
	[/^\/landing\/OnePage\/navbar\/?$/, [c[0], c[50]], [c[1]]],

	// src/routes/landing/OnePage/plans.svelte
	[/^\/landing\/OnePage\/plans\/?$/, [c[0], c[51]], [c[1]]],

	// src/routes/landing/OnePage/home.svelte
	[/^\/landing\/OnePage\/home\/?$/, [c[0], c[52]], [c[1]]],

	// src/routes/landing/OnePage/cta.svelte
	[/^\/landing\/OnePage\/cta\/?$/, [c[0], c[53]], [c[1]]],

	// src/routes/landing/OnePage/faq.svelte
	[/^\/landing\/OnePage\/faq\/?$/, [c[0], c[54]], [c[1]]],

	// src/routes/tables/basictables/tables-basic.svelte
	[/^\/tables\/basictables\/tables-basic\/?$/, [c[0], c[55]], [c[1]]],

	// src/routes/tables/gridjs/tables-gridjs.svelte
	[/^\/tables\/gridjs\/tables-gridjs\/?$/, [c[0], c[56]], [c[1]]],

	// src/routes/pages/pages-coming-soon.svelte
	[/^\/pages\/pages-coming-soon\/?$/, [c[0], c[57]], [c[1]]],

	// src/routes/pages/pages-maintenance.svelte
	[/^\/pages\/pages-maintenance\/?$/, [c[0], c[58]], [c[1]]],

	// src/routes/pages/profile/settings/pages-profile-settings.svelte
	[/^\/pages\/profile\/settings\/pages-profile-settings\/?$/, [c[0], c[59]], [c[1]]],

	// src/routes/pages/profile/simple/simplepage.svelte
	[/^\/pages\/profile\/simple\/simplepage\/?$/, [c[0], c[60]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];