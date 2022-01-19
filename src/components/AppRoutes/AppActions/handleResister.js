import axios from "axios"
import { navigate } from "gatsby"

export default async (formData, resetFormData, userDispatch, alertDispatch) => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.post(
      `${process.env.GATSBY_API_URL}/auth/local/register`,
      {
        email: formData.email,
        username: formData.email,
        password: formData.password,
      },
      {
        withCredentials: true,
      }
    )

    if (response.data.ok) {
      resetFormData()
    }

    userDispatch({
      type: "USER_LOGIN",
      payload: { user: response.data.user },
    })

    alertDispatch({
      type: "USER_SUCCESS",
      payload: {
        successMessage:
          "You have successfully signed up to My Favourites. Please confirm your email address before you begin.",
        successAutoClear: false,
        successAnimateOut: false,
      },
    })

    navigate("/app/dashboard", { replace: true })
  } catch (err) {
    const errMessage =
      err.response.data &&
      err.response.data.message &&
      typeof err.response.data.message === "object"
        ? err.response.data.message[0] &&
          err.response.data.message[0].messages[0] &&
          err.response.data.message[0].messages[0].message
        : typeof err.response.data.message === "string"
        ? err.response.data.message
        : "Something went wrong. Please try again later"
    alertDispatch({
      type: "USER_ERROR",
      payload: { errMessage },
    })
    userDispatch({
      type: "USER_LOADING",
      payload: { loading: false },
    })
    console.dir(err)
  }
}
