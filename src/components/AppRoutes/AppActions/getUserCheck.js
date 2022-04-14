import axios from "axios"

const getUserCheck = async (userDispatch, mountCheck) => {
  if (mountCheck) return
  try {
    const response = await axios.get(`${process.env.GATSBY_API_URL}/users/me`, {
      withCredentials: true,
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
    userDispatch({ type: "MOUNTED_USER_CHECKED" })
    console.log("ERROR: ", err)
  }
}

export default getUserCheck
