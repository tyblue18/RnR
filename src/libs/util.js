export function capitalizeFirstLetter(string) {
  return string
    ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    : "";
}

export function handleProfileClick() {
  router.push("/profile");
}
