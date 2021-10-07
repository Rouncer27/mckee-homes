import axios from "axios"

const updateNotes = async (userDispatch, alertDispatch, notes, id, url) => {
  userDispatch({
    type: "USER_LOADING",
    payload: { loading: true },
  })

  try {
    const response = await axios.put(
      `http://localhost:1337/${url}/${id}`,
      {
        notes,
      },
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

export default updateNotes
