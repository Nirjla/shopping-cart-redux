async function handleRequest(getData) {
  try {
    const data = await getData();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Internal Server Error" };
  }
}
module.exports = {handleRequest}