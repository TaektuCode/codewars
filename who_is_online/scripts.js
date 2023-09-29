"use strict";

const whosOnline = (friends) => {
  if (friends.length === 0) {
    return {};
  }

  const listOfOnline = [];
  const listOfOffline = [];
  const listOfAway = [];
  const statusFriends = {};

  for (let friend of friends) {
    if (friend.status === "online" && friend.lastActivity <= 10) {
      listOfOnline.push(friend.username);
      statusFriends.online = listOfOnline;
    } else if (friend.status === "offline") {
      listOfOffline.push(friend.username);
      statusFriends.offline = listOfOffline;
    } else if (friend.status === "online" && friend.lastActivity > 10) {
      listOfAway.push(friend.username);
      statusFriends.away = listOfAway;
    }
  }
  return statusFriends;
};

/*
const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
*/
// wenn empty "friends" --> gib ein leeres Object zurück

// wenn "status: online" & "lastActivity > 10" dann "status: away"

// Prüfen auf "status: value"

// Username (als Array) in neues Object speichern mit entsprechendem Key (newKey = value aus "friends.status" Object)

/* INPUT Data

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}] 
/* 

/* OUTPUT

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}

// IF NO ONE IS ONLINE // 

{
  offline: ['Lucy'],
  away: ['Bob']
}

*/
