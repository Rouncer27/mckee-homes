import axios from "axios"

export default async (userDispatch, userState, alertDispatch) => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.get(
      `http://localhost:1337/profile/${userState.user._id}`,
      {
        withCredentials: true,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    )

    userDispatch({
      type: "USER_PROFILE",
      payload: { profile: response.data },
    })
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
