export const getComments = async () => {
  return [
    {
      id: "1",
      body: "This is a 1st level Comment",
      username: "Sanjanaaa",
      userId: "1",
      parentId: null,
      createdAt: "2022-11-08T23:00:33.010+02:00"
    },
    {
      id: "2",
      body: "This is also 1st level Comment",
      username: "Dodo",
      userId: "2",
      parentId: null,
      createdAt: "2022-11-09T23:00:33.010+02:00"
    },
    {
      id: "3",
      body: "This is a 2nd level Comment",
      username: "Dodo",
      userId: "3",
      parentId: "1",
      createdAt: "2022-11-09T23:00:33.010+02:00"
    },
    {
      id: "4",
      body: "This is a 2nd level Comment",
      username: "Pika",
      userId: "2",
      parentId: "2",
      createdAt: "2022-11-11T23:00:33.010+02:00"
    },
    {
      id: "5",
      body: "This is a 3rd level Comment",
      username: "Jerry",
      userId: "3",
      parentId: "4",
      createdAt: "2022-11-11T23:00:33.010+02:00"
    },
    {
      id: "6",
      body: "This is a 4th level Comment",
      username: "Sanjanaaa",
      userId: "1",
      parentId: "5",
      createdAt: "2022-11-11T23:00:33.010+02:00"
    }
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Sanjana",
    createdAt: new Date().toISOString()
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
