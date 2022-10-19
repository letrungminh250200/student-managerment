<script>
import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'sveltestrap';
import PrjectsStatusCharts from './PrjectsStatusCharts.svelte';

</script>
<Col xxl={4} lg={6}>
    <Card class="card-height-100">
        <CardHeader class="align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Projects Status</h4>
            <div class="flex-shrink-0">
                <Dropdown class="card-header-dropdown">
                    <DropdownToggle tag="a" class="dropdown-btn text-muted p-0" color="" role="button">
                        All Time <i class="mdi mdi-chevron-down ms-1"></i>
                    </DropdownToggle>
                    <DropdownMenu class="dropdown-menu-end">
                        <DropdownItem>All Time</DropdownItem>
                        <DropdownItem>Last 7 Days</DropdownItem>
                        <DropdownItem>Last 30 Days</DropdownItem>
                        <DropdownItem>Last 90 Days</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </CardHeader>

        <CardBody>
            <div id="prjects-status" class="apex-charts" dir="ltr">
                <PrjectsStatusCharts dataColors={["--vz-success", "--vz-primary", "--vz-warning", "--vz-danger"]} />
            </div>
            <div class="mt-3">
                <div class="d-flex justify-content-center align-items-center mb-4">
                    <h2 class="me-3 ff-secondary mb-0">258</h2>
                    <div>
                        <p class="text-muted mb-0">Total Projects</p>
                        <p class="text-success fw-semibold mb-0">
                            <span class="badge badge-soft-success p-1 rounded-circle"><i class="ri-arrow-right-up-line"></i></span> +3 New
                        </p>
                    </div>
                </div>

                <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                    <p class="fw-semibold mb-0"><i class="ri-checkbox-blank-circle-fill text-success align-middle me-2"></i> Completed</p>
                    <div>
                        <span class="text-muted pe-5">125 Projects</span>
                        <span class="text-success fw-semibold fs-13">15870hrs</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                    <p class="fw-semibold mb-0"><i class="ri-checkbox-blank-circle-fill text-primary align-middle me-2"></i> In Progress</p>
                    <div>
                        <span class="text-muted pe-5">42 Projects</span>
                        <span class="text-success fw-semibold fs-13">243hrs</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between border-bottom border-bottom-dashed py-2">
                    <p class="fw-semibold mb-0"><i class="ri-checkbox-blank-circle-fill text-warning align-middle me-2"></i> Yet to Start</p>
                    <div>
                        <span class="text-muted pe-5">58 Projects</span>
                        <span class="text-success fw-semibold fs-13">~2050hrs</span>
                    </div>
                </div>
                <div class="d-flex justify-content-between py-2">
                    <p class="fw-semibold mb-0"><i class="ri-checkbox-blank-circle-fill text-danger align-middle me-2"></i> Cancelled</p>
                    <div>
                        <span class="text-muted pe-5">89 Projects</span>
                        <span class="text-success fw-semibold fs-13">~900hrs</span>
                    </div>
                </div>
            </div>
        </CardBody>
    </Card>
</Col>