import axios from "axios"

export default async userDispatch => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.get(`${process.env.GATSBY_API_URL}/users/me`, {
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
