<script>
	import UiContent from "../../../Components/Common/UiContent.svelte";
	import BreadCrumb from "../../../Components/Common/BreadCrumb.svelte";
	import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader.svelte";
	import PrismCode from "../../../Components/Common/Prism.svelte";
	import {
		Card,
		CardBody,
		Col,
		Container,
		Input,
		Label,
		Row,
		Table,
	} from "sveltestrap";

	import avatar1 from '../../../assets/images/users/avatar-1.jpg';
	import avatar3 from '../../../assets/images/users/avatar-3.jpg';
	import avatar4 from '../../../assets/images/users/avatar-4.jpg';
	import avatar5 from '../../../assets/images/users/avatar-5.jpg';
	import avatar6 from '../../../assets/images/users/avatar-6.jpg';
	import Link from "svelte-link";

	const DefaultTables = `<div class="table-responsive">
    <Table class="align-middle table-nowrap mb-0">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer</th>
                <th scope="col">Date</th>
                <th scope="col">Invoice</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row"><Link href="#" class="fw-medium">#VZ2110</Link></th>
                <td>Bobby Davis</td>
                <td>October 15, 2021</td>
                <td>$2,300</td>
                <td><Link href="#" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></Link></td>
            </tr>
            <tr>
                <th scope="row"><Link href="#" class="fw-medium">#VZ2109</Link></th>
                <td>Christopher Neal</td>
                <td>October 7, 2021</td>
                <td>$5,500</td>
                <td><Link href="#" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></Link></td>
            </tr>
            <tr>
                <th scope="row"><Link href="#" class="fw-medium">#VZ2108</Link></th>
                <td>Monkey Karry</td>
                <td>October 5, 2021</td>
                <td>$2,420</td>
                <td><Link href="#" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></Link></td>
            </tr>
            <tr>
                <th scope="row"><Link href="#" class="fw-medium">#VZ2107</Link></th>
                <td>James White</td>
                <td>October 2, 2021</td>
                <td>$7,452</td>
                <td><Link href="#" class="link-success">View More <i class="ri-arrow-right-line align-middle"></i></Link></td>
            </tr>
        </tbody>
    </Table>
</div>
`;

	const StrippedRow = `<div class="table-responsive">
<Table class="table-striped table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Invoice</th>
            <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Bobby Davis</td>
            <td>Nov 14, 2021</td>
            <td>$2,410</td>
            <td><span class="badge bg-success">Confirmed</span></td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Christopher Neal</td>
            <td>Nov 21, 2021</td>
            <td>$1,450</td>
            <td><span class="badge bg-warning">Waiting</span></td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Monkey Karry</td>
            <td>Nov 24, 2021</td>
            <td>$3,500</td>
            <td><span class="badge bg-success">Confirmed</span></td>
        </tr>
        <tr>
            <td class="fw-medium">04</td>
            <td>Aaron James</td>
            <td>Nov 25, 2021</td>
            <td>$6,875</td>
            <td><span class="badge bg-danger">Cancelled</span></td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const TablesColors = `<Row>
<Col xl={6}>
    <div class="table-responsive">
        <Table class="table-dark table-striped table-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-medium">01</td>
                    <td>Bobby Davis</td>
                    <td>Nov 14, 2021</td>
                    <td>$2,410</td>
                </tr>
                <tr>
                    <td class="fw-medium">02</td>
                    <td>Christopher Neal</td>
                    <td>Nov 21, 2021</td>
                    <td>$1,450</td>
                </tr>
                <tr>
                    <td class="fw-medium">03</td>
                    <td>Monkey Karry</td>
                    <td>Nov 24, 2021</td>
                    <td>$3,500</td>
                </tr>
                <tr>
                    <td class="fw-medium">04</td>
                    <td>Aaron James</td>
                    <td>Nov 25, 2021</td>
                    <td>$6,875</td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>

<Col xl={6}>
    <div class="table-responsive mt-4 mt-xl-0">
        <Table class="table-success table-striped table-nowrap align-middle mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-medium">01</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 22, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="hstack gap-3 flex-wrap">
                            <Link href="#" class="link-success fs-15"><i class="ri-edit-2-line"></i></Link>
                            <Link href="#" class="link-danger fs-15"><i class="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">02</td>
                    <td>Premium Plan</td>
                    <td>$1200</td>
                    <td>Nov 10, 2021</td>
                    <td><i class="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                    <td>
                        <div class="hstack gap-3 flex-wrap">
                            <Link href="#" class="link-success fs-15"><i class="ri-edit-2-line"></i></Link>
                            <Link href="#" class="link-danger fs-15"><i class="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">03</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 19, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="hstack gap-3 flex-wrap">
                            <Link href="#" class="link-success fs-15"><i class="ri-edit-2-line"></i></Link>
                            <Link href="#" class="link-danger fs-15"><i class="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">04</td>
                    <td>Corporate Plan</td>
                    <td>$1599</td>
                    <td>Nov 22, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="hstack gap-3 flex-wrap">
                            <Link href="#" class="link-success fs-15"><i class="ri-edit-2-line"></i></Link>
                            <Link href="#" class="link-danger fs-15"><i class="ri-delete-bin-line"></i></Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>
</Row>
`;

	const HoverableRows = `<Row>
<Col xl={6}>
    <div class="table-responsive">
        <Table class="table-hover align-middle table-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col" style="width: 25px">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="checkAll" value="option1"/>
                        </div>
                    </th>
                    <th scope="col">Order ID</th>
                    <th scope="col">Shop</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" checked/>
                        </div>
                    </th>
                    <td>#541254265</td>
                    <td>Amezon</td>
                    <td>Cleo Carson</td>
                    <td>$4,521</td>
                    <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                </tr>
                <tr>
                    <th scope="row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option1" checked/>
                        </div>
                    </th>
                    <td>#744145235</td>
                    <td>Shoppers</td>
                    <td>Juston Eichmann</td>
                    <td>$7,546</td>
                    <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                </tr>
                <tr>
                    <th scope="row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option1"/>
                        </div>
                    </th>
                    <td>#9855126598</td>
                    <td>Flipkart</td>
                    <td>Bettie Johson</td>
                    <td>$1,350</td>
                    <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                </tr>
                <tr>
                    <th scope="row">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option1"/>
                        </div>
                    </th>
                    <td>#847512653</td>
                    <td>Shoppers</td>
                    <td>Maritza Blanda</td>
                    <td>$4,521</td>
                    <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>

<Col xl={6}>
    <div class="table-responsive mt-4 mt-xl-0">
        <Table class="table-hover table-striped align-middle table-nowrap mb-0">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="fw-medium">01</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 22, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck1" checked/>
                            <Label class="form-check-label ms-2" for="SwitchCheck1">Yes/No</Label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">02</td>
                    <td>Premium Plan</td>
                    <td>$1200</td>
                    <td>Nov 10, 2021</td>
                    <td><i class="ri-close-circle-line align-middle text-danger"></i> Unsubscribed</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck2"/>
                            <Label class="form-check-label ms-2" for="SwitchCheck2">Yes/No</Label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">03</td>
                    <td>Basic Plan</td>
                    <td>$860</td>
                    <td>Nov 19, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck3"/>
                            <Label class="form-check-label ms-2" for="SwitchCheck3">Yes/No</Label>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="fw-medium">04</td>
                    <td>Corporate Plan</td>
                    <td>$1599</td>
                    <td>Nov 22, 2021</td>
                    <td><i class="ri-checkbox-circle-line align-middle text-success"></i> Subscribed</td>
                    <td>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="SwitchCheck4" checked/>
                            <Label class="form-check-label ms-2" for="SwitchCheck4">Yes/No</Label>
                        </div>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
</Col>
</Row>
    `;

	const CardTables = `<div class="table-responsive table-card">
