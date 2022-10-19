<script>
	import {
		Card,
		CardBody,
		Col,
		Nav,
		NavItem,
		NavLink,
		Row,
		TabContent,
		TabPane
	} from 'sveltestrap';
	let activeTab = 1;
	import OverviewTab from './OverviewTab.svelte';
	import DocumentsTab from './DocumentsTab.svelte';
	import ActivitiesTab from './ActivitiesTab.svelte';
	import TeamTab from './TeamTab.svelte';
	import slack from '../../../assets/images/brands/slack.png'
</script>

<Row>
	<Col lg={12}>
		<Card class="mt-n4 mx-n4 border-0">
			<div class="bg-soft-warning">
				<CardBody class="pb-0 px-4">
					<Row class="mb-3">
						<div class="col-md">
							<Row class="align-items-center g-3">
								<div class="col-md-auto">
									<div class="avatar-md">
										<div class="avatar-title bg-white rounded-circle">
											<img src={slack} alt="" class="avatar-xs" />
										</div>
									</div>
								</div>
								<div class="col-md">
									<div>
										<h4 class="fw-bold">Velzon - Admin & Dashboard</h4>
										<div class="hstack gap-3 flex-wrap">
											<div><i class="ri-building-line align-bottom me-1" /> Themesbrand</div>
											<div class="vr" />
											<div>Create Date : <span class="fw-medium">15 Sep, 2021</span></div>
											<div class="vr" />
											<div>Due Date : <span class="fw-medium">29 Dec, 2021</span></div>
											<div class="vr" />
											<div class="badge rounded-pill bg-info fs-12">New</div>
											<div class="badge rounded-pill bg-danger fs-12">High</div>
										</div>
									</div>
								</div>
							</Row>
						</div>
						<div class="col-md-auto">
							<div class="hstack gap-1 flex-wrap">
								<button type="button" class="btn py-0 fs-16 favourite-btn active">
									<i class="ri-star-fill" />
								</button>
								<button type="button" class="btn py-0 fs-16 text-body">
									<i class="ri-share-line" />
								</button>
								<button type="button" class="btn py-0 fs-16 text-body">
									<i class="ri-flag-line" />
								</button>
							</div>
						</div>
					</Row>

					<Nav class="nav-tabs-custom border-bottom-0" role="tablist">
						<NavItem>
							<NavLink
								on:click={() => (activeTab = 1)}
								active={activeTab == 1}
								class="fw-bold"
								href="#">
								Overview
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								on:click={() => (activeTab = 2)}
								active={activeTab == 2}
								class="fw-bold"
								href="#">
								Documents
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								on:click={() => (activeTab = 3)}
								active={activeTab == 3}
								class="fw-bold"
								href="#">
								Activities
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								on:click={() => (activeTab = 4)}
								active={activeTab == 4}
								class="fw-bold"
								href="#">
								Team
							</NavLink>
						</NavItem>
					</Nav>
				</CardBody>
			</div>
		</Card>
	</Col>
</Row>
<Row>
	<Col lg={12}>
		<TabContent {activeTab} class="text-muted">
			<TabPane tabId={1} class={activeTab == 1 ? 'active' : ''}>
				<OverviewTab />
			</TabPane>
			<TabPane tabId={2} class={activeTab == 2 ? 'active' : ''}>
				<DocumentsTab />
			</TabPane>
			<TabPane tabId={3} class={activeTab == 3 ? 'active' : ''}>
				<ActivitiesTab />
			</TabPane>
			<TabPane tabId={4} class={activeTab == 4 ? 'active' : ''}>
				<TeamTab />
			</TabPane>
		</TabContent>
	</Col>
</Row>
