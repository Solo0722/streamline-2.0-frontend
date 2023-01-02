export const userQuery = (userId: string) => {
  const query = `*[_type == 'user' && _id == '${userId}']`;

  return query;
};

export const blogsQuery = `*[_type == 'post' ] | order(_createdAt desc)`;

export const singleBlogQuery = (blogId: string) => {
  const query = `*[_type == "post" && _id == '${blogId}']`;
  return query;
};

export const searchQuery = (searchTerm: string) => {
  const query = `*[_type == 'post' && title match '${searchTerm}*' || category match '${searchTerm}*']`;

  return query;
};