<Table class="align-middle table-nowrap mb-0">
    <thead class="table-light">
        <tr>
            <th scope="col" style="width: 46px">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="cardtableCheck"/>
                    <Label class="form-check-label" for="cardtableCheck"></Label>
                </div>
            </th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>
            <th scope="col">Status</th>
            <th scope="col" style="width: 150px">Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="cardtableCheck01"/>
                    <Label class="form-check-label" for="cardtableCheck01"></Label>
                </div>
            </td>
            <td><Link href="#" class="fw-medium">#VL2110</Link></td>
            <td>William Elmore</td>
            <td>07 Oct, 2021</td>
            <td>$24.05</td>
            <td><span class="badge bg-success">Paid</span></td>
            <td>
                <button type="button" class="btn btn-sm btn-light">Details</button>
            </td>
        </tr>
        <tr>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="cardtableCheck02"/>
                    <Label class="form-check-label" for="cardtableCheck02"></Label>
                </div>
            </td>
            <td><Link href="#" class="fw-medium">#VL2109</Link></td>
            <td>Georgie Winters</td>
            <td>07 Oct, 2021</td>
            <td>$26.15</td>
            <td><span class="badge bg-success">Paid</span></td>
            <td>
                <button type="button" class="btn btn-sm btn-light">Details</button>
            </td>
        </tr>
        <tr>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="cardtableCheck03"/>
                    <Label class="form-check-label" for="cardtableCheck03"></Label>
                </div>
            </td>
            <td><Link href="#" class="fw-medium">#VL2108</Link></td>
            <td>Whitney Meier</td>
            <td>06 Oct, 2021</td>
            <td>$21.25</td>
            <td><span class="badge bg-danger">Refund</span></td>
            <td>
                <button type="button" class="btn btn-sm btn-light">Details</button>
            </td>
        </tr>
        <tr>
            <td>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="cardtableCheck04"/>
                    <Label class="form-check-label" for="cardtableCheck04"></Label>
                </div>
            </td>
            <td><Link href="#" class="fw-medium">#VL2107</Link></td>
            <td>Justin Maier</td>
            <td>05 Oct, 2021</td>
            <td>$25.03</td>
            <td><span class="badge bg-success">Paid</span></td>
            <td>
                <button type="button" class="btn btn-sm btn-light">Details</button>
            </td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const ActiveTables = `<div class="table-responsive">
<Table class="align-middle table-nowrap mb-0">
<thead>
    <tr>
        <th scope="col" style="width: 42px">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activetableCheck"/>
                <Label class="form-check-label" for="activetableCheck"></Label>
            </div>
        </th>
        <th scope="col">Order ID</th>
        <th scope="col">Shop</th>
        <th scope="col">Customer</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activetableCheck01" checked/>
                <Label class="form-check-label" for="activetableCheck01"></Label>
            </div>
        </th>
        <td>#541254265</td>
        <td>Amezon</td>
        <td>Cleo Carson</td>
        <td>$4,521</td>
        <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
    </tr>
    <tr class="table-active">
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activetableCheck02" checked/>
                <Label class="form-check-label" for="activetableCheck02"></Label>
            </div>
        </th>
        <td>#744145235</td>
        <td>Shoppers</td>
        <td>Juston Eichmann</td>
        <td>$7,546</td>
        <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
    </tr>
    <tr>
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activetableCheck03"/>
                <Label class="form-check-label" for="activetableCheck03"></Label>
            </div>
        </th>
        <td>#9855126598</td>
        <td>Flipkart</td>
        <td>Bettie Johson</td>
        <td>$1,350</td>
        <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
    </tr>
    <tr>
        <th scope="row">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="activetableCheck04"/>
                <Label class="form-check-label" for="activetableCheck04"></Label>
            </div>
        </th>
        <td>#847512653</td>
        <td>Shoppers</td>
        <td class="table-active">Maritza Blanda</td>
        <td>$4,521</td>
        <td><Link href="#"><i class="ri-download-2-line fs-17 lh-1 align-middle"></i></Link></td>
    </tr>
</tbody>
</Table>
</div>
`;

	const BorderedTables = `
<div class="table-responsive">
<Table class="table-bordered align-middle table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Assignee</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Implement new UX</td>
            <td><span class="badge badge-soft-primary">Backlog</span></td>
            <td>Lanora Sandoval</td>
            <td>$4,521</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Design syntax</td>
            <td><span class="badge badge-soft-secondary">In Progress</span></td>
            <td>Calvin Garrett</td>
            <td>$7,546</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>    
                  
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Configurable resources</td>
            <td><span class="badge badge-soft-success">Done</span></td>
            <td>Florence Guzman</td>
            <td>$1,350</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                  
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">04</td>
            <td>Implement extensions</td>
            <td><span class="badge badge-soft-secondary">In Progress</span></td>
            <td>Maritza Blanda</td>
            <td>$4,521</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink4" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                  
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                        <li><Link href="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const TablesBorderColors = `<div class="table-responsive">
<Table class="table-bordered border-secondary table-nowrap align-middle mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Assignee</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Implement new UX</td>
            <td><span class="badge badge-soft-primary">Backlog</span></td>
            <td>Lanora Sandoval</td>
            <td>$4,521</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink5" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Design syntax</td>
            <td><span class="badge badge-soft-secondary">In Progress</span></td>
            <td>Calvin Garrett</td>
            <td>$7,546</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink6" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Configurable resources</td>
            <td><span class="badge badge-soft-success">Done</span></td>
            <td>Florence Guzman</td>
            <td>$1,350</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink7" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">04</td>
            <td>Implement extensions</td>
            <td><span class="badge badge-soft-secondary">In Progress</span></td>
            <td>Maritza Blanda</td>
            <td>$4,521</td>
            <td>
                <div class="dropdown">
                    <Link href="#" role="button" id="dropdownMenuLink8" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-2-fill"></i>
                    </Link>
                    
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                        <li><Link class="dropdown-item" href="#">View</Link></li>
                        <li><Link class="dropdown-item" href="#">Edit</Link></li>
                        <li><Link class="dropdown-item" href="#">Delete</Link></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
</Table>
</div>
    `;

	const TablesWithoutBorders = `<div class="table-responsive">
<Table class="table-borderless align-middle table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Annette Black</td>
            <td>Industrial Designer</td>
            <td>10, Nov 2021</td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td>
                <div class="hstack gap-3 fs-15">
                    <Link href="#" class="link-primary"><i class="ri-settings-4-line"></i></Link>
                    <Link href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Bessie Cooper</td>
            <td>Graphic Designer</td>
            <td>13, Nov 2021</td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td>
                <div class="hstack gap-3 fs-15">
                    <Link href="#" class="link-primary"><i class="ri-settings-4-line"></i></Link>
                    <Link href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Product Manager</td>
            <td>17, Nov 2021</td>
            <td><span class="badge badge-soft-success">Active</span></td>
            <td>
                <div class="hstack gap-3 fs-15">
                    <Link href="#" class="link-primary"><i class="ri-settings-4-line"></i></Link>
                    <Link href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
        <tr>
            <td class="fw-medium">04</td>
            <td>Lenora Sandoval</td>
            <td>Applications Engineer</td>
            <td>25, Nov 2021</td>
            <td><span class="badge badge-soft-danger">Disabled</span></td>
            <td>
                <div class="hstack gap-3 fs-15">
                    <Link href="#" class="link-primary"><i class="ri-settings-4-line"></i></Link>
                    <Link href="#" class="link-danger"><i class="ri-delete-bin-5-line"></i></Link>
                </div>
            </td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const SmallTables = `<div class="table-responsive">
<Table class="table-sm table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
            <th scope="col">Assignee</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Implement new UX</td>
            <td><span class="badge badge-soft-primary">Backlog</span></td>
            <td>Lanora Sandoval</td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Design syntax</td>
            <td><span class="badge badge-soft-secondary">In Progress</span></td>
            <td>Calvin Garrett</td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Configurable resources</td>
            <td><span class="badge badge-soft-success">Done</span></td>
            <td>Florence Guzman</td>
        </tr>
        <tr>
            <td class="fw-medium">04</td>
            <td>Implement extensions</td>
            <td><span class="badge badge-soft-dark">Backlog</span></td>
            <td>Maritza Blanda</td>
        </tr>
        <tr>
            <td class="fw-medium">05</td>
            <td>Applications Engineer</td><td>
            <span class="badge badge-soft-success">Done</span></td>
            <td>Leslie Alexander</td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const TableHead = `<div class="table-responsive">
<Table class="align-middle table-nowrap mb-0">
<thead class="table-light">
    <tr>
        <th scope="col">Student</th>
        <th scope="col">Course</th>
        <th scope="col">Author</th>
        <th scope="col">Payment</th>
        <th scope="col">Process</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Milana Scot</td>
        <td>UI/UX design</td>
        <td>Mitchell Flores</td>
        <td>$450</td>
        <td>
            <div class="progress progress-sm">
                <div class="progress-bar bg-success" role="progressbar" style="width: 100%} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td><Link href="#" class="link-success">Confirmed</Link></td>
    </tr>   
    <tr>
        <td>Jassica Welsh</td>
        <td>3d Animation</td>
        <td>Dan Evgeni</td>
        <td>$860</td>
        <td>
            <div class="progress progress-sm">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 65%} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td><Link href="#" class="link-warning">Waiting</Link></td>
    </tr>
    <tr>
        <td>Leslie Alexander</td>
        <td>Logotype Design</td>
        <td>Olimpia Jordan</td>
        <td>$450</td>
        <td>
            <div class="progress progress-sm">
                <div class="progress-bar bg-warning" role="progressbar" style="width: 35%} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </td>
        <td><Link href="#" class="link-warning">Waiting</Link></td>
    </tr>
