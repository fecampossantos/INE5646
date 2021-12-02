export const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user,
  };
};

export const unsetUser = () => ({
  type: 'UNSET_USER',
});
