<svelte:head>
  <title>Product List | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
	import BreadCrumb from '../../Components/Common/BreadCrumb.svelte';
	import { Container } from 'sveltestrap';
	import data from '../../common/data/projectList';
	import List from './List.svelte';
</script>

<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Project List" pageTitle="Projects" />

		<List projectList={data.projectList} />
	</Container>
</div>