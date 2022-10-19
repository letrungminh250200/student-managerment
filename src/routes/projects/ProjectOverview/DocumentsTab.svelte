<script>
	import {
		Card,
		CardBody,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row,
		Table,
		Dropdown
	} from 'sveltestrap';
	import Link from 'svelte-link';
</script>

<Card>
	<CardBody>
		<div class="d-flex align-items-center mb-4">
			<h5 class="card-title flex-grow-1">Documents</h5>
		</div>
		<Row>
			<Col lg={12}>
				<div class="table-responsive table-card">
					<Table class="table-borderless align-middle mb-0">
						<thead class="table-light">
							<tr>
								<th scope="col">File Name</th>
								<th scope="col">Type</th>
								<th scope="col">Size</th>
								<th scope="col">Upload Date</th>
								<th scope="col" style="width: 120px">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-secondary rounded fs-24">
												<i class="ri-folder-zip-line" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Artboard-documents.zip</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>Zip File</td>
								<td>4.57 MB</td>
								<td>12 Dec 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-danger rounded fs-24">
												<i class="ri-file-pdf-fill" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Bank Management System</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>PDF File</td>
								<td>8.89 MB</td>
								<td>24 Nov 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-secondary rounded fs-24">
												<i class="ri-video-line" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Tour-video.mp4</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>MP4 File</td>
								<td>14.62 MB</td>
								<td>19 Nov 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-success rounded fs-24">
												<i class="ri-file-excel-fill" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Account-statement.xsl</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>XSL File</td>
								<td>2.38 KB</td>
								<td>14 Nov 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-warning rounded fs-24">
												<i class="ri-folder-fill" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Project Screenshots Collection</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>Floder File</td>
								<td>87.24 MB</td>
								<td>08 Nov 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
							<tr>
								<td>
									<div class="d-flex align-items-center">
										<div class="avatar-sm">
											<div class="avatar-title bg-light text-danger rounded fs-24">
												<i class="ri-image-2-fill" />
											</div>
										</div>
										<div class="ms-3 flex-grow-1">
											<h5 class="fs-14 mb-0">
												<Link href="#" class="text-dark">Velzon-logo.png</Link>
											</h5>
										</div>
									</div>
								</td>
								<td>PNG File</td>
								<td>879 KB</td>
								<td>02 Nov 2021</td>
								<td>
									<Dropdown>
										<DropdownToggle href="#" class="btn btn-soft-secondary btn-sm btn-icon p-0">
											<i class="ri-more-fill" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end">
											<DropdownItem
												><i class="ri-eye-fill me-2 align-bottom text-muted" />View</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-download-2-fill me-2 align-bottom text-muted"
												/>Download</DropdownItem
											>
											<DropdownItem divider />
											<DropdownItem
												><i
													class="ri-delete-bin-5-fill me-2 align-bottom text-muted"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
				<div class="text-center mt-3">
					<Link href="#" class="text-success "
						><i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2" /> Load more
					</Link>
				</div>
			</Col>
		</Row>
	</CardBody>
</Card>
