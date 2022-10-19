<script>
	export let projectsWidgets;
	import { Card, CardBody, Col, Row } from 'sveltestrap';
	import { BriefcaseIcon,AwardIcon,ClockIcon } from 'svelte-feather-icons';
</script>

<Row>
	{#each projectsWidgets as item}
		<Col xl={4}>
			<Card class="card-animate">
				<CardBody>
					<div class="d-flex align-items-center">
						<div class="avatar-sm flex-shrink-0">
							<span class={`avatar-title bg-soft-${item.feaIconClass} text-${item.feaIconClass} rounded-2 fs-2`}>
								{#if item.feaIcon === 'briefcase'}
									<BriefcaseIcon class={`text-${item.feaIconClass}`} size="24" />
								{/if}
								{#if item.feaIcon === 'award'}
									<AwardIcon class={`text-${item.feaIconClass}`} size="24"/>
								{/if}
								{#if item.feaIcon === 'clock'}
									<ClockIcon class={`text-${item.feaIconClass}`} size="24"/>
								{/if}
							</span>
						</div>
						<div class="flex-grow-1 overflow-hidden ms-3">
							<p class="text-uppercase fw-semibold text-muted text-truncate mb-3">{item.label}</p>
							<div class="d-flex align-items-center mb-3">
								<h4 class="fs-4 flex-grow-1 mb-0">
									{#each item.subCounter as item}
										<span class="counter-value" data-target={item.counter}>0</span>{item.suffix} {" "}
									{/each}
								</h4>
								<span class={'fs-12 badge badge-soft-' + item.badgeClass}><i class={'fs-13 align-middle me-1 ' + item.icon} />{item.percentage}</span>
							</div>
							<p class="text-muted text-truncate mb-0">{item.caption}</p>
						</div>
					</div>
				</CardBody>
			</Card>
		</Col>
	{/each}
</Row>