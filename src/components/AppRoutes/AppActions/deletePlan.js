import axios from "axios"

const addPlan = async (userDispatch, alertDispatch, id, url) => {
  // userDispatch({
  //   type: "USER_ARE_YOU_SURE",
  //   payload: { loading: true },
  // })

  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.delete(
      `${process.env.GATSBY_API_URL}/${url}/${id}`,
      {
        withCredentials: true,
      }
    )

    userDispatch({
      type: "USER_PROFILE",
      payload: { profile: response.data.profile },
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

export default addPlan