</tbody>
</Table>
</div>
`;

	const TableFoot = `<div class="table-responsive">
<Table class="table-nowrap mb-0">
    <thead class="table-light">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Job Title</th>
            <th scope="col">Date</th>
            <th scope="col">Payment</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Annette Black</td>
            <td>Industrial Designer</td>
            <td>10, Nov 2021</td>
            <td>$450</td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Bessie Cooper</td>
            <td>Graphic Designer</td>
            <td>13, Nov 2021</td>
            <td>$875</td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Product Manager</td>
            <td>17, Nov 2021</td>
            <td>$410</td>
        </tr>
    </tbody>
    <tfoot class="table-light">
        <tr>
            <td colSpan="4">Total</td>
            <td>$940</td>
        </tr>
    </tfoot>
</Table>
</div>
    `;

	const Captions = `<div class="table-responsive">
<Table class="caption-top table-nowrap mb-0">
    <caption>List of users</caption>
    <thead class="table-light">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Student</th>
            <th scope="col">Course</th>
            <th scope="col">Author</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Milana Scot</td>
            <td>UI/UX design</td>
            <td>Mitchell Flores</td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Jassica Welsh</td>
            <td>3d Animation</td>
            <td>Dan Evgeni</td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Logotype Design</td>
            <td>Olimpia Jordan</td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const TableNesting = `<div class="table-responsive">
<Table class="caption-top table-nowrap mb-0">
    <caption>List of users</caption>
    <thead class="table-light">
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Student</th>
            <th scope="col">Course</th>
            <th scope="col">Author</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="fw-medium">01</td>
            <td>Milana Scot</td>
            <td>UI/UX design</td>
            <td>Mitchell Flores</td>
        </tr>
        <tr>
            <td class="fw-medium">02</td>
            <td>Jassica Welsh</td>
            <td>3d Animation</td>
            <td>Dan Evgeni</td>
        </tr>
        <tr>
            <td class="fw-medium">03</td>
            <td>Leslie Alexander</td>
            <td>Logotype Design</td>
            <td>Olimpia Jordan</td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const Variants = `<div class="table-responsive">
<Table class="table-nowrap mb-0">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Department</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Default</td>
            <td>Monkey Karry</td>
            <td>Medical Specialist</td>
            <td>Orthopedics</td>
        </tr>
        <tr class="table-primary">
            <td>Primary</td>
            <td>James White</td>
            <td>Medical Assistant</td>
            <td>Surgery</td>
        </tr>
        <tr class="table-secondary">
            <td>Secondary</td>
            <td>Aaron James</td>
            <td>Medical Specialist</td>
            <td>Neurology</td>
        </tr>
        <tr class="table-success">
            <td>Success</td>
            <td>Bettie Johson</td>
            <td>Medical Specialist</td>
            <td>Cardiology</td>
        </tr>
        <tr class="table-danger">
            <td>Danger</td>
            <td>Bessie Cooper</td>
            <td>Medical Assistant</td>
            <td>Surgery</td>
        </tr>
        <tr class="table-warning">
            <td>Warning</td>
            <td>Lenora Sandoval</td>
            <td>Medical Assistant</td>
            <td>Cardiology</td>
        </tr>
        <tr class="table-info">
            <td>Info</td>
            <td>Eric Pierce</td>
            <td>Medical Specialist</td>
            <td>Neurology</td>
        </tr>
        <tr class="table-light">
            <td>Light</td>
            <td>Ruth Zimmermann</td>
            <td>Medical Specialist</td>
            <td>Neurology</td>
        </tr>
        <tr class="table-dark">
            <td>Dark</td>
            <td>Leslie Alexander</td>
            <td>Medical Assistant</td>
            <td>Cardiology</td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const VerticalAlignment = `<div class="table-responsive">
<Table class="align-middle">
    <thead>
        <tr>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
            <th>Heading</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
        </tr>
        <tr class="align-bottom">
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This cell inherits <code>vertical-align: bottom;</code> from the table row</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
        </tr>
        <tr>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td>This cell inherits <code>vertical-align: middle;</code> from the table</td>
            <td class="align-top">This cell is aligned to the top.</td>
            <td>This here is some placeholder text, intended to take up quite a bit of vertical space, to demonstrate how the vertical alignment works in the preceding cells.  Use the vertical align classes to re-align where needed. inherit their alignment from and are aligned to the the top by default.</td>
        </tr>
    </tbody>
</Table>
</div>
`;

	const ResponsiveTables = `<div class="table-responsive">
<Table class="align-middle table-nowrap mb-0">
    <thead class="table-light">
        <tr>
            <th scope="col" style="width: 42px">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck"/>
                    <Label class="form-check-label" for="responsivetableCheck"></Label>
                </div>
            </th>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Customer</th>
            <th scope="col">Purchased</th>
            <th scope="col">Revenue</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck01" />
                    <Label class="form-check-label" for="responsivetableCheck01"></Label>
                </div>
            </th>
            <td><Link href="fw-semibold">#VZ2110</Link></td>
            <td>10 Oct, 14:47</td>
            <td class="text-success"><i class="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                        <img src={avatar3} alt="" class="avatar-xs rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        Jordan Kennedy
                    </div>
                </div>
            </td>
            <td>Mastering the grid</td>
            <td>$9.98</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck02"/>
                    <Label class="form-check-label" for="responsivetableCheck02"></Label>
                </div>
            </th>
            <td><Link href="#" class="fw-semibold">#VZ2109</Link></td>
            <td>17 Oct, 02:10</td>
            <td class="text-success"><i class="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                        <img src={avatar4} alt="" class="avatar-xs rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        Jackson Graham
                    </div>
                </div>
            </td>
            <td>Splashify</td>
            <td>$270.60</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck03"/>
                    <Label class="form-check-label" for="responsivetableCheck03"></Label>
                </div>
            </th>
            <td><Link href="#" class="fw-semibold">#VZ2108</Link></td>
            <td>26 Oct, 08:20</td>
            <td class="text-primary"><i class="ri-refresh-line fs-17 align-middle"></i> Refunded</td>
            <td>
                <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                        <img src={avatar5} alt="" class="avatar-xs rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        Lauren Trujillo
                    </div>
                </div>
            </td>
            <td>Wireframing Kit for Figma</td>
            <td>$145.42</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck04"/>
                    <Label class="form-check-label" for="responsivetableCheck04"></Label>
                </div>
            </th>
            <td><Link href="#" class="fw-semibold">#VZ2107</Link></td>
            <td>02 Nov, 04:52</td>
            <td class="text-danger"><i class="ri-close-circle-line fs-17 align-middle"></i> Cancel</td>
            <td>
                <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                        <img src={avatar6} alt="" class="avatar-xs rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        Curtis Weaver
                    </div>
                </div>
            </td>
            <td>Wireframing Kit for Figma</td>
            <td>$170.68</td>
        </tr>
        <tr>
            <th scope="row">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="responsivetableCheck05"/>
                    <Label class="form-check-label" for="responsivetableCheck05"></Label>
                </div>
            </th>
            <td><Link href="#" class="fw-semibold">#VZ2106</Link></td>
            <td>10 Nov, 07:20</td>
            <td class="text-success"><i class="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
            <td>
                <div class="d-flex gap-2 align-items-center">
                    <div class="flex-shrink-0">
                        <img src={avatar1} alt="" class="avatar-xs rounded-circle" />
                    </div>
                    <div class="flex-grow-1">
                        Jason schuller
                    </div>
                </div>
            </td>
            <td>Splashify</td>
            <td>$350.87</td>
        </tr>
    </tbody>
    <tfoot class="table-light">
        <tr>
            <td colSpan="6">Total</td>
            <td>$947.55</td>
        </tr>
    </tfoot>
</Table>                                                
</div> 
`;

