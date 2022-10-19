<script>
	import {
		Card,
		CardBody,
		CardHeader,
		Col,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Dropdown
	} from 'sveltestrap';
import avatar2 from '../../assets/images/users/avatar-2.jpg'
import avatar1 from '../../assets/images/users/avatar-1.jpg'
import img1 from '../../assets/images/small/img-1.jpg'
import img2 from '../../assets/images/small/img-2.jpg'
</script>

<Col xxl={4} lg={6}>
	<Card class="card-height-100">
		<CardHeader class="align-items-center d-flex">
			<h4 class="card-title mb-0 flex-grow-1">Chat</h4>
			<div class="flex-shrink-0">
				<Dropdown class="card-header-dropdown" direction="start">
					<DropdownToggle tag="a" class="text-reset p-0" color="" role="button">
						<span class="text-muted"><i class="ri-settings-4-line align-middle me-1" />Setting
							<i class="mdi mdi-chevron-down ms-1" /></span
						>
					</DropdownToggle>
					<DropdownMenu class="dropdown-menu-end">
						<DropdownItem><i class="ri-user-2-fill align-bottom text-muted me-2" /> View Profile</DropdownItem
						>
						<DropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2" /> Archive</DropdownItem
						>
						<DropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2" /> Muted</DropdownItem
						>
						<DropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2" /> Delete</DropdownItem
						>
					</DropdownMenu>
				</Dropdown>
			</div>
		</CardHeader>

		<CardBody class="p-0">
			<div class="chat-conversation p-3" data-simplebar style="height: 400px;">
				<ul class="list-unstyled chat-conversation-list chat-sm" id="users-conversation">
					<li class="chat-list left">
						<div class="conversation-list">
							<div class="chat-avatar">
								<img src={avatar2} alt="" />
							</div>
							<div class="user-chat-content">
								<div class="ctext-wrap">
									<div class="ctext-wrap-content">
										<p class="mb-0 ctext-content">Good morning 😊</p>
									</div>
									<Dropdown class="align-self-start message-box-drop">
										<DropdownToggle class="p-0" tag="a" color="" href="{null}">
											<i class="ri-more-2-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-reply-line me-2 text-muted align-bottom" />Reply</DropdownItem>
											<DropdownItem><i
													class="ri-share-line me-2 text-muted align-bottom"
												/>Forward</DropdownItem>
											<DropdownItem><i
													class="ri-file-copy-line me-2 text-muted align-bottom"
												/>Copy</DropdownItem>
											<DropdownItem><i
													class="ri-bookmark-line me-2 text-muted align-bottom"
												/>Bookmark</DropdownItem>
											<DropdownItem class="delete-item">
                                                <i
													class="ri-delete-bin-5-line me-2 text-muted align-bottom"
												/>Delete</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div class="conversation-name">
									<small class="text-muted time">09:07 am</small>
									<span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom" /></span>
								</div>
							</div>
						</div>
					</li>

					<li class="chat-list right">
						<div class="conversation-list">
							<div class="user-chat-content">
								<div class="ctext-wrap">
									<div class="ctext-wrap-content">
										<p class="mb-0 ctext-content">
											Good morning, How are you? What about our next meeting?
										</p>
									</div>
									<Dropdown class="align-self-start message-box-drop">
										<DropdownToggle class="p-0" tag="a" color="" href="{null}">
											<i class="ri-more-2-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-reply-line me-2 text-muted align-bottom" />Reply</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-share-line me-2 text-muted align-bottom"
												/>Forward</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-file-copy-line me-2 text-muted align-bottom"
												/>Copy</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-bookmark-line me-2 text-muted align-bottom"
												/>Bookmark</DropdownItem
											>
											<DropdownItem class="delete-item"
												><i
													class="ri-delete-bin-5-line me-2 text-muted align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div class="conversation-name">
									<small class="text-muted time">09:08 am</small>
									<span class="text-success check-message-icon"
										><i class="ri-check-double-line align-bottom" /></span
									>
								</div>
							</div>
						</div>
					</li>

					<li class="chat-list left">
						<div class="conversation-list">
							<div class="chat-avatar">
								<img src={avatar2} alt="" />
							</div>
							<div class="user-chat-content">
								<div class="ctext-wrap">
									<div class="ctext-wrap-content">
										<p class="mb-0 ctext-content">
											Yeah everything is fine. Our next meeting tomorrow at 10.00 AM
										</p>
									</div>
									<Dropdown class="align-self-start message-box-drop">
										<DropdownToggle class="p-0" tag="a" color="" href="{null}">
											<i class="ri-more-2-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-reply-line me-2 text-muted align-bottom" />Reply</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-share-line me-2 text-muted align-bottom"
												/>Forward</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-file-copy-line me-2 text-muted align-bottom"
												/>Copy</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-bookmark-line me-2 text-muted align-bottom"
												/>Bookmark</DropdownItem
											>
											<DropdownItem class="delete-item"
												><i
													class="ri-delete-bin-5-line me-2 text-muted align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div class="ctext-wrap">
									<div class="ctext-wrap-content">
										<p class="mb-0 ctext-content">
											Hey, I'm going to meet a friend of mine at the department store. I have to buy
											some presents for my parents 🎁.
										</p>
									</div>
									<Dropdown class="align-self-start message-box-drop">
										<DropdownToggle class="p-0" tag="a" color="" href="{null}">
											<i class="ri-more-2-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-reply-line me-2 text-muted align-bottom" />Reply</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-share-line me-2 text-muted align-bottom"
												/>Forward</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-file-copy-line me-2 text-muted align-bottom"
												/>Copy</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-bookmark-line me-2 text-muted align-bottom"
												/>Bookmark</DropdownItem
											>
											<DropdownItem class="delete-item"
												><i
													class="ri-delete-bin-5-line me-2 text-muted align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div class="conversation-name">
									<small class="text-muted time">09:10 am</small>
									<span class="text-success check-message-icon"
										><i class="ri-check-double-line align-bottom" /></span
									>
								</div>
							</div>
						</div>
					</li>

					<li class="chat-list right">
						<div class="conversation-list">
							<div class="user-chat-content">
								<div class="ctext-wrap">
									<div class="ctext-wrap-content">
										<p class="mb-0 ctext-content">Wow that's great</p>
									</div>
									<Dropdown class="align-self-start message-box-drop">
										<DropdownToggle class="p-0" tag="a" color="" href="{null}">
											<i class="ri-more-2-fill" />
										</DropdownToggle>
										<DropdownMenu>
											<DropdownItem
												><i class="ri-reply-line me-2 text-muted align-bottom" />Reply</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-share-line me-2 text-muted align-bottom"
												/>Forward</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-file-copy-line me-2 text-muted align-bottom"
												/>Copy</DropdownItem
											>
											<DropdownItem
												><i
													class="ri-bookmark-line me-2 text-muted align-bottom"
												/>Bookmark</DropdownItem
											>
											<DropdownItem class="delete-item"
												><i
													class="ri-delete-bin-5-line me-2 text-muted align-bottom"
												/>Delete</DropdownItem
											>
										</DropdownMenu>
									</Dropdown>
								</div>
								<div class="conversation-name">
									<small class="text-muted time">09:12 am</small>
									<span class="text-success check-message-icon"
										><i class="ri-check-double-line align-bottom" /></span
									>
								</div>
							</div>
						</div>
					</li>

					<li class="chat-list left">
						<div class="conversation-list">
							<div class="chat-avatar">
								<img src={avatar2} alt="" />
							</div>
							<div class="user-chat-content">
								<div class="ctext-wrap">
									<div class="message-img mb-0">
										<div class="message-img-list">
											<div>
												<a
													class="popup-img d-inline-block"
													href={img1}
												>
													<img
														src={img1}
														alt=""
														class="rounded border"
													/>
												</a>
											</div>
											<div class="message-img-link">
												<ul class="list-inline mb-0">
													<Dropdown class="list-inline-item">
														<DropdownToggle
															tag="a"
															class="dropdown-toggle p-0"
															color=""
															href="{null}"
															role="button"
														>
															<i class="ri-more-fill" />
														</DropdownToggle>
														<DropdownMenu>
															<DropdownItem href={avatar1} download=""
																><i
																	class="ri-download-2-line me-2 text-muted align-bottom"
																/>Download</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-reply-line me-2 text-muted align-bottom"
																/>Reply</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-share-line me-2 text-muted align-bottom"
																/>Forward</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-bookmark-line me-2 text-muted align-bottom"
																/>Bookmark</DropdownItem
															>
															<DropdownItem class="delete-item" href="{null}"
																><i
																	class="ri-delete-bin-5-line me-2 text-muted align-bottom"
																/>Delete</DropdownItem
															>
														</DropdownMenu>
													</Dropdown>
												</ul>
											</div>
										</div>

										<div class="message-img-list">
											<div>
												<a
													class="popup-img d-inline-block"
													href="{null}"
												>
													<img
														src={img2}
														alt=""
														class="rounded border"
													/>
												</a>
											</div>
											<div class="message-img-link">
												<ul class="list-inline mb-0">
													<Dropdown class="list-inline-item">
														<DropdownToggle
															tag="a"
															class="dropdown-toggle p-0"
															color=""
															href="{null}"
															role="button"
														>
															<i class="ri-more-fill" />
														</DropdownToggle>
														<DropdownMenu>
															<DropdownItem href={avatar1} download=""
																><i
																	class="ri-download-2-line me-2 text-muted align-bottom"
																/>Download</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-reply-line me-2 text-muted align-bottom"
																/>Reply</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-share-line me-2 text-muted align-bottom"
																/>Forward</DropdownItem
															>
															<DropdownItem href="{null}"
																><i
																	class="ri-bookmark-line me-2 text-muted align-bottom"
																/>Bookmark</DropdownItem
															>
															<DropdownItem class="delete-item" href="{null}"
																><i
																	class="ri-delete-bin-5-line me-2 text-muted align-bottom"
																/>Delete</DropdownItem
															>
														</DropdownMenu>
													</Dropdown>
												</ul>
											</div>
										</div>
									</div>
								</div>

								<div class="conversation-name">
									<small class="text-muted time">09:30 am</small>
									<span class="text-success check-message-icon"
										><i class="ri-check-double-line align-bottom" /></span
									>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="border-top border-top-dashed">
				<div class="row g-2 mx-3 mt-2 mb-3">
					<div class="col">
						<div class="position-relative">
							<input
								type="text"
								class="form-control border-light bg-light"
								placeholder="Enter Message..."
							/>
						</div>
					</div>
					<div class="col-auto">
						<button type="submit" class="btn btn-info"><span class="d-none d-sm-inline-block me-2">Send</span>
							<i class="mdi mdi-send float-end" /></button
						>
					</div>
				</div>
			</div>
		</CardBody>
	</Card>
</Col>