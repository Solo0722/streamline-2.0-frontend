export const userQuery = (userId: string) => {
  const query = `*[_type == 'user' && _id == '${userId}']{
    userName,
    bio,
    email,
    bookmarks,
    image  {
      asset -> {
        _id,
        url
      }
    }
  }`;

  return query;
};

export const blogsQuery = `*[_type == 'post' ] | order(_createdAt desc){
  title,
  body,
  _createdAt,
  _updatedAt,
  _id,
  category,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  }
}`;

export const singleBlogQuery = (blogId: string) => {
  const query = `*[_type == "post" && _id == '${blogId}']{
    _id,
    _rev,
    title,
    body,
    _createdAt,
    _updatedAt,
    category,
    comments[],
    likes[],
    author -> {
      _id,
      userName,
      image{
        asset -> {
          _id,
          url
        }
      }
    },
    mainImage {
    asset -> {
      _id,
      url
    }
  }
  }`;
  return query;
};

export const similarBlogsQuery = (blog: any) => {
  const query = `*[_type == "post" && category == '${blog.category}' && _id != '${blog._id}' ]{
  title,
  body,
  _createdAt,
  _updatedAt,
  _id,
  category,
  mainImage {
    asset -> {
      _id,
      url
    },
    alt
  }
  }`;

  return query;
};

export const searchQuery = (searchTerm: string) => {
  const query = `*[_type == 'post' && title match '${searchTerm}*' || category match '${searchTerm}*']`;

  return query;
};