const StripedColumnsTables = `<table class="table align-middle table-nowrap table-striped-columns mb-0">
	<thead class="table-light">
		<tr>
			<th scope="col" style="width: 46px">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="cardtableCheck" />
					<Label class="form-check-label" htmlfor="cardtableCheck"></Label>
				</div>
			</th>
			<th scope="col">ID</th>
			<th scope="col">Name</th>
			<th scope="col">Date</th>
			<th scope="col">Total</th>
			<th scope="col">Status</th>
			<th scope="col" style="width: 150px">Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="cardtableCheck01" />
					<Label class="form-check-label" htmlfor="cardtableCheck01"></Label>
				</div>
			</td>
			<td><Link href="#" class="fw-medium">#VL2110</Link></td>
			<td>William Elmore</td>
			<td>07 Oct, 2021</td>
			<td>$24.05</td>
			<td><span class="badge bg-success">Paid</span></td>
			<td>
				<button type="button" class="btn btn-sm btn-light">Details</button>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="cardtableCheck02" />
					<Label class="form-check-label" htmlfor="cardtableCheck02"></Label>
				</div>
			</td>
			<td><Link href="#" class="fw-medium">#VL2109</Link></td>
			<td>Georgie Winters</td>
			<td>07 Oct, 2021</td>
			<td>$26.15</td>
			<td><span class="badge bg-success">Paid</span></td>
			<td>
				<button type="button" class="btn btn-sm btn-light">Details</button>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
					<Label class="form-check-label" htmlfor="cardtableCheck03"></Label>
				</div>
			</td>
			<td><Link href="#" class="fw-medium">#VL2108</Link></td>
			<td>Whitney Meier</td>
			<td>06 Oct, 2021</td>
			<td>$21.25</td>
			<td><span class="badge bg-danger">Refund</span></td>
			<td>
				<button type="button" class="btn btn-sm btn-light">Details</button>
			</td>
		</tr>
		<tr>
			<td>
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
					<Label class="form-check-label" htmlfor="cardtableCheck04"></Label>
				</div>
			</td>
			<td><Link href="#" class="fw-medium">#VL2107</Link></td>
			<td>Justin Maier</td>
			<td>05 Oct, 2021</td>
			<td>$25.03</td>
			<td><span class="badge bg-success">Paid</span></td>
			<td>
				<button type="button" class="btn btn-sm btn-light">Details</button>
			</td>
		</tr>
	</tbody>
</table>`;
</script>

<svelte:head>
	<title>Basic Tables | Velzon - Svelte Admin & Dashboard Template</title>
</svelte:head>

