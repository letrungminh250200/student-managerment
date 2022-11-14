<script>
    import {
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import avatar1 from '../../assets/images/users/user-1.png';
    import {logoutService,getProfile} from '../../lib/service/userService'
	import {goto} from '$app/navigation';
    import {userDataStore, profile} from '../../lib/store/userStore'

    // async function setAvatarProfile(){
    //     let {data, err} = getAvatar(userIdStore)
    //     if(data){
    //         console.log(data)
    //     }else{
    //         console.log(err)
    //     }
    // }
    // setAvatarProfile()
    // function checkUser(){
	// 	if($userDataStore == null){
	// 		goto('/authenticationInner/login/auth-signin')
	// 	}
	// }
	// checkUser()
    // const loadInfoUser = async () =>{
    //         let {data, error} = await getProfile($userDataStore.id);
    //         if(data){
    //             profile.set(data[0])
    //             // localStorage.setItem('profileData', JSON.stringify(data[0]))
    //         }else{
    //             console.log(error)
    //         }
	// }
	// loadInfoUser()
    // const getName = () =>{
    //     if($profile){
    //         name = $profile.full_name.split(' ')
    //         console.log(name[name.length - 1])
    //     }
    // }
    // getName()
    console.log($userDataStore)
	async function logout(){
		await logoutService()
        .then(() => goto('/authenticationInner/login/auth-signin'))
        .then(() => userDataStore.update((data) => data = null ))
        .catch(e => console.log(e))
	};
    
</script>

<Dropdown class="ms-sm-3 header-item topbar-user">
    <DropdownToggle
        type="button"
        color=""
        class="btn"
        id="page-header-user-dropdown p-0"
    >
        <span class="d-flex align-items-center">
            <img
                class="rounded-circle header-profile-user"
                src={avatar1}
                alt="Header Avatar"
            />
            <span class="text-start ms-xl-2">
                <span
                    class="d-none d-xl-inline-block ms-1 fw-medium user-name-text"
                    >{$userDataStore.email}</span
                >
                <span
                    class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"
                    >Student</span
                >
            </span>
        </span>
    </DropdownToggle>
    <DropdownMenu class="dropdown-menu-end" end>
        <!-- item-->
        <h6 class="dropdown-header">Welcome {$userDataStore.email}!</h6>
        <DropdownItem href="/pages/profile/simple/simplepage"
            ><i
                class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"
            /> <span class="align-middle">Profile</span></DropdownItem
        >

        <div class="dropdown-divider" />
        <DropdownItem href="/pages/profile/simple/simplepage"
            ><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
            <span class="align-middle">Balance : <b>$5971.67</b></span
            ></DropdownItem
        >
        <DropdownItem href="/pages/profile/simple/simplepage" 
            ><span class="badge bg-soft-success text-success mt-1 float-end"
                >New</span
            ><i
                class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"
            /> <span class="align-middle">Settings</span></DropdownItem
        >
        <DropdownItem 
            on:click={() => logout()}
            ><i class="mdi mdi-logout text-muted fs-16 align-middle me-1" />
            <span class="align-middle" data-key="t-logout">Logout</span>
        </DropdownItem
        >
    </DropdownMenu>
</Dropdown>
