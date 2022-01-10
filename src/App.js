import { Profiler } from 'react';
import logo from './logo.svg';
import './App.css';

import { UsersProvider } from './context/usersContext';
import { PostsProvider } from './context/postsContext';
import { CommentsProvider } from './context/commentsContext';

import Users from './Components/Users';
import Comments from './Components/Comments';
import Posts from './Components/Posts';

import TestControl from './Components/TestControl';

function App() {

  const cb = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log('Id of component: ', id)
    console.log('Phase: ', phase);
    console.log('Interactions: ', interactions)
    // console.log('memory usage: ', window.performance.memory.usedJSHeapSize / 1000000 + 'mb')
  }

  return (
    <div>
      <Profiler id="UsersProvider" onRender={cb}>
        <UsersProvider>
          <Profiler id="PostsProvider" onRender={cb}>
            <PostsProvider>
              <Profiler id="CommentsProvider" onRender={cb}>
                <CommentsProvider>
                  <Profiler id="TestControl" onRender={cb}>
                    <TestControl>
                      <h1>Hello...</h1>
                    </TestControl>
                  </Profiler>
                  <Users />
                  <Comments />
                  <Posts />
                </CommentsProvider>
              </Profiler>
            </PostsProvider>
          </Profiler>
        </UsersProvider>
      </Profiler>
    </div>
  );
}

export default App;
