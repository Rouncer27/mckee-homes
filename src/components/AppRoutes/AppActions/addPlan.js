import axios from "axios"

const addPlan = async (home, userState, userDispatch, alertDispatch, url) => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.post(
      `${process.env.GATSBY_API_URL}/${url}`,
      {
        slug: home.slug,
        wordpress_id: home.databaseId.toString(),
        title: home.title,
      },
      {
        withCredentials: true,
      }
    )

    userDispatch({
      type: "USER_PROFILE",
      payload: { profile: response.data.profile },
    })
    alertDispatch({
      type: "USER_SUCCESS",
      payload: {
        successMessage: "You have successfully added to your favourites.",
        successAutoClear: true,
        successAnimateOut: true,
      },
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
