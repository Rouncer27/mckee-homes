import { navigate } from "gatsby"
import axios from "axios"

export default async (userDispatch, alertDispatch) => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    await axios.post(
      `http://localhost:1337/logout`,
      {},
      {
        withCredentials: true,
      }
    )
    userDispatch({ type: "USER_LOGOUT" })
    alertDispatch({
      type: "USER_SUCCESS",
      payload: {
        successMessage: "You have successfully logged out of your account.",
        successAutoClear: true,
        successAnimateOut: true,
      },
    })
    navigate("/login", { replace: true })
  } catch (err) {
    const errMessage = err?.response?.data?.message[0]?.messages[0]?.message
      ? err?.response?.data?.message[0]?.messages[0]?.message
      : "Something went wrong, please try again later."
    alertDispatch({
      type: "USER_ERROR",
      payload: { errMessage },
    })
    userDispatch({
      type: "USER_LOADING",
      payload: { loading: false },
    })
    console.log(err)
  }
}
