import axios from "axios"

export default async userDispatch => {
  try {
    const response = await axios.get(`http://localhost:1337/users/me`, {
      withCredentials: true,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    })

    userDispatch({
      type: "USER_LOGIN",
      payload: { user: response.data },
    })
  } catch (err) {
    userDispatch({ type: "USER_LOGOUT" })
    console.log("ERROR: ", err)
  }
}
