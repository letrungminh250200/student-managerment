<script>
import { Card, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap';
import TeamMembersCharts from './TeamMembersCharts.svelte';

export let teamMembers;
</script>
<Col xxl={4}>
    <Card>
        <CardHeader class="align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Team Members</h4>
            <div class="flex-shrink-0">
                <Dropdown class="card-header-dropdown">
                    <DropdownToggle tag="a" class="text-reset dropdown-btn p-0" color="" role="button">
                        <span class="fw-semibold text-uppercase fs-12">Sort by: </span><span class="text-muted">Last 30 Days<i class="mdi mdi-chevron-down ms-1"></i></span>
                    </DropdownToggle>
                    <DropdownMenu class="dropdown-menu dropdown-menu-end">
                        <DropdownItem>Today</DropdownItem>
                        <DropdownItem>Yesterday</DropdownItem>
                        <DropdownItem>Last 7 Days</DropdownItem>
                        <DropdownItem>Last 30 Days</DropdownItem>
                        <DropdownItem>This Month</DropdownItem>
                        <DropdownItem>Last Month</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </CardHeader>

        <div class="card-body">

            <div class="table-responsive table-card">
                <table class="table table-borderless table-nowrap align-middle mb-0">
                    <thead class="table-light text-muted">
                        <tr>
                            <th scope="col">Member</th>
                            <th scope="col">Hours</th>
                            <th scope="col">Tasks</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each teamMembers as item}
                            <tr>
                            <td class="d-flex">
                                <img src={item.img} alt="" class="avatar-xs rounded-3 me-2" />
                                <div>
                                    <h5 class="fs-15 mb-0">{item.name}</h5>
                                    <p class="fs-14 mb-0 text-muted">{item.position}</p>
                                </div>
                            </td>
                            <td>
                                <h6 class="mb-0">{item.hours}h : <span class="text-muted"> 150h </span></h6>
                            </td>
                            <td>
                                {item.tasks}
                            </td>
                            <td style="width: 5%">
                                <TeamMembersCharts seriesData={item.series} id={item.id} chartsColor={item.chartsColor} />
                            </td>
                        </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </Card>
</Col>