<script context="module">
	export async function load({ session }) {
        // Get the authenticated user from the current session
          let { user } = session
          console.log(user)
        // redirect the user to home page incase the user is not authenticated
          if (user == null) {
              return {
                  status: 302,
                  redirect: "/authenticationInner/login/auth-signin",
              }
          }else{
            return {
                  status: 200,
                  redirect: "/dashboard",
              }
          }
    }
</script>