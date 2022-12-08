
import Profile from "./Profile";
import Statistics from "./Statistics";
import TransactionHistory from "./Transactions";
import friends from 'data/friends';
import user from 'data/user';
import data from 'data/data';
import transactions from 'data/transactions';
import FriendList from "./FriendList";

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      
      <Statistics
        stats={data} />
      
      <FriendList
        friends={friends} />

      <TransactionHistory
        info={transactions}
      />

    </div>
  );
};
