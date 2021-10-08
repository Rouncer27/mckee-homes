import axios from "axios"

const getUserCheck = async userDispatch => {
  try {
    const response = await axios.get(`${process.env.GATSBY_API_URL}/users/me`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "netlify.app",
      },

      // headers: {
      //   "content-type": "application/x-www-form-urlencoded",
      // },
    })

    userDispatch({
      type: "USER_LOGIN",
      payload: { user: response.data },
    })
  } catch (err) {
    userDispatch({ type: "USER_LOGOUT" })
    console.dir("getUserCheck ERROR: ", err)
  }
}

export default getUserCheck
