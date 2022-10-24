<svelte:head>
  <title>Student management</title>
</svelte:head>
<script>
	import { Col, Container, Row } from 'sveltestrap';

	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
	import ActiveProjects from './ActiveProjects.svelte';
	// import Chat from './Chat.svelte';
	import ProjectsOverview from './ProjectsOverview.svelte';
	import ProjectsStatus from './ProjectsStatus.svelte';
	import TeamMembers from './TeamMembers.svelte';
	import UpcomingSchedules from './UpcomingSchedules.svelte';
	import Widgets from './Widgets.svelte';

    import data from '../../common/data/dashboardProjects';
	import Counter from '../../Components/Common/counter.svelte';
</script>
<Counter />
<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Dashboards" pageTitle="Dashboards" />
		<Row class="project-wrapper">
			<Col xxl={8}>
				<Widgets projectsWidgets={data.projectsWidgets} />
				<ProjectsOverview />
			</Col>
			<UpcomingSchedules />
		</Row>
		<Row>
			<ActiveProjects activeProjects={data.activeProjects} />
		</Row>
		<Row>
			<TeamMembers teamMembers={data.teamMembers} />
			<!-- <Chat /> -->
			<ProjectsStatus />
		</Row>
	</Container>
</div>