<script>
    import {
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import avatar1 from '../../assets/images/users/user-1.png';
    import {logoutService} from '../../lib/service/userService'
	import {goto} from '$app/navigation';
    import supabase from '../../lib/service/db';
	import {url} from '../../lib/service/db'


    // let store;
    // userStore.subscribe(value => {
	// 	store = value;
	// });
    // userStore.set(getUser())
   
    // async function setAvatarProfile(){
    //     let {data, err} = getAvatar(userIdStore)
    //     if(data){
    //         console.log(data)
    //     }else{
    //         console.log(err)
    //     }
    // }
    // setAvatarProfile()
	async function logout(){
		await logoutService()
        .then(() => goto('/authenticationInner/login/auth-signin'))
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
                    >Anna Adame</span
                >
                <span
                    class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"
                    >Founder</span
                >
            </span>
        </span>
    </DropdownToggle>
    <DropdownMenu class="dropdown-menu-end" end>
        <!-- item-->
        <h6 class="dropdown-header">Welcome Anna!</h6>
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
            <span class="align-middle" data-key="t-logout">Logout</span

            ></DropdownItem
        >
    </DropdownMenu>
</Dropdown>
