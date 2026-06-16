export const loginUser =
  (
    cadetId,
    certificate
  ) => {
    localStorage.setItem(
      "cadetId",
      cadetId
    );

    localStorage.setItem(
      "certificate",
      certificate
    );

    return true;
  };