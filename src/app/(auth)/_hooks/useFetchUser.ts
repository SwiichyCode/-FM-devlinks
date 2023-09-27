export default function useFetchUser() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return { user };
}