<UiContent />
<div class="page-content">
	<Container fluid>
		<BreadCrumb title="Basic Tables" pageTitle="Tables" />
		<Row>
			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Default Tables" />
					<CardBody>
						<p class="text-muted">
							Use <code>Table</code> attribute to show bootstrap-based
							default table.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="align-middle table-nowrap mb-0">
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Customer</th>
											<th scope="col">Date</th>
											<th scope="col">Invoice</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row"
												><Link
													href="#"
													class="fw-medium"
													>#VZ2110</Link
												></th
											>
											<td>Bobby Davis</td>
											<td>October 15, 2021</td>
											<td>$2,300</td>
											<td
												><Link
													href="#"
													class="link-success"
													>View More <i
														class="ri-arrow-right-line align-middle"
													/></Link
												></td
											>
										</tr>
										<tr>
											<th scope="row"
												><Link
													href="#"
													class="fw-medium"
													>#VZ2109</Link
												></th
											>
											<td>Christopher Neal</td>
											<td>October 7, 2021</td>
											<td>$5,500</td>
											<td
												><Link
													href="#"
													class="link-success"
													>View More <i
														class="ri-arrow-right-line align-middle"
													/></Link
												></td
											>
										</tr>
										<tr>
											<th scope="row"
												><Link
													href="#"
													class="fw-medium"
													>#VZ2108</Link
												></th
											>
											<td>Monkey Karry</td>
											<td>October 5, 2021</td>
											<td>$2,420</td>
											<td
												><Link
													href="#"
													class="link-success"
													>View More <i
														class="ri-arrow-right-line align-middle"
													/></Link
												></td
											>
										</tr>
										<tr>
											<th scope="row"
												><Link
													href="#"
													class="fw-medium"
													>#VZ2107</Link
												></th
											>
											<td>James White</td>
											<td>October 2, 2021</td>
											<td>$7,452</td>
											<td
												><Link
													href="#"
													class="link-success"
													>View More <i
														class="ri-arrow-right-line align-middle"
													/></Link
												></td
											>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>

						<div class="d-none code-view">
							<PrismCode code={DefaultTables} id="defaultTables" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Striped Rows" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-striped</code> class to add zebra-striping
							to any table row within the &lt;tbody&gt;.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table
									class="table-striped table-nowrap align-middle mb-0"
								>
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Customer</th>
											<th scope="col">Date</th>
											<th scope="col">Invoice</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-semibold">01</td>
											<td>Bobby Davis</td>
											<td>Nov 14, 2021</td>
											<td>$2,410</td>
											<td><span class="badge bg-success"
													>Confirmed</span
												></td
											>
										</tr>
										<tr>
											<td class="fw-semibold">02</td>
											<td>Christopher Neal</td>
											<td>Nov 21, 2021</td>
											<td>$1,450</td>
											<td><span class="badge bg-warning"
													>Waiting</span
												></td
											>
										</tr>
										<tr>
											<td class="fw-semibold">03</td>
											<td>Monkey Karry</td>
											<td>Nov 24, 2021</td>
											<td>$3,500</td>
											<td><span class="badge bg-success">Confirmed</span></td>
										</tr>
										<tr>
											<td class="fw-semibold">04</td>
											<td>Aaron James</td>
											<td>Nov 25, 2021</td>
											<td>$6,875</td>
											<td><span class="badge bg-danger">Cancelled</span></td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={StrippedRow} id="strippedRow" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col xl={12}>
				<Card>
					<PreviewCardHeader title="Striped Columns" />
					<CardBody>
						<p class="text-muted mb-4">Use .<code>table-striped-columns</code> to add zebra-striping to any table column.</p>
						<div class="live-preview">
							<div class="table-responsive table-card">
								<table class="table align-middle table-nowrap table-striped-columns mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col" style="width: 46px">
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="cardtableCheck" />
													<Label class="form-check-label" htmlfor="cardtableCheck"></Label>
												</div>
											</th>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Date</th>
											<th scope="col">Total</th>
											<th scope="col">Status</th>
											<th scope="col" style="width: 150px">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="cardtableCheck01" />
													<Label class="form-check-label" htmlfor="cardtableCheck01"></Label>
												</div>
											</td>
											<td><Link href="#" class="fw-medium">#VL2110</Link></td>
											<td>William Elmore</td>
											<td>07 Oct, 2021</td>
											<td>$24.05</td>
											<td><span class="badge bg-success">Paid</span></td>
											<td>
												<button type="button" class="btn btn-sm btn-light">Details</button>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="cardtableCheck02" />
													<Label class="form-check-label" htmlfor="cardtableCheck02"></Label>
												</div>
											</td>
											<td><Link href="#" class="fw-medium">#VL2109</Link></td>
											<td>Georgie Winters</td>
											<td>07 Oct, 2021</td>
											<td>$26.15</td>
											<td><span class="badge bg-success">Paid</span></td>
											<td>
												<button type="button" class="btn btn-sm btn-light">Details</button>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="cardtableCheck03" />
													<Label class="form-check-label" htmlfor="cardtableCheck03"></Label>
												</div>
											</td>
											<td><Link href="#" class="fw-medium">#VL2108</Link></td>
											<td>Whitney Meier</td>
											<td>06 Oct, 2021</td>
											<td>$21.25</td>
											<td><span class="badge bg-danger">Refund</span></td>
											<td>
												<button type="button" class="btn btn-sm btn-light">Details</button>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input class="form-check-input" type="checkbox" value="" id="cardtableCheck04" />
													<Label class="form-check-label" htmlfor="cardtableCheck04"></Label>
												</div>
											</td>
											<td><Link href="#" class="fw-medium">#VL2107</Link></td>
											<td>Justin Maier</td>
											<td>05 Oct, 2021</td>
											<td>$25.03</td>
											<td><span class="badge bg-success">Paid</span></td>
											<td>
												<button type="button" class="btn btn-sm btn-light">Details</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode
								code={StripedColumnsTables}
								id="StripedColumnsTables"
							/>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
		<Row>
			<Col lg={12}>
				<Card>
					<PreviewCardHeader title="Tables Colors" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-dark</code> class to set dark color
							table body and
							<code>table-success</code>
							class to set success color table body respectively. use
							<code>table-</code> class with different color variation
							to set required table body color.
						</p>
						<div class="live-preview">
							<Row>
								<Col xl={6}>
									<div class="table-responsive">
										<Table
											class="table-dark table-striped table-nowrap mb-0"
										>
											<thead>
												<tr>
													<th scope="col">ID</th>
													<th scope="col">Customer</th
													>
													<th scope="col">Date</th>
													<th scope="col">Invoice</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="fw-medium">01</td
													>
													<td>Bobby Davis</td>
													<td>Nov 14, 2021</td>
													<td>$2,410</td>
												</tr>
												<tr>
													<td class="fw-medium">02</td
													>
													<td>Christopher Neal</td>
													<td>Nov 21, 2021</td>
													<td>$1,450</td>
												</tr>
												<tr>
													<td class="fw-medium">03</td
													>
													<td>Monkey Karry</td>
													<td>Nov 24, 2021</td>
													<td>$3,500</td>
												</tr>
												<tr>
													<td class="fw-medium">04</td
													>
													<td>Aaron James</td>
													<td>Nov 25, 2021</td>
													<td>$6,875</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>

								<Col xl={6}>
									<div class="table-responsive mt-4 mt-xl-0">
										<Table
											class="table-success table-striped table-nowrap align-middle mb-0"
										>
											<thead>
												<tr>
													<th scope="col">ID</th>
													<th scope="col">Invoice</th>
													<th scope="col">Amount</th>
													<th scope="col">Date</th>
													<th scope="col">Status</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="fw-semibold">01</td
													>
													<td>Basic Plan</td>
													<td>$860</td>
													<td>Nov 22, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="hstack gap-3 flex-wrap"
														>
															<Link
																href="#"
																class="link-success fs-15"
																><i
																	class="ri-edit-2-line"
																/></Link
															>
															<Link
																href="#"
																class="link-danger fs-15"
																><i
																	class="ri-delete-bin-line"
																/></Link
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-semibold">02</td
													>
													<td>Premium Plan</td>
													<td>$1200</td>
													<td>Nov 10, 2021</td>
													<td
														><i
															class="ri-close-circle-line align-middle text-danger"
														/> Unsubscribed</td
													>
													<td>
														<div 					class="hstack gap-3 flex-wrap"
														>
															<Link
																href="#"
																class="link-success fs-15"
																><i
																	class="ri-edit-2-line"
																/></Link
															>
															<Link
																href="#"
																class="link-danger fs-15"
																><i
																	class="ri-delete-bin-line"
																/></Link
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-semibold">03</td
													>
													<td>Basic Plan</td>
													<td>$860</td>
													<td>Nov 19, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="hstack gap-3 flex-wrap"
														>
															<Link
																href="#"
																class="link-success fs-15"
																><i
																	class="ri-edit-2-line"
																/></Link
															>
															<Link
																href="#"
																class="link-danger fs-15"
																><i
																	class="ri-delete-bin-line"
																/></Link
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-semibold">04</td
													>
													<td>Corporate Plan</td>
													<td>$1599</td>
													<td>Nov 22, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="hstack gap-3 flex-wrap"
														>
															<Link
																href="#"
																class="link-success fs-15"
																><i
																	class="ri-edit-2-line"
																/></Link
															>
															<Link
																href="#"
																class="link-danger fs-15"
																><i
																	class="ri-delete-bin-line"
																/></Link
															>
														</div>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TablesColors} id="tablesColors" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col lg={12}>
				<Card>
					<PreviewCardHeader title="Hoverable Rows" />

					<CardBody>
						<p class="text-muted">
							Use <code>table-hover</code> class to enable a hover
							state on table rows within a &lt;tbody&gt;.
						</p>

						<div class="live-preview">
							<Row>
								<Col xl={6}>
									<div class="table-responsive">
										<Table
											class="table-hover align-middle table-nowrap mb-0"
										>
											<thead>
												<tr>
													<th
														scope="col"
														style="width: 25px"
													>
														<div class="form-check">
															<input
																class="form-check-input"
																type="checkbox"
																id="checkAll"
																value="option1"
															/>
														</div>
													</th>
													<th scope="col">Order ID</th
													>
													<th scope="col">Shop</th>
													<th scope="col">Customer</th
													>
													<th scope="col">Price</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">
														<div class="form-check">
															<input
																class="form-check-input"
																type="checkbox"
																id="inlineCheckbox2"
																value="option2"
																checked
															/>
														</div>
													</th>
													<td>#541254265</td>
													<td>Amezon</td>
													<td>Cleo Carson</td>
													<td>$4,521</td>
													<td
														><Link href="#"
															><i
																class="ri-download-2-line fs-17 lh-1 align-middle"
															/></Link
														></td
													>
												</tr>
												<tr>
													<th scope="row">
														<div class="form-check">
															<input
																class="form-check-input"
																type="checkbox"
																id="inlineCheckbox3"
																value="option3"
																checked
															/>
														</div>
													</th>
													<td>#744145235</td>
													<td>Shoppers</td>
													<td>Juston Eichmann</td>
													<td>$7,546</td>
													<td
														><Link href="#"
															><i
																class="ri-download-2-line fs-17 lh-1 align-middle"
															/></Link
														></td
													>
												</tr>
												<tr>
													<th scope="row">
														<div class="form-check">
															<input
																class="form-check-input"
																type="checkbox"
																id="inlineCheckbox4"
																value="option4"
															/>
														</div>
													</th>
													<td>#9855126598</td>
													<td>Flipkart</td>
													<td>Bettie Johson</td>
													<td>$1,350</td>
													<td
														><Link href="#"
															><i
																class="ri-download-2-line fs-17 lh-1 align-middle"
															/></Link
														></td
													>
												</tr>
												<tr>
													<th scope="row">
														<div class="form-check">
															<input
																class="form-check-input"
																type="checkbox"
																id="inlineCheckbox5"
																value="option5"
															/>
														</div>
													</th>
													<td>#847512653</td>
													<td>Shoppers</td>
													<td>Maritza Blanda</td>
													<td>$4,521</td>
													<td
														><Link href="#"
															><i
																class="ri-download-2-line fs-17 lh-1 align-middle"
															/></Link
														></td
													>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>

								<Col xl={6}>
									<div class="table-responsive mt-4 mt-xl-0">
										<Table
											class="table-hover table-striped align-middle table-nowrap mb-0"
										>
											<thead>
												<tr>
													<th scope="col">ID</th>
													<th scope="col">Invoice</th>
													<th scope="col">Amount</th>
													<th scope="col">Date</th>
													<th scope="col">Status</th>
													<th scope="col">Action</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td class="fw-medium">01</td
													>
													<td>Basic Plan</td>
													<td>$860</td>
													<td>Nov 22, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="form-check form-switch"
														>
															<input
																class="form-check-input"
																type="checkbox"
																role="switch"
																id="SwitchCheck1"
																checked
															/>
															<Label
																class="form-check-label ms-2"
																for="SwitchCheck1"
																>Yes/No</Label
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-medium">02</td
													>
													<td>Premium Plan</td>
													<td>$1200</td>
													<td>Nov 10, 2021</td>
													<td
														><i
															class="ri-close-circle-line align-middle text-danger"
														/> Unsubscribed</td
													>
													<td>
														<div 					class="form-check form-switch"
														>
															<input
																class="form-check-input"
																type="checkbox"
																role="switch"
																id="SwitchCheck2"
															/>
															<Label
																class="form-check-label ms-2"
																for="SwitchCheck2"
																>Yes/No</Label
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-medium">03</td
													>
													<td>Basic Plan</td>
													<td>$860</td>
													<td>Nov 19, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="form-check form-switch"
														>
															<input
																class="form-check-input"
																type="checkbox"
																role="switch"
																id="SwitchCheck3"
															/>
															<Label
																class="form-check-label ms-2"
																for="SwitchCheck3"
																>Yes/No</Label
															>
														</div>
													</td>
												</tr>
												<tr>
													<td class="fw-medium">04</td
													>
													<td>Corporate Plan</td>
													<td>$1599</td>
													<td>Nov 22, 2021</td>
													<td
														><i
															class="ri-checkbox-circle-line align-middle text-success"
														/> Subscribed</td
													>
													<td>
														<div 					class="form-check form-switch"
														>
															<input
																class="form-check-input"
																type="checkbox"
																role="switch"
																id="SwitchCheck4"
																checked
															/>
															<Label
																class="form-check-label ms-2"
																for="SwitchCheck4"
																>Yes/No</Label
															>
														</div>
													</td>
												</tr>
											</tbody>
										</Table>
									</div>
								</Col>
							</Row>
						</div>
						<div class="d-none code-view">
							<PrismCode code={HoverableRows} id="hoverableRows" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={12}>
				<Card>
					<PreviewCardHeader title="Card Tables" />
					<CardBody>
						<p class="text-muted mb-4">
							Use <code>table-card</code> class to show card-based
							table within a &lt;tbody&gt;.
						</p>
						<div class="live-preview">
							<div class="table-responsive table-card">
								<Table class="align-middle table-nowrap mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col" style="width: 46px">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="cardtableCheck"
													/>
													<Label
														class="form-check-label"
														for="cardtableCheck"
													/>
												</div>
											</th>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Date</th>
											<th scope="col">Total</th>
											<th scope="col">Status</th>
											<th scope="col" style="width: 150px"
												>Action</th
											>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="cardtableCheck01"
													/>
													<Label
														class="form-check-label"
														for="cardtableCheck01"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="fw-medium"
													>#VL2110</Link
												></td
											>
											<td>William Elmore</td>
											<td>07 Oct, 2021</td>
											<td>$24.05</td>
											<td><span class="badge bg-success"
													>Paid</span
												></td
											>
											<td>
												<button
													type="button"
													class="btn btn-sm btn-light"
													>Details</button
												>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="cardtableCheck02"
													/>
													<Label
														class="form-check-label"
														for="cardtableCheck02"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="fw-medium"
													>#VL2109</Link
												></td
											>
											<td>Georgie Winters</td>
											<td>07 Oct, 2021</td>
											<td>$26.15</td>
											<td><span class="badge bg-success"
													>Paid</span
												></td
											>
											<td>
												<button
													type="button"
													class="btn btn-sm btn-light"
													>Details</button
												>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="cardtableCheck03"
													/>
													<Label
														class="form-check-label"
														for="cardtableCheck03"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="fw-medium"
													>#VL2108</Link
												></td
											>
											<td>Whitney Meier</td>
											<td>06 Oct, 2021</td>
											<td>$21.25</td>
											<td><span class="badge bg-danger"
													>Refund</span
												></td
											>
											<td>
												<button
													type="button"
													class="btn btn-sm btn-light"
													>Details</button
												>
											</td>
										</tr>
										<tr>
											<td>
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="cardtableCheck04"
													/>
													<Label
														class="form-check-label"
														for="cardtableCheck04"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="fw-medium"
													>#VL2107</Link
												></td
											>
											<td>Justin Maier</td>
											<td>05 Oct, 2021</td>
											<td>$25.03</td>
											<td><span class="badge bg-success"
													>Paid</span
												></td
											>
											<td>
												<button
													type="button"
													class="btn btn-sm btn-light"
													>Details</button
												>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={CardTables} id="cardTables" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Active Tables" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-active</code> class to highlight a table
							row or cell.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="align-middle table-nowrap mb-0">
									<thead>
										<tr>
											<th scope="col" style="width: 42px">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="activetableCheck"
													/>
													<Label
														class="form-check-label"
														for="activetableCheck"
													/>
												</div>
											</th>
											<th scope="col">Order ID</th>
											<th scope="col">Shop</th>
											<th scope="col">Customer</th>
											<th scope="col">Price</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="activetableCheck01"
														checked
													/>
													<Label
														class="form-check-label"
														for="activetableCheck01"
													/>
												</div>
											</th>
											<td>#541254265</td>
											<td>Amezon</td>
											<td>Cleo Carson</td>
											<td>$4,521</td>
											<td
												><Link href="#"
													><i
														class="ri-download-2-line fs-17 lh-1 align-middle"
													/></Link
												></td
											>
										</tr>
										<tr class="table-active">
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="activetableCheck02"
														checked
													/>
													<Label
														class="form-check-label"
														for="activetableCheck02"
													/>
												</div>
											</th>
											<td>#744145235</td>
											<td>Shoppers</td>
											<td>Juston Eichmann</td>
											<td>$7,546</td>
											<td
												><Link href="#"
													><i
														class="ri-download-2-line fs-17 lh-1 align-middle"
													/></Link
												></td
											>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="activetableCheck03"
													/>
													<Label
														class="form-check-label"
														for="activetableCheck03"
													/>
												</div>
											</th>
											<td>#9855126598</td>
											<td>Flipkart</td>
											<td>Bettie Johson</td>
											<td>$1,350</td>
											<td
												><Link href="#"
													><i
														class="ri-download-2-line fs-17 lh-1 align-middle"
													/></Link
												></td
											>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="activetableCheck04"
													/>
													<Label
														class="form-check-label"
														for="activetableCheck04"
													/>
												</div>
											</th>
											<td>#847512653</td>
											<td>Shoppers</td>
											<td class="table-active"
												>Maritza Blanda</td
											>
											<td>$4,521</td>
											<td
												><Link href="#"
													><i
														class="ri-download-2-line fs-17 lh-1 align-middle"
													/></Link
												></td
											>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={ActiveTables} id="activeTables" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Bordered Tables" />

					<CardBody>
						<p class="text-muted">
							Use <code>table-bordered</code> class to show borders
							on all sides of the table and cells.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table
									class="table-bordered align-middle table-nowrap mb-0"
								>
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Title</th>
											<th scope="col">Status</th>
											<th scope="col">Assignee</th>
											<th scope="col">Price</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Implement new UX</td>
											<td><span
													class="badge badge-soft-primary"
													>Backlog</span
												></td
											>
											<td>Lanora Sandoval</td>
											<td>$4,521</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink1"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink1"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Design syntax</td>
											<td><span
													class="badge badge-soft-secondary"
													>In Progress</span
												></td
											>
											<td>Calvin Garrett</td>
											<td>$7,546</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink2"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink2"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Configurable resources</td>
											<td><span
													class="badge badge-soft-success"
													>Done</span
												></td
											>
											<td>Florence Guzman</td>
											<td>$1,350</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink3"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink3"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">04</td>
											<td>Implement extensions</td>
											<td><span
													class="badge badge-soft-secondary"
													>In Progress</span
												></td
											>
											<td>Maritza Blanda</td>
											<td>$4,521</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink4"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink4"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={BorderedTables} id="borderedTables" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Tables Border Colors" />
					<CardBody>
						<p class="text-muted">
							Use <code>border-</code> class with color variation class
							to set table border color.
						</p>

						<div class="live-preview">
							<div class="table-responsive">
								<Table
									class="table-bordered border-secondary table-nowrap align-middle mb-0"
								>
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Title</th>
											<th scope="col">Status</th>
											<th scope="col">Assignee</th>
											<th scope="col">Price</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Implement new UX</td>
											<td><span
													class="badge badge-soft-primary"
													>Backlog</span
												></td
											>
											<td>Lanora Sandoval</td>
											<td>$4,521</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink5"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink5"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Design syntax</td>
											<td><span
													class="badge badge-soft-secondary"
													>In Progress</span
												></td
											>
											<td>Calvin Garrett</td>
											<td>$7,546</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink6"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink6"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Configurable resources</td>
											<td><span
													class="badge badge-soft-success"
													>Done</span
												></td
											>
											<td>Florence Guzman</td>
											<td>$1,350</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink7"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink7"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">04</td>
											<td>Implement extensions</td>
											<td><span
													class="badge badge-soft-secondary"
													>In Progress</span
												></td
											>
											<td>Maritza Blanda</td>
											<td>$4,521</td>
											<td>
												<div class="dropdown">
													<Link
														href="#"
														role="button"
														id="dropdownMenuLink8"
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														<i
															class="ri-more-2-fill"
														/>
													</Link>

													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuLink8"
													>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>View</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Edit</Link
															>
														</li>
														<li>
															<Link
																class="dropdown-item"
																href="#"
																>Delete</Link
															>
														</li>
													</ul>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TablesBorderColors} id="tablesBorderColors" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Tables Without Borders" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-borderless</code> to set a table without
							borders.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table
									class="table-borderless align-middle table-nowrap mb-0"
								>
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Job Title</th>
											<th scope="col">Date</th>
											<th scope="col">Status</th>
											<th scope="col" />
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Annette Black</td>
											<td>Industrial Designer</td>
											<td>10, Nov 2021</td>
											<td><span
													class="badge badge-soft-success"
													>Active</span
												></td
											>
											<td>
												<div class="hstack gap-3 fs-15">
													<Link
														href="#"
														class="link-primary"
														><i
															class="ri-settings-4-line"
														/></Link
													>
													<Link
														href="#"
														class="link-danger"
														><i
															class="ri-delete-bin-5-line"
														/></Link
													>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Bessie Cooper</td>
											<td>Graphic Designer</td>
											<td>13, Nov 2021</td>
											<td><span
													class="badge badge-soft-success"
													>Active</span
												></td
											>
											<td>
												<div class="hstack gap-3 fs-15">
													<Link
														href="#"
														class="link-primary"
														><i
															class="ri-settings-4-line"
														/></Link
													>
													<Link
														href="#"
														class="link-danger"
														><i
															class="ri-delete-bin-5-line"
														/></Link
													>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Leslie Alexander</td>
											<td>Product Manager</td>
											<td>17, Nov 2021</td>
											<td><span
													class="badge badge-soft-success"
													>Active</span
												></td
											>
											<td>
												<div class="hstack gap-3 fs-15">
													<Link
														href="#"
														class="link-primary"
														><i
															class="ri-settings-4-line"
														/></Link
													>
													<Link
														href="#"
														class="link-danger"
														><i
															class="ri-delete-bin-5-line"
														/></Link
													>
												</div>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">04</td>
											<td>Lenora Sandoval</td>
											<td>Applications Engineer</td>
											<td>25, Nov 2021</td>
											<td><span
													class="badge badge-soft-danger"
													>Disabled</span
												></td
											>
											<td>
												<div class="hstack gap-3 fs-15">
													<Link
														href="#"
														class="link-primary"
														><i
															class="ri-settings-4-line"
														/></Link
													>
													<Link
														href="#"
														class="link-danger"
														><i
															class="ri-delete-bin-5-line"
														/></Link
													>
												</div>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TablesWithoutBorders} id="tablesWithoutBorders" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl="6">
				<Card>
					<PreviewCardHeader title="Small Tables" />

					<CardBody>
						<p class="text-muted">
							Use <code>table-sm</code> class to create any table more
							compact by cutting all cell padding in half.
						</p>

						<div class="live-preview">
							<div class="table-responsive">
								<Table class="table-sm table-nowrap mb-0">
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Title</th>
											<th scope="col">Status</th>
											<th scope="col">Assignee</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Implement new UX</td>
											<td><span
													class="badge badge-soft-primary"
													>Backlog</span
												></td
											>
											<td>Lanora Sandoval</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Design syntax</td>
											<td><span
													class="badge badge-soft-secondary"
													>In Progress</span
												></td
											>
											<td>Calvin Garrett</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Configurable resources</td>
											<td><span
													class="badge badge-soft-success"
													>Done</span
												></td
											>
											<td>Florence Guzman</td>
										</tr>
										<tr>
											<td class="fw-medium">04</td>
											<td>Implement extensions</td>
											<td><span
													class="badge badge-soft-dark"
													>Backlog</span
												></td
											>
											<td>Maritza Blanda</td>
										</tr>
										<tr>
											<td class="fw-medium">05</td>
											<td>Applications Engineer</td><td>
												<span
													class="badge badge-soft-success"
													>Done</span
												></td
											>
											<td>Leslie Alexander</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={SmallTables} id="smallTables" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Table Head" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-light</code> or
							<code>table-dark</code> class to create &lt;thead&gt;
							appear light or dark.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="align-middle table-nowrap mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col">Student</th>
											<th scope="col">Course</th>
											<th scope="col">Author</th>
											<th scope="col">Payment</th>
											<th scope="col">Process</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Milana Scot</td>
											<td>UI/UX design</td>
											<td>Mitchell Flores</td>
											<td>$450</td>
											<td>
												<div class="progress progress-sm"
												>
													<div class="progress-bar bg-success"
														role="progressbar"
														style="width: 100px;"
														aria-valuenow="100"
														aria-valuemin="0"
														aria-valuemax="100"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="link-success"
													>Confirmed</Link
												></td
											>
										</tr>
										<tr>
											<td>Jassica Welsh</td>
											<td>3d Animation</td>
											<td>Dan Evgeni</td>
											<td>$860</td>
											<td>
												<div class="progress progress-sm"
												>
													<div class="progress-bar bg-warning"
														role="progressbar"
														style="width: 65px;"
														aria-valuenow="65"
														aria-valuemin="0"
														aria-valuemax="100"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="link-warning"
													>Waiting</Link
												></td
											>
										</tr>
										<tr>
											<td>Leslie Alexander</td>
											<td>Logotype Design</td>
											<td>Olimpia Jordan</td>
											<td>$450</td>
											<td>
												<div class="progress progress-sm"
												>
													<div class="progress-bar bg-warning"
														role="progressbar"
														style="width: 35px;"
														aria-valuenow="35"
														aria-valuemin="0"
														aria-valuemax="100"
													/>
												</div>
											</td>
											<td
												><Link
													href="#"
													class="link-warning"
													>Waiting</Link
												></td
											>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TableHead} id="formtableHead" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Table Foot" />
					<CardBody>
						<p class="text-muted">
							Add <code>&lt;tbody&gt;</code> attribute to group footer
							content in an HTML table.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="table-nowrap mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Job Title</th>
											<th scope="col">Date</th>
											<th scope="col">Payment</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Annette Black</td>
											<td>Industrial Designer</td>
											<td>10, Nov 2021</td>
											<td>$450</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Bessie Cooper</td>
											<td>Graphic Designer</td>
											<td>13, Nov 2021</td>
											<td>$875</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Leslie Alexander</td>
											<td>Product Manager</td>
											<td>17, Nov 2021</td>
											<td>$410</td>
										</tr>
									</tbody>
									<tfoot class="table-light">
										<tr>
											<td colSpan="4">Total</td>
											<td>$940</td>
										</tr>
									</tfoot>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TableFoot} id="formTableFoot" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<div class="card">
					<PreviewCardHeader title="Captions" />
					<CardBody>
						<p class="text-muted">
							You can also put the <code>&lt;caption&gt;</code>
							attribute on the top of the table with
							<code>caption-top</code> class.
						</p>

						<div class="live-preview">
							<div class="table-responsive">
								<Table class="caption-top table-nowrap mb-0">
									<caption>List of users</caption>
									<thead class="table-light">
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Student</th>
											<th scope="col">Course</th>
											<th scope="col">Author</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Milana Scot</td>
											<td>UI/UX design</td>
											<td>Mitchell Flores</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Jassica Welsh</td>
											<td>3d Animation</td>
											<td>Dan Evgeni</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Leslie Alexander</td>
											<td>Logotype Design</td>
											<td>Olimpia Jordan</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={Captions} id="formCaptions" />
						</div>
					</CardBody>
				</div>
			</Col>
		</Row>

		<Row>
			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Table Nesting" />

					<CardBody>
						<p class="text-muted">
							Example of basic table nesting. Border styles,
							active styles, and table variants are not inherited
							by nested tables.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="table-nowrap mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Name</th>
											<th scope="col">Job Title</th>
											<th scope="col">Date</th>
											<th scope="col">Payment</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="fw-medium">01</td>
											<td>Annette Black</td>
											<td>Industrial Designer</td>
											<td>10, Nov 2021</td>
											<td>$450</td>
										</tr>
										<tr>
											<td colSpan="5">
												<Table
													class="table-nowrap mb-0"
												>
													<thead class="table-light">
														<tr>
															<th scope="col"
																>ID</th
															>
															<th scope="col"
																>Student</th
															>
															<th scope="col"
																>Course</th
															>
															<th scope="col"
																>Author</th
															>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td
																class="fw-medium"
																>I</td
															>
															<td>Milana Scot</td>
															<td>3d Animation</td
															>
															<td>James Black</td>
														</tr>
														<tr>
															<td
																class="fw-medium"
																>II</td
															>
															<td
																>Juston Eichmann</td
															>
															<td
																>Design syntax</td
															>
															<td
																>Olimpia Jordan</td
															>
														</tr>
													</tbody>
												</Table>
											</td>
										</tr>
										<tr>
											<td class="fw-medium">02</td>
											<td>Bessie Cooper</td>
											<td>Graphic Designer</td>
											<td>13, Nov 2021</td>
											<td>$875</td>
										</tr>
										<tr>
											<td class="fw-medium">03</td>
											<td>Leslie Alexander</td>
											<td>Product Manager</td>
											<td>16, Nov 2021</td>
											<td>$410</td>
										</tr>
										<tr>
											<td class="fw-medium">04</td>
											<td>Bettie Johson</td>
											<td>Applications Engineer</td>
											<td>24, Nov 2021</td>
											<td>$620</td>
										</tr>
										<tr>
											<td class="fw-medium">05</td>
											<td>Monkey Karry</td>
											<td>Implement new UX</td>
											<td>25, Nov 2021</td>
											<td>$795</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={TableNesting} id="tableNesting" />
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col xl={6}>
				<Card>
					<PreviewCardHeader title="Variants" />

					<div class="card-body">
						<p class="text-muted">
							Use <code>table-</code> class with below-mentioned color
							variation class within &lt;tr&gt; to set color on table
							row.
						</p>

						<div class="live-preview">
							<div class="table-responsive">
								<Table class="table-nowrap mb-0">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Name</th>
											<th scope="col">Position</th>
											<th scope="col">Department</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Default</td>
											<td>Monkey Karry</td>
											<td>Medical Specialist</td>
											<td>Orthopedics</td>
										</tr>
										<tr class="table-primary">
											<td>Primary</td>
											<td>James White</td>
											<td>Medical Assistant</td>
											<td>Surgery</td>
										</tr>
										<tr class="table-secondary">
											<td>Secondary</td>
											<td>Aaron James</td>
											<td>Medical Specialist</td>
											<td>Neurology</td>
										</tr>
										<tr class="table-success">
											<td>Success</td>
											<td>Bettie Johson</td>
											<td>Medical Specialist</td>
											<td>Cardiology</td>
										</tr>
										<tr class="table-danger">
											<td>Danger</td>
											<td>Bessie Cooper</td>
											<td>Medical Assistant</td>
											<td>Surgery</td>
										</tr>
										<tr class="table-warning">
											<td>Warning</td>
											<td>Lenora Sandoval</td>
											<td>Medical Assistant</td>
											<td>Cardiology</td>
										</tr>
										<tr class="table-info">
											<td>Info</td>
											<td>Eric Pierce</td>
											<td>Medical Specialist</td>
											<td>Neurology</td>
										</tr>
										<tr class="table-light">
											<td>Light</td>
											<td>Ruth Zimmermann</td>
											<td>Medical Specialist</td>
											<td>Neurology</td>
										</tr>
										<tr class="table-dark">
											<td>Dark</td>
											<td>Leslie Alexander</td>
											<td>Medical Assistant</td>
											<td>Cardiology</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={Variants} id="formvariants" />
						</div>
					</div>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={12}>
				<Card>
					<PreviewCardHeader title="Vertical Alignment" />
					<CardBody>
						<p class="text-muted">
							Table cells of <code>&lt;thead&gt;</code> are always
							vertical aligned to the bottom. Table cells in
							<code>&lt;tbody&gt;</code>
							inherit their alignment from
							<code>&lt;table&gt;</code> and are aligned to the the
							top by default. Use the vertical align classes to re-align
							where needed.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="align-middle">
									<thead>
										<tr>
											<th>Heading</th>
											<th>Heading</th>
											<th>Heading</th>
											<th>Heading</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td
												>This cell inherits <code
													>vertical-align: middle;</code
												> from the table</td
											>
											<td
												>This cell inherits <code
													>vertical-align: middle;</code
												> from the table</td
											>
											<td
												>This cell inherits <code
													>vertical-align: middle;</code
												> from the table</td
											>
											<td
												>This here is some placeholder
												text, intended to take up quite
												a bit of vertical space, to
												demonstrate how the vertical
												alignment works in the preceding
												cells. Use the vertical align
												classes to re-align where
												needed. inherit their alignment
												from and are aligned to the the
												top by default.</td
											>
										</tr>
										<tr class="align-bottom">
											<td
												>This cell inherits <code
													>vertical-align: bottom;</code
												> from the table row</td
											>
											<td
												>This cell inherits <code
													>vertical-align: bottom;</code
												> from the table row</td
											>
											<td
												>This cell inherits <code
													>vertical-align: bottom;</code
												> from the table row</td
											>
											<td
												>This here is some placeholder
												text, intended to take up quite
												a bit of vertical space, to
												demonstrate how the vertical
												alignment works in the preceding
												cells. Use the vertical align
												classes to re-align where
												needed. inherit their alignment
												from and are aligned to the the
												top by default.</td
											>
										</tr>
										<tr>
											<td
												>This cell inherits <code
													>vertical-align: middle;</code
												> from the table</td
											>
											<td
												>This cell inherits <code
													>vertical-align: middle;</code
												> from the table</td
											>
											<td class="align-top"
												>This cell is aligned to the
												top.</td
											>
											<td
												>This here is some placeholder
												text, intended to take up quite
												a bit of vertical space, to
												demonstrate how the vertical
												alignment works in the preceding
												cells. Use the vertical align
												classes to re-align where
												needed. inherit their alignment
												from and are aligned to the the
												top by default.</td
											>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={VerticalAlignment} id="verticalAlignment" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Row>
			<Col xl={12}>
				<Card>
					<PreviewCardHeader title="Responsive Tables" />
					<CardBody>
						<p class="text-muted">
							Use <code>table-responsive</code> class to make any table
							responsive across all viewports. Responsive tables allow
							tables to be scrolled horizontally with ease.
						</p>
						<div class="live-preview">
							<div class="table-responsive">
								<Table class="align-middle table-nowrap mb-0">
									<thead class="table-light">
										<tr>
											<th scope="col" style="width: 42px">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck"
													/>
												</div>
											</th>
											<th scope="col">ID</th>
											<th scope="col">Date</th>
											<th scope="col">Status</th>
											<th scope="col">Customer</th>
											<th scope="col">Purchased</th>
											<th scope="col">Revenue</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck01"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck01"
													/>
												</div>
											</th>
											<td
												><Link href="fw-semibold"
													>#VZ2110</Link
												></td
											>
											<td>10 Oct, 14:47</td>
											<td class="text-success"
												><i
													class="ri-checkbox-circle-line fs-17 align-middle"
												/> Paid</td
											>
											<td>
												<div class="d-flex gap-2 align-items-center"
												>
													<div class="flex-shrink-0">
														<img
															src={avatar3}
															alt=""
															class="avatar-xs rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														Jordan Kennedy
													</div>
												</div>
											</td>
											<td>Mastering the grid</td>
											<td>$9.98</td>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck02"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck02"
													/>
												</div>
											</th>
											<td
												><Link
													href="#"
													class="fw-semibold"
													>#VZ2109</Link
												></td
											>
											<td>17 Oct, 02:10</td>
											<td class="text-success"
												><i
													class="ri-checkbox-circle-line fs-17 align-middle"
												/> Paid</td
											>
											<td>
												<div class="d-flex gap-2 align-items-center"
												>
													<div class="flex-shrink-0">
														<img
															src={avatar4}
															alt=""
															class="avatar-xs rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														Jackson Graham
													</div>
												</div>
											</td>
											<td>Splashify</td>
											<td>$270.60</td>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck03"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck03"
													/>
												</div>
											</th>
											<td
												><Link
													href="#"
													class="fw-semibold"
													>#VZ2108</Link
												></td
											>
											<td>26 Oct, 08:20</td>
											<td class="text-primary"
												><i
													class="ri-refresh-line fs-17 align-middle"
												/> Refunded</td
											>
											<td>
												<div class="d-flex gap-2 align-items-center"
												>
													<div class="flex-shrink-0">
														<img
															src={avatar5}
															alt=""
															class="avatar-xs rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														Lauren Trujillo
													</div>
												</div>
											</td>
											<td>Wireframing Kit for Figma</td>
											<td>$145.42</td>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck04"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck04"
													/>
												</div>
											</th>
											<td
												><Link
													href="#"
													class="fw-semibold"
													>#VZ2107</Link
												></td
											>
											<td>02 Nov, 04:52</td>
											<td class="text-danger"
												><i
													class="ri-close-circle-line fs-17 align-middle"
												/> Cancel</td
											>
											<td>
												<div class="d-flex gap-2 align-items-center"
												>
													<div class="flex-shrink-0">
														<img
															src={avatar6}
															alt=""
															class="avatar-xs rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														Curtis Weaver
													</div>
												</div>
											</td>
											<td>Wireframing Kit for Figma</td>
											<td>$170.68</td>
										</tr>
										<tr>
											<th scope="row">
												<div class="form-check">
													<input
														class="form-check-input"
														type="checkbox"
														value=""
														id="responsivetableCheck05"
													/>
													<Label
														class="form-check-label"
														for="responsivetableCheck05"
													/>
												</div>
											</th>
											<td
												><Link
													href="#"
													class="fw-semibold"
													>#VZ2106</Link
												></td
											>
											<td>10 Nov, 07:20</td>
											<td class="text-success"
												><i
													class="ri-checkbox-circle-line fs-17 align-middle"
												/> Paid</td
											>
											<td>
												<div class="d-flex gap-2 align-items-center"
												>
													<div class="flex-shrink-0">
														<img
															src={avatar1}
															alt=""
															class="avatar-xs rounded-circle"
														/>
													</div>
													<div class="flex-grow-1">
														Jason schuller
													</div>
												</div>
											</td>
											<td>Splashify</td>
											<td>$350.87</td>
										</tr>
									</tbody>
									<tfoot class="table-light">
										<tr>
											<td colSpan="6">Total</td>
											<td>$947.55</td>
										</tr>
									</tfoot>
								</Table>
							</div>
						</div>
						<div class="d-none code-view">
							<PrismCode code={ResponsiveTables} id="responsiveTables" />
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</div>
