<svelte:head>
  <title>File Manager | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>
<script>
    import {onMount} from 'svelte';
    import { Card, CardBody, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, Dropdown,Label } from 'sveltestrap';
    import SimpleDonutCharts from './FileManagerCharts.svelte';
    import DeleteModal from '../../Components/Common/DeleteModal.svelte';
    import data from '../../common/data/fileManager'
    import Link from 'svelte-link';
    let deleteModal = false;

    const setDeleteModal = (status) => {
        deleteModal = status;
    };
    var sidebarData = [];

    const hangleClick = (item) =>{
        sidebarData = item;
    }

    function sidebarOpen(value) {
        const element = document.getElementsByTagName('body')[0];
        element.classList.add(value);
    }

    onMount(() => {
        sidebarOpen("file-detail-show")
    })

</script>
<DeleteModal
  show={deleteModal}
  onCloseClick={() => setDeleteModal(false)}
/>
<div class="page-content">
    <Container fluid>
        <div class="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
            <div class="file-manager-sidebar">
                <div class="p-3 d-flex flex-column h-100">
                    <div class="mb-3">
                        <h5 class="mb-0 fw-bold">My Drive</h5>
                    </div>
                    <div class="search-box">
                        <input type="text" class="form-control bg-light border-light" placeholder="Search here..." />
                        <i class="ri-search-2-line search-icon"></i>
                    </div>
                    <div class="mt-3 mx-n4 px-4 file-menu-sidebar-scroll" data-simplebar>
                        <ul class="list-unstyled file-manager-menu">
                            <li>
                                <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                                    <i class="ri-folder-2-line align-bottom me-2"></i> <span class="file-list-link">My Drive</span>
                                </a>
                                <div class="collapse show" id="collapseExample">
                                    <ul class="sub-menu list-unstyled">
                                        <li>
                                            <a href="#!">Assets</a>
                                        </li>
                                        <li>
                                            <a href="#!">Marketing</a>
                                        </li>
                                        <li>
                                            <a href="#!">Personal</a>
                                        </li>
                                        <li>
                                            <a href="#!">Projects</a>
                                        </li>
                                        <li>
                                            <a href="#!">Templates</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#!"><i class="ri-file-list-2-line align-bottom me-2"></i> <span class="file-list-link">Documents</span></a>
                            </li>
                            <li>
                                <a href="#!"><i class="ri-image-2-line align-bottom me-2"></i> <span class="file-list-link">Media</span></a>
                            </li>
                            <li>
                                <a href="#!"><i class="ri-history-line align-bottom me-2"></i> <span class="file-list-link">Recents</span></a>
                            </li>
                            <li>
                                <a href="#!"><i class="ri-star-line align-bottom me-2"></i> <span class="file-list-link">Important</span></a>
                            </li>
                            <li>
                                <a href="#!"><i class="ri-delete-bin-line align-bottom me-2"></i> <span class="file-list-link">Deleted</span></a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-auto">
                        <h6 class="fs-12 text-muted text-uppercase mb-3">Storage Status</h6>
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0">
                                <i class="ri-database-2-line fs-17"></i>
                            </div>
                            <div class="flex-grow-1 ms-3 overflow-hidden">
                                <div class="progress mb-2 progress-sm">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span class="text-muted fs-12 d-block text-truncate"><b>47.52</b>GB used of <b>119</b>GB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="file-manager-content w-100 p-3 py-0">
                <div class="mx-n3 pt-4 px-4 file-manager-content-scroll" data-simplebar>
                    <div id="folder-list" class="mb-2">
                        <Row class="justify-content-beetwen g-2">

                            <Col>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 me-2 d-block d-lg-none">
                                        <button type="button" class="btn btn-soft-success btn-icon btn-sm fs-16 file-menu-btn">
                                            <i class="ri-menu-2-fill align-bottom"></i>
                                        </button>
                                    </div>
                                    <div class="flex-grow-1">
                                        <h5 class="fs-17 mb-0">Folders</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col class="col-auto">
                                <div class="d-flex gap-2 align-items-start mb-4">
                                    <select class="form-control" name="choices-single-default" id="file-type">
                                        <option value="">File Type</option>
                                        <option value="All" defaultValue>All</option>
                                        <option value="Video">Video</option>
                                        <option value="Images">Images</option>
                                        <option value="Music">Music</option>
                                        <option value="Documents">Documents</option>
                                    </select>

                                    <button class="btn btn-primary create-folder-modal text-nowrap"><i class="ri-add-line align-bottom me-1"></i> Create Folders</button>
                                </div>
                            </Col>
                        </Row>

                        <Row id="folderlist-data">
                            {#each data.folderList as item}
                                <Col xxl={3} class="col-6 folder-card">
                                    <Card class="bg-light shadow-none" id={"folder-" + item.id}>
                                        <CardBody>
                                            <div class="d-flex mb-1">
                                                <div class="form-check form-check-danger mb-3 fs-15 flex-grow-1">
                                                    <input class="form-check-input" type="checkbox" value="" id={"folderlistCheckbox_" + item.id} />
                                                    <Label class="form-check-label" htmlfor={"folderlistCheckbox_" + item.id}></Label>
                                                </div>

                                                <Dropdown>
                                                    <DropdownToggle tag="button" class="btn btn-ghost-primary btn-icon btn-sm dropdown p-0" color="">
                                                        <i class="ri-more-2-fill fs-16 align-bottom" />
                                                    </DropdownToggle>
                                                    <DropdownMenu class="dropdown-menu-end">
                                                        <DropdownItem class="view-item-btn">Open</DropdownItem>
                                                        <DropdownItem class="edit-folder-list">Rename</DropdownItem>
                                                        <DropdownItem>Delete</DropdownItem>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>

                                            <div class="text-center">
                                                <div class="mb-2">
                                                    <i class="ri-folder-2-fill align-bottom text-warning display-5"></i>
                                                </div>
                                                <h6 class="fs-15 folder-name">{item.folderName}</h6>
                                            </div>
                                            <div class="hstack mt-4 text-muted">
                                                <span class="me-auto"><b>{item.folderFile}</b> Files</span>
                                                <span><b>{item.size}</b>GB</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            {/each}
                        </Row>
                    </div>
                    <div>
                        <div class="d-flex align-items-center mb-3">
                            <h5 class="flex-grow-1 fs-17 mb-0" id="filetype-title">Recent File</h5>
                            <div class="flex-shrink-0">
                                <button class="btn btn-success createFile-modal"><i class="ri-add-line align-bottom me-1"></i> Create File</button>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap mb-0">
                                <thead class="table-active">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">File Item</th>
                                        <th scope="col">File Size</th>
                                        <th scope="col">Recent Date</th>
                                        <th scope="col" class="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody id="file-list">
                                    {#each data.recentFile as item}
                                        <tr>
                                            <td>
                                                <input class="form-control filelist-id" type="hidden" value="1" id="filelist-1" />
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 fs-17 me-2 filelist-icon">
                                                        <i class={item.icon + " text-" + item.iconClass + " align-bottom"} />
                                                    </div>
                                                    <div class="flex-grow-1 filelist-name">{item.fileName}</div>
                                                    <div class="d-none filelist-type"> {item.fileType} </div>
                                                </div>
                                            </td>
                                            <td>{item.fileItem}</td>
                                            <td class="filelist-size">{item.size}</td>
                                            <td class="filelist-create">{item.createDate}</td>
                                            <td>
                                                <div class="d-flex gap-3 justify-content-center">
                                                    <button type="button" class="btn btn-ghost-primary btn-icon btn-sm favourite-btn">
                                                        <i class="ri-star-fill fs-13 align-bottom" />
                                                    </button>
                                                    <Dropdown>
                                                        <DropdownToggle tag="button" class="btn btn-light btn-icon btn-sm dropdown" id="dropdownMenuButton">
                                                            <i class="ri-more-fill align-bottom" />
                                                        </DropdownToggle>
                                                        <DropdownMenu class="dropdown-menu-end">
                                                            <DropdownItem class="viewfile-list" on:click={hangleClick(item)}>View</DropdownItem>
                                                            <DropdownItem class="edit-list">Rename</DropdownItem>
                                                            <DropdownItem divider />
                                                            <DropdownItem class="remove-list">Delete</DropdownItem>
                                                        </DropdownMenu>
                                                    </Dropdown>
                                                </div>
                                            </td>
                                        </tr>
                                    {/each}
                                </tbody>
                            </table>
                        </div>

                        <ul id="pagination" class="pagination pagination-lg"></ul>

                        <div class="align-items-center mt-2 row g-3 text-center text-sm-start">
                            <div class="col-sm">
                                <div class="text-muted">Showing<span class="fw-semibold">4</span> of <span class="fw-semibold">125</span> Results
                                </div>
                            </div>
                            <div class="col-sm-auto">
                                <ul class="pagination pagination-separated pagination-sm justify-content-center justify-content-sm-start mb-0">
                                    <li class="page-item disabled">
                                        <Link href="!#" class="page-link">←</Link>
                                    </li>
                                    <li class="page-item">
                                        <Link href="!#" class="page-link">1</Link>
                                    </li>
                                    <li class="page-item active">
                                        <Link href="!#" class="page-link">2</Link>
                                    </li>
                                    <li class="page-item">
                                        <Link href="!#" class="page-link">3</Link>
                                    </li>
                                    <li class="page-item">
                                        <Link href="!#" class="page-link">→</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="file-manager-detail-content p-3 py-0">
                <div class="mx-n3 pt-3 px-3 file-detail-content-scroll" data-simplebar>
                    <div id="folder-overview">
                        <div class="d-flex align-items-center pb-3 border-bottom border-bottom-dashed">
                            <h5 class="flex-grow-1 fw-bold mb-0">Overview</h5>
                            <div>
                                <button type="button" class="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                    <i class="ri-close-fill align-bottom"></i>
                                </button>
                            </div>
                        </div>
                        <SimpleDonutCharts dataColors={["--vz-info", "--vz-danger", "--vz-primary", "--vz-success"]} class="apex-charts mt-3" dir="ltr" />
                        <div class="mt-4">
                            <ul class="list-unstyled vstack gap-4">
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title rounded bg-soft-secondary text-secondary">
                                                    <i class="ri-file-text-line fs-17"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="mb-1 fs-15">Documents</h5>
                                            <p class="mb-0 fs-12 text-muted">2348 files</p>
                                        </div>
                                        <b>27.01 GB</b>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title rounded bg-soft-success text-success">
                                                    <i class="ri-gallery-line fs-17"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="mb-1 fs-15">Media</h5>
                                            <p class="mb-0 fs-12 text-muted">12480 files</p>
                                        </div>
                                        <b>20.87 GB</b>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title rounded bg-soft-warning text-warning">
                                                    <i class="ri-folder-2-line fs-17"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="mb-1 fs-15">Projects</h5>
                                            <p class="mb-0 fs-12 text-muted">349 files</p>
                                        </div>
                                        <b>4.10 GB</b>
                                    </div>
                                </li>
                                <li>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title rounded bg-soft-primary text-primary">
                                                    <i class="ri-error-warning-line fs-17"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h5 class="mb-1 fs-15">Others</h5>
                                            <p class="mb-0 fs-12 text-muted">9873 files</p>
                                        </div>
                                        <b>33.54 GB</b>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="pb-3 mt-auto">
                            <div class="alert alert-danger d-flex align-items-center mb-0">
                                <div class="flex-shrink-0">
                                    <i class="ri-cloud-line text-danger align-bottom display-5"></i>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h5 class="text-danger fs-14">Upgrade to Pro</h5>
                                    <p class="text-muted mb-2">Get more space for your...</p>
                                    <button class="btn btn-sm btn-danger"><i class="ri-upload-cloud-line align-bottom"></i> Upgrade Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="file-overview" class="h-100">
                        <div class="d-flex h-100 flex-column">
                            <div class="d-flex align-items-center pb-3 border-bottom border-bottom-dashed mb-3 gap-2">
                                <h5 class="flex-grow-1 fw-bold mb-0">File Preview</h5>
                                <div>
                                    <button type="button" class="btn btn-ghost-primary btn-icon btn-sm fs-16 favourite-btn">
                                        <i class="ri-star-fill align-bottom"></i>
                                    </button>
                                    <button type="button" class="btn btn-soft-danger btn-icon btn-sm fs-16 close-btn-overview">
                                        <i class="ri-close-fill align-bottom"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="pb-3 border-bottom border-bottom-dashed mb-3">
                                <div class="file-details-box bg-light p-3 text-center rounded-3 border border-light mb-3">
                                    <div class="display-4 file-icon">
                                        <i class={sidebarData.icon + " text-" + sidebarData.iconClass}></i>
                                    </div>
                                </div>
                                <button type="button" class="btn btn-icon btn-sm btn-ghost-success float-end fs-16"><i class="ri-share-forward-line"></i></button>
                                <h5 class="fs-16 mb-1 file-name">{sidebarData.fileName}</h5>
                                <p class="text-muted mb-0 fs-12"><span class="file-size">{sidebarData.size}</span>, <span class="create-date">{sidebarData.createDate}</span></p>
                            </div>
                            <div>
                                <h5 class="fs-12 text-uppercase text-muted mb-3">File Description :</h5>

                                <div class="table-responsive">
                                    <table class="table table-borderless table-nowrap table-sm">
                                        <tbody>
                                            <tr>
                                                <th scope="row" style="width: 35%">File Name :</th>
                                                <td class="file-name">{sidebarData.fileName}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">File Type :</th>
                                                <td class="file-type">{sidebarData.fileType}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Size :</th>
                                                <td class="file-size">{sidebarData.size}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Created :</th>
                                                <td class="create-date">{sidebarData.createDate}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Path :</th>
                                                <td class="file-path"><div class="user-select-all text-truncate">*:\projects\src\assets\images</div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div>
                                    <h5 class="fs-12 text-uppercase text-muted mb-3">Share Information:</h5>
                                    <div class="table-responsive">
                                        <table class="table table-borderless table-nowrap table-sm">
                                            <tbody>
                                                <tr>
                                                    <th scope="row" style="width: 35%">Share Name :</th>
                                                    <td class="share-name">\\*\Projects</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Share Path :</th>
                                                    <td class="share-path">velzon:\Documents\</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div class="mt-auto border-top border-top-dashed py-3">
                                <div class="hstack gap-2">
                                    <button type="button" class="btn btn-soft-primary w-100"><i class="ri-download-2-line align-bottom me-1"></i> Download</button>
                                    <button type="button" class="btn btn-soft-danger w-100 remove-file-overview"><i class="ri-close-fill align-bottom me-1"></i> Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</div>